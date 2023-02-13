import UserLayout from '../../../layouts/UserLayout';

class BaseBudgetsEditPageClass extends UserLayout {
    commonPageLocators = {
        recoveryModal: '[class="d-none d-md-block modal-dialog budget-popup  "]',
        serviceAddBtn: '[class=" budget-rect-icon-div"]',

    }
    commonPageElements = {
        recoveryModalNoBtn: () => cy.get('.d-md-block.modal-dialog.budget-popup > .modal-content > .modal-footer > .btn-default'),
        recoveryModalNoBtnMobile: () => cy.get('.d-md-none > .modal-content > .modal-footer > .btn-default'),
        recoveryModalNoBtnTablet: () => cy.get('.d-none > .modal-content > .modal-footer > .btn-default'),
        serviceOrderInput: () => cy.get('[placeholder="Nº da ordem de serviço"]'),
        storeNameInput: () => cy.get('[placeholder="Nome da loja"]'),
        dataInput: () => cy.get('[placeholder="Data"]'),
        firstNameInput: () => cy.get('[placeholder="Primeiro nome"]'),
        lastNameInput: () => cy.get('[placeholder="Apelido"]'),
        addressInput: () => cy.get('[placeholder="Morada"]'),
        numberInput: () => cy.get('[placeholder="Número"]'),
        zipNumberInput: () => cy.get('[placeholder="Código postal"]'),
        locationInput: () => cy.get('[placeholder="Localidade"]'),
        taxIDInput: () => cy.get('[placeholder="NIF"]'),
        phoneNumberInput: () => cy.get('[placeholder="Nº Telemóvel"]'),
        emailInput: () => cy.get('[placeholder="Email do cliente"]'),
        regionInput: () => cy.get('[placeholder="Região"]'),
        saveBtn: () => cy.get('[class="btn btn-default manage-form-footer-btns-space "]'),
        continueBtn: () => cy.get('[class="btn btn-success"]'),
        serviceGroupInput: () => cy.get('[id="manage-budget-services-groups-services_input"]'),
        serviceSearchInput: () => cy.get('[placeholder="Pesquisar por Ref.ª ou Descrição do serviço"]'),
        addServiceBtn: () => cy.get('.cotazo-autocomplete-options-container-ul > :nth-child(1)'),
        addServiceBtnDisabled: () => cy.get('.service-add > div:nth-child(1)'),
        editBtn: () => cy.get('.budget-rect-icons > :nth-child(1)'),
        serviceQuantityCotazoInput: () => cy.get('.manage-service-inputs-container > :nth-child(1) > :nth-child(1) > .input-group > .form-control'),
        serviceList: () => cy.get('[class="manage-services-table-row-height "]'),
        materialDescriptionInput: () => cy.get('[id="Descrição"]'),
        materialQuantityInput: () => cy.get('[placeholder="Quantidade"]'),
        materialUnitInput: () => cy.get('[placeholder="Unidade"]'),
        materialObservationsInput: () => cy.get('[placeholder="Observações"]'),
        materialErrorMessage: () => cy.get('.manage-budget-add-material-error'),
        cleanBtn: () => cy.get('[class="btn btn-default manage-form-footer-btns-space undefined"]'),
        addBtn: () => cy.get('[class="btn btn-success undefined"]'),
        addMaterialBtn: () => cy.get('.manage-budget-materials-btns > .manage-budget-form-two-btn-add > .btn-success'),
        exportBtn: () => cy.get('.manage-budget-materials-exportimport-btns- > .manage-form-footer-btns-space'),
        importBtn: () => cy.get('.manage-budget-materials-exportimport-btns- > :nth-child(2) > input'),
        workDurationInput: () => cy.get('[placeholder="Duração prevista da obra"]'),
        workEndNotesInput: () => cy.get('.jodit-workplace'),
        finishBtn: () => cy.get('[class="btn btn-success"]'),
        syncBtn: () => cy.get('[class="btn btn-success cotazo-spinner-loading-button manage-form-footer-btns-last d-none d-md-block"]'),
        modal: () => cy.get('.modal-dialog.budget-popup'),
        confirmModalBtn: () => cy.get('.modal-dialog.budget-popup > .modal-content > .modal-footer > .btn-success'),
        missingInformationMessage: () => cy.get('[class="manage-budget-form col-xs-14 col-md-10 col-md-offset-2 offset-md-1"]'),
        removeBtn: () => cy.get('.budget-rect-icons > :nth-child(2)'),
        informationTable: () => cy.get('[class="table-responsive p-0 "]'),
        quantityInformationTable: () => cy.get('tbody > tr > .manage-service-col-qt'),
        unitPriceInformationTable: () => cy.get('tbody > tr > .manage-service-col-pu'),
        totalPriceInformationTable: () => cy.get('tbody > tr > .manage-service-col-pt'),
        newServiceDescriptionInput: () => cy.get('.manage-services-new-description-description-container > :nth-child(1) > .input-group > .form-control'),//cy.get('.manage-services-new-description-description-container > :nth-child(1)'),
        addExtraServiceBtnDisabled: () => cy.get('.manage-services-new-description-container-icon > .cotazo-icon-disabled'),
        addExtraServiceBtn: () => cy.get('.manage-services-new-description-container-icon'),
        descriptionTable: () => cy.get('tbody > tr > .col-lg-4'),
        materialImportMessage: () => cy.get('.d-none > .modal-content > :nth-child(3)'),
        importConfirmationBtn: () => cy.get('.d-none > .modal-content > .modal-footer > .btn-success'),
        closeModalBtn: () => cy.get('.d-none > .modal-content > .modal-footer > .btn'),
        stepFourBtn: () => cy.get('.budget-steps > :nth-child(7)'),
        stepThreeBtn: () => cy.get('.budget-steps > :nth-child(5)'),
        formatBox: () => cy.get('.jodit-ui-group_line_true > .jodit-ui-group'),
        taxTypeSelect: () => cy.get('[name="manage-budget-work-vat-id-Tipo de IVA"]'),
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
        this.commonPageElements.taxTypeSelect().click();
        cy.contains('IVA Obra À Taxa Normal').click();
    };

    clickContinue() {
        this.commonPageElements.continueBtn().click();
    };

    typeMaterialInformationForm(description, quantity, unit, observation) {
        this.commonPageElements.materialDescriptionInput().type(description);
        this.commonPageElements.materialQuantityInput().type(quantity);
        this.commonPageElements.materialUnitInput().type(unit);
        this.commonPageElements.materialObservationsInput().type(observation);
        this.commonPageElements.addBtn().dblclick();
    }

    typeFinalNotesForm(unit, notes) {
        this.commonPageElements.workDurationInput().type(unit);
        this.commonPageElements.workEndNotesInput().type(notes);
    }

    clickSaveBtn() {
        this.commonPageElements.saveBtn().dblclick();
    };

    clickFinishBtn() {
        this.commonPageElements.finishBtn().dblclick();
    };

    clickSyncBtn() {
        this.commonPageElements.syncBtn().dblclick();
    };

    clickCleanBtn() {
        this.commonPageElements.cleanBtn().click();
    };

    clickAddBtn() {
        this.commonPageElements.addBtn().dblclick();
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
    };

    cleanBudgetFields() {
        cy.get('.col-lg-8 > :nth-child(1) > .input-group > .input-group-append > .input-group-text').click();
        this.commonPageElements.addressInput().clear();
        cy.get('.col-lg-8 > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        cy.get(':nth-child(3) > .col-lg-4 > :nth-child(1) > .input-group > .input-group-append > .input-group-text').click();
        this.commonPageElements.numberInput().clear();
        cy.get(':nth-child(3) > .col-lg-4 > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .input-group-append > .input-group-text').click();
        this.commonPageElements.zipNumberInput().clear();
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Código postal inválido');

        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .input-group > .input-group-append > .input-group-text').click();
        this.commonPageElements.locationInput().clear();
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        cy.get(':nth-child(3) > .input-group-text').click();
        this.commonPageElements.phoneNumberInput().clear();
        cy.get('.field > :nth-child(1) > .input-group > .error').should('have.text', 'Campo obrigatório');

        cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .input-group > .input-group-append > .input-group-text').click();
        this.commonPageElements.emailInput().clear();
        cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .input-group > .error').should('have.text', 'Email inválido');
    };

    typeInvalidValues(element) {
        //zip code validations
        if (element === 'zip code') {
            cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .input-group > .input-group-append > .input-group-text').click();
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
            cy.get(':nth-child(3) > .input-group-text').click();
            this.commonPageElements.phoneNumberInput().clear().type('91312345');
            cy.get('.field > :nth-child(1) > .input-group > .error').should('have.text', 'Nº Telemóvel inválido');
            this.commonPageElements.phoneNumberInput().clear().type('9131234567');
            cy.get('.field > :nth-child(1) > .input-group > .error').should('have.text', 'Nº Telemóvel inválido');
        }
        //Email validations
        if (element === 'email') {
            cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .input-group > .input-group-append > .input-group-text').click();
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

    verifyServiceQuantityCotazo() {
        this.commonPageElements.serviceQuantityCotazoInput().clear().type('0').then(() => {
            this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
        });
        this.commonPageElements.serviceQuantityCotazoInput().clear().type('1').then(() => {
            this.commonPageElements.addServiceBtnDisabled().should('not.have.class', 'cotazo-icon-disabled');
        });
        this.commonPageElements.serviceQuantityCotazoInput().clear().then(() => {
            this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
        });
        this.commonPageElements.serviceQuantityCotazoInput().clear().type('ABC').then(() => {
            this.commonPageElements.addServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
        });
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
