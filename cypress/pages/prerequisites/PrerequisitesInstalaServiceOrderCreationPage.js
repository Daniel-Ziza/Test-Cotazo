import moment from 'moment-business-days';


class PrerequisitesInstalaServiceOrderCreationPage {
    elements = {
        serviceOrderCreationBtn: () => cy.get('[title="Cadastro de Ordens de Serviço"] > .menu-item > a'),
        storeCodeSelect: () => cy.get('#issuerPlant > .react-select__control'),
        nameStoreInput: () => cy.get('.react-select__option'),
        pyxisNumberInput: () => cy.get('[name="sourceOrderNumber"]'),
        searchPyxisOrderBtn: () => cy.get(':nth-child(4) > .col-xs-6 > .button'),
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
        nameServiceSelect: () => cy.get('[id^="react-select-"]'),
        calendarSelect: () => cy.get(`[id="${Cypress.env('CALENDAR_ID_IN_SERVICE_ORDER_CREATION')}"]`),
        turnOrderServiceCreateSelect: () => cy.get('[id="scheduleShift"]'),
        turnSelect: () => cy.get('div[id^="react-select-"]'),
        addNewItemBtn: () => cy.get(':nth-child(3) > :nth-child(2) > .button'),
        serviceCodeSelect: () => cy.get('#serviceCode > .react-select__control > .react-select__value-container'),
        serviceSelect: () => cy.get('div[id^="react-select-"]'),
        serviceQuantityInput: () => cy.get('[id="serviceQuantity"]'),
        serviceValueInput: () => cy.get('[id="serviceValue"]'),
        saveServiceBtn: () => cy.get('.padding-vertical-double'),
        createServiceOrderBtn: () => cy.get(':nth-child(18) > :nth-child(1) > .button')
    };

    generatePyxisNumber() {
        const id = String(Math.floor(Date.now() / 1000) + 8000000000);
        this.elements.pyxisNumberInput().type(id)
    };

    completeTheForm() {
        this.elements.storeCodeSelect().click();
        this.elements.nameStoreInput().contains(Cypress.env('STORE_NAME')).click();;
        this.generatePyxisNumber();
        this.elements.taxNumberInput().clear().type(Cypress.env('CUSTOMER_FISCAL_ID'));
        this.elements.customerNameInput().clear().type(Cypress.env('CUSTOMER_NAME'));
        this.elements.emailInput().clear().type(Cypress.env('CUSTOMER_EMAIL'));
        this.elements.phoneNumberCustomerInput().type(Cypress.env('CUSTOMER_PHONE_NUMBER'));
        this.elements.zipInput().clear().type(Cypress.env('CUSTOMER_POSTAL_CODE'));
        this.elements.countryInput().clear().type(Cypress.env('CUSTOMER_COUNTRY'));
        this.elements.cityInput().clear().type(Cypress.env('CUSTOMER_CITY'));
        this.elements.addressCustomerInput().clear().type(Cypress.env('CUSTOMER_ADDRESS'));
        this.elements.numberAddressCustomerInput().clear().type(Cypress.env('CUSTOMER_ADDRESS_NUMBER'));
        this.elements.serviceGroupSelect().click()
        this.elements.nameServiceSelect().contains(Cypress.env('SERVICE_GROUP')).click();
        this.typeDayDatePicker();
        this.elements.turnOrderServiceCreateSelect().click().type('Manhã');
        this.elements.turnSelect().click();
        this.elements.addNewItemBtn().click();
        this.elements.serviceCodeSelect().click().type(Cypress.env('SERVICE_TYPE'));
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