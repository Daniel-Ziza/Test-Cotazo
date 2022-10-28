const moment = require('moment/moment');
const monthNamesInPortuguese = {
    '01': 'janeiro',
    '02': 'fevereiro',
    '03': 'março',
    '04': 'abril',
    '05': 'maio',
    '06': 'junho',
    '07': 'julho',
    '08': 'agosto',
    '09': 'setembro',
    '10': 'outubro',
    '11': 'novembro',
    '12': 'dezembro'
};
const currentDay = moment(Date.now()).format('D');
const currentMonth = moment(Date.now()).format('MM');
const currentYear = moment(Date.now()).format('YYYY');
const currentMonthName = monthNamesInPortuguese[currentMonth];
const currentMonthAndYear = `${currentMonthName} ${currentYear}`;
const currentDayMonthAndYear = `, ${currentDay} de ${currentMonthName} de ${currentYear}`;

class PrerequisitesInstalaServiceOrderManagement {
    elements = {
        searchFieldInput: () => cy.get('[name="currentSearchFieldValue"]'),
        searchBtn: () => cy.get('[class="glyph glyph-magnifier"'),
        orderServiceSelect: () => cy.get(`[href="/serviceOrder/edit/${Cypress.env('orderServiceNumber')}"] > .heading-4`),
        //orderServiceSelect: () => cy.get(`[href="/serviceOrder/edit/XXXX"] > .heading-4`), //line for test development
        pickerSelect: () => cy.get('#date'),
        calendarSelect: () => cy.get('.SingleDatePicker__picker'),
        calendarMonth: () => cy.get('.SingleDatePicker__picker > .DayPicker > div > .DayPicker__focus-region > .transition-container > .CalendarMonthGrid > .CalendarMonth:nth-child(2) > .CalendarMonth__caption'),
        previousMonth: () => cy.get('.SingleDatePicker__picker > .DayPicker > div > .DayPicker__focus-region > .DayPickerNavigation > button.DayPickerNavigation__prev'),
        daySelect: () => cy.get(`button[aria-label*="${currentDayMonthAndYear}"]`),
        supplierSelect:() => cy.get('#servcPrvdrNm > .react-select__control'),
        supplierInput: () => cy.get('#react-select-3-option-0'),
        installerSelect: () => cy.get('#servcPrvdrAgntCd > .react-select__control'),
        installerInput: () => cy.get('#react-select-4-option-0'),
        commentInput: () => cy.get('#justificativa'),
        serviceOrderUpdateBtn: () => cy.get('.col-xs-3 > .button'),
        turnOrderServiceManagementSelect: () => cy.get('#idSlotApplication'),
        confirmServiceBtn: () => cy.get('[class="generic-submit-button mt-1"]'),
        confirmServiceText: () => cy.get('.big-title'),
        customerBudgetContainer: () => cy.get('.service-order-edit-body > :nth-child(2)'),
        storeBudgetContainer: () => cy.get('.service-order-edit-body > :nth-child(3)'),
        sendToCustomerCheck: () => cy.get('.text-option'),
        sendConfirmationBtn: () => cy.get('[class="button button-primary button-full"]'),
        customerApprovalCheck: () => cy.get(':nth-child(1) > .body-budgets-accepted > .body > :nth-child(1) > .text-option'),
        customerRefusalCheck: () => cy.get(':nth-child(2) > .text-option'),
    };

    serviceOrderSearch () {
        this.elements.searchFieldInput().type(Cypress.env('orderServiceNumber'));
        //this.elements.searchFieldInput().type('XXXXX'); //line for test development
        this.elements.searchBtn().click();
        this.elements.orderServiceSelect().click();
    };

    dateUpdate () {
        this.elements.pickerSelect().click().then( () => {
            this.elements.calendarSelect().then(() => {
                this.elements.calendarMonth().invoke('text').then((textContent) => {
                    if (!textContent.includes(currentMonthAndYear)) {
                        this.elements.previousMonth().click();
                        cy.wait(2000);
                    }
                    this.elements.daySelect().click();
                });
            });
        });
        this.elements.turnOrderServiceManagementSelect().select('Manhã');
        this.elements.supplierSelect().click().type(Cypress.env('SUPPLIER_NAME'));
        this.elements.supplierInput().click();
        this.elements.commentInput().type('Lorem Ipsum is simply dummy');
        this.elements.serviceOrderUpdateBtn().click();
    };

    confirmService () {
        this.elements.confirmServiceBtn().click();
        this.elements.confirmServiceText().should('contain.text','Realização autorizada');
    };
}

module.exports = new PrerequisitesInstalaServiceOrderManagement();