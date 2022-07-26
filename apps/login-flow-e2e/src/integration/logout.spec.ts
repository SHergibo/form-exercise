import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Logout button', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/admin');
  });

  it('Test click on logout button to log out from the app', () => {
    cy.intercept('POST', '/api/logout', {
      status: 200,
    });

    cy.get('h6').should('contain.text', t(i18nKeys.menu.title.admin));

    cy.get('[aria-label=logout]').click();

    cy.get('h6').should('contain.text', t(i18nKeys.menu.title.login));
  });
});
