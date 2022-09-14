const utils = require('../../utils');

class SupportRequestPage {
    elements = {
        technicianEmailInput: () => cy.get('[id="E-mail para contacto*"]'),
        subjectSupportRequestInput: () => cy.get('[id="Assunto*"]'),
        messageSupportRequestInput: () => cy.get('[placeholder="Mensagem*"]'),
        sendSupportRequestBtn: () => cy.get('.btn'),
        backToLoginBtn: () => cy.get('.cotazo-login-assistance-click-here'),
        emailErrorMessage: () => cy.get('[class="error invalid-feedback"]'),
        textErrorMessage: () => cy.get(':nth-child(3) > .input-group > .error'),
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

    verifyValue(element){
        if (element === 'email'){
            this.elements.technicianEmailInput().clear().type('exampleEmail@leroymerlin');
            this.elements.emailErrorMessage().should('have.text', 'Email inválido');
            this.elements.technicianEmailInput().clear().type('exampleEmail.leroymerlin.pt');
            this.elements.emailErrorMessage().should('have.text', 'Email inválido');
            this.elements.technicianEmailInput().clear().type('@leroymerlin.pt');
            this.elements.emailErrorMessage().should('have.text', 'Email inválido');
        }
        if (element === 'messages'){
            //verify messageSupportReques <=200
            let messageText = utils.randomString(201);
            this.elements.messageSupportRequestInput().clear().type(messageText);
            this.elements.messageSupportRequestInput().invoke('text').then(newMessage =>{
                expect(messageText).to.not.equal(newMessage);
            })
            //verify messageSupportReques >=10
            let messageText2 = utils.randomString(9);
            this.elements.messageSupportRequestInput().clear().type(messageText2);
            this.elements.emailErrorMessage().should('contain.text', 'Minímimo 10 caracteres.')
            //verify messageSupportReques empty
            this.elements.messageSupportRequestInput().clear();
            this.elements.emailErrorMessage().should('contain.text', 'Campo obrigatório')
        }
        if(element === 'subject'){
            //verify subject >10
            let messageText4 = utils.randomString(101);
            this.elements.subjectSupportRequestInput().clear().type(messageText4);
            this.elements.subjectSupportRequestInput().should('not.have.text', messageText4);
        }
    }
}

module.exports = new SupportRequestPage();