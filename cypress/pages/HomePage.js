import moment, { duration } from 'moment';
class HomePage {
    elements = {
        toCreateBtn: () => cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .small-box > .cotazo-card-bottom > .budget-painel-badge-name'),
        supportRequestBtn: () => cy.get('[id="menu.item.assistance"]'),
        logsOutBtn: () => cy.get('[id="Sair"]'),
        searchBox: () => cy.get('.main-header > .form-inline > .input-group > .form-control'),
        searchHomePageBtn: () => cy.get('.main-header > .form-inline > .input-group > .input-group-append > .input-group-text'),
        bodyHomePage: () => cy.get('.cotazo-error-content-container-base'),
        dashboardAccess: () => cy.get('[class="row"]'),
        filtersAnalysisDashboardAccessBtn: () => cy.get('.cotazo-row > .btn'),
        filtersAnalysisDashboard: () => cy.get('[class="container-fluid cotazo-search-data-container"]'),
        dashboardAnalysisContent: () => cy.get('.cotazo-content-data-sub-container'),
        exportAnalysisDashboard: () => cy.get('.cotazo-exportimport-btn'),
        budgetAccessContainer: () => cy.get('[class="cotazo-page-container-top"]'),
    };

    verifyExport() {
        const day = moment().format('DD');
        const month = moment().format('MM');
        const year = moment().format('YYYY');
        const hour = moment().format('HH');
        const minute = moment().format('mm');
        cy.readFile(`cypress\\Downloads\\Analise Orçamentos_${day}-${month}-${year}_${hour}-${minute}.xlsx`).should('exist');
    }

    toGo(page) {
        cy.contains(page).click();
    }
}

module.exports = new HomePage();