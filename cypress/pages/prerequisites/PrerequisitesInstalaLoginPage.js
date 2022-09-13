class PrerequisitesInstalaLoginPage {
    elements = {
        usernameInstalaInput: () => cy.get('[name="pf.username"]'),
        passwordInstalaInput: () => cy.get('[name="pf.pass"]'),
        signOnBtn: () => cy.get('[id="my_sign_on_button"]')
    };

    loginInstala () {
        this.elements.usernameInstalaInput().type(Cypress.env('ADEO_USERNAME'));
        this.elements.passwordInstalaInput().type(Cypress.env('ADEO_PASSWORD'));
        this.elements.signOnBtn().click()
    };
}

module.exports = new PrerequisitesInstalaLoginPage();