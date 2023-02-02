class LoginPage {
  elements = {
    usernameInput: () => cy.get('[placeholder="utilizador"]'),
    passwordInput: () => cy.get('[placeholder="palavra-passe"]'),
    loginBtn: () => cy.get('[type="submit"]'),
    dashboardText: () => cy.get('[class="text-dark"]'),
    errorMessage: () => cy.get('[class="cotazo-login-error"]'),
    assistanceRequestWithoutLogin: () => cy.get('.cotazo-login-assistance-click-here'),
    loginAsEmployeeBtn: () => cy.get('[class="cotazo-login-collaborator-click-here-clickable"]'),
  };

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username);
  };

  typePassword(password) {
    this.elements.passwordInput().clear().type(password);
  };

  clickLogin() {
    this.elements.loginBtn().click();
  };

  generateInvalidUser() {
    let username = Math.trunc(Date.now() / 1000).toString().substring(0, 9);
    return username
  }

  verifyText() {
    this.elements.dashboardText().should('contains.text', 'Painel de controlo');
  };

  generateInvalidPassword() {
    let password = 'wrong' + Math.trunc(Date.now() / 1000);
    return password
  }
  
  verifyErrorMessage() {
    this.elements.errorMessage().invoke('text').then((text) => {
      if (text.includes('Utilizador ou palavra-passe incorrectos')) {
        assert(true, 'I have found the error message');
      }
      else if (text.includes('Login está bloqueado, aguarde 60 segundos e tente novamente.')) {
        assert(true, 'Login is blocked for 1 min');
      }
      else if (text.includes('Login está bloqueado, aguarde 5 minutos e tente novamente.')) {
        assert(true, 'Login is blocked for 5 min');
      }
      else if (text.includes('Não foi possível efectuar o login. Tente novamente.')) {
        assert(true, 'This user does not have access to cotazo');
      }
      else if (text.includes('Login desbloqueado, tente novamente.')){
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
      this.elements.usernameInput().clear().type(Cypress.env('COTAZO_INSTALLER_USERNAME'));
      this.elements.passwordInput().clear().type(Cypress.env('COTAZO_INSTALLER_PASSWORD'));
      this.elements.loginBtn().click();
    }
    if (userType === 'technician') {
      this.elements.usernameInput().clear().type(Cypress.env('COTAZO_TECHNICIAN_USERNAME'));
      this.elements.passwordInput().clear().type(Cypress.env('COTAZO_TECHNICIAN_PASSWORD'));
      this.elements.loginBtn().click();
    }
    if (userType === 'moderator') {
      this.elements.usernameInput().clear().type(Cypress.env('COTAZO_MODERATOR_USERNAME'));
      this.elements.passwordInput().clear().type(Cypress.env('COTAZO_MODERATOR_PASSWORD'));
      this.elements.loginBtn().click();
    }
  };

  singInWithAdeo() {
    cy.origin('https://idpb2e-prp.adeo.com', () => {
      cy.get('[id="username"]').type(Cypress.env('ADEO_USERNAME'));
      cy.get('[id="my_password"]').clear().type(Cypress.env('ADEO_PASSWORD'));
      cy.get('[id="my_sign_on_button"]').click();
    })

  }
}

module.exports = new LoginPage();
