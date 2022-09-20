class PrerequisitesInstalaLoginPage {
    elements = {
        usernameInstalaInput: () => cy.get('[name="pf.username"]'),
        passwordInstalaInput: () => cy.get('[name="pf.pass"]'),
        signOnBtn: () => cy.get('[id="my_sign_on_button"]'),
        enterInstalaBtn: () => cy.get('[class="css-7fsdo1-button"]')
    };

    loginInstala () {
        this.elements.enterInstalaBtn().click();
        this.elements.usernameInstalaInput().type(Cypress.env('ADEO_USERNAME'));
        this.elements.passwordInstalaInput().type(Cypress.env('ADEO_PASSWORD'));
        this.elements.signOnBtn().click()
        cy.get('[id="breadcrumb-bar"]').should('contains.text', 'Cockpit');
    };
}

module.exports = new PrerequisitesInstalaLoginPage();