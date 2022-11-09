class userGroupConfiguration {

    elements = {
        userGroupSearchText: () => cy.get('[id="Procurar grupo..."]'),
        userGroupSearchBtn: () => cy.get('.cotazo-assistance-search-btn'),
        actionUserGroupBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(2)'),
    };

    searchUserGroup() {
        this.elements.userGroupSearchText().type(Cypress.env('userProfile'));
        this.elements.userGroupSearchBtn().click();
    }
}

module.exports = new userGroupConfiguration();