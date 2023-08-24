import {
  Given,
  When,
  And,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../pages/LoginPage');

Given('The user opens cotazo website', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.visit('/');
  //Cypress.env('requestNumber',14) this command is for punctual tests
});

When('A user provides correct credentials', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  loginPage.signInEmail(Cypress.env('COTAZO_MODERATOR_USERNAME'), Cypress.env('COTAZO_MODERATOR_PASSWORD'))

});

When('The user provides incorrect credentials', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  loginPage.signInEmail(Cypress.env('invalidEmail'), Cypress.env('invalidPassword'))
});

//Deprecated
// When('The user creates an invalid user and password', () => {
//   cy.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });

//   cy.on('uncaught exception', (err, runnable) => {
//     return false;
//   });
//   username = loginPage.generateInvalidUser();
//   password = loginPage.generateInvalidPassword();
//   Cypress.env('invalidUser', username);
//   Cypress.env('invalidPassword', password);
// })

When('The user creates an invalid email and password', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  email = loginPage.generateInvalidEmail();
  password = loginPage.generateInvalidPassword();
  Cypress.env('invalidEmail', email);
  Cypress.env('invalidPassword', password);
})


And('The user enters an invalid password 5 times in a row', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  for (var i = 0; i < 5; i++) {
    loginPage.signInEmail(Cypress.env('invalidEmail'), Cypress.env('invalidPassword'))
  }
})

When('The user waits {string} min to unlock login', (time) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  time = parseInt(time);

  let msTime = time * 60000

  cy.wait(msTime);

})

Then('The user verifies that the login has been unlocked', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  loginPage.verifyErrorMessage();
})

When('The user repeats wrong login 5 times after the first lockout', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });

  for (var i = 0; i < 4; i++) {
    loginPage.signInEmail(Cypress.env('invalidEmail'), Cypress.env('invalidPassword'))
    loginPage.elements.errorMessage().should('contain.text', 'Login está bloqueado, aguarde 60 segundos e tente novamente.');
    cy.wait(60000);
  }
  loginPage.signInEmail(Cypress.env('invalidEmail'), Cypress.env('invalidPassword'))
})

Then('Main page is displayed', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  loginPage.verifyText();
});

Then('An error is displayed', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  loginPage.verifyErrorMessage();
});

Then('The user verifies that the login is blocked', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  loginPage.verifyErrorMessage()
})

When('The user clicks on the employee login link', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  cy.slowDown(500);
  loginPage.elements.loginAsEmployeeBtn().click();
  cy.slowDownEnd();
});

And('The user logs in with his login credentials', () => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  loginPage.singInWithAdeo();
});

When('The user enters invalid emails', (table) => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.on('uncaught exception', (err, runnable) => {
    return false;
  });
  table.hashes().forEach((row) => {
    loginPage.verifyEmail(row.email, row.message);
  });
})
