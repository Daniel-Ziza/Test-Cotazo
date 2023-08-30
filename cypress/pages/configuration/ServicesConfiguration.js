export class ServiceConfiguration {
    elements = {
        configurationBtn: () => cy.get('.nav-pills > :nth-child(3) > :nth-child(1) > .nav-link'),
        serviceBtn: () => cy.get('.menu-is-opening > .nav > :nth-child(3) > .cotazo-menu-nav-li-background-div > .nav-link'),
        headerContents: () => cy.get('.content-header'),
        serviceAction: () => cy.get(':nth-child(1) > .budget-rect-icon-div'),
        typologyColumn: () => cy.get('.services-col-typology'),
        editTypologyBtn: () => cy.get('.services-col-typology > .svg-inline--fa'),
        typologyModal: () => cy.get('.service-typologies-management-popup'),
        ivaColumn: () => cy.get('.services-col-vat'),
        viewFirstIvaBtn: () => cy.get(':nth-child(1) > .services-col-vat > .cotazo-table-actions-align-center > :nth-child(1) > .budget-rect-icon-div'),
        ivaModal: () => cy.get('.service-regions-vat-management-popup'),
        editIvaActionBtn: () => cy.get('.service-regionsvat-management-col-actions'),
        exportServicesBtn: () => cy.get('.manage-form-footer-btns-space'),
        importServicesBtn: () => cy.get('.cotazo-services-importexport-btns > div > :nth-child(2)'),
    };


    

}

export const serviceConfiguration = new ServiceConfiguration();