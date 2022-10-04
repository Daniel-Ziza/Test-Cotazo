class PrerequisitesIntalaAcceptanceTermPage {
    elements = {
        conditionAcceptanceCheck: () => cy.get(':nth-child(4) > span > input'),
        signatureInput: () => cy.get('.signature > div'),
        sendAcceptanceTermsBtn: () => cy.get('.button-primary'),
        confirmationAcceptanceTermsLabel: () => cy.get('.container-fluid')
    };

    /*
           Function to confirm service conditions in INSTALA
     */

    acceptTerms ()  {
        this.elements.conditionAcceptanceCheck().check();
        this.elements.signatureInput().click();
        this.elements.sendAcceptanceTermsBtn().click();
        this.elements.confirmationAcceptanceTermsLabel().should('contain.text', Cypress.env('TRANSLATION_INSTALA_CONFIRMATION_TEXT_ACCEPTANCE_CONDITIONS'));
    };
}

module.exports = new PrerequisitesIntalaAcceptanceTermPage();