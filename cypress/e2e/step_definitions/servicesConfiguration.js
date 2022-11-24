import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
const services = require('../../pages/configuration/servicesConfiguration');

When("the user clicks on the {string} button", (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    services.clickBtn(element);
})