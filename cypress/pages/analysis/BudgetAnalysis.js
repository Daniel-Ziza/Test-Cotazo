export class BudgetAnalysis {
    elements = {
        headerTitleBudgetAnalysis: () => cy.get('.text-dark'),
        budgetAnalysisFilters: () => cy.get('.cotazo-search-data-sub-container'),
        budgetAnalysisInformation: () => cy.get('.content > :nth-child(2)'),
        exportBudgetAnalysis: () => cy.get('.cotazo-analysis-budgets-export-btn > div > .btn'),
    };




}

export const budgetAnalysis = new BudgetAnalysis();