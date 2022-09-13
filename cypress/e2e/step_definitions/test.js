import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
const prerequisiteInstalaLoginPage = require('../../pages/prerequisites/PrerequisitesInstalaLoginPage');

Given('The user enters the instala page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.visit(Cypress.env('INSTALA_BASE_URL'));
});

When('User logs in', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    prerequisiteInstalaLoginPage.loginInstala();
});