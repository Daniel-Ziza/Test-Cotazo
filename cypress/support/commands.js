import 'cypress-wait-until';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('pollServiceOrderInfo', ({ baseUrl, apiKey, authorization, serviceOrderNumber, expectedStatus, maxAttempts = 10, interval = 3000 }) => {
    return new Cypress.Promise(async (resolve, reject) => {
        let obtainedStatus = null;
        let lastResponse = null;
        let lastResponseInJson = null;
        let attempts = 0;
        while (obtainedStatus !== expectedStatus && attempts < maxAttempts) {
            lastResponse = await fetch(`${baseUrl}/lm-instala-api/orders/services/list-filters?servcOrdCd=${serviceOrderNumber}`, {
                mode: 'cors',
                headers: {
                    apiKey,
                    authorization,
                },
            });
            lastResponseInJson = await lastResponse.json();
            if (lastResponseInJson && lastResponseInJson.data[0] && lastResponseInJson.data[0].servcOrdStusCd) {
                obtainedStatus = lastResponseInJson.data[0].servcOrdStusCd;
            } else {
                assert(false, 'The service order information can not be obtained');
                reject(`The service information can not be obtained`);
                throw new Error(`The service information can not be obtained`);
            }
            if (obtainedStatus === expectedStatus) {
                assert(true, `The expected service order status (${expectedStatus}) has been found`);
                resolve(obtainedStatus);
                return;
            }
            await new Promise(r => setTimeout(r, interval));
            attempts++;
            if (obtainedStatus !== expectedStatus && attempts >= maxAttempts) {
                assert(false, `The expected service order status (${expectedStatus}) can not be found`);
                reject(`The expected service order status (${expectedStatus}) can not be found`);
                throw new Error(`The expected service order status (${expectedStatus}) can not be found`);
            }
        }
    });
});


