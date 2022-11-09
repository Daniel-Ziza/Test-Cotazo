class userConfiguration {
   
    elements = {
        userSearchText: () => cy.get('[id="Procurar utilizador..."]'),
        userSearchBtn: () => cy.get('.cotazo-assistance-search-btn'),
        actionUserBtn: () => cy.get('.budget-rect-icon-div'),
    };

    searchUser(user) {
        if (user === 'INSTALLER') {
            this.elements.userSearchText().type(Cypress.env('COTAZO_INSTALLER_USERNAME'));
            this.elements.userSearchBtn().click();
        }
        if (user === 'COLLABORATOR') {
            this.elements.userSearchText().type(Cypress.env('ADEO_USERNAME'));
            this.elements.userSearchBtn().click();
        }
        if (user === 'TECHNICIAN') {
            this.elements.userSearchText().type(Cypress.env('COTAZO_TECHNICIAN_USERNAME'));
            this.elements.userSearchBtn().click();
        }
    }
    
    

}

module.exports = new userConfiguration();