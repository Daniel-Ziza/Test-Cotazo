class userGroupConfiguration {

    elements = {
        userGroupSearchText: () => cy.get('[id="Procurar grupo..."]'),
        userGroupSearchBtn: () => cy.get('.cotazo-assistance-search-btn'),
        actionUserGroupBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(2)'),
        pageDescriptionTitleUserGroup: () => cy.get('.manage-title'),
        viewUserGroupAction: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(1)'),
        createUserGroupBtn: () => cy.get('.cotazo-simple-add-button-container > .btn'),
    };

    searchUserGroup() {
        this.elements.userGroupSearchText().type(Cypress.env('userProfile'));
        this.elements.userGroupSearchBtn().click();
    }
}

module.exports = new userGroupConfiguration();