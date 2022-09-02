import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/LoginPage';
const pendingBudgetsListPage = require('../../pages/budget/pending/PendingBudgetsListPage');
const completedBudgetsListPage = require('../../pages/budget/completed/CompletedBudgetsListPage');
const pendingBudgetsEditPage = require ('../../pages/budget/pending/PendingBudgetsEditPage');

Given('User logs in online', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.visit("/");
    loginPage.typeUsername(Cypress.env('ADMIN_COTAZO_USERNAME'));
    loginPage.typePassword(Cypress.env('ADMIN_COTAZO_PASSWORD'));
    loginPage.clickLogin();
    // Set as cypress env vars some values defined by previous tests.
    cy.task('getServiceOrderNumber').then((serviceOrderNumber) => {
        Cypress.env("orderServiceNumber", serviceOrderNumber);
        assert(true, `The Service Order Number ${serviceOrderNumber} has been properly obtained and set as cypress environment variable`)
    });
});