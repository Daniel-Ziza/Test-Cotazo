class HomePage {
    elements = {
        toCreateBtn: () => cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .small-box > .cotazo-card-bottom > .budget-painel-badge-name'),
        supportRequestBtn: () => cy.get('[id="menu.item.assistance"]'),
        logsOutBtn:() => cy.get('[id="Sair"]')
    };


}

module.exports = new HomePage();