import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Movies list', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('movies-list');
  });
  it('Test if all movies in movies list are shown', () => {
    cy.intercept(
      'GET',
      `http://www.omdbapi.com/?type=movie&apiKey=${Cypress.env(
        'NX_OMDB_API_KEY'
      )}&s=Batman`,
      {
        fixture: 'moviesResponse',
      }
    ).as('getMovies');

    cy.fixture('moviesList').then((fixture) => {
      cy.get('input[type=movieSearch]').type(fixture.movieSearch);

      cy.get('button[type=submit]')
        .should('contain.text', t(i18nKeys.button.search))
        .click();

      cy.wait('@getMovies')
        .get('h6:contains(Batman)')
        .should('have.length', 10);

      cy.get('img')
        .filter('[src]')
        .should('be.visible')
        .should(($imgs) =>
          $imgs.map((i, img: HTMLImageElement) =>
            expect(img.naturalWidth).to.be.greaterThan(0)
          )
        );
    });
  });
  it('Test if not found message is shown when no movies are found', () => {
    cy.intercept(
      'GET',
      `http://www.omdbapi.com/?type=movie&apiKey=${Cypress.env(
        'NX_OMDB_API_KEY'
      )}&s=lllll`,
      {
        fixture: 'notFoundMoviesResponse',
      }
    ).as('getMovies');

    cy.fixture('moviesList').then((fixture) => {
      cy.get('input[type=movieSearch]').type(fixture.notFoundMovieSearch);

      cy.get('button[type=submit]')
        .should('contain.text', t(i18nKeys.button.search))
        .click();

      cy.wait('@getMovies')
        .get('p')
        .should('contain.text', t(i18nKeys.page.moviesList.notFound));
    });
  });
});
