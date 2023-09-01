export class PrerequisitesInstalaLoginPage {
    elements = {
        usernameInstalaInput: () => cy.get('[name="pf.username"]'),
        passwordInstalaInput: () => cy.get('[name="pf.pass"]'),
        signOnBtn: () => cy.get('[id="my_sign_on_button"]'),
        enterInstalaBtn: () => cy.get('#mozaic-button')
    };

    loginInstala() {

        this.elements.usernameInstalaInput().type(Cypress.env('ADEO_USERNAME'));
        this.elements.passwordInstalaInput().type(Cypress.env('ADEO_PASSWORD'));

        cy.intercept('GET', Cypress.env('INSTALA_PING_AUTH_URL_SCHEMA') + Cypress.env('INSTALA_PING_AUTH_SUBDOMAIN') + Cypress.env('INSTALA_PING_AUTH_PATH')).as('pingAuth');

        this.elements.signOnBtn().click().then(() => {
            cy.wait('@pingAuth').then((interception) => {
                console.log('interception:')
                console.log(JSON.stringify(interception))
            });
        });
    }
}

export const prerequisitesInstalaLoginPage = new PrerequisitesInstalaLoginPage();