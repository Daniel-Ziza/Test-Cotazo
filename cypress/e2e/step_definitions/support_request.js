import {
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';

import { loginPage } from '../../pages/LoginPage';
import {supportRequestPage} from '../../pages/supportRequest/SupportRequestPage';
import {homePage} from '../../pages/HomePage';
import {supportRequestManagementPage} from '../../pages/supportRequest/SupportRequestManagementPage';

When('The user goes to the support request', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    loginPage.elements.assistanceRequestWithoutLogin().click();
});

When('The user fills in the support request form and send it', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestPage.createSupportRequestWithoutLogin();
    cy.intercept('POST', '/lm-cotazo-core/assistance/public').as('createAssistance');
    supportRequestPage.elements.sendSupportRequestBtn().click();
    cy.wait('@createAssistance').then((responseData) => {
        if (!responseData.response ||
            !responseData.response.body ||
            !responseData.response.body.requestNumber) {
            assert(false, 'The source order code cannot be obtained');
            throw new Error('The request number cannot be obtained');
        }
        const requestNumber = responseData.response.body.requestNumber;
        assert(true, `The request number is: ${requestNumber}`);
        Cypress.env('requestNumber', requestNumber);
    });
});

And('The user returns to the login page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestPage.elements.backToLoginBtn().click();
});

Then('The administrator can see the support request for access problems', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    homePage.elements.supportRequestBtn().click();
    supportRequestManagementPage.verifyCreateSupportRequest(Cypress.env('requestNumber'), 'access problems');
});

When('An {string} logs in to cotazo', (userType) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.slowDown(250);
    loginPage.singIn(userType);
    cy.slowDownEnd();
});

And('The user goes to the support request page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    homePage.elements.supportRequestBtn().click();
});

And('The {string} creates a new support request in {string}', (user, type) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    if (type === 'mobile') {
        supportRequestManagementPage.elements.createNewIncidentBtn().eq(1).click();
    } else {
        supportRequestManagementPage.elements.createNewIncidentBtn().eq(0).click();
    }
    supportRequestPage.createSupportRequestWithLogin();
    cy.intercept('POST', '/lm-cotazo-core/assistance').as('createAssistance');
    supportRequestPage.elements.sendSupportRequestBtn().click();

    cy.wait('@createAssistance').then((responseData) => {
        if (!responseData.response ||
            !responseData.response.body ||
            !responseData.response.body.requestNumber) {
            assert(false, 'The source order code cannot be obtained');
            throw new Error('The request number cannot be obtained');
        }
        const requestNumber = responseData.response.body.requestNumber;
        assert(true, `The request number is: ${requestNumber}`);
        Cypress.env('requestNumber', requestNumber);
    });
});

Then('The {string} verifies that he can see the created request', (user) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestManagementPage.verifyCreateSupportRequest(Cypress.env('requestNumber'), 'any issue');
});

Then('The {string} cannot see the request on the support request page', (userType) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    homePage.elements.supportRequestBtn().click();
    supportRequestManagementPage.verifyCreateSupportRequest(Cypress.env('requestNumber'));
});

Then('The {string} can see the request on the support request page', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    homePage.elements.supportRequestBtn().click();
    supportRequestManagementPage.verifyCreateSupportRequest(Cypress.env('requestNumber'), 'any issue');
});

And('The user logs out', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    homePage.elements.logsOutBtn().click();
});

And('The administrator changes the status of the order to {string}', (status) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestManagementPage.chanceStatusSupportRequest(status);
    Cypress.env('status', status);
});

And('The {string} sends a comment', (user) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestManagementPage.sendComment();
    cy.wait(1000);
});

Then('The installer checks the status of the support request', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestManagementPage.checkStatus(Cypress.env('status'), Cypress.env('requestNumber'));
});

Then('The installer checks the comment received', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestManagementPage.elements.editSupportRequestBtn().click();
    supportRequestManagementPage.checkComment(Cypress.env('comment'));
});

Then('The administrator checks the comment received', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestManagementPage.searchIncident(Cypress.env('requestNumber'));
    supportRequestManagementPage.elements.editSupportRequestBtn().click()
    supportRequestManagementPage.checkComment(Cypress.env('comment'));
});

And('The user enters invalid {string} values', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestPage.verifyValue(element);
});

And('The subject is in read-only', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestPage.elements.subjectSupportRequestInput().should('have.attr', 'readonly');
});

Then('The support request cannot be sent', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestPage.elements.sendSupportRequestBtn().should('be.disabled');
});

And('The user go to the create new support request in {string}', (type) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    if (type === 'mobile') {
        supportRequestManagementPage.elements.createNewIncidentBtn().eq(1).click();
    } else {
        supportRequestManagementPage.elements.createNewIncidentBtn().eq(0).click();
    }
});

And('The user checks search filter by {string}', (filter) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    supportRequestManagementPage.verifyFilter(filter);
});

And('The user clicks on toggle button in {string}', (type) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });

    if (type === 'mobile') {
        homePage.elements.toggleMobileBtn().click();
    } else {
        homePage.elements.toggleBtn().click();
    }

})