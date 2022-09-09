class SupportRequestPage {
    elements = {
        technicianEmailInput: () => cy.get('[id="E-mail para contacto*"]'),
        subjectSupportRequestInput: () => cy.get('[id="Assunto*"]'),
        messageSupportRequestInput: () => cy.get('[placeholder="Mensagem*"]'),
        sendSupportRequestBtn: () => cy.get('.btn'),
        backToLoginBtn: () => cy.get('.cotazo-login-assistance-click-here')
    };

    createSupportRequestWithoutLogin() {
        this.elements.technicianEmailInput().type(Cypress.env('TECHNICIAN_EMAIL'));
        this.elements.messageSupportRequestInput()
            .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    };

    createSupportRequestWithLogin() {
        let subject = 'subject ' + Math.trunc(Date.now()/1000);
        Cypress.env('subject', subject);
        this.elements.subjectSupportRequestInput().type(Cypress.env('subject'));
        this.elements.messageSupportRequestInput()
            .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    };
}

module.exports = new SupportRequestPage();