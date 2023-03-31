class SupportRequestManagementPage {
    elements = {
        incidentNumber: () => cy.get('[id="Número de Incidente"]'),
        searchSupportRequestBtn: () => cy.get('.cotazo-assistance-search-btn'),
        supportRequestInformationTable: () => cy.get('.table-responsive', {timeout:4000}),
        createNewIncidentBtn: () => cy.get('[id="assistance.create.btn.id"]'),
        editSupportRequestBtn: () => cy.get('[class=" budget-rect-icon-div"]'),
        statusSupportRequestInput: () => cy.get('[id="cotazo-services-search-groups_input"]'),
        analyzingOption: () => cy.get('.cotazo-assistance-state-badge-option-ANALYZING'),
        pendingOption: () => cy.get('.cotazo-assistance-state-badge-option-PENDING'),
        finishOption: () => cy.get('.cotazo-assistance-state-badge-option-FINISH'),
        updateSupportRequestBtn: () => cy.get('[class="btn btn-success cotazo-assistance-search-btn"]'),
        commentsTimeline: () => cy.get('[class="form-control  cotazo-timeline-input-text"]'),
        timeLineView: () => cy.get('.cotazo-timeline'),
        sentCommentBtn: () => cy.get('.cotazo-timeline-send-btn-container > .btn'),
        currentStatus: () => cy.get('.cotazo-assistance-state-badge'),
        statusSelect: () => cy.get('#assistance_autocomplete_states_input_multiselect'),
        pageDescriptionTitleSupportRequest: () => cy.get('.manage-title'),
        supportRequestSearchContainer: () => cy.get('.cotazo-assistance-search-container'),
        supportRequestTableContainer: () => cy.get('.cotazo-assistance-table-container > .cotazo-subcontainer'),
        supportRequestActionColumn: () => cy.get('.assistanceList-col-actions'),
        viewFistSupportRequest: () => cy.get(':nth-child(1) > .assistanceList-col-actions > .cotazo-table-actions-align-center'),
        statusSupportRequestSelect:() => cy.get('.cotazo-multiselect-container-selection'),
        optionAnalyzing: () => cy.get('.cotazo-assistance-state-badge-option-ANALYZING'),

    };

    searchIncident(incidentNumber){
        cy.slowDown(500);
        this.elements.incidentNumber().type(incidentNumber);
        cy.intercept('POST', 'lm-cotazo-core/assistance/*').as('search_Incident');
        this.elements.searchSupportRequestBtn().click();
        cy.wait('@search_Incident').its('response.statusCode').should('eq', 200).then( () =>{
            assert('response 200');
        });
        cy.slowDownEnd();
    };

    chanceStatusSupportRequest (status){
        this.searchIncident(Cypress.env('requestNumber'));
        this.elements.editSupportRequestBtn().click();
        this.elements.statusSupportRequestInput().click();
        if (status === 'in analysis'){
            this.elements.analyzingOption().click();
        }else if(status ==='pending'){
            this.elements.pendingOption().click();
        }else if(status ==='concluded'){
            this.elements.finishOption().click();
        }
        this.elements.updateSupportRequestBtn().click();
    };

    sendComment() {
        let comment = 'comment example ' + Math.trunc(Date.now()/1000);
        Cypress.env('comment', comment);
        this.elements.commentsTimeline().type(Cypress.env('comment'));
        this.elements.sentCommentBtn().click();
    };

    checkStatus(status,incidentNumber) {
        cy.slowDown(500);
        this.elements.incidentNumber().type(incidentNumber);
        cy.intercept('POST', 'lm-cotazo-core/assistance/*').as('search_Incident');
        this.elements.searchSupportRequestBtn().click();
        cy.wait('@search_Incident').its('response.statusCode').should('eq', 200).then( () =>{
            cy.get('.assistanceList-col-request-order').each($el => {
                if ($el.text().includes(incidentNumber)) {
                    assert(true, 'Searchable Value Found');
                    cy.wrap($el).parent().find('.cotazo-assistance-state-badge').invoke('text').then(currentStatus =>{
                        if (status === 'in analysis'){
                            expect(currentStatus).to.eq('Em Análise');
                        }
                        if (status === 'pending'){
                            expect(currentStatus).to.eq('Pendente');
                            this.elements.currentStatus().should('contain.text', 'Pendente');
                        }
                        if (status === 'concluded'){
                            expect(currentStatus).to.eq('Concluído');
                        }
                    });
                }
            });
        });
        cy.slowDownEnd();
    };

    checkComment(comment){
        this.elements.timeLineView().should('include.text', comment);
    };

    verifyCreateSupportRequest(incidentNumber, type){
        cy.slowDown(500);
        this.elements.incidentNumber().type(incidentNumber);
        cy.intercept('POST', 'lm-cotazo-core/assistance/*').as('search_Incident');
        this.elements.searchSupportRequestBtn().click();
        cy.wait('@search_Incident').its('response.statusCode').should('eq', 200).then( () =>{
            if (type === 'access problems'){
                this.elements.supportRequestInformationTable().should('be.visible')
                    .should('contain.text', Cypress.env('requestNumber'))
                    .and('contain.text', 'Problemas de acesso');
            }else if (type === 'any issue'){
                this.elements.supportRequestInformationTable().should('be.visible')
                    .should('contain.text', Cypress.env('requestNumber'))
                    .and('contain.text', Cypress.env('subject'));
            }else {
                this.elements.supportRequestInformationTable().should('be.visible')
                    .should('contain.text', 'Sem registos');
            }
        });
        cy.slowDownEnd();
    };

    verifyFilter(filter){
        if (filter === 'incident number') {
            this.elements.incidentNumber().type(Cypress.env('requestNumber'));
            this.elements.supportRequestInformationTable().should('be.visible')
                .should('contain.text', Cypress.env('requestNumber'))
                .and('contain.text', Cypress.env('subject'));
        }
        if (filter === 'status') {
            this.elements.statusSelect().click();
            this.elements.analyzingOption().click();
            cy.intercept('POST', 'lm-cotazo-core/assistance/*').as('search_Incident');
            this.elements.searchSupportRequestBtn().click();
        }
        if (filter === 'creation date') {

        }
    }
}

module.exports = new SupportRequestManagementPage();