export class PaymentAnalysis {
    elements = {
        headerTitle: () => cy.get('.so-payments-title'),
        analysisFilters: () => cy.get('.container-fluid.so-payments-search-data-container '),
        analysisInformation: () => cy.get('[class="table table-hover"]'),
        importAnalysis: () => cy.get('.so-payments-import-data-container'),
        exportAnalysis: () => cy.get('.so-payment-services-importexport-btns > div > .btn'),
    };


    

}

export const paymentAnalysis = new PaymentAnalysis();