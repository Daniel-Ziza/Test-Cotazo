import UserLayout from '../../../layouts/UserLayout';

class BaseBudgetsListPageClass extends UserLayout {
    commonPageElements = {
        itemCount: () => cy.get('.cotazo-page-container-top > div > div > div.row.mb-2 > h6 > span'),
        previousPageButton: () => cy.get('.row.cotazo-page-controls.budget-page-controls > a:first-child').next(),
        nextPageButton: () => cy.get('.row.cotazo-page-controls.budget-page-controls > a:last-child').prev(),
        pageCreateButton: () => cy.get('div.budget-painel-each-tab > a.cotazo-state-text-TO_CREATE'),
        pageEditBtn: () => cy.get('div.budget-painel-each-tab > a.cotazo-state-text-EDIT'),
        pageSubmittedBtn: () => cy.get('.budget-painel-each-tab > a.cotazo-state-text-SUBMITTED'),
        pagePendingBtn: () => cy.get('div.budget-painel-each-tab > a.cotazo-state-text-TO_LAUNCH'),
        pageArchivedBtn: () => cy.get('div.budget-painel-each-tab > a.cotazo-state-text-ARCHIVE'),
        budgetDeleteBtn: () => cy.get('.d-none > .modal-content > .modal-footer > .btn-danger'),
        statusTag: () => cy.get('.budget-painel-last-budgetevent-status-badget-container > .budget-painel-last-budgetevent-status-badge'),
        viewServiceOrderBtn: () =>  cy.get('.cotazo-budget-action-view'),//cy.get('.budget-rect-icons > :nth-child(1)'),
        editServiceOrderBtn: () => cy.get('.cotazo-budget-action-edit'), //cy.get('.budget-rect-icons > :nth-child(2)'),
        deleteServiceOrderBtn: () => cy.get('.cotazo-budget-action-delete'), //cy.get('.budget-rect-icons > :nth-child(3)'),
        syncServiceOrderBtn: () => cy.get('.cotazo-budget-action-sync'), //cy.get('.budget-rect-icons > :nth-child(4)'),
        downloadCustomerBudget: () => cy.get('.cotazo-budget-action-client-pdf'), //cy.get('.budget-rect-icons > :nth-child(3)'),
        downloadTechnicalBudget: () => cy.get('.cotazo-budget-action-technical-pdf'), //cy.get('.budget-rect-icons > :nth-child(4)'),
        budgetIdentifier: () => cy.get('.budget-painel-externalCode'),
        addBudget: () => cy.get('[class="btn btn-success cotazo-spinner-loading-button budget-info-not-found-so-click-here-btn"]', { timeout: 10000 }),
        editBtnFirstOS: () => cy.get(':nth-child(1) > .col-xs-14 > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > .budget-rect-icons > :nth-child(2)'),
        viewBtnFirsOS: () => cy.get(':nth-child(1) > .col-xs-14 > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > .budget-rect-icons > .cotazo-budget-action-view'),
        viewFistOSArchived: () => cy.get(':nth-child(1) > .col-xs-14 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .row > .col-lg-3 > .budget-rect-icon-div'),
    }

    findListItem(searchableValue, findBy = 'contactNumber', actionButtonNumber = 0) {
        let searchableLocator = null;
        let actionButtonLocator = `.budget-rect-icons > :nth-child(${actionButtonNumber})`;

        if (findBy === 'quotationNumber') {
            searchableLocator = '.budget-painel-externalCode';
        }
        if (findBy === 'contactNumber') {
            searchableLocator = '.budget-painel-contactNumber';
        }
        if (findBy === 'clientName') {
            searchableLocator = '.budget-painel-clientName';
        }
        if (searchableLocator === null) {
            throw new Error("Missing or wrong searchableLocator");
        }
        let validServiceOrder = 0;
        let clicked = false;
        this.commonPageElements.itemCount()
            .invoke('text')
            .then(itemCount => {
                let maxPageNumber = parseInt(itemCount)/10;
                const maxPageNumberDecimalPart = maxPageNumber % 1;
                maxPageNumber = parseInt(maxPageNumber.toString());
                if (maxPageNumberDecimalPart > 0) {
                    maxPageNumber = maxPageNumber + 1;
                }
                const range = [...Array(maxPageNumber).keys(), maxPageNumber];
                delete range[0];
                cy.wrap(range).each( (currentPage) => {
                    cy.document().then((doc) => {
                        if (doc.querySelectorAll('.cotazo-page-container-top > div > div > div.row.mb-2 > h6 > span').length) {
                            cy.get(searchableLocator).each($el => {
                                if (validServiceOrder === 0 && $el.text().includes(searchableValue) && clicked === false) {
                                    validServiceOrder = validServiceOrder + 1;
                                    assert(true, 'Searchable Value Found');
                                    if (findBy === 'contactNumber' && actionButtonNumber > 0 ) {
                                        clicked = true;
                                        cy.wrap($el).parent().parent().find(actionButtonLocator).click();
                                    }
                                    if (findBy === 'clientName' && actionButtonNumber > 0) {
                                        clicked = true;
                                        cy.wrap($el).parent().parent().next().find(actionButtonLocator).click();
                                    }
                                    if (findBy === 'quotationNumber' && actionButtonNumber > 0) {
                                        clicked = true;
                                        cy.wrap($el).parent().parent().next().next().find(actionButtonLocator).click();
                                    }
                                    if (findBy === 'quotationNumber' && actionButtonNumber === 0) {
                                        clicked = true;
                                        assert(true, 'Searchable Value Found');
                                    }
                                }
                            }).then( () => {
                                if (currentPage !== maxPageNumber && validServiceOrder === 0) {
                                    this.commonPageElements.nextPageButton().click();
                                }
                                if (currentPage === maxPageNumber && validServiceOrder === 0) {
                                    assert(false, 'Searchable Value Not Found');
                                }
                            });
                        }
                    });
                });
        });
    };

}

module.exports = BaseBudgetsListPageClass
