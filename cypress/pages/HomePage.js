import moment, { duration } from 'moment';
class HomePage {
    elements = {
        toCreateBtn: () => cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .small-box > .cotazo-card-bottom > .budget-painel-badge-name'),
        supportRequestBtn: () => cy.get('[data-testid="menu.item.assistance"]'),
        logsOutBtn: () => cy.get('[data-testid="Sair"]'), //cy.get('[id="Sair"]')
        searchBox: () => cy.get('.main-header > .form-inline > .input-group > .form-control'),
        searchHomePageBtn: () => cy.get('.main-header > .form-inline > .input-group > .input-group-append > .input-group-text'),
        bodyHomePage: () => cy.get('.cotazo-error-content-messages'),
        dashboardAccess: () => cy.get('[class="row"]'),
        filtersAnalysisDashboardAccessBtn: () => cy.get('.cotazo-row > .btn', { timeout: 10000 }),
        filtersAnalysisDashboard: () => cy.get('[class="container-fluid cotazo-search-data-container"]'),
        dashboardAnalysisContent: () => cy.get('.cotazo-content-data-sub-container', { timeout: 10000 }),
        exportAnalysisDashboard: () => cy.get('.cotazo-exportimport-btn', { timeout: 10000 }),
        budgetAccessContainer: () => cy.get('[class="cotazo-page-container-top"]', { timeout: 10000 }),
        toggleBtn:() => cy.get('.d-none > .main-header > .navbar-nav > .nav-item > .nav-link'),
        toggleMobileBtn: () => cy.get('.d-md-none > .main-header > .navbar-nav > .nav-item > .nav-link'),
        userProfileBtn: () => cy.get('[data-testid="menu.configurations.profiles"]')
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