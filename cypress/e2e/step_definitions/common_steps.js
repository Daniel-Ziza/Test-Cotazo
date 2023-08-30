import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from '../../pages/LoginPage';
import {inProgressBudgetsListPage} from '../../pages/budget/inProgress/InProgressBudgetsListPage';
import {completedBudgetsListPage} from '../../pages/budget/completed/CompletedBudgetsListPage';
import {homePage} from '../../pages/HomePage';

Given('The user logs in Cotazo', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.visit("/");
        loginPage.singIn('installer');
    
    //It is necessary to update the automatic tests for the creation of service orders in Instala
    // Set as cypress env vars some values defined by previous tests.
    // cy.task('getServiceOrderNumber').then((serviceOrderNumber) => {
    //     Cypress.env("orderServiceNumber", serviceOrderNumber);
    //     assert(true, `The Service Order Number ${serviceOrderNumber} has been properly obtained and set as cypress environment variable`)
    // });
    
    Cypress.env('orderServiceNumber', Cypress.env('SERVICE_ORDER_NUMBER'));
});

And('The user goes to {string}', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
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
    if (element === 'Configuration') {
        homePage.toGo('Configurações');
    }
    if (element === 'User profiles') {
        homePage.toGo('Perfis de Utilizadores');
    }
    if (element === 'User') {
        homePage.toGo('Utilizadores');
    }
    if (element === 'click here') {
        homePage.toGo('carregue aqui');
    }
    if (element === 'User group') {
        homePage.toGo('Grupos de Utilizadores');
    }
    if (element === 'Translations') {
        homePage.toGo('Traduções');
    }
    if (element === 'Parameters') {
        homePage.toGo('Parâmetros');
    }
    if (element === 'Services') {
        homePage.toGo('Serviços');
    }
    if (element === 'Contact') {
        homePage.toGo('Contatos');
    }
}
);

And('The user reloads the page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.reload();
})