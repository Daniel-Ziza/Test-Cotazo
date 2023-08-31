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

export class PrerequisitesInstalaServiceOrderManagement {
    elements = {
        searchFieldInput: () => cy.get('#sidenav-search-input'),
        searchBtn: () => cy.get('[class="glyph glyph-magnifier"'),
        orderServiceSelect: () => cy.get(`[href="/serviceOrder/edit/${Cypress.env('orderServiceNumber')}"] > .heading-4`),
        //orderServiceSelect: () => cy.get(`[href="/serviceOrder/edit/59450"] > .heading-4`), //line for test development
        pickerSelect: () => cy.get(`${Cypress.env('PICKER_SELECT_ID_IN_SERVICE_ORDER_DETAIL')}`),//cy.get('#date'),//cy.get('#date-select-distribute'),
        calendarSelect: () => cy.get('.SingleDatePicker__picker'),
        calendarMonth: () => cy.get(`${Cypress.env('CALENDAR_MONTH_IN_SERVICE_ORDER_DETAIL')}`),
        previousMonth: () => cy.get('.SingleDatePicker__picker > .DayPicker > div > .DayPicker__focus-region > .DayPickerNavigation > button.DayPickerNavigation__prev'),
        daySelect: () => cy.get(`[aria-label*="${currentDayMonthAndYear}"]`),
        supplierSelect: () => cy.get(`${Cypress.env('SUPPLIER_SELECT_IN_SERVICE_ORDER_DETAIL')}`),
        supplierInput: () => cy.get(`${Cypress.env('SUPPLIER_INPUT_IN_SERVICE_ORDER_DETAIL')}`),
        installerSelect: () => cy.get('#servcPrvdrAgntCd > .react-select__control'),
        installerInput: () => cy.get('#react-select-4-option-0'),
        commentInput: () => cy.get(`${Cypress.env('COMMENT_INPUT_IN_SERVICE_ORDER_DETAIL')}`),
        serviceOrderUpdateBtn: () => cy.get('.col-xs-3 > .button'),
        turnOrderServiceManagementSelect: () => cy.get(`${Cypress.env('TURN_SELECT_IN_SERVICE_ORDER_DETAIL')}`),
        confirmServiceBtn: () => cy.get('[class="generic-submit-button mt-1"]'),
        confirmServiceText: () => cy.get('.big-title'),
        customerBudgetContainer: () => cy.get('.service-order-edit-body > :nth-child(2)'),
        storeBudgetContainer: () => cy.get('.service-order-edit-body > :nth-child(3)'),
        sendToCustomerCheck: () => cy.get('.text-option'),
        sendConfirmationBtn: () => cy.get('[class="button button-primary button-full"]'),
        customerApprovalCheck: () => cy.get(':nth-child(1) > .body-budgets-accepted > .body > :nth-child(1) > .text-option'),
        customerRefusalCheck: () => cy.get(':nth-child(2) > .text-option'),
    };

    serviceOrderSearch() {
        this.elements.searchFieldInput().type(Cypress.env('orderServiceNumber')+'{enter}');
        //this.elements.searchFieldInput().type('XXXXX'); //line for test development
        //this.elements.searchBtn().click();
        this.elements.orderServiceSelect().click();
    };

    dateUpdatePROD() {
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
    }

    dateUpdate() {
        //click on distribuir
        cy.get('.service-order-edit > :nth-child(1) > :nth-child(2)').then($check => {
            if ($check.find('#distributed-service > #outline-button').length){
                cy.get('#distributed-service > #outline-button').click();
                this.elements.pickerSelect().click().then(() => {
                    this.elements.calendarMonth().invoke('text').then((textContent) => {
                        if (!textContent.includes(currentMonthAndYear)) {
                            this.elements.previousMonth().click();
                            cy.wait(2000);
                        }
                        this.elements.daySelect().click();
                    });
                });
                this.elements.turnOrderServiceManagementSelect().type('Manhã{enter}');
                this.elements.commentInput().type('Lorem Ipsum is simply dummy');
                //select manual distrubution
                cy.contains('Prestador selecionado (manual)').click()
                this.elements.supplierSelect().click().type(Cypress.env('SUPPLIER_NAME') + '{enter}');
                //Button distribute
                cy.get('.modal-body > .footer-buttons > .mc-button--solid').click()
            } else {
                cy.visit(Cypress.env('INSTALA_BASE_URL'));
                this.elements.searchFieldInput().type(Cypress.env('orderServiceNumber')+'{enter}');
                //this.elements.searchFieldInput().type('60148{enter}'); //line for test development
                cy.get('.padding').click();
                cy.get('.tooltip-menu > :nth-child(6)').click();
                cy.get('.mu-mt-050 > #dsText').type('O Lorem Ipsum é um texto modelo da indústria tipográfica');
                cy.get('[class="button button-primary button-full"]').click();
                this.elements.orderServiceSelect().click();
                cy.get('#distributed-service > #outline-button').click();
                this.elements.pickerSelect().click().then(() => {
                    this.elements.calendarMonth().invoke('text').then((textContent) => {
                        if (!textContent.includes(currentMonthAndYear)) {
                            this.elements.previousMonth().click();
                            cy.wait(2000);
                        }
                        this.elements.daySelect().click();
                    });
                });
                this.elements.turnOrderServiceManagementSelect().type('Manhã{enter}');
                this.elements.commentInput().type('Lorem Ipsum is simply dummy');
                //select manual distrubution
                cy.contains('Prestador selecionado (manual)').click()
                this.elements.supplierSelect().click().type(Cypress.env('SUPPLIER_NAME') + '{enter}');
                //Button distribute
                cy.get('.modal-body > .footer-buttons > .mc-button--solid').click()
            }
        })
    };

    confirmService() {
        this.elements.confirmServiceBtn().click();
        this.elements.confirmServiceText().should('contain.text', 'Realização autorizada');
    };
}

export const prerequisitesInstalaServiceOrderManagement = new PrerequisitesInstalaServiceOrderManagement();