import { i18nKeys, initI18Next, Languages } from '@form-exercise/i18n';
import { t } from '../support/app.po';

initI18Next();

describe('Switch language button', () => {
  beforeEach(() => cy.visit('/'));
  it('Switch lang from FR to EN and EN to FR', () => {
    cy.get('button[type=button]')
      .should('contain.text', t(i18nKeys.button.switchLang))
      .click();

    cy.get('li').contains(t(i18nKeys.lang.english)).click();

    cy.get('h6').should(
      'contain.text',
      t(i18nKeys.menu.title.login, Languages.EN)
    );

    cy.get('button[type=button]')
      .should('contain.text', t(i18nKeys.button.switchLang, Languages.EN))
      .click();

    cy.get('li').contains(t(i18nKeys.lang.french, Languages.EN)).click();

    cy.get('h6').should(
      'contain.text',
      t(i18nKeys.menu.title.login, Languages.FR)
    );
  });
});
