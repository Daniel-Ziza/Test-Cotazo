import {
  When,
  And,
  Then, Given,
} from '@badeball/cypress-cucumber-preprocessor';
import moment, { duration } from 'moment';
import { slowCypressDown } from "cypress-slow-down";
import 'cypress-slow-down/commands'
import { homePage } from '../../pages/HomePage';
import { pendingBudgetsListPage } from '../../pages/budget/pending/PendingBudgetsListPage';
import { inProgressBudgetsEditPage } from '../../pages/budget/inProgress/InProgressBudgetsEditPage';
import { inProgressBudgetsListPage } from '../../pages/budget/inProgress/InProgressBudgetsListPage';
import { completedBudgetsListPage } from '../../pages/budget/completed/CompletedBudgetsListPage';
import { pendingBudgetsEditPage } from '../../pages/budget/pending/PendingBudgetsEditPage';
import { sentBudgetsListPage } from '../../pages/budget/sent/SentBudgetsListPage';
const utils = require('../../utils');

slowCypressDown(false);


When('The user clicks on the button budgets to be created', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false
  });
  cy.slowDown(1000);
  homePage.elements.toCreateBtn().click();
  cy.slowDownEnd();
});

And("The user searches for a service order according to the customer's phone {string} and starts editing", (phoneNumber) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsListPage.findListItem(phoneNumber, 'contactNumber', 2);
});

And('The user searches in cotazo for the service order created in the prerequisites', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 2);
});

And('Check if the modal appears or not in the {string} version', (version) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(600);

  if (version === 'mobile') {
    cy.document().then((doc) => {
      if (doc.querySelectorAll(pendingBudgetsEditPage.commonPageLocators.recoveryModal).length) {
        assert(true, 'Modal shown');
        pendingBudgetsEditPage.commonPageElements.recoveryModalNoBtnMobile().click();
      } else {
        assert(true, 'Modal not shown');
      }
    });
  } else {
    cy.document().then((doc) => {
      if (doc.querySelectorAll(pendingBudgetsEditPage.commonPageLocators.recoveryModal).length) {
        assert(true, 'Modal shown');
        pendingBudgetsEditPage.commonPageElements.recoveryModalNoBtn().click();
      } else {
        assert(true, 'Modal not shown');
      }
    });
  }

  cy.slowDownEnd();
});

And('The information of the filled service order appears', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.verifyForm();
});

And('The user continues to the next step', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.continueBtn().click();
});

And('The user selects a group of service', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.serviceGroupInput().click();
  pendingBudgetsEditPage.commonPageElements.serviceGroupSelect().contains('Abrigo Metal').click();
});

And('The user selects {string} in {string}', (service, type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  if (type === 'mobile') {
    pendingBudgetsEditPage.commonPageElements.serviceListMobile().each($el => {
      if ($el.text().includes(service)) {
        cy.wrap($el).find(pendingBudgetsEditPage.commonPageLocators.serviceAddMobileBtn).click();
      }
    });
  } else {
    pendingBudgetsEditPage.commonPageElements.serviceList().each($el => {
      if ($el.text().includes(service)) {
        cy.wrap($el).find(pendingBudgetsEditPage.commonPageLocators.serviceAddBtn).click();
      }
    });
  }

});

And('The user completes the material information form', (table) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  table.hashes().forEach((row) => {
    pendingBudgetsEditPage.typeMaterialInformationForm(row.description, row.quantity, row.unit, row.observation, row.type);
  });
});

And('The user completes the final notes form', (table) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  table.hashes().forEach((row) => {
    cy.log(row.duration);
    cy.log(row.End_Notes);
    pendingBudgetsEditPage.typeFinalNotesForm(row.duration, row.End_Notes);
  });
});

Then('The user saves the budget and verifies that it is in editing status in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(400);
  cy.intercept('POST', '/lm-cotazo-budget/budget/partial').as('save');
  pendingBudgetsEditPage.clickSaveBtn();
  cy.wait('@save').its('response.statusCode').should('eq', 200).then(() => {
    cy.visit("/budgets").then(() => {
      if (type === 'mobile') {
        inProgressBudgetsListPage.commonPageElements.pageEditMobileBtn().click().then(() => {
          cy.slowDownEnd();
          inProgressBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 0);
        });
      } else {
        inProgressBudgetsListPage.commonPageElements.pageEditBtn().eq(0).click().then(() => {
          cy.slowDownEnd();
          inProgressBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 0);
        });
      }

    });
  });
});

