import { homePage } from '../HomePage';
import {pendingBudgetsListPage} from '../budget/pending/PendingBudgetsListPage';
import {inProgressBudgetsListPage} from '../budget/inProgress/InProgressBudgetsListPage';
import {completedBudgetsListPage} from '../budget/completed/CompletedBudgetsListPage';
import {sentBudgetsListPage} from '../budget/sent/SentBudgetsListPage';
import { archivedBudgetListPage } from '../budget/archived/ArchivedBudgetListPage';
import {inProgressBudgetsEditPage} from '../budget/inProgress/InProgressBudgetsEditPage';
import {translationConfiguration} from '../configuration/TranslationConfiguration';
import {parametersConfiguration} from '../configuration/ParametersConfiguration';
import {serviceConfiguration} from '../configuration/ServicesConfiguration';
import {userConfiguration} from '../configuration/UserConfiguration';
import {userGroupConfiguration} from '../configuration/UserGroupConfiguration';
import { paymentAnalysis } from '../analysis/PaymentAnalysis';
import { budgetAnalysis } from '../analysis/BudgetAnalysis';
const supportRequest = require('../../pages/supportRequest/SupportRequestManagementPage');
const contactPage = require('../../pages/contact/ContactPage');
const contactManagementPage = require('../../pages/contact/ContactManagementPage');

export class UserProfileConfiguration {
    locator = {
        permissionsActionContainer: '.cotazo-profile-action-container'
    }

    elements = {
        profileSearchText: () => cy.get('[data-testid="cotazo-profiles-search-input"]'),
        profileSearchBtn: () => cy.get('.cotazo-assistance-search-btn'),
        editProfileBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(1)'),
        actionUserProfileBtn: () => cy.get('.cotazo-table-actions-more-than-one > :nth-child(2)'),
        saveProfile: () => cy.get('.btn-success'),
        permissionsContainer: () => cy.get('.cotazo-page-table-container > .cotazo-subcontainer'),
        profileAssociatedLabel: () => cy.get('tbody > tr > .cotazo-users-table-profile'),
        permissionsSet: () => cy.get('input[type="checkbox"]'),
        pageDescriptionTitleUserProfile: () => cy.get('.manage-title'),
        createProfileBtn: () => cy.get('.cotazo-simple-add-button-container > .btn'),
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

    togglePermission(access, action, feature) {
        let searchLocator
        if (feature === 'Dashboard') {
            searchLocator = '.cotazo-page-table-container > .cotazo-subcontainer > div > :nth-child(2)';
        }
        if (feature === 'Budget') {
            searchLocator = '.cotazo-page-table-container > .cotazo-subcontainer > div > :nth-child(3)';
        }
        if (feature === 'Analysis') {
            searchLocator = '.cotazo-page-table-container > .cotazo-subcontainer > div > :nth-child(4)';
        }
        if (feature === 'Configuration') {
            searchLocator = '.cotazo-page-table-container > .cotazo-subcontainer > div > :nth-child(5)';
        }
        if (feature === 'Contact') {
            searchLocator = '.cotazo-page-table-container > .cotazo-subcontainer > div > :nth-child(6)';
        }
        if (feature === 'Support Request') {
            searchLocator = '.cotazo-page-table-container > .cotazo-subcontainer > div > :nth-child(8)';
        }
        if (feature === 'Budget analysis') {
            searchLocator = '.cotazo-page-table-container > .cotazo-subcontainer > div > :nth-child(4) > :nth-child(2) > :nth-child(2)';
        }
        cy.document().then((doc) => {
            cy.get(searchLocator)
                .contains(access)
                .next().find(this.locator.permissionsActionContainer).then(checkOption => {
                    cy.wrap(checkOption)
                        .eq(action).click();
                })
        })
    }

    verifyAccess(access) {
        //Access Dashboard
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
            homePage.elements.exportAnalysisDashboard().should('be.visible');
        }
        //Access budget
        if (access === 'see budget') {
            cy.slowDown(250);
            homePage.elements.budgetAccessContainer().should('be.visible');
            pendingBudgetsListPage.commonPageElements.viewServiceOrderBtn().should('be.visible');
            pendingBudgetsListPage.commonPageElements.pageCreateButton().click();
            pendingBudgetsListPage.commonPageElements.viewServiceOrderBtn().should('be.visible');
            pendingBudgetsListPage.commonPageElements.pageEditBtn().click();
            inProgressBudgetsListPage.commonPageElements.viewServiceOrderBtn().should('be.visible');
            inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click();
            completedBudgetsListPage.commonPageElements.viewServiceOrderBtn().should('be.visible');
            completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
            sentBudgetsListPage.commonPageElements.viewServiceOrderBtn().should('be.visible');
            sentBudgetsListPage.commonPageElements.pageArchivedBtn().click();
            archivedBudgetListPage.commonPageElements.viewServiceOrderBtn().should('be.visible');
            archivedBudgetListPage.commonPageElements.viewFistOSArchived().click();
            archivedBudgetListPage.commonPageElements.viewServiceOrderBtn().should('be.visible');
            cy.slowDownEnd();
            cy.visit("/budgets");
        }
        if (access === 'add budget') {
            pendingBudgetsListPage.commonPageElements.pageCreateButton().click();
            pendingBudgetsListPage.commonPageElements.addBudget().should('be.visible');
        }
        if (access === 'edit budget') {
            pendingBudgetsListPage.commonPageElements.pageCreateButton().click();
            pendingBudgetsListPage.commonPageElements.editServiceOrderBtn().should('be.visible');
            pendingBudgetsListPage.commonPageElements.pageEditBtn().click();
            inProgressBudgetsListPage.commonPageElements.editServiceOrderBtn().should('be.visible');
            inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click();
            completedBudgetsListPage.commonPageElements.editServiceOrderBtn().should('be.visible');
            completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
            sentBudgetsListPage.commonPageElements.editServiceOrderBtn().should('be.visible');
        }
        if (access === 'delete budget') {
            pendingBudgetsListPage.commonPageElements.pageEditBtn().click();
            inProgressBudgetsListPage.commonPageElements.deleteServiceOrderBtn().should('be.visible');
            inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click();
            completedBudgetsListPage.commonPageElements.deleteServiceOrderBtn().should('be.visible');
        }
        if (access === 'download customer budget') {
            completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
            sentBudgetsListPage.commonPageElements.downloadCustomerBudget().should('be.visible');
            sentBudgetsListPage.commonPageElements.pageArchivedBtn().click();
            archivedBudgetListPage.commonPageElements.viewFistOSArchived().click();
            archivedBudgetListPage.commonPageElements.downloadCustomerBudget().should('be.visible');
            cy.visit("/budgets");
        }
        if (access === 'download technical budget') {
            completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
            sentBudgetsListPage.commonPageElements.downloadTechnicalBudget().should('be.visible');
            sentBudgetsListPage.commonPageElements.pageArchivedBtn().click();
            archivedBudgetListPage.commonPageElements.viewFistOSArchived().click();
            archivedBudgetListPage.commonPageElements.downloadTechnicalBudget().should('be.visible');
            cy.visit("/budgets");
        }
        if (access === 'conclude budget') {
            cy.slowDown(200);
            pendingBudgetsListPage.commonPageElements.pageEditBtn().click();
            pendingBudgetsListPage.commonPageElements.editBtnFirstOS().click();
            inProgressBudgetsEditPage.commonPageElements.stepFourBtn().click();
            inProgressBudgetsEditPage.commonPageElements.finishBtn().should('be.visible');
            cy.slowDownEnd();
            cy.visit("/budgets");
        }
        if (access === 'sync budget') {
            pendingBudgetsListPage.commonPageElements.pagePendingBtn().click();
            pendingBudgetsListPage.commonPageElements.syncServiceOrderBtn().should('be.visible');
            pendingBudgetsListPage.commonPageElements.editBtnFirstOS().click();
            inProgressBudgetsEditPage.commonPageElements.stepFourBtn().click();
            inProgressBudgetsEditPage.commonPageElements.syncBtn().should('be.visible');
            cy.visit("/budgets");

        }
        //Access Configuration
        if (access === 'see translations' || access === 'edit translations') {
            homePage.toGo('Configurações');
            cy.contains('Traduções').should('be.visible');
            homePage.toGo('Traduções');
            translationConfiguration.elements.translationAction().should('be.visible');
        }
        if (access === 'see parameters' || access === 'edit parameters') {
            homePage.toGo('Configurações');
            cy.contains('Parâmetros').should('be.visible');
            homePage.toGo('Parâmetros');
            parametersConfiguration.elements.parametersAction().should('be.visible');
        }
        if (access === 'see services') {
            homePage.toGo('Configurações');
            cy.contains('Serviços').should('be.visible');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.headerContents().should('contain.text', 'Serviços');
        }
        if (access === 'edit services') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.serviceAction().should('be.visible');
        }
        if (access === 'see typology') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.typologyColumn().should('be.visible');
        }
        if (access === 'edit typology') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.editTypologyBtn()
                .should('be.visible').click();
            serviceConfiguration.elements.typologyModal().should('be.visible');
        }
        if (access === 'see IVA') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.ivaColumn().should('be.visible');
            serviceConfiguration.elements.viewFirstIvaBtn().click();
            serviceConfiguration.elements.ivaModal().should('be.visible');
        }
        if (access === 'edit IVA') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.ivaColumn().should('be.visible');
            serviceConfiguration.elements.viewFirstIvaBtn().click();
            serviceConfiguration.elements.ivaModal().should('be.visible');
            serviceConfiguration.elements.editIvaActionBtn().should('be.visible');
        }
        if (access === 'export services') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.exportServicesBtn().should('be.visible');
        }
        if (access === 'import services') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.importServicesBtn().should('be.visible');
        }
        if (access === 'see users') {
            homePage.toGo('Configurações');
            homePage.toGo('Utilizadores');
            userConfiguration.elements.pageDescriptionTitleUser().should('contain.text', 'Lista de Utilizadores');
        }
        if (access === 'see user action') {
            homePage.toGo('Configurações');
            homePage.toGo('Utilizadores');
            userConfiguration.elements.viewUserActions().should('be.visible');
        }
        if (access === 'see user profile' || access === 'edit user profile') {
            homePage.toGo('Configurações');
            homePage.toGo('Perfis de Utilizadores');
            this.elements.pageDescriptionTitleUserProfile().should('contain.text', 'Lista de Perfis');
            this.elements.editProfileBtn().should('be.visible');
        }
        if (access === 'create user profile') {
            homePage.toGo('Configurações');
            homePage.toGo('Perfis de Utilizadores');
            this.elements.createProfileBtn().should('be.visible');
        }
        if (access === 'toggle action user profile') {
            homePage.toGo('Configurações');
            homePage.toGo('Perfis de Utilizadores');
            this.elements.actionUserProfileBtn().should('be.visible');
        }
        if (access === 'see user group' || access === 'edit user group') {
            homePage.toGo('Configurações');
            homePage.toGo('Grupos de Utilizadores');
            userGroupConfiguration.elements.pageDescriptionTitleUserGroup().should('contain.text', 'Lista de Grupos');
            userGroupConfiguration.elements.viewUserGroupAction().should('be.visible');
        }
        if (access === 'create user group') {
            homePage.toGo('Configurações');
            homePage.toGo('Grupos de Utilizadores');
            userGroupConfiguration.elements.createUserGroupBtn().should('be.visible');
        }
        if (access === 'toggle action user group') {
            homePage.toGo('Configurações');
            homePage.toGo('Grupos de Utilizadores');
            userGroupConfiguration.elements.actionUserGroupBtn().should('be.visible');
        }
        //Access Analysis
        if (access === 'see payments') {
            homePage.toGo('Análises');
            homePage.toGo('Pagamentos');
            paymentAnalysis.elements.headerTitle().should('contain.text', 'Análise de Pagamentos');
            paymentAnalysis.elements.analysisFilters().should('be.visible');
            paymentAnalysis.elements.analysisInformation().should('be.visible');
        }
        if (access === 'see export analysis') {
            homePage.toGo('Análises');
            homePage.toGo('Pagamentos');
            paymentAnalysis.elements.headerTitle().should('contain.text', 'Análise de Pagamentos');
            paymentAnalysis.elements.exportAnalysis().should('be.visible');
        }
        if (access === 'see import analysis') {
            homePage.toGo('Análises');
            homePage.toGo('Pagamentos');
            paymentAnalysis.elements.headerTitle().should('contain.text', 'Análise de Pagamentos');
            paymentAnalysis.elements.importAnalysis().should('be.visible');
        }
        if (access === 'see budget analysis') {
            homePage.toGo('Análises');
            homePage.toGo('Orçamentos');
            budgetAnalysis.elements.headerTitleBudgetAnalysis().should('be.visible');
            budgetAnalysis.elements.budgetAnalysisFilters().should('be.visible');
            budgetAnalysis.elements.budgetAnalysisInformation().should('be.visible');
        }
        if (access === 'export budget analysis') {
            homePage.toGo('Análises');
            homePage.toGo('Orçamentos');
            budgetAnalysis.elements.headerTitleBudgetAnalysis().should('be.visible');
            budgetAnalysis.elements.exportBudgetAnalysis().should('be.visible');
        }
        // Access Support Request
        if (access === 'add message to support request') {
            homePage.toGo('Pedidos de Suporte');
            cy.slowDown(200);
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Pedido de Suporte');
            supportRequest.elements.statusSelect().click();
            supportRequest.elements.optionAnalyzing().click();
            supportRequest.elements.searchSupportRequestBtn().click();
            supportRequest.elements.viewFistSupportRequest().click();
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Analisar Pedido de Suporte');
            supportRequest.elements.sentCommentBtn().should('be.disabled');
            supportRequest.elements.commentsTimeline().should('be.visible')
                .type('example text').invoke('text').then((text) => {
                    if (text === 'example text') {
                        supportRequest.elements.sentCommentBtn().should('not.be.disabled');
                    }
                })
            cy.slowDownEnd();
        }
        if (access === 'edit support request') {
            homePage.toGo('Pedidos de Suporte');
            cy.slowDown(200);
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Pedido de Suporte');
            supportRequest.elements.statusSelect().click();
            supportRequest.elements.optionAnalyzing().click();
            supportRequest.elements.searchSupportRequestBtn().click();
            supportRequest.elements.viewFistSupportRequest().click();
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Analisar Pedido de Suporte');
            supportRequest.elements.statusSupportRequestInput().should('not.be.disabled');
            supportRequest.elements.updateSupportRequestBtn().should('be.disabled');
            supportRequest.elements.statusSupportRequestInput().click();
            supportRequest.elements.pendingOption().click();
            supportRequest.elements.updateSupportRequestBtn().should('not.be.disabled');
            cy.slowDownEnd();
        }

        //Contact Access
        if (access === 'see contact') {
            homePage.toGo('Contatos');
            cy.slowDown(150);
            contactPage.elements.titleContactPage().should('contain.text', 'Contatos');
            contactPage.elements.contactFilter().should('be.visible');
            contactPage.elements.contactTable().should('be.visible');
            cy.slowDownEnd();
        }
        if (access === 'add contact') {
            contactPage.elements.createNewContactBtn().should('be.visible').and('not.be.disabled');
        }
        if (access === 'edit contact') {
            contactPage.elements.editContactBtn().should('be.visible').and('not.be.disabled');
        }
        if (access === 'delete contact') {
            contactPage.elements.deleteContactBtn().should('be.visible').and('not.be.disabled');
        }
    }

    checkNoAccess(access) {
        //Principal Access
        if (access === 'Início') {
            cy.get('.sidebar').should('not.have.text', access);
        }
        if (access === 'Orçamentos') {
            cy.get('.sidebar').should('not.have.text', access);
        }
        if (access === 'Configurações') {
            cy.get('.sidebar').should('not.have.text', access);
        }
        if (access === 'Análises') {
            cy.get('.sidebar').should('not.have.text', access);
        }
        if (access === 'Pedidos de Suporte') {
            cy.get('.sidebar').should('not.have.text', access);
        }
        //Access Dashboard
        if (access === 'export') {
            homePage.elements.exportAnalysisDashboard().should('not.exist');
        }
        if (access === 'analysis') {
            homePage.elements.filtersAnalysisDashboardAccessBtn().should('not.exist');
            homePage.elements.dashboardAnalysisContent().should('not.exist');
        }
        //Access Budget
        if (access === 'add budget') {
            pendingBudgetsListPage.commonPageElements.pageCreateButton().click();
            pendingBudgetsListPage.commonPageElements.addBudget().should('not.exist');
        }
        if (access === 'edit budget') {
            pendingBudgetsListPage.commonPageElements.pageCreateButton().click();
            pendingBudgetsListPage.commonPageElements.editServiceOrderBtn().should('be.visible');
            pendingBudgetsListPage.commonPageElements.pageEditBtn().click();
            inProgressBudgetsListPage.commonPageElements.editServiceOrderBtn().should('not.exist');
            inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click();
            completedBudgetsListPage.commonPageElements.editServiceOrderBtn().should('not.exist');
            completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
            sentBudgetsListPage.commonPageElements.editServiceOrderBtn().should('not.exist');
        }
        if (access === 'delete budget') {
            pendingBudgetsListPage.commonPageElements.pageEditBtn().click();
            inProgressBudgetsListPage.commonPageElements.deleteServiceOrderBtn().should('not.exist');
            inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click();
            completedBudgetsListPage.commonPageElements.deleteServiceOrderBtn().should('not.exist');
        }
        if (access === 'download customer budget') {
            completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
            sentBudgetsListPage.commonPageElements.downloadCustomerBudget().should('not.exist');
            sentBudgetsListPage.commonPageElements.pageArchivedBtn().click();
            archivedBudgetListPage.commonPageElements.viewFistOSArchived().click();
            archivedBudgetListPage.commonPageElements.downloadCustomerBudget().should('not.exist');
            cy.visit("/budgets");
        }
        if (access === 'download technical budget') {
            completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
            sentBudgetsListPage.commonPageElements.downloadTechnicalBudget().should('not.exist');
            sentBudgetsListPage.commonPageElements.pageArchivedBtn().click();
            archivedBudgetListPage.commonPageElements.viewFistOSArchived().click();
            archivedBudgetListPage.commonPageElements.downloadTechnicalBudget().should('not.exist');
            cy.visit("/budgets");
        }
        if (access === 'conclude budget') {
            pendingBudgetsListPage.commonPageElements.pagePendingBtn().click();
            pendingBudgetsListPage.commonPageElements.editBtnFirstOS().click();
            inProgressBudgetsEditPage.commonPageElements.stepFourBtn().click();
            inProgressBudgetsEditPage.commonPageElements.finishBtn().should('not.exist');
            cy.visit("/budgets");
        }
        if (access === 'sync budget') {
            pendingBudgetsListPage.commonPageElements.pagePendingBtn().click();
            pendingBudgetsListPage.commonPageElements.syncServiceOrderBtn().should('not.exist');
            cy.visit("/budgets");
        }
        //Access Configuration
        if (access === 'see translations') {
            homePage.toGo('Configurações');
            cy.contains('Traduções').should('not.exist');
        }
        if (access === 'edit translations') {
            homePage.toGo('Configurações');
            homePage.toGo('Traduções');
            translationConfiguration.elements.translationAction().should('not.have.class', 'svg-inline--fa fa-pen  budget-rect-icon');
        }
        if (access === 'see parameters') {
            homePage.toGo('Configurações');
            cy.contains('Parâmetros').should('not.exist');
        }
        if (access === 'edit parameters') {
            homePage.toGo('Configurações');
            homePage.toGo('Parâmetros');
            parametersConfiguration.elements.parametersAction().should('not.have.class', 'svg-inline--fa fa-pen  budget-rect-icon');
        }
        if (access === 'see services') {
            homePage.toGo('Configurações');
            cy.contains('Serviços').should('not.exist');
        }
        if (access === 'edit services') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.serviceAction().should('not.exist');
        }
        if (access === 'see typology') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            cy.wait(3000);
            serviceConfiguration.elements.typologyColumn().should('not.exist');
        }
        if (access === 'edit typology') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            cy.wait(3000);
            serviceConfiguration.elements.editTypologyBtn().should('not.exist');
        }
        if (access === 'see IVA') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.ivaColumn().should('not.exist');
        }
        if (access === 'edit IVA') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            serviceConfiguration.elements.ivaColumn().should('be.visible');
            serviceConfiguration.elements.viewFirstIvaBtn().click();
            serviceConfiguration.elements.ivaModal().should('be.visible');
            serviceConfiguration.elements.editIvaActionBtn().should('not.exist');
        }
        if (access === 'export services') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            cy.wait(3000);
            serviceConfiguration.elements.exportServicesBtn().should('not.exist');
        }
        if (access === 'import services') {
            homePage.toGo('Configurações');
            homePage.toGo('Serviços');
            cy.wait(3000);
            serviceConfiguration.elements.importServicesBtn().should('not.exist');
        }
        if (access === 'see users') {
            homePage.toGo('Configurações');
            cy.contains('Utilizadores').should('not.exist');
        }
        if (access === 'see user action') {
            homePage.toGo('Configurações');
            homePage.toGo('Utilizadores');
            userConfiguration.elements.viewUserActions().should('not.exist');
        }
        if (access === 'see user profile') {
            homePage.toGo('Configurações');
            cy.contains('Perfis de Utilizadores').should('not.exist');
        }
        if (access === 'create user profile') {
            homePage.toGo('Configurações');
            homePage.toGo('Perfis de Utilizadores');
            this.elements.createProfileBtn().should('not.exist');
        }
        if (access === 'edit user profile') {
            homePage.toGo('Configurações');
            homePage.toGo('Perfis de Utilizadores');
            this.elements.editProfileBtn().should('not.have.class', 'svg-inline--fa fa-pen  budget-rect-icon');
        }
        if (access === 'toggle action user profile') {
            homePage.toGo('Configurações');
            homePage.toGo('Perfis de Utilizadores');
            this.elements.actionUserProfileBtn().should('not.exist');
        }
        if (access === 'see user group') {
            homePage.toGo('Configurações');
            cy.contains('Grupos de Utilizadores').should('not.exist');
        }
        if (access === 'create user group') {
            homePage.toGo('Configurações');
            homePage.toGo('Grupos de Utilizadores');
            userGroupConfiguration.elements.createUserGroupBtn().should('not.exist');
        }
        if (access === 'edit user group') {
            homePage.toGo('Configurações');
            homePage.toGo('Grupos de Utilizadores');
            //userGroupConfiguration.elements.viewUserGroupAction().should('not.exist');
        }
        if (access === 'toggle action user group') {
            homePage.toGo('Configurações');
            homePage.toGo('Grupos de Utilizadores');
            userGroupConfiguration.elements.actionUserGroupBtn().should('not.exist');
        }

        //Access Analysis
        if (access === 'see payments') {
            homePage.toGo('Análises');
            cy.contains('Pagamentos').should('not.exist');
        }
        if (access === 'see export analysis') {
            homePage.toGo('Análises');
            homePage.toGo('Pagamentos');
            paymentAnalysis.elements.headerTitle().should('contain.text', 'Análise de Pagamentos');
            cy.wait(3000);
            paymentAnalysis.elements.exportAnalysis().should('not.exist');
        }
        if (access === 'see import analysis') {
            homePage.toGo('Análises');
            homePage.toGo('Pagamentos');
            paymentAnalysis.elements.headerTitle().should('contain.text', 'Análise de Pagamentos');
            paymentAnalysis.elements.importAnalysis().should('not.exist');
        }
        if (access === 'see budget analysis') {
            homePage.toGo('Análises');
            cy.contains('Orçamentos').should('not.exist');
        }
        if (access === 'export budget analysis') {
            homePage.toGo('Análises');
            homePage.toGo('Orçamentos');
            budgetAnalysis.elements.headerTitleBudgetAnalysis().should('be.visible');
            cy.wait(3000);
            budgetAnalysis.elements.exportBudgetAnalysis().should('not.exist');
        }
        //Access Support Request
        if (access === 'see support request') {
            cy.contains('Pedidos de Suporte').should('not.exist');
        }
        if (access === 'add message to support request') {
            homePage.toGo('Pedido de Suporte');
            cy.slowDown(200);
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Pedido de Suporte');
            supportRequest.elements.statusSelect().click();
            supportRequest.elements.optionAnalyzing().click();
            supportRequest.elements.searchSupportRequestBtn().click();
            supportRequest.elements.viewFistSupportRequest().click();
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Analisar Pedido de Suporte');
            supportRequest.elements.sentCommentBtn().should('not.exist');
            supportRequest.elements.commentsTimeline().should('not.exist');
            cy.slowDownEnd();
        }
        if (access === 'edit support request') {
            homePage.toGo('Pedidos de Suporte');
            cy.slowDown(200);
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Pedido de Suporte');
            supportRequest.elements.statusSelect().click();
            supportRequest.elements.optionAnalyzing().click();
            supportRequest.elements.searchSupportRequestBtn().click();
            supportRequest.elements.viewFistSupportRequest().click();
            supportRequest.elements.pageDescriptionTitleSupportRequest().should('contain.text', 'Analisar Pedido de Suporte');
            supportRequest.elements.statusSupportRequestInput().should('not.exist');
            supportRequest.elements.updateSupportRequestBtn().should('not.exist');
            cy.slowDownEnd();
        }

        //Contact Access
        if (access === 'delete contact') {
            homePage.toGo('Contatos');
            contactPage.elements.deleteContactBtn().should('not.exist')
        }
        if (access === 'edit contact') {
            contactPage.elements.editContactBtn().should('not.have.class', 'svg-inline--fa fa-pen  budget-rect-icon')
        }
        if (access === 'add contact') {
            contactPage.elements.createNewContactBtn().should('not.exist')
        }
    }
}
export const userProfileConfiguration = new UserProfileConfiguration();