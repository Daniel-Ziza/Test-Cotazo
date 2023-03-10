import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
import promisify from 'cypress-promise';
import { Buffer } from 'buffer';

const prerequisiteInstalaLoginPage = require('../../pages/prerequisites/PrerequisitesInstalaLoginPage');




// When('The user clicks on the button budgets to be created', () => {
//     cy.on('uncaught:exception', (err, runnable) => {
//       return false;
//     });
  
//     cy.on('uncaught exception', (err, runnable) => {
//       return false
//     });
//     cy.slowDown(1000);
//     homePage.elements.toCreateBtn().click();
//     cy.slowDownEnd();
//   });


