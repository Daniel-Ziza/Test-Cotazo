class HomePage {
    elements = {
        toCreateBtn: () => cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .small-box > .cotazo-card-bottom > .budget-painel-badge-name'),
        assistanceRequestBtn: () => cy.get('.nav-pills > :nth-child(5) > .cotazo-menu-nav-li-background-div > .nav-link'),
    };


}

module.exports = new HomePage();