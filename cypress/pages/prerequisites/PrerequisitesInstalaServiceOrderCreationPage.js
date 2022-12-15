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
        calendarSelect: () => cy.get('[name="date"]'),
        turnOrderServiceCreateSelect: () => cy.get('.react-select__placeholder'),
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
        this.elements.pyxisNumberInput().type(id);
    };

    completeTheForm() {
        if (Cypress.env('INSTALA_BASE_URL') === 'https://instala-uat.leroymerlin.pt'){
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
            this.elements.serviceCodeSelect().click().type('VISITA ORÇAMENTO');
            this.elements.serviceSelect().click();
            this.elements.serviceQuantityInput().type('1');
            this.elements.serviceValueInput().type('25');
            this.elements.saveServiceBtn().click();
        }
        if(Cypress.env('INSTALA_BASE_URL') === 'https://instala.leroymerlin.pt'){
            this.elements.storeCodeSelect().click().type(Cypress.env('STORE_NAME'));
            this.elements.nameStoreInput().click();
            this.elements.pyxisNumberInput().type(Cypress.env('PYXIS_NUMBER'));
            cy.intercept('GET', 'lm-instala-api/pyxis/*').as('searchPyxisOrder')
            this.elements.searchPyxisOrderBtn().click();
            cy.wait('@searchPyxisOrder').its('response.statusCode').should('eq', 200).then( () =>{
                //this.elements.taxNumberInput().clear().type(Cypress.env('CUSTOMER_FISCAL_ID'));
                //this.elements.emailInput().clear().type(Cypress.env('CUSTOMER_EMAIL'));
                //this.elements.phoneNumberCustomerInput().clear().type(Cypress.env('CUSTOMER_PHONE_NUMBER'));
                this.typeDayDatePicker();
                this.elements.turnOrderServiceCreateSelect().click().type('Manhã');
                this.elements.turnSelect().click();
            });
        }
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