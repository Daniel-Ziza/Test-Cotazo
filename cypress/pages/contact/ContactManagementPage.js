export class ContactManagementPage {
    elements = {
        contactNameInput: () => cy.get('[id="Nome de Contato"]'),
        contactNumberInput: () => cy.get('[id="Contato"]'),
        contactStoreSelect: () => cy.get('[id="stores_contacts_dropdown_input"]'),
        creatorName: () => cy.get('[id="Criado Por"]'),
        saveContactBtn: () => cy.get('.btn-success'),
        returContactPageBtn: () => cy.get('.btn-default'),


    };
}

export const contactManagementPage = new ContactManagementPage();