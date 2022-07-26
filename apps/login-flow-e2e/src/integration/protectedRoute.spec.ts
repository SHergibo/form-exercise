import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Protected route', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.logout();
  });

  it('Test if ProtectedRoute redirect to login page if user is not connected', () => {
    cy.visit('/admin');

    cy.get('h6').should('not.include.text', t(i18nKeys.menu.title.admin));
  });
  it('Test if ProtectedRoute do not redirect to login page if user is connected', () => {
    cy.login();
    cy.visit('/admin');

    cy.get('h6').should('contain.text', t(i18nKeys.menu.title.admin));
  });
});
