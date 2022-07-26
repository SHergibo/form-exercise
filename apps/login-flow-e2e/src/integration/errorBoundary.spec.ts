import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('ErrorBoundary', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/admin');
    cy.get(`button:contains(${t(i18nKeys.button.generateAnError)})`).click();
    Cypress.on('uncaught:exception', () => {
      return false;
    });
  });
  it('Test redirect to ErrorBoundary when an error is thrown', () => {
    cy.get('h2').should('contain.text', t(i18nKeys.title.boundaryError));
  });
  it('Test click on return last page ', () => {
    cy.get(`button:contains(${t(i18nKeys.button.returnLastPage)})`).click({
      force: true,
    });

    cy.get('h6').should('contain.text', t(i18nKeys.title.admin));
  });
  it('Test click on return to login page ', () => {
    cy.get(`button:contains(${t(i18nKeys.button.returnLogin)})`).click({
      force: true,
    });

    cy.get('h6').should('contain.text', t(i18nKeys.title.login));
  });
});