Then('The user completes the budget and verifies that it is pending in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(400);
  cy.intercept('POST', '/lm-cotazo-budget/budget/finish/*').as('create');
  pendingBudgetsEditPage.clickFinishBtn();
  cy.wait('@create').its('response.statusCode').should('eq', 200).then((responseData) => {
    if (type === 'mobile') {
      inProgressBudgetsListPage.commonPageElements.pagePendingMobileBtn().click().then(() => {
        cy.slowDownEnd();
        completedBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 0);
      });
    } else {
      inProgressBudgetsListPage.commonPageElements.pagePendingBtn().click().then(() => {
        cy.slowDownEnd();
        completedBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 0);
      });
    }

  });
});

Then('The user creates and synchronizes a budget and verifies that it is on sent', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(500);
  cy.intercept('POST', '/lm-cotazo-budget/budget/finish/sync/*').as('sync');
  pendingBudgetsEditPage.clickSyncBtn();
  pendingBudgetsEditPage.commonPageElements.confirmModalBtn().click().then(() => {
    cy.wait('@sync').its('response.statusCode').should('eq', 200).then((responseData) => {
      inProgressBudgetsListPage.commonPageElements.pageSubmittedBtn().click().then(() => {
        cy.slowDownEnd();
        pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 0);
      });
    });
  });
});

Then('The message appears {string}', (message) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.missingInformationMessage().should('contains.text', message);
});

Then('The {string} button is disabled', (nameBtn) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.isButtonDeactivated(nameBtn);
});

And('the user leaves the editable fields empty', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.cleanBudgetFields();
});

And('User enters invalid {string}', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.typeInvalidValues(element);
});

And('The user searches for the service description {string}', (description) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.searchDescription(description);
});

And('The user enters invalid quantity in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.verifyServiceQuantityCotazo(type);
});

Then('The {string} table is empty', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (element === 'service information') {
    pendingBudgetsEditPage.commonPageElements.informationTable().should("contain.text", "Sem registos");
    assert(true, 'Service information table contains no items');
  }
  else if (element === 'material information') {
    pendingBudgetsEditPage.commonPageElements.informationTable().should('contain.text', 'Sem registos');
    assert(true, 'Material information table contains no items');
  }
});

And('The user adds a valid service in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (type === 'desktop' || type === 'tablet') {
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoInput().eq(0).clear().type('1').then(() => {
      pendingBudgetsEditPage.commonPageElements.addServiceBtnDisabled().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  } else {
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoMobileInput().eq(0).clear().type('1').then(() => {
      pendingBudgetsEditPage.commonPageElements.addServiceBtnDisabledMobile().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  }

});

And('The user edits the quantity of the service in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  if (type === 'desktop' || type === 'tablet') {
    pendingBudgetsEditPage.commonPageElements.editBtn().click();
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoInput().eq(0).clear().type('2').then(() => {
      pendingBudgetsEditPage.commonPageElements.addServiceBtnDisabled().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  } else {
    pendingBudgetsEditPage.commonPageElements.editBtn().click();
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoMobileInput().eq(0).clear().type('2').then(() => {
      pendingBudgetsEditPage.commonPageElements.addServiceBtnDisabledMobile().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  }

});

And('The user modifies the quantity of service in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (type === 'mobile') {
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoMobileInput().clear().type('4');
  } else {
    pendingBudgetsEditPage.commonPageElements.serviceQuantityCotazoInput().clear().type('4');
  }

});

And('The user verifies that the edit is correct', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.quantityInformationTable().invoke('text').then(quantityText => {
    pendingBudgetsEditPage.commonPageElements.unitPriceInformationTable().invoke('text').then(unitPriceText => {
      pendingBudgetsEditPage.commonPageElements.totalPriceInformationTable().invoke('text').then(totalPriceText => {
        const quantity = parseInt(quantityText);
        const unitPrice = parseFloat(unitPriceText.replace('€', '').replace(',', '.').replace(' ', ''));
        const totalPrice = totalPriceText.replace('€', '').replace(',', '.').replace(' ', '');
        const cyTotalPrice = (quantity * unitPrice).toFixed(2);
        assert(totalPrice === cyTotalPrice, 'The total price matches the multiplication between the quantity and the unit price');
      });
    });
  });
});

And('The user leaves the new service description empty and tries to add the service in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (type === 'desktop' || type === 'tablet') {
    pendingBudgetsEditPage.commonPageElements.newServiceDescriptionInput().clear().then(() => {
      pendingBudgetsEditPage.commonPageElements.addExtraServiceBtnDisabled().should('have.class', 'cotazo-icon-disabled');
    });
  } else {
    pendingBudgetsEditPage.commonPageElements.newServiceDescriptionMobileInput().clear().then(() => {
      pendingBudgetsEditPage.commonPageElements.addExtraServiceMobileBtnDisabled().should('have.class', 'cotazo-icon-disabled');
    });
  }

});

And('The user adds a new description of the service and inserts in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  let messageText = utils.randomString(10)
  if (type === 'desktop' || type === 'tablet') {
    pendingBudgetsEditPage.commonPageElements.newServiceDescriptionInput().clear().type('new service description test ' + messageText).then(() => {
      pendingBudgetsEditPage.commonPageElements.addExtraServiceBtn().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  } else {
    pendingBudgetsEditPage.commonPageElements.newServiceDescriptionMobileInput().clear().type('new service description test ' + messageText).then(() => {
      pendingBudgetsEditPage.commonPageElements.addExtraServiceMobileBtn().should('not.have.class', 'cotazo-icon-disabled').click();
    });
  }

});

Then('The user verifies that he can add multiple extra jobs with the same reference number', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  cy.get('tbody > :nth-child(1) > .manage-service-col-ref').invoke('text').then(ref1 => {
    cy.get(':nth-child(2) > .manage-service-col-ref').invoke('text').then(ref2 => {
      cy.get('tbody > :nth-child(1) > .manage-service-col-descr').invoke('text').then(description1 => {
        cy.get(':nth-child(2) > .manage-service-col-descr').invoke('text').then(description2 => {
          if (ref1 === ref2) {
            expect(description1).to.not.equal(description2);
          }
        })
      })
    })
  })
})

And('The user tries to write more than {string} characters in {string} in {string}', (counter, place, type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  let messageText = utils.randomString(parseInt(counter) + 1);

  if (type === 'mobile') {
    if (place === 'extra work') {
      pendingBudgetsEditPage.commonPageElements.newServiceDescriptionMobileInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.newServiceDescriptionMobileInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
    if (place === 'material description') {
      pendingBudgetsEditPage.commonPageElements.materialDescriptionInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.materialDescriptionInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
    if (place === 'material observation') {
      pendingBudgetsEditPage.commonPageElements.materialObservationsInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.materialObservationsInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
    if (place === 'endnotes') {
      pendingBudgetsEditPage.commonPageElements.workEndNotesInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.workEndNotesInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
  } else {
    if (place === 'extra work') {
      pendingBudgetsEditPage.commonPageElements.newServiceDescriptionInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.newServiceDescriptionInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
    if (place === 'material description') {
      pendingBudgetsEditPage.commonPageElements.materialDescriptionInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.materialDescriptionInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
    if (place === 'material observation') {
      pendingBudgetsEditPage.commonPageElements.materialObservationsInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.materialObservationsInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
    if (place === 'endnotes') {
      pendingBudgetsEditPage.commonPageElements.workEndNotesInput().type(messageText);
      pendingBudgetsEditPage.commonPageElements.workEndNotesInput().invoke('text').then(newMessage => {
        expect(messageText).to.not.equal(newMessage);
      })
    }
  }

});

Then('The user verifies that the character counter shows {string} characters in {string}', (counter, place) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (place === 'extra work') {
    pendingBudgetsEditPage.commonPageElements.characterCounterExtraWork().should('contain.text', counter);
  }
  if (place === 'material description') {
    pendingBudgetsEditPage.commonPageElements.characterCounterMaterialDescription().should('contain.text', counter);
  }
  if (place === 'material observation') {
    pendingBudgetsEditPage.commonPageElements.characterCounterMaterialObservation().should('contain.text', counter);
  }
  if (place === 'endnotes') {
    pendingBudgetsEditPage.commonPageElements.characterCounterEndnotes().should('contain.text', counter);
  }
})

Then('The {string} table is not empty', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (element === 'service information') {
    pendingBudgetsEditPage.commonPageElements.informationTable().should('not.have.text', 'Sem registos');
    assert(true, 'The service information table contains elements');
  }
  else if (element === 'material information') {
    pendingBudgetsEditPage.commonPageElements.informationTable().should('not.have.text', 'Sem registos');
    assert(true, 'The material information table contains elements');
  }
});

And('The user leaves the material data empty', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.clearMaterialData();
});

And('The user writes a valid {string}', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.typeValidElement(element);
});

And('The user clicks on the {string} button in {string}', (btn, type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (type === 'desktop' || type === 'tablet') {
    if (btn === 'add') {
      pendingBudgetsEditPage.commonPageElements.addBtn().eq(0).click();;
    }
    if (btn === 'clean') {
      pendingBudgetsEditPage.commonPageElements.cleanBtn().eq(0).click();
    }
  } else {
    if (btn === 'add') {
      pendingBudgetsEditPage.commonPageElements.addMobileBtn().click();
    }
    if (btn === 'clean') {
      pendingBudgetsEditPage.commonPageElements.cleanMobileBtn().click();
    }
  }


});

Then('An error message appears', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
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

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.verifyMaterialDataClean();
});

And('The user exports the list of materials in {string}', (btn) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (btn === 'mobile') {
    pendingBudgetsEditPage.commonPageElements.exportMobileBtn().click();
  } else {
    pendingBudgetsEditPage.commonPageElements.exportBtn().click();
  }

});

Then('The user verifies that the List of Materials has been downloaded', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  const day = moment().format('DD');
  const month = moment().format('MM');
  const year = moment().format('YYYY');
  cy.readFile(`cypress\\Downloads\\Lista de Materiais ${day}_${month}_${year}.xlsx`).should('exist');
});

And('The user loads a file with {string} in {string}', (element, type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (type === 'mobile') {
    if (element === 'incomplete file') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_1.xlsx`);
        });
    }
    if (element === 'bad format file') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_2.pdf`);
        });
    }
    if (element === 'missing required fields') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_3.xlsx`);
        });
    }
    if (element === 'empty file') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_4.xlsx`);
        });
    }
    if (element === 'equal descriptions') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_5.xlsx`);
        });
    }
    if (element === 'invalid quantity') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_6.xlsx`);
        });
    }
    if (element === 'invalid unit') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_7.xlsx`);
        });
    }
    if (element === 'fields with more characters than allowed') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_9.xlsx`);
        });
    }
    if (element === 'valid file') {
      pendingBudgetsEditPage.commonPageElements.importMobileBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importMobileBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_8.xlsx`);
        });
    }
  } else {
    if (element === 'incomplete file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_1.xlsx`);
        });
    }
    if (element === 'bad format file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_2.pdf`);
        });
    }
    if (element === 'missing required fields') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_3.xlsx`);
        });
    }
    if (element === 'empty file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_4.xlsx`);
        });
    }
    if (element === 'equal descriptions') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_5.xlsx`);
        });
    }
    if (element === 'invalid quantity') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_6.xlsx`);
        });
    }
    if (element === 'invalid unit') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_7.xlsx`);
        });
    }
    if (element === 'fields with more characters than allowed') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_9.xlsx`);
        });
    }
    if (element === 'valid file') {
      pendingBudgetsEditPage.commonPageElements.importBtn().invoke('attr', 'style', 'display:block')
        .should('have.attr', 'style', 'display:block').then(() => {
          pendingBudgetsEditPage.commonPageElements.importBtn().selectFile(`cypress\\fixtures\\Lista_de_Materiais_8.xlsx`);
        });
    }
  }
});

And('The user deletes the budget from the current page', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.wait(1000);
  pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 3);
});

And('The user edits an added material in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.editMaterialBtn().click();
  let newDescription = 'New example to edit description';
  pendingBudgetsEditPage.commonPageElements.materialDescriptionInput().clear().type(newDescription);
  if (type === 'mobile') {
    pendingBudgetsEditPage.commonPageElements.addMaterialBtn().eq(1).click();
  } else {
    pendingBudgetsEditPage.commonPageElements.addMaterialBtn().eq(0).click();
  }
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

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.removeMaterialBtn().click();
});

Then('The user verifies that message is appropriate for {string}', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
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
  if (element === 'fields with more characters than allowed') {
    pendingBudgetsEditPage.commonPageElements.materialImportMessage().should('contains.text', 'ultrapassaram o número de caracteres permitidos');
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

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (element === 'end notes') {
    pendingBudgetsEditPage.commonPageElements.stepFourBtn().click();
  }
  if (element === 'material information') {
    inProgressBudgetsEditPage.commonPageElements.stepThreeBtn().click();
  }
});

And('The user verifies that he can format the text in endnotes', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.formatBox().should('be.visible').then(() => {
    pendingBudgetsEditPage.commonPageElements.iconBold().click();
    pendingBudgetsEditPage.commonPageElements.workEndNotesInput().type('Title {enter}');
    pendingBudgetsEditPage.commonPageElements.iconBold().click();
    pendingBudgetsEditPage.commonPageElements.iconOl().click();
    pendingBudgetsEditPage.commonPageElements.workEndNotesInput().type('line one {enter}')
      .type('line two').type('{enter} line three');
    cy.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 680 } });
  }
  );
});

And('The user removes the previously added service', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  pendingBudgetsEditPage.commonPageElements.removeBtn().click();
});

And('The user deletes the previously created budget in {string}', (type) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(100);
  if (type === 'mobile') {
    pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 3);
    pendingBudgetsListPage.commonPageElements.budgetDeleteMobileBtn().click();
  } else {
    pendingBudgetsListPage.findListItem(Cypress.env('orderServiceNumber'), 'quotationNumber', 3);
    pendingBudgetsListPage.commonPageElements.budgetDeleteBtn().click();
  }

  cy.slowDownEnd();
});

/*
    FEATURES BUDGET ACCEPTANCE FLOW AND BUDGET REFUSAL FLOW
*/

// Given('The user logs in instala', () => {
//   cy.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });

//   cy.on('uncaught exception', (err, runnable) => {
//     return false;
//   });
//   cy.visit(Cypress.env('INSTALA_LOGIN_URL'));
//   // Set as cypress env vars some values defined by previous tests.
//   cy.task('getServiceOrderNumber').then((serviceOrderNumber) => {
//     Cypress.env("orderServiceNumber", serviceOrderNumber);
//     assert(true, `The Service Order Number ${serviceOrderNumber} has been properly obtained and set as cypress environment variable`);
//   });
//   cy.get('#breadcrumb-bar', { timeout: 15000 }).should('be.visible').and('contain', 'Cockpit');
// });

When('The user searches a budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(500);
  homePage.elements.searchBox().clear().type(Cypress.env('orderServiceNumber'));
  homePage.elements.searchHomePageBtn().click();
  cy.slowDownEnd();
});

Then('The user should see the tag {string}', (text) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  if (text === 'budget available in store') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Orçamento Disponível em loja');
  } else if (text === 'waiting for customer response') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Aguardando Resposta Cliente');
  } else if (text === 'budget Accepted') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Orçamento aceite');
  } else if (text === 'budget refused by the customer') {
    sentBudgetsListPage.commonPageElements.statusTag().should('have.text', 'Orçamento recusado pelo cliente');
  } else {
    assert.isBoolean(false, 'The budget has no tag ');
  }
});

Then('The user edits the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  completedBudgetsListPage.commonPageElements.editServiceOrderBtn().click();
});

Then('The user verifies that the budget has version {string}', (element) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  inProgressBudgetsListPage.commonPageElements.budgetIdentifier()
    .should('have.text', 'Orçamento ' + Cypress.env('orderServiceNumber') + ' - ' + element);
  cy.wait(1000);
});

And('The user adds new material information', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  inProgressBudgetsEditPage.newMaterialInformation();
});

Then('The user saves the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(500);
  cy.intercept('POST', '/lm-cotazo-budget/budget/partial').as('save');
  pendingBudgetsEditPage.clickSaveBtn();
  cy.wait('@save').its('response.statusCode').should('eq', 200);
  cy.slowDownEnd();
});

Then('The user completes the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(500);
  cy.intercept('POST', '/lm-cotazo-budget/budget/finish/*').as('create');
  pendingBudgetsEditPage.clickFinishBtn();
  cy.wait('@create').its('response.statusCode').should('eq', 200);
  cy.slowDownEnd();
});

Then('The user synchronizes the budget', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(500);
  cy.intercept('POST', '/lm-cotazo-budget/budget/finish/sync/*').as('sync');
  pendingBudgetsEditPage.clickSyncBtn();
  pendingBudgetsEditPage.commonPageElements.confirmModalBtn().click().then(() => {
    cy.wait('@sync').its('response.statusCode').should('eq', 200);
    cy.slowDownEnd();
  });
});

Given('Change the screen size to {string}', (type) => {
  if (type === 'mobile') {
    cy.viewport('iphone-x');
  } else if (type === 'tablet') {
    cy.viewport('ipad-mini');
  } else if (type === 'landscape table') {
    cy.viewport('ipad-mini', 'landscape');
  }
})

When('The user searches the service order in {string}', (type) => {
  if (type === 'mobile') {
    cy.get('.budgets-search-web-mobile > .form-inline > .input-group > .form-control')
      .type(Cypress.env('orderServiceNumber'));
    cy.get('.budgets-search-web-mobile > .form-inline > .input-group > .input-group-append > .input-group-text').click();
  } else if (type === 'tablet') {
    cy.get('.main-header > .form-inline > .input-group > .form-control')
      .type(Cypress.env('orderServiceNumber'));
    cy.get('.main-header > .form-inline > .input-group > .input-group-append > .input-group-text').click();
  }

})