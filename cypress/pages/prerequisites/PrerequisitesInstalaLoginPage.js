class PrerequisitesInstalaLoginPage {
    elements = {
        usernameInstalaInput: () => cy.get('[name="pf.username"]'),
        passwordInstalaInput: () => cy.get('[name="pf.pass"]'),
        signOnBtn: () => cy.get('[id="my_sign_on_button"]')
    };

    loginInstala () {
        this.elements.usernameInstalaInput().type(Cypress.env('ADEO_USERNAME'));
        this.elements.passwordInstalaInput().type(Cypress.env('ADEO_PASSWORD'));
        cy.intercept('/newCockpit').as('homePage');
        this.elements.signOnBtn().click()
        cy.wait('@homePage').then(() => {
            cy.get('[id="breadcrumb-bar"]').should('contains.text', 'Cockpit');
        })
    };
}

module.exports = new PrerequisitesInstalaLoginPage();