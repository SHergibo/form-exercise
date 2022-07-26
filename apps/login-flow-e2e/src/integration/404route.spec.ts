import { i18nKeys, initI18Next } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('404 route', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Test redirection to 404 route', () => {
    cy.visit('/route-not-fount');

    cy.get('h6').should('contain.text', t(i18nKeys.menu.title.notFound));
  });
  it('Test click on return last page ', () => {
    cy.visit('/route-not-fount');

    cy.get(`button:contains(${t(i18nKeys.button.returnLastPage)})`).click();
  });
});
