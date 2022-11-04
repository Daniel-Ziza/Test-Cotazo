import {
  Given,
  When,
  And,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../pages/LoginPage');

  Given('The user opens cotazo website', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit('/');
  });

  When('A user provides correct credentials', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    loginPage.typeUsername(Cypress.env('COTAZO_INSTALLER_USERNAME'));
    loginPage.typePassword(Cypress.env('COTAZO_INSTALLER_PASSWORD'));
  });

  When('A user provides incorrect credentials', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    let username = Math.trunc(Date.now()/1000).toString().substring(0,9);
    let password = 'wrong' + Math.trunc(Date.now()/1000);
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
  });

  And('A user clicks on the login button', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    loginPage.clickLogin();
  });

  Then('Main page is displayed', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    loginPage.verifyText();
  });

  Then('An error is displayed', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    loginPage.verifyErrorMessage();
  });

  When('The user clicks on the employee login link', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    loginPage.elements.loginAsEmployeeBtn().click();
  });

  And('The user logs in with his login credentials', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    loginPage.singInWithAdeo();
  });
