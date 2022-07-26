import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('MenuApp', () => {
  beforeEach(() => {
    cy.logout();
  });

  it('Test if there is no menu list when user is not logged in', () => {
    cy.visit('/');

    cy.get('.MuiToolbar-root').children('nav').should('not.exist');
  });
  it('Test if there is a menu when user is logged in ', () => {
    cy.login();
    cy.visit('/movies-list');

    cy.get('a')
      .contains(t(i18nKeys.menu.title.admin))
      .parents('a')
      .should('have.attr', 'href')
      .and('include', 'admin')
      .then((href) => {
        cy.visit(href.toString());
      });

    cy.get('h6').contains(t(i18nKeys.menu.title.admin));

    cy.get('a')
      .contains(t(i18nKeys.menu.title.moviesList))
      .parents('a')
      .should('have.attr', 'href')
      .and('include', 'movies-list')
      .then((href) => {
        cy.visit(href.toString());
      });

    cy.get('h6').contains(t(i18nKeys.menu.title.moviesList));
  });
});
