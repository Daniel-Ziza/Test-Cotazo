export class UserConfiguration {

    elements = {
        userSearchText: () => cy.get('[data-testid="cotazo-users-search-input"]'),
        userSearchBtn: () => cy.get('[data-testid="cotazo-users-search-search-btn"]'),
        actionUserBtn: () => cy.get('.budget-rect-icon-div'),
        viewUserActions: () => cy.get('.cotazo-users-table-actions'),
        pageDescriptionTitleUser: () => cy.get('.manage-title'),
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

export const userConfiguration = new UserConfiguration();