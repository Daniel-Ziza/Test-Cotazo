import UserLayout from '../../../layouts/UserLayout';
import { loginPage } from '../../LoginPage';

class BaseBudgetsEditPageClass extends UserLayout {
    commonPageLocators = {
        recoveryModal: '[data-testid="-web"]',
        serviceAddBtn: '[class=" budget-rect-icon-div"]',
        serviceAddMobileBtn: '[data-testid="manage-budget-service-add-edit-btn-mobile"]'

    }
    commonPageElements = {
        recoveryModalNoBtn: () => cy.get('[data-testid="-web-no"]'),
        recoveryModalNoBtnMobile: () => cy.get('[data-testid="-mobile-no"]'),
        serviceOrderInput: () => cy.get('[data-testid="manage-budget-cli-service-order"]'),
        storeNameInput: () => cy.get('[data-testid="manage-budget-cli-store"]'),
        dataInput: () => cy.get('[data-testid="manage-budget-cli-date"]'),
        firstNameInput: () => cy.get('[data-testid="manage-budget-cli-firstname"]'),
        lastNameInput: () => cy.get('[data-testid="manage-budget-cli-lastname"]'),
        addressEdit: () => cy.get('[data-testid="manage-budget-cli-address-edit"]'),
        addressInput: () => cy.get('[data-testid="manage-budget-cli-address"]'),
        numberEdit: () => cy.get('[data-testid="manage-budget-cli-address-number-edit"]'),
        numberInput: () => cy.get('[data-testid="manage-budget-cli-address-number"]'),
        zipNumberEdit: () => cy.get('[data-testid="manage-budget-cli-postal-code-edit"]'),
        zipNumberInput: () => cy.get('[data-testid="manage-budget-cli-postal-code"]'),
        locationEdit: () => cy.get('[data-testid="manage-budget-cli-locality-edit"]'),
        locationInput: () => cy.get('[data-testid="manage-budget-cli-locality"]'),
        taxIDInput: () => cy.get('[data-testid="manage-budget-cli-tax"]'),
        phoneNumberEdit: () => cy.get('[data-testid="manage-budget-cli-phone-edit"]'),
        phoneNumberInput: () => cy.get('[data-testid="manage-budget-cli-phone"]'),
        emailEdit: () => cy.get('[data-testid="manage-budget-cli-email-edit"]'),
        emailInput: () => cy.get('[data-testid="manage-budget-cli-email"]'),
        regionInput: () => cy.get('[data-testid="manage-budget-region-id_input"]'),
        saveBtn: () => cy.get('[class="btn btn-default manage-form-footer-btns-space "]'),
        continueBtn: () => cy.get('[data-testid="manage-budget-next-btn"]'),
        serviceGroupInput: () => cy.get('[data-testid="manage-budget-services-groups-services_input"]'),
        serviceSearchInput: () => cy.get('[data-testid="manage-budget-services-search-by-service"]'),
        addServiceBtn: () => cy.get('[data-testid="manage-budget-service-add-edit-btn-web"]'),
        serviceGroupSelect: () => cy.get('[class="cotazo-autocomplete-options-value   "]'),
        addServiceBtnDisabled: () => cy.get('[data-testid="manage-budget-service-add-edit-btn-web"]'),
        addServiceBtnDisabledMobile: () => cy.get('[data-testid="manage-budget-service-add-edit-btn-mobile"]'),
        editBtn: () => cy.get('[data-testid="manage-budget-service-edit-btn"]'),
        editMaterialBtn: () => cy.get('[data-testid="manage-budget-material-edit-btn"]'),
        serviceQuantityCotazoInput: () => cy.get('[data-testid="manage-budget-service-qt-web"]'),
        serviceQuantityCotazoMobileInput: () => cy.get('[data-testid="manage-budget-service-qt-mobile"]'),
        serviceList: () => cy.get('[class="manage-services-table-row-height "]'),
        serviceListMobile: () => cy.get('[class="manage-services-table-row-height-mobile d-md-none"]'),
        materialDescriptionInput: () => cy.get('[data-testid="manage-budget-material-input-description"]'),
        materialQuantityInput: () => cy.get('[data-testid="manage-budget-material-input-quantity"]'),
        materialUnitInput: () => cy.get('[data-testid="manage-budget-material-input-unit"]'),
        materialObservationsInput: () => cy.get('[data-testid="manage-budget-material-input-obs"]'),
        materialErrorMessage: () => cy.get('.manage-budget-add-material-error'),
        cleanBtn: () => cy.get('[data-testid="manage-budget-material-clear-btn"]'),
        cleanMobileBtn: () => cy.get(':nth-child(4) > .manage-budget-form-two-btn-add > .btn-default'),
        addBtn: () => cy.get('[data-testid="manage-budget-material-add-material-btn"]'),
        addMobileBtn: () => cy.get('[class="btn btn-success manage-form-mobile-btn-min-width"]'),
        addMaterialBtn: () => cy.get('[data-testid="manage-budget-material-add-material-btn"]'),
        exportBtn: () => cy.get('.manage-budget-materials-exportimport-btns- > .manage-form-footer-btns-space'),
        exportMobileBtn: () => cy.get('.manage-budget-materials-exportimport-btns-mobile > .manage-form-footer-btns-space'),
        importBtn: () => cy.get('.manage-budget-materials-exportimport-btns- > :nth-child(2) > input'),
        importMobileBtn: () => cy.get('.manage-budget-materials-exportimport-btns-mobile > :nth-child(2)'),
        workDurationInput: () => cy.get('[data-testid="manage-budget-work-duration"]'),
        workEndNotesInput: () => cy.get('.jodit-workplace'),
        finishBtn: () => cy.get('[class="btn btn-success"]'),
        syncBtn: () => cy.get('[class="btn btn-success cotazo-spinner-loading-button manage-form-footer-btns-last d-none d-md-block"]'),
        modal: () => cy.get('.modal-dialog.budget-popup'),
        confirmModalBtn: () => cy.get('[data-testid="-web-yes"]'),
        missingInformationMessage: () => cy.get('[class="manage-budget-form col-xs-14 col-md-10 col-md-offset-2 offset-md-1"]'),
        removeBtn: () => cy.get('[data-testid="manage-budget-service-trash-btn"]'),
        removeMaterialBtn: () => cy.get('[data-testid="manage-budget-material-trash-btn"]'),
        informationTable: () => cy.get('[class="table-responsive p-0 "]'),
        quantityInformationTable: () => cy.get('tbody > tr > .manage-service-col-qt'),
        unitPriceInformationTable: () => cy.get('tbody > tr > .manage-service-col-pu'),
        totalPriceInformationTable: () => cy.get('tbody > tr > .manage-service-col-pt'),
        newServiceDescriptionInput: () => cy.get('[data-testid="manage-budget-service-new-description-web"]'),
        newServiceDescriptionMobileInput: () => cy.get('[data-testid="manage-budget-service-new-description-mobile"]'),
        addExtraServiceMobileBtnDisabled: () => cy.get('[data-testid="manage-budget-service-add-edit-btn-mobile"]'),
        addExtraServiceBtnDisabled: () => cy.get('[data-testid="manage-budget-service-add-edit-btn-web"]'),
        addExtraServiceBtn: () => cy.get('.manage-services-new-description-container-icon'),
        addExtraServiceMobileBtn: () => cy.get('[data-testid="manage-budget-service-add-edit-btn-mobile"]'),
        descriptionTable: () => cy.get('tbody > tr > .col-lg-4'),
        materialImportMessage: () => cy.get('.d-none > .modal-content > :nth-child(3)'),
        importConfirmationBtn: () => cy.get('.d-none > .modal-content > .modal-footer > .btn-success'),
        closeModalBtn: () => cy.get('[data-testid="-web-yes"]'),
        stepFourBtn: () => cy.get('[data-testid="manage.budget.step.final.notes"]'),
        stepThreeBtn: () => cy.get('[data-testid="manage.budget.step.materials.info"]'),
        formatBox: () => cy.get('.jodit-ui-group_line_true > .jodit-ui-group'),
        characterCounterExtraWork: () => cy.get('.manage-services-new-description-description-container > :nth-child(1) > .input-group > .cotazo-input-char-counter'),
        characterCounterMaterialDescription: () => cy.get('.col-lg-6 .cotazo-input-char-counter'),
        characterCounterMaterialObservation: () => cy.get('.col-lg-12 > :nth-child(1) > .input-group > .cotazo-input-char-counter'),
        characterCounterEndnotes: () => cy.get('.cotazo-input-char-counter'),
        serviceContainer: () => cy.get('.manage-service-continar-lg'),
        iconBold: () => cy.get('.jodit-toolbar-button_bold > .jodit-toolbar-button__button'),
        iconOl: () => cy.get('.jodit-toolbar-button_ol > .jodit-toolbar-button__button'),

    };

