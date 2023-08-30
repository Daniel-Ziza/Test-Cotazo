export class UserGroupConfiguration {

    elements = {
        userGroupSearchText: () => cy.get('[data-testid="cotazo-access-groups-search-input"]'),
        userGroupSearchBtn: () => cy.get('[data-testid="cotazo-access-groups-search-search-btn"]'),
        actionUserGroupBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(2)'),
        pageDescriptionTitleUserGroup: () => cy.get('.manage-title'),
        viewUserGroupAction: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(1)'),
        createUserGroupBtn: () => cy.get('[data-testid="cotazo-access-groups-add-btn"]'),
    };

    searchUserGroup() {
        this.elements.userGroupSearchText().type(Cypress.env('userProfile'));
        this.elements.userGroupSearchBtn().click();
    }
}

export const userGroupConfiguration = new UserGroupConfiguration();