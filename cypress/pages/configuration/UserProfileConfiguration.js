import homePage from '../../pages/HomePage';
class userProfileConfiguration {
    locator = {
        permissionsActionContainer: '.cotazo-profile-action-container'
    }

    elements = {
        profileSearchText: () => cy.get('[id="Procurar perfil..."]'),
        profileSearchBtn: () => cy.get('.cotazo-assistance-search-btn'),
        editProfileBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(1)'),
        actionUserProfileBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(2)'),
        saveProfile: () => cy.get('.btn-success'),
        permissionsContainer: () => cy.get('.cotazo-page-table-container > .cotazo-subcontainer'),
        profileAssociatedLabel: () => cy.get('tbody > tr > .cotazo-users-table-profile'),
        permissionsSet: () => cy.get('input[type="checkbox"]'),
    };

    searchProfile(profile) {
        if (profile === 'INSTALLER') {
            this.elements.profileSearchText().type('INSTALADOR PRESTADOR');
            this.elements.profileSearchBtn().click();
        }
        if (profile === 'DEVELOPER') {
            this.elements.profileSearchText().type('DEVELOPER');
            this.elements.profileSearchBtn().click();
        }
        if (profile === 'TECHNICIAN') {
            this.elements.profileSearchText().type('TECNICO INSTALADOR');
            this.elements.profileSearchBtn().click();
        }
        if (profile === 'COLLABORATOR') {
            this.elements.profileSearchText().type(Cypress.env('userProfile'));
            this.elements.profileSearchBtn().click();
        }
    }

    enablePermits(table) {
        table.hashes().forEach((row) => {
            this.elements.permissionsContainer()
                .contains(row.access)
                .next().find(this.locator.permissionsActionContainer).then(checkOption => {
                    cy.wrap(checkOption)
                        .eq(row.action).click();
                });
        });
    }

    togglePermission(access, action) {
        this.elements.permissionsContainer()
            .contains(access)
            .next().find(this.locator.permissionsActionContainer).then(checkOption => {
                cy.wrap(checkOption)
                    .eq(action).click();
            })
    }

    verifyAccess (access) {
        if (access === 'dashboard') {
            homePage.elements.dashboardAccess().should('be.visible');
        }
        if (access === 'analysis') {
            homePage.elements.filtersAnalysisDashboardAccessBtn().should('be.visible')
                .click();
            homePage.elements.filtersAnalysisDashboard().should('be.visible');
            homePage.elements.dashboardAnalysisContent().should('be.visible');
        }
        if (access === 'export') {
            homePage.elements.exportAnalysisDashboard().should('be.visible').click();
            homePage.verifyExport();
        }
    }

}

module.exports = new userProfileConfiguration();