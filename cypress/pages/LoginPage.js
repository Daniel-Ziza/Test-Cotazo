export class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-testid="login-usermame-input"]'),
    passwordInput: () => cy.get('[data-testid="login-password-input"]'),
    emailInput: () => cy.get('[data-testid="login-email-input"]'),
    loginBtn: () => cy.get('[data-testid="login-button"]'),
    dashboardText: () => cy.get('[class="text-dark"]'),
    errorMessage: () => cy.get('[class="cotazo-login-error"]'),
    errorEmail: () => cy.get(':nth-child(1) > .error'),
    assistanceRequestWithoutLogin: () => cy.get('.cotazo-login-assistance-click-here'),
    loginAsEmployeeBtn: () => cy.get('[class="cotazo-login-collaborator-click-here-clickable"]'),
  };

  //Deplecated
  // signInNIF(username, password) {
  //   this.elements.usernameInput().clear().type(username);
  //   this.elements.passwordInput().clear().type(password);
  //   this.elements.loginBtn().click();
  // }

  signInEmail(email, password) {
    this.elements.emailInput().clear().type(email);
    this.elements.passwordInput().clear().type(password);
    this.elements.loginBtn().click();
  }
  generateInvalidUser() {
    let username = Math.trunc(Date.now() / 1000).toString().substring(0, 9);
    return username
  }

  verifyText() {
    this.elements.dashboardText().should('contains.text', 'Painel de controlo');
  };

  generateInvalidEmail() {
    let email = Math.trunc(Date.now() / 1000).toString().substring(0, 9) + '@example.com';
    return email
  }

  generateInvalidPassword() {
    let password = 'wrong' + Math.trunc(Date.now() / 1000);
    return password
  }

  verifyErrorMessage() {
    this.elements.errorMessage().invoke('text').then((text) => {
      if (text.includes('Utilizador ou palavra-passe incorrectos')) {
        assert(true, 'I have found the error message');
      }
      else if (text.includes('Login está bloqueado')) {
        assert(true, 'Login is blocked for 1 min');
      }
      else if (text.includes('Login está bloqueado, aguarde 5 minutos e tente novamente.')) {
        assert(true, 'Login is blocked for 5 min');
      }
      else if (text.includes('Não foi possível efectuar o login. Tente novamente.')) {
        assert(true, 'This user does not have access to cotazo');
      }
      else if (text.includes('Login desbloqueado, tente novamente.')) {
        assert(true, 'The user has been unblocked');
      }
      else {
        assert(false, 'I have NOT found any error message');
      }
    });
  };

  singIn(userType) {
    if (userType === 'administrator' || userType === 'collaborator') {
      this.elements.loginAsEmployeeBtn().click();
      this.singInWithAdeo();
    }
    if (userType === 'installer') {
      this.elements.emailInput().clear().type(Cypress.env('COTAZO_INSTALLER_USERNAME'));
      this.elements.passwordInput().clear().type(Cypress.env('COTAZO_INSTALLER_PASSWORD'));
      this.elements.loginBtn().click();
    }
    if (userType === 'technician') {
      this.elements.emailInput().clear().type(Cypress.env('COTAZO_TECHNICIAN_USERNAME'));
      this.elements.passwordInput().clear().type(Cypress.env('COTAZO_TECHNICIAN_PASSWORD'));
      this.elements.loginBtn().click();
    }
    if (userType === 'moderator') {
      this.elements.emailInput().clear().type(Cypress.env('COTAZO_MODERATOR_USERNAME'));
      this.elements.passwordInput().clear().type(Cypress.env('COTAZO_MODERATOR_PASSWORD'));
      this.elements.loginBtn().click();
    }
  };

  verifyEmail(email, error) {
    this.elements.emailInput().clear().type(email);
    this.elements.errorEmail().should('have.text', error);
  }

  singInWithAdeo() {
    cy.origin(Cypress.env('URL_ADEO'), () => {
      cy.get('[id="username"]').clear().type(Cypress.env('ADEO_USERNAME'));
      cy.get('[id="my_password"]').clear().type(Cypress.env('ADEO_PASSWORD'));
      cy.get('[id="my_sign_on_button"]').click();
    })

  }
}

export const loginPage = new LoginPage();