    verifyForm() {
        this.commonPageElements.serviceOrderInput().invoke('val').should('not.be.empty');
        this.commonPageElements.storeNameInput().invoke('val').should('not.be.empty');
        this.commonPageElements.dataInput().invoke('val').should('not.be.empty');
        this.commonPageElements.firstNameInput().invoke('val').should('not.be.empty');
        this.commonPageElements.lastNameInput().invoke('val').should('not.be.empty');
        this.commonPageElements.addressInput().invoke('val').should('not.be.empty');
        this.commonPageElements.numberInput().invoke('val').should('not.be.empty');
        this.commonPageElements.zipNumberInput().invoke('val').should('not.be.empty');
        this.commonPageElements.locationInput().invoke('val').should('not.be.empty');
        this.commonPageElements.taxIDInput().invoke('val').should('not.be.empty');
        this.commonPageElements.phoneNumberInput().invoke('val').should('not.be.empty');
        this.commonPageElements.emailInput().invoke('val').should('not.be.empty');
    };

    typeMaterialInformationForm(description, quantity, unit, observation, type) {
        this.commonPageElements.materialDescriptionInput().type(description);
        this.commonPageElements.materialQuantityInput().type(quantity);
        this.commonPageElements.materialUnitInput().type(unit);
        this.commonPageElements.materialObservationsInput().type(observation);
        if (type === 'mobile') {
            this.commonPageElements.addBtn().eq(1).dblclick();
        } else {
            this.commonPageElements.addBtn().eq(0).dblclick();
        }
    }

    typeFinalNotesForm(unit, notes) {
        this.commonPageElements.workDurationInput().type(unit);
        this.commonPageElements.workEndNotesInput().type(notes);
    }

    clickSaveBtn() {
        this.commonPageElements.saveBtn().click();
    };

    clickFinishBtn() {
        this.commonPageElements.finishBtn().click();
    };

    clickSyncBtn() {
        this.commonPageElements.syncBtn().click();
    };

    clickCleanBtn() {
        this.commonPageElements.cleanBtn().click();
    };

    isButtonDeactivated(nameBtn) {
        if (nameBtn === 'Continue') {
            this.commonPageElements.continueBtn().should('be.disabled');
        }
        if (nameBtn === 'Add') {
            this.commonPageElements.addBtn().should('be.disabled');
        }
        if (nameBtn === 'Conclude') {
            this.commonPageElements.finishBtn().should('be.disabled');
        }
        if (nameBtn === 'Conclude and Synchronize') {
            this.commonPageElements.syncBtn().should('be.disabled');
        }
        if (nameBtn === 'Enter') {
            loginPage.elements.loginBtn().should('be.disabled');
        }
    };

    isMobileButtonDeactivated(nameBtn) {
        if (nameBtn === 'Add') {
            this.commonPageElements.addMobileBtn().should('be.disabled');
        }
    };

    cleanBudgetFields() {
        this.commonPageElements.addressEdit().click();
        this.commonPageElements.addressInput().clear();
        cy.get('.col-lg-8 > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        this.commonPageElements.numberEdit().click();
        this.commonPageElements.numberInput().clear();
        cy.get(':nth-child(3) > .col-lg-4 > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        this.commonPageElements.zipNumberEdit().click();
        this.commonPageElements.zipNumberInput().clear();
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Código postal inválido');

        this.commonPageElements.locationEdit().click();
        this.commonPageElements.locationInput().clear();
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        this.commonPageElements.phoneNumberEdit().click();
        this.commonPageElements.phoneNumberInput().clear();
        cy.get('.field > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        this.commonPageElements.emailEdit().click();
        this.commonPageElements.emailInput().clear();
        cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Email inválido');
    };

    typeInvalidValues(element) {
        //zip code validations
        if (element === 'zip code') {
            this.commonPageElements.zipNumberEdit().click();
            this.commonPageElements.zipNumberInput().clear().type('1234567');
            cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Código postal inválido');
            this.commonPageElements.zipNumberInput().clear().type('1234-56');
            cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Código postal inválido');
            this.commonPageElements.zipNumberInput().clear().type('1234-5678');
            cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Código postal inválido');
            this.commonPageElements.zipNumberInput().clear().type('123-567');
            cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Código postal inválido');
        }
        //phone number validation
        if (element === 'phone number') {
            this.commonPageElements.phoneNumberEdit().click();
            this.commonPageElements.phoneNumberInput().clear().type('91312345');
            cy.get('.field > :nth-child(1) > .input-group > .error').should('have.text', 'Nº Telemóvel inválido');
            this.commonPageElements.phoneNumberInput().clear().type('9131234567');
            cy.get('.field > :nth-child(1) > .input-group > .error').should('have.text', 'Nº Telemóvel inválido');
        }
        //Email validations
        if (element === 'email') {
            this.commonPageElements.emailEdit().click();
            this.commonPageElements.emailInput().clear().type('exampleEmail@leroymerlin');
            cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Email inválido');
            this.commonPageElements.emailInput().clear().type('exampleEmail.leroymerlin.pt');
            cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Email inválido');
            this.commonPageElements.emailInput().clear().type('@leroymerlin.pt');
            cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Email inválido');
        }
        //Quantity validations - Service Information page
        if (element === 'quantity') {
            this.commonPageElements.materialQuantityInput().clear().type('.').should('have.value', '');
            this.commonPageElements.materialQuantityInput().clear().type('.123A').should('have.value', '123');
            this.commonPageElements.materialQuantityInput().clear().type('1e2').should('have.value', '12');
            this.commonPageElements.materialQuantityInput().clear().type('ABC').should('have.value', '');
        }
        if (element === 'unit') {
            this.commonPageElements.materialUnitInput().clear().type('12345');
        }
    };

    searchDescription(description) {
        this.commonPageElements.serviceSearchInput().clear().type(description).then(() => {
            //this.commonPageElements.serviceContainer().should('be.visible');
        });
    };

    verifyServiceQuantityCotazo(type) {

        if (type === 'desktop' || type === 'tablet') {
            this.commonPageElements.serviceQuantityCotazoInput().eq(0).clear().type('0').then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
            });
            this.commonPageElements.serviceQuantityCotazoInput().eq(0).clear().type('1').then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('not.have.class', 'cotazo-icon-disabled');
            });
            this.commonPageElements.serviceQuantityCotazoInput().eq(0).clear().then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
            });
            this.commonPageElements.serviceQuantityCotazoInput().eq(0).clear().type('ABC').then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
            });
        } else {
            this.commonPageElements.serviceQuantityCotazoMobileInput().eq(0).clear().type('0').then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
            });
            this.commonPageElements.serviceQuantityCotazoMobileInput().eq(0).clear().type('1').then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('not.have.class', 'cotazo-icon-disabled');
            });
            this.commonPageElements.serviceQuantityCotazoMobileInput().eq(0).clear().then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
            });
            this.commonPageElements.serviceQuantityCotazoMobileInput().eq(0).clear().type('ABC').then(() => {
                this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
            });
        }

    };

    clearMaterialData() {
        this.commonPageElements.materialDescriptionInput().clear();
        this.commonPageElements.materialQuantityInput().clear();
        this.commonPageElements.materialUnitInput().clear();
        this.commonPageElements.materialObservationsInput().clear();
    }

    typeValidElement(element) {
        if (element === 'description') {
            this.commonPageElements.materialDescriptionInput().clear().type('New description test');
        }
        if (element === 'quantity') {
            this.commonPageElements.materialQuantityInput().clear().type('3');
        }
        if (element === 'unit') {
            this.commonPageElements.materialUnitInput().clear().type('Unidade');
        }
        if (element === 'observation') {
            this.commonPageElements.materialObservationsInput().clear().type('This is an observation for testing');
        }
    };

    verifyMaterialDataClean() {
        this.commonPageElements.materialDescriptionInput().invoke('val').should('be.empty');
        this.commonPageElements.materialQuantityInput().invoke('val').should('be.empty');
        this.commonPageElements.materialUnitInput().invoke('val').should('be.empty');
        this.commonPageElements.materialObservationsInput().invoke('val').should('be.empty');
    };

    newMaterialInformation() {
        let description = 'Description for new version ' + Math.trunc(Date.now() / 1000);
        this.commonPageElements.materialDescriptionInput().type(description);
        this.commonPageElements.materialQuantityInput().type('2');
        this.commonPageElements.materialUnitInput().type('unit');
        this.commonPageElements.addBtn().click();
    }
}

module.exports = BaseBudgetsEditPageClass
