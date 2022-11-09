class HomePage {
    elements = {
        toCreateBtn: () => cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .small-box > .cotazo-card-bottom > .budget-painel-badge-name'),
        supportRequestBtn: () => cy.get('[id="menu.item.assistance"]'),
        logsOutBtn:() => cy.get('[id="Sair"]'),
        searchBox: () => cy.get('.main-header > .form-inline > .input-group > .form-control'),
        searchHomePageBtn: () => cy.get('.main-header > .form-inline > .input-group > .input-group-append > .input-group-text'),
        bodyHomePage: () => cy.get('.cotazo-error-content-container-base'),
    };


}

module.exports = new HomePage();