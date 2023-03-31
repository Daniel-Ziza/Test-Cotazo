import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
import promisify from 'cypress-promise';
import { Buffer } from 'buffer';
const prerequisiteInstalaLoginPage = require('../../pages/prerequisites/PrerequisitesInstalaLoginPage');
const prerequisitesInstalaServiceOrderCreationPage = require('../../pages/prerequisites/PrerequisitesInstalaServiceOrderCreationPage');
const prerequisitesIntalaAcceptanceTermPage = require('../../pages/prerequisites/PrerequisitesIntalaAcceptanceTermPage');
const prerequisitesInstalaServiceOrderManagement = require('../../pages/prerequisites/PrerequisitesInstalaServiceOrderManagement');

Given('The user enters the instala page', async () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    //Instala Home Page
    cy.visit(Cypress.env('INSTALA_BASE_URL'));
});

And('The user clicks the enter button', async () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });

    prerequisiteInstalaLoginPage.elements.enterInstalaBtn().click()
});


And('The system obtains the instala login url', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    
    cy.window().then((win) => {
        Cypress.env('instalaLoginUrl', win.location);
    });
});


When('The user enters the authorization data', async () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });

    const instalaLoginUrl = Cypress.env('instalaLoginUrl');
    console.log('instalaLoginUrl');
    console.log(instalaLoginUrl);
    //Go to the authorization page
    cy.visit(String(instalaLoginUrl)).then(() => {
        //authorization
        prerequisiteInstalaLoginPage.elements.usernameInstalaInput().type(Cypress.env('ADEO_USERNAME'));
        prerequisiteInstalaLoginPage.elements.passwordInstalaInput().clear().type(Cypress.env('ADEO_PASSWORD'));
        prerequisiteInstalaLoginPage.elements.signOnBtn().click();
    });

});

When('The system obtains the token information', async () => {
    cy.window().then((win) => {
        const urlParts = String(win.location).split('token=');
        const token = urlParts[1];
        ////Saving the authentication_Token environment variables
        Cypress.env('AUTHORIZATION_TOKEN', token);
    });
});

When('The system uses the token information to signIn', async () => {
    ////Obtaining token
    const token = String(Cypress.env('AUTHORIZATION_TOKEN'));

    const tokenParts = token.split('.');
    let tokenInfo = {};

    if (tokenParts[1]) {
        const buffPart1 = Buffer.from(tokenParts[1], 'base64');
        console.log('buffPart1', buffPart1.toString('ascii'));
        const payloadPart1 = JSON.parse(buffPart1.toString('ascii'));
        tokenInfo = {
            ...tokenInfo,
            ...payloadPart1
        }
    }

    console.log('TOKEN INFO:');
    console.log(tokenInfo);


    const expDate = new Date(0);
    expDate.setUTCSeconds(tokenInfo.exp);

    const userInfo = {
        "userType": tokenInfo.userType,
        "username": tokenInfo.sub,
        "employeeID": tokenInfo.employeeID,
        "fullName": tokenInfo.fullName,
        "title": tokenInfo.title,
        "locationName": tokenInfo.locationName,
        "locationCode": tokenInfo.locationCode,
        "department": tokenInfo.department,
        "email": tokenInfo.email,
        "dsLanguage": "pt",
        "dsCountry": "PT",
        "dsToken": token,
        "funcaoAcesso": tokenInfo.funcaoAcesso,
        "cntryCd": tokenInfo.cntryCd,
        "buCd": tokenInfo.buCd,
        "lsPlants": tokenInfo.lsPlants,
        "lsGroups": [],
        "accessFunctionList": tokenInfo.accessFunctionList,
        "allowedCategories": tokenInfo.allowedCategories,
        "verificationAllIDWall": false,
        "tokenExpirationTime": expDate.toISOString(),
    };


    //Save token information in the localStorage
    window.localStorage.setItem('user', JSON.stringify(userInfo));

    cy.clearCookies();
});

When('The user enters the cockpit page', async () => {
    cy.intercept('GET', Cypress.env('INSTALA_BASE_URL') + '/lm-instala-api/servc-core/byUser').as('byUser');
    cy.visit('https://instala-uat.leroymerlin.pt/cockpit')

    cy.wait('@byUser').then((interception) => {
        Cypress.env('API_KEY_TOKEN', interception.request.headers.apikey);
    });
    cy.task('getServiceOrderNumber').then((serviceOrderNumber) => {
        Cypress.env("orderServiceNumber", serviceOrderNumber);
        assert(true, `The Service Order Number ${serviceOrderNumber} has been properly obtained and set as cypress environment variable`);
    });
    cy.get('#breadcrumb-bar', { timeout: 15000 }).should('be.visible').and('contain', 'Cockpit');
    cy.waitUntil(() => {
        return Cypress.env('API_KEY_TOKEN');
    }).then(() => {
        assert(true, 'the API_KEY_TOKEN has been obtained');
    });
    cy.waitUntil(() => {
        return Cypress.env('AUTHORIZATION_TOKEN');
    }).then(() => {
        assert(true, 'the AUTHORIZATION_TOKEN has been obtained');
    });
});


Given('The user logs in Instala', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.visit(Cypress.env('INSTALA_BASE_URL'));
    prerequisiteInstalaLoginPage.loginInstala();
})

And('The user clicks on service order creation', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });

    prerequisitesInstalaServiceOrderCreationPage.elements.serviceOrderCreationBtn().click();

});

When('The user fills out the service order creation form', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    prerequisitesInstalaServiceOrderCreationPage.completeTheForm();
});

Then('The user clicks on the save button', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.intercept('POST', '/lm-instala-api/orders/services').as('orderCode'); // this has to be placed in environment variables
    //cy.intercept('GET', 'lm-instala-api/orders/services/list-filters?servcOrdCd=*').as('serviceOrderOccurrence'); // this has to be placed in environment variables
    //cy.intercept('GET', '/lm-instala-api/short-link?path=terms-acceptance*').as('termsAcceptance'); // this has to be placed in environment variables
    prerequisitesInstalaServiceOrderCreationPage.elements.createServiceOrderBtn().click();
    cy.wait('@orderCode').then((responseData) => {
        if (!responseData.response ||
            !responseData.response.body ||
            !responseData.response.body.data ||
            !responseData.response.body.data[0] ||
            !responseData.response.body.data[0].sourceOrderCode) {
            assert(false, 'The source order code cannot be obtained');
            throw new Error('The source order code cannot be obtained');
        }
        const sourceOrderCode = responseData.response.body.data[0].sourceOrderCode;
        assert(true, `The source order code was obtained: ${sourceOrderCode}`);
        Cypress.env('orderServiceNumber', sourceOrderCode);
        cy.task('setServiceOrderNumber', sourceOrderCode);
    });
});

And('The user accepts the terms of service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.visit(Cypress.env('acceptanceTerms'));
    prerequisitesIntalaAcceptanceTermPage.acceptTerms();
});

And('The user searches for the service order', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.visit(Cypress.env('INSTALA_BASE_URL'));
    prerequisitesInstalaServiceOrderManagement.serviceOrderSearch();
});

//temporary alternative step
And('Search for service order', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.visit(Cypress.env('INSTALA_BASE_URL'));
    cy.intercept('GET', 'lm-instala-api/orders/services/list-filters?servcOrdCd=*').as('serviceOrderOccurrence'); // this has to be placed in environment variables
    prerequisitesInstalaServiceOrderManagement.serviceOrderSearch();
    //Temporal
    cy.wait('@serviceOrderOccurrence').then((responseData2) => {
        if (!responseData2.response ||
            !responseData2.response.body ||
            !responseData2.response.body.data ||
            !responseData2.response.body.data[0] ||
            !responseData2.response.body.data[0].serviceOrderOccurrence[1].descOcorOrdemServico) {
            assert(false, 'The source order code cannot be obtained');
            throw new Error('The source order code cannot be obtained');
        }
        let text = responseData2.response.body.data[0].serviceOrderOccurrence[1].descOcorOrdemServico;
        const myArray = text.split(Cypress.env('INSTALA_CUSTOMER_PORTAL_BASE_URL'));
        cy.log(myArray[1]);
        const statusLink = Cypress.env('INSTALA_CUSTOMER_PORTAL_BASE_URL') + myArray[1];
        assert(true, `The service order status link is: ${statusLink}`);
        Cypress.env('statusLink', statusLink);
    })
});

//temporary alternative step
And('The link to the terms and conditions of sale is obtained', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.intercept('GET', '/lm-instala-api/short-link?path=terms-acceptance*').as('termsAcceptance');
    cy.get('div > .button-hollow').click();
    cy.wait('@termsAcceptance').then((responseData3) => {
        if (!responseData3.response ||
            !responseData3.response.body ||
            !responseData3.response.body.data ||
            !responseData3.response.body.data[0] ||
            !responseData3.response.body.data[0]) {
            assert(false, 'The source order code cannot be obtained');
            throw new Error('The source order code cannot be obtained');
        }
        const acceptanceTermLink = responseData3.response.body.data;
        assert(true, `The terms and conditions link is: ${acceptanceTermLink}`);
        Cypress.env('acceptanceTerms', acceptanceTermLink);
    });
    cy.waitUntil(() => typeof Cypress.env('acceptanceTerms') !== 'undefined').then(() => {
        assert(true, `The url has been obtained ${Cypress.env('acceptanceTerms')}`);
    })
});

And('The user makes a manual distribution of the service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    prerequisitesInstalaServiceOrderManagement.dateUpdate();
});

// And('The client confirms the service', () => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         return false;
//     })
//     cy.visit(Cypress.env('statusLink'));
//     prerequisitesInstalaServiceOrderManagement.confirmService();
//     cy.visit(Cypress.env('INSTALA_BASE_URL'));
//     prerequisitesInstalaServiceOrderManagement.serviceOrderSearch();
// });

And('The technician agrees to perform the service', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.waitUntil(() => cy.pollServiceOrderInfo({
        baseUrl: Cypress.env('INSTALA_BASE_URL'),
        apiKey: Cypress.env('API_KEY_TOKEN'),
        authorization: Cypress.env('AUTHORIZATION_TOKEN'),
        serviceOrderNumber: Cypress.env('orderServiceNumber'),
        expectedStatus: '04',
        maxAttempts: 20,
        interval: 3000
    })).then((statusCode) => {
        expect(statusCode).to.eq('04');
        console.assert(true, 'The technician has already agreed to perform the service');
    });
});

And('The technician starts the service', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.waitUntil(() => cy.pollServiceOrderInfo({
        baseUrl: Cypress.env('INSTALA_BASE_URL'),
        apiKey: Cypress.env('API_KEY_TOKEN'),
        authorization: Cypress.env('AUTHORIZATION_TOKEN'),
        serviceOrderNumber: Cypress.env('orderServiceNumber'),
        expectedStatus: '05',
        maxAttempts: 20,
        interval: 3000
    })).then((statusCode) => {
        expect(statusCode).to.eq('05');
        assert(true, 'The technician started the service');
    });
});

And('The technician terminates the service', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.waitUntil(() => cy.pollServiceOrderInfo({
        baseUrl: Cypress.env('INSTALA_BASE_URL'),
        apiKey: Cypress.env('API_KEY_TOKEN'),
        authorization: Cypress.env('AUTHORIZATION_TOKEN'),
        serviceOrderNumber: Cypress.env('orderServiceNumber'),
        expectedStatus: '06',
        maxAttempts: 20,
        interval: 3000
    })).then((statusCode) => {
        expect(statusCode).to.eq('06');
        assert(true, 'The technician terminated the service. The service order must already be in Cotazo');
    });
});

// FEATURES BUDGET ACCEPTANCE FLOW AND BUDGET REFUSAL FLOW
Then('The user verifies that the budgets are correctly loaded', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    prerequisitesInstalaServiceOrderManagement.elements.customerBudgetContainer()
        .should('contain.text', 'Orçamento Cliente OS ' + Cypress.env('orderServiceNumber'));
    prerequisitesInstalaServiceOrderManagement.elements.storeBudgetContainer()
        .should('contain.text', 'Orçamento Técnico OS ' + Cypress.env('orderServiceNumber'));
});

Then('The user indicates that the budget has been sent to the customer', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    prerequisitesInstalaServiceOrderManagement.elements.sendToCustomerCheck().click();
    prerequisitesInstalaServiceOrderManagement.elements.sendConfirmationBtn().contains('Sim').click();
});

Then('The user indicates that the budget was approved by the customer', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    prerequisitesInstalaServiceOrderManagement.elements.customerApprovalCheck().click();
    prerequisitesInstalaServiceOrderManagement.elements.serviceOrderUpdateBtn().click();
});

Then('The user indicates that the budget was refused by the customer', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    prerequisitesInstalaServiceOrderManagement.elements.customerRefusalCheck().click();
    prerequisitesInstalaServiceOrderManagement.elements.serviceOrderUpdateBtn().click();
});