import {
  When,
  And,
  Then, Given,
} from '@badeball/cypress-cucumber-preprocessor';
  import moment, {duration} from 'moment';
  const loginPage = require ('../../pages/LoginPage') ;
  const homePage = require('../../pages/HomePage');
  const pendingBudgetsListPage = require('../../pages/budget/pending/PendingBudgetsListPage');
  const inProgressBudgetsEditPage = require ('../../pages/budget/inProgress/InProgressBudgetsEditPage');
  const inProgressBudgetsListPage = require ('../../pages/budget/inProgress/InProgressBudgetsListPage')
  const completedBudgetsListPage = require ('../../pages/budget/completed/CompletedBudgetsListPage');
  const pendingBudgetsEditPage = require ('../../pages/budget/pending/PendingBudgetsEditPage');
  const sentBudgetsListPage = require ('../../pages/budget/sent/SentBudgetsListPage');



  
  When('The user clicks on the button budgets to be created', () =>{
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    cy.wait(3000);
    homePage.elements.toCreateBtn().click();
  });

  And("The user searches for a service order according to the customer's phone {string} and starts editing", (phoneNumber) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsListPage.findListItem(phoneNumber, 'contactNumber', 2);
  });

  And('The user searches in cotazo for the service order created in the prerequisites', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 2);
  });

  And('Check if the modal appears or not', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(3000);
    cy.document().then((doc) => {
      if (doc.querySelectorAll(pendingBudgetsEditPage.commonPageLocators.recoveryModal).length) {
        assert(true,'Modal shown');
        pendingBudgetsEditPage.commonPageElements.recoveryModalNoBtn().click();
      } else {
        assert(true,'Modal not shown');
      }
    });
  });

  And('The information of the filled service order appears', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.verifyForm();
  });

  And('The user continues to the next step', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.clickContinue();
  });

  And('The user selects a group of service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.serviceGroupInput().click();
    pendingBudgetsEditPage.commonPageElements.addServiceBtn().click();
  });

  And('The user selects {string}', (service) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.serviceList().each($el => {
      if ($el.text().includes(service)) {
        cy.wrap($el).find(pendingBudgetsEditPage.commonPageLocators.serviceAddBtn).click();
      }
    });
  });

  And('The user completes the material information form', (table) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    table.hashes().forEach((row) => {
      cy.log(row.description);
      cy.log(row.quantity);
      cy.log(row.unit);
      cy.log(row.observation);
      pendingBudgetsEditPage.typeMaterialInformationForm(row.description, row.quantity, row.unit, row.observation);
    });
  });

  And('The user completes the final notes form', (table) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    table.hashes().forEach((row) => {
      cy.log(row.duration);
      cy.log(row.End_Notes);
      pendingBudgetsEditPage.typeFinalNotesForm(row.duration, row.End_Notes);
    });
  });

  Then('The user saves the budget and verifies that it is in editing status', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.intercept('POST', '/lm-cotazo-budget/budget/partial').as('save');
    pendingBudgetsEditPage.clickSaveBtn();
    cy.wait('@save').its('response.statusCode').should('eq', 200).then( () =>{
      cy.visit("/budgets").then(() => {
        inProgressBudgetsListPage.commonPageElements.pageEditBtn().click().then(() => {
          inProgressBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber',  0);
        });
      });
    });
  });

  Then('The user completes the budget and verifies that it is pending', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.intercept('POST', '/lm-cotazo-budget/budget/finish/*').as('create');
    pendingBudgetsEditPage.clickFinishBtn();
    cy.wait('@create').its('response.statusCode').should('eq', 200).then((responseData) =>{
      inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click().then(() => {
        cy.wait(3000);
        completedBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 0);
      });
    });
  });

  Then('The user creates and synchronizes a budget and verifies that it is on sent', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.intercept('POST', '/lm-cotazo-budget/budget/finish/sync/*').as('sync');
    pendingBudgetsEditPage.clickSyncBtn();
    pendingBudgetsEditPage.commonPageElements.confirmModalBtn().click().then(() => {
      cy.wait('@sync').its('response.statusCode').should('eq',200).then((responseData) => {
        inProgressBudgetsListPage.commonPageElements.pageSubmittedBtn().click().then(() => {
          cy.wait(3000);
          pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber',  0);
        });
      });
    });
  });

  Then('The message appears {string}', (message) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.missingInformationMessage().should('contains.text', message);
  });

  Then('The {string} button is disabled', (nameBtn) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.isButtonDeactivated(nameBtn);
  });

  And('the user leaves the editable fields empty', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.cleanBudgetFields();
  });

  And('User enters invalid {string}', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.typeInvalidValues(element);
  });

  And('The user searches for the service description {string}', (description) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.searchDescription(description);
  });

  And('The user enters invalid quantity', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.verifyServiceQuantityCotazo();
  });

  Then('The {string} table is empty', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    if(element === 'service information'){
      pendingBudgetsEditPage.commonPageElements.informationTable().should("contain.text", "Sem registos");
      assert(true, 'Service information table contains no items');
    }
    else if(element === 'material information'){
      pendingBudgetsEditPage.commonPageElements.informationTable().should('contain.text', 'Sem registos');
      assert(true, 'Material information table contains no items');
    }
  });

  And('The user adds a valid service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoInput().clear().type('1').then(() => {
      pendingBudgetsEditPage.commonPageElements.addServiceBtnDisabled().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  });

  And('The user edits the quantity of the service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.editBtn().click();
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoInput().clear().type('2').then(() => {
      pendingBudgetsEditPage.commonPageElements.addServiceBtnDisabled().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  });

  And('The user modifies the quantity of service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
      pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoInput().clear().type('4');

  });

  And('The user verifies that the edit is correct', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.quantityInformationTable().invoke('text').then(quantityText => {
      pendingBudgetsEditPage.commonPageElements.unitPriceInformationTable().invoke('text').then(unitPriceText => {
        pendingBudgetsEditPage.commonPageElements.totalPriceInformationTable().invoke('text').then(totalPriceText => {
          const quantity = parseInt(quantityText);
          const unitPrice = parseFloat(unitPriceText.replace('€', '').replace(',', '.').replace(' ', ''));
          const totalPrice = totalPriceText.replace('€', '').replace(',', '.').replace(' ', '');
          const cyTotalPrice  = (quantity * unitPrice).toFixed(2);
          assert(totalPrice === cyTotalPrice, 'The total price matches the multiplication between the quantity and the unit price');
        });
      });
    });
  });

  And('The user leaves the new service description empty and tries to add the service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.newServiceDescriptionInput().clear().then(() => {
      pendingBudgetsEditPage.commonPageElements.addExtraServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
    });
  });

  And('The user adds a new description of the service and inserts', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.newServiceDescriptionInput().clear().type('new service description test').then(() => {
      pendingBudgetsEditPage.commonPageElements.addExtraServiceBtn().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  });

  Then('The {string} table is not empty', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    if (element === 'service information') {
      pendingBudgetsEditPage.commonPageElements.informationTable().should('not.have.text', 'Sem registos');
      assert(true, 'The service information table contains elements');
    }
    else if(element === 'material information'){
      pendingBudgetsEditPage.commonPageElements.informationTable().should('not.have.text', 'Sem registos');
      assert(true, 'The material information table contains elements');
    }
  });

  And('The user leaves the material data empty', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.clearMaterialData();
  });

  And('The user writes a valid {string}', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.typeValidElement(element);
  });

  And('The user clicks on the {string} button', (btn) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    if (btn === 'add'){
      pendingBudgetsEditPage.clickAddBtn();
    }
    if (btn === 'clean'){
      pendingBudgetsEditPage.clickCleanBtn();
    }
  });

  Then('An error message appears', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.materialErrorMessage().invoke('text').then((text) => {
      if (text.includes('O campo unidade não pode conter apenas números')) {
        assert(true, 'I have found the error message');
      }
      else if (text.includes('já foi adicionado')) {
        assert(true, 'I have found the alternative error message');
      }
      else {
        assert(false, 'I have NOT found any error message');
      }
    });
  });

  Then('The user verifies that all fields have been cleaned', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.verifyMaterialDataClean();
  });

  And('The user exports the list of materials', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.exportBtn().click();
  });

  Then('The user verifies that the List of Materials has been downloaded', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    const day = moment().format('DD');
    const month = moment().format('MM');
    const year = moment().format('YYYY');
    cy.readFile(`cypress\\Downloads\\Lista de Materiais ${day}_${month}_${year}.xlsx`).should('exist');
  });

  And('The user loads a file with {string}', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    if (element === 'incomplete file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_1.xlsx`);
      });
    }
    if (element === 'bad format file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_2.pdf`);
      });
    }
    if (element === 'missing required fields') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_3.xlsx`);
      });
    }
    if (element === 'empty file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_4.xlsx`);
      });
    }
    if (element === 'equal descriptions') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_5.xlsx`);
      });
    }
    if (element === 'invalid quantity') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_6.xlsx`);
      });
    }
    if (element === 'invalid unit') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_7.xlsx`);
      });
    }
    if (element === 'valid file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr','style', 'display:block')
          .should('have.attr', 'style', 'display:block').then(() =>{
        pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_8.xlsx`);
      });
    }
  });

  And('The user deletes the budget from the current page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(1000);
    pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber',  3);
  });

  And('The user edits an added material', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.editBtn().click();
    let newDescription = 'New example to edit description';
    pendingBudgetsEditPage.commonPageElements.materialDescriptionInput().clear().type(newDescription);
    pendingBudgetsEditPage.commonPageElements.addMaterialBtn().click();
    pendingBudgetsEditPage.commonPageElements.descriptionTable().invoke('text').then((text) => {
        if (text.includes(newDescription)) {
          assert(true, 'The material has been correctly edited');
        }
        else {
          assert(false, 'The material has not been edited');
        }
    });
  });

  And('The user removes the material from the list', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.removeBtn().click();
  });

  Then('The user verifies that message is appropriate for {string}', (element) => {
    if (element === 'incomplete file') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'O Ficheiro a importar está incompleto, por favor garanta a existencia das colunas todas.');
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
    if (element === 'bad format file') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'Formato incorrecto, importe ficheiro EXCEL');
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
    if (element === 'missing required fields') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'Existem campos obrigatórios que não estão preenchidos.');
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
    if (element === 'empty file') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'Não existem materiais a importar.');
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
    if (element === 'equal descriptions') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'Existem materiais adicionados com a mesma descrição');
      pendingBudgetsEditPage.commonPageElements.importConfirmationBtn().click();
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
    if (element === 'invalid quantity') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'Coluna das Quantidades apenas pode ter numeros');
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
    if (element === 'invalid unit') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'O campo unidade não pode conter apenas números.');
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
    if (element === 'valid file') {
      pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'Foram importados 1 materiais.');
      pendingBudgetsEditPage.commonPageElements.closeModalBtn().click();
    }
  });

  And('The user goes to the {string} page', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    if (element === 'end notes') {
      pendingBudgetsEditPage.commonPageElements.stepFourBtn().click();
    }
    if (element === 'material information') {
      inProgressBudgetsEditPage.commonPageElements.stepThreeBtn().click();
    }
  });

  And('The user verifies that the text tool appears', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.formatBox().should('be.visible');
  });

  And('The user removes the previously added service', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsEditPage.commonPageElements.removeBtn().click();
  });

  And('The user deletes the previously created budget', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber',  3);
    pendingBudgetsListPage.commonPageElements.budgetDeleteBtn().click();
  });

/*
    FEATURES BUDGET ACCEPTANCE FLOW AND BUDGET REFUSAL FLOW
*/

Given('The user logs in instala', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.visit(Cypress.env('INSTALA_LOGIN_URL'));
  // Set as cypress env vars some values defined by previous tests.
  cy.task('getServiceOrderNumber').then((serviceOrderNumber) => {
    Cypress.env("orderServiceNumber", serviceOrderNumber);
    assert(true, `The Service Order Number ${serviceOrderNumber} has been properly obtained and set as cypress environment variable`);
  });
  cy.get('#breadcrumb-bar', {timeout : 15000}).should('be.visible').and('contain', 'Cockpit');
});

When('The user searches a budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.log(Cypress.env('orderServiceNumber'));
  homePage.elements.searchBox().type(Cypress.env('orderServiceNumber'));
  homePage.elements.searchHomePageBtn().click();
});

Then ('The user should see the tag {string}', (text) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  if (text === 'budget available in store') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Orçamento Disponível em loja');
  }else if (text === 'waiting for customer response') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Aguardando Resposta Cliente');
  }else if (text === 'budget Accepted') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Orçamento aceite');
  }else if (text === 'budget refused by the customer') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Orçamento recusado pelo cliente');
  }else {
    assert.isBoolean(false, 'The budget has no tag ');
  }
});

Then('The user edits the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  completedBudgetsListPage.commonPageElements.editServiceOrderBtn().click();
});

And('The user goes to {string}', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  if (element === 'in edition') {
    inProgressBudgetsListPage.commonPageElements.pageEditBtn().click();
  }
  if (element === 'in pending') {
    inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click();
  }
  if (element === 'already launched') {
    completedBudgetsListPage.commonPageElements.pageSubmittedBtn().click();
  }
});

Then('The user verifies that the budget has version {string}', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  inProgressBudgetsListPage.commonPageElements.budgetIdentifier()
      .should('have.text','Orçamento ' + Cypress.env('orderServiceNumber') + ' - ' + element);
  cy.wait(1000);
});

And('The user adds new material information', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  inProgressBudgetsEditPage.newMaterialInformation();
});

Then('The user saves the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.intercept('POST', '/lm-cotazo-budget/budget/partial').as('save');
  pendingBudgetsEditPage.clickSaveBtn();
  cy.wait('@save').its('response.statusCode').should('eq', 200);
});

Then('The user completes the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.intercept('POST', '/lm-cotazo-budget/budget/finish/*').as('create');
  pendingBudgetsEditPage.clickFinishBtn();
  cy.wait('@create').its('response.statusCode').should('eq', 200);
});

Then('The user synchronizes the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.intercept('POST', '/lm-cotazo-budget/budget/finish/sync/*').as('sync');
  pendingBudgetsEditPage.clickSyncBtn();
  pendingBudgetsEditPage.commonPageElements.confirmModalBtn().click().then(() => {
    cy.wait('@sync').its('response.statusCode').should('eq',200);
  });
});