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
        cy.intercept('GET', '/lm-instala-auth/get-user-info').as('getUserInfo2');
        this.elements.signOnBtn().click()
        cy.wait('@getUserInfo2').then((interception) => {
            Cypress.env('API_KEY_TOKEN', interception.request.headers.apikey);
            Cypress.env('AUTHORIZATION_TOKEN', interception.request.headers.authorization);
        });
        cy.get('#breadcrumb-bar', {timeout : 15000}).should('be.visible').and('contain', 'Cockpit');
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
    };
}

module.exports = new PrerequisitesInstalaLoginPage();