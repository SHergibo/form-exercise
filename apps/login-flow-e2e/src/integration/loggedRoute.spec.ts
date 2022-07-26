import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Logged route', () => {
  it('Test if LoggedRoute redirect to admin page if user is connected', () => {
    cy.login();
    cy.visit('/admin');
    cy.visit('/');

    cy.get('h6').should('not.include.text', t(i18nKeys.menu.title.login));
  });
  it('Test if LoggedRoute do not redirect to admin page if user is not connected', () => {
    cy.visit('/');

    cy.get('h6').should('not.include.text', t(i18nKeys.menu.title.admin));
  });
});
