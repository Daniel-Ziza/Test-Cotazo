import moment from 'moment-business-days';


class PrerequisitesInstalaServiceOrderCreationPage {
    elements = {
        serviceOrderCreationBtn: () => cy.get('[title="Cadastro de Ordens de Serviço"] > .menu-item > a'),
        storeCodeSelect: () => cy.get('#issuerPlant > .react-select__control'),
        nameStoreInput: () => cy.get('div[id^="react-select-2-option-0"]'),
        pyxisNumberInput: () => cy.get('[name="sourceOrderNumber"]'),
        taxNumberInput: () => cy.get('[name="customerFiscalId"]'),
        customerNameInput: () => cy.get('[name="customerName"]'),
        emailInput: () => cy.get('[name="customerEmail"]'),
        phoneNumberCustomerInput: () => cy.get(':nth-child(7) > :nth-child(2) .PhoneInputInput'),
        zipInput: () => cy.get('[name="customerAddressPostalCode"]'),
        countryInput: () => cy.get('[name="customerAddressCountry"]'),
        cityInput: () => cy.get('[name="customerAddressCity"]'),
        addressCustomerInput: () => cy.get('[name="customerAddressStreetName"]'),
        numberAddressCustomerInput: () => cy.get('[name="customerAddressStreetNumber"]'),
        serviceGroupSelect: () => cy.get('#serviceGroupCode > .css-iwfcan-control'),
        nameServiceSelect: () => cy.get('div[id^="react-select-3-option-0"]'),
        calendarSelect: () => cy.get('[name="date"]'),
        turnOrderServiceCreateSelect: () => cy.get('.react-select__placeholder'),
        turnSelect: () => cy.get('div[id^="react-select-4-option-"]'),
        addNewItemBtn: () => cy.get(':nth-child(3) > :nth-child(2) > .button'),
        serviceCodeSelect: () => cy.get('#serviceCode > .react-select__control > .react-select__value-container'),
        serviceSelect: () => cy.get('#react-select-5-option-2'),
        serviceQuantityInput: () => cy.get('[id="serviceQuantity"]'),
        serviceValueInput: () => cy.get('[id="serviceValue"]'),
        saveServiceBtn: () => cy.get('.padding-vertical-double'),
        createServiceOrderBtn: () => cy.get(':nth-child(18) > :nth-child(1) > .button')
    };

    generatePyxisNumber() {
        const id = String(Math.floor(Date.now() / 1000) + 8000000000);
        this.elements.pyxisNumberInput().type(id);
    };

    completeTheForm() {
        this.elements.storeCodeSelect().click().type('teste');
        this.elements.nameStoreInput().click();
        this.generatePyxisNumber();
        this.elements.taxNumberInput().type(Cypress.env('CUSTOMER_FISCAL_ID'));
        this.elements.customerNameInput().type(Cypress.env('CUSTOMER_NAME'));
        this.elements.emailInput().type(Cypress.env('CUSTOMER_EMAIL'));
        this.elements.phoneNumberCustomerInput().type(Cypress.env('CUSTOMER_PHONE_NUMBER'));
        this.elements.zipInput().type(Cypress.env('CUSTOMER_POSTAL_CODE'));
        this.elements.countryInput().type(Cypress.env('CUSTOMER_COUNTRY'));
        this.elements.cityInput().type(Cypress.env('CUSTOMER_CITY'));
        this.elements.addressCustomerInput().type(Cypress.env('CUSTOMER_ADDRESS'));
        this.elements.numberAddressCustomerInput().type(Cypress.env('CUSTOMER_ADDRESS_NUMBER'));
        this.elements.serviceGroupSelect().click().type('Móvel de casa de banho');
        this.elements.nameServiceSelect().click();
        this.typeDayDatePicker();
        this.elements.turnOrderServiceCreateSelect().click().type('Manhã');
        this.elements.turnSelect().click();
        this.elements.addNewItemBtn().click();
        this.elements.serviceCodeSelect().click().type('Visita');
        this.elements.serviceSelect().click();
        this.elements.serviceQuantityInput().type('1');
        this.elements.serviceValueInput().type('25');
        this.elements.saveServiceBtn().click();
    };

    typeDayDatePicker() {
        let dateAsString = moment().nextBusinessDay().businessAdd(14).format('DD/MM/YYYY');
        this.elements.calendarSelect().then(input => {
            input.attr('readonly', false);
            cy.wrap(input).type(dateAsString);
        });
    };
}

module.exports = new PrerequisitesInstalaServiceOrderCreationPage();