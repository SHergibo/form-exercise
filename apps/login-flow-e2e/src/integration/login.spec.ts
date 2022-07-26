import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Login form', () => {
  beforeEach(() => {
    cy.logout();
    cy.visit('/');
  });
  describe('good flow', () => {
    it('Test login with good credentials', () => {
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
      });
    });
  });
  describe('bad flow', () => {
    it('Test login with good email but wrong password', () => {
      cy.intercept('POST', '/api/login', {
        statusCode: 401,
      });
      cy.fixture('login').then((fixture) => {
        cy.get('input[type=email]').type(fixture.goodEmail);

        cy.get('input[type=password]').type(fixture.badPassword);

        cy.get('button[type=submit]')
          .should('contain.text', t(i18nKeys.button.login))
          .click();

        cy.get('p').should('contain.text', t(i18nKeys.error.login));
      });
    });
    it('Test validation error message fields', function () {
      cy.fixture('login').then((fixture) => {
        cy.get('input[type=email]').focus();
        cy.get('input[type=password]').focus();
        cy.get('button[type=submit]').focus();
        cy.get('p').should('contain.text', t(i18nKeys.validation.required));
        cy.get('p').should('contain.text', t(i18nKeys.validation.invalid));

        cy.get('input[type=email]').type(fixture.badEmail);
        cy.get('p').should('contain.text', t(i18nKeys.validation.invalidEmail));

        cy.get('input[type=password]').type(fixture.shortPassword);
        cy.get('p').should('contain.text', t(i18nKeys.validation.invalid));
      });
    });
  });
});
