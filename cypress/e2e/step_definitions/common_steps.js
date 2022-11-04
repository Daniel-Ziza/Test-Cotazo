import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/LoginPage';
import inProgressBudgetsListPage from "../../pages/budget/inProgress/InProgressBudgetsListPage";
import LoginPage from '../../pages/LoginPage';
const pendingBudgetsListPage = require('../../pages/budget/pending/PendingBudgetsListPage');
const completedBudgetsListPage = require('../../pages/budget/completed/CompletedBudgetsListPage');
const pendingBudgetsEditPage = require ('../../pages/budget/pending/PendingBudgetsEditPage');

Given('The user logs in Cotazo', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.visit("/");
    loginPage.singIn('installer');
    // Set as cypress env vars some values defined by previous tests.
    cy.task('getServiceOrderNumber').then((serviceOrderNumber) => {
        Cypress.env("orderServiceNumber", serviceOrderNumber);
        assert(true, `The Service Order Number ${serviceOrderNumber} has been properly obtained and set as cypress environment variable`)
    });
});

And('The user goes to {string}', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    if (element === 'in edition') {
        inProgressBudgetsListPage.commonPageElements.pageEditBtn().click();
    }
    if (element === 'in pending') {
        inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click();
    }
    if (element === 'already launched') {
        completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
    }
    if (element === 'Configuration'){
        cy.contains('Configurações').click();
    }
    if (element === 'User profiles'){
        cy.contains('Perfis de Utilizadores').click();
    }
});