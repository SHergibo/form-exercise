import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Movies list', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('POST', '/api/login', {
      status: 200,
    });

    cy.fixture('login').then((fixture) => {
      cy.get('input[type=email]').type(fixture.goodEmail);

      cy.get('input[type=password]').type(fixture.goodPassword);

      cy.get('button[type=submit]')
        .should('contain.text', t(i18nKeys.button.login))
        .click();

      cy.get('h6').should('contain.text', t(i18nKeys.menu.title.admin));

      cy.get('li').contains(t(i18nKeys.menu.title.moviesList)).click();
    });
  });
  it('Search movies with search input', () => {
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
});
