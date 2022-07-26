import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('MenuApp', () => {
  beforeEach(() => {
    cy.logout();
  });

  it('Test if there is no menu list when user is not logged in', () => {
    cy.visit('/');
    cy.get('.MuiToolbar-root').children('ul').should('not.exist');
  });
  it('Test if there is a menu when user is logged in ', () => {
    cy.login();
    cy.visit('/admin');
    cy.get('.MuiToolbar-root').children('ul').children('li').should('exist');
  });
});
