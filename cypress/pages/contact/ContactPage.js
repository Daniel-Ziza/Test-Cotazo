export class ContactPage {
    elements = {
        contactSearchInput: () => cy.get('[id="Procurar contato..."]'),
        contactSearchBtn: () => cy.get('[class="btn btn-success cotazo-assistance-search-btn"]'),
        editContactBtn:() => cy.get('.cotazo-table-actions-more-than-one > :nth-child(1)'),
        deleteContactBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(2)'),
        createNewContactBtn: () => cy.get('.cotazo-simple-add-button-container > .btn'),
        cleanContactBtn: () => cy.get('.cotazo-delete-btn'),
        contactFilter: () => cy.get('.cotazo-white-container > .cotazo-subcontainer'),
        contactTable: () => cy.get('.cotazo-page-table-container > .cotazo-subcontainer'),
        titleContactPage:() => cy.get('.manage-title'),
    };
}

export const contactPage = new ContactPage();