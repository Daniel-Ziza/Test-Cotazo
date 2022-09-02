class PrerequisitesIntalaAcceptanceTermPage {
    elements = {
        conditionAcceptanceCheck: () => cy.get(':nth-child(4) > span > input'),
        signatureInput: () => cy.get('[style="display: block; position: absolute; z-index: 15;"]'),
        sendAcceptanceTermsBtn: () => cy.get('.button-primary'),
        confirmationAcceptanceTermsLabel: () => cy.get('.container-fluid')
    };
    acceptTerms ()  {
        this.elements.conditionAcceptanceCheck().check();
        this.elements.signatureInput().click();
        this.elements.sendAcceptanceTermsBtn().click();
        this.elements.confirmationAcceptanceTermsLabel().should('contain.text', 'Condições aceitas');
    };
};

module.exports = new PrerequisitesIntalaAcceptanceTermPage();