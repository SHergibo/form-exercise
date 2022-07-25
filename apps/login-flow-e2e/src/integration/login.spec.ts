import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Login', () => {
  beforeEach(() => cy.visit('/'));

  it('Test login', () => {
    cy.get('input[type=email]').type('test@test.com');

    cy.get('input[type=password]').type('12345678');

    cy.get('button[type=submit]')
      .should('contain.text', t(i18nKeys.button.login))
      .click();
  });
});
