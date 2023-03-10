class PrerequisitesInstalaLoginPage {
    elements = {
        usernameInstalaInput: () => cy.get('[name="pf.username"]'),
        passwordInstalaInput: () => cy.get('[name="pf.pass"]'),
        signOnBtn: () => cy.get('[id="my_sign_on_button"]'),
        enterInstalaBtn: () => cy.get('[class="css-7fsdo1-button"]')
    };

    loginInstala() {

     this.elements.usernameInstalaInput().type(Cypress.env('ADEO_USERNAME'));
     this.elements.passwordInstalaInput().type(Cypress.env('ADEO_PASSWORD'));
     cy.intercept('GET', 'http://instala-config-uat.leroymerlin.pt/ping-auth').as('pingAuth');
     this.elements.signOnBtn().click().then(() => {
       
     
        cy.wait('@pingAuth').then((interception) => {
            console.log('interception:')
                    console.log( JSON.stringify(interception))
        });
     })

    

     
    }
}

module.exports = new PrerequisitesInstalaLoginPage();