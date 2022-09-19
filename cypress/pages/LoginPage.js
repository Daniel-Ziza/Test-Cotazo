class loginPage {
  elements = {
    usernameInput: () => cy.get('[placeholder="utilizador"]'),
    passwordInput: () => cy.get('[placeholder="palavra-passe"]'),
    loginBtn: () => cy.get('[type="submit"]'),
    dashboardText: () => cy.get('[class="text-dark"]'),
    errorMessage: () => cy.get('[class="cotazo-login-error"]'),
    assistanceRequestWithoutLogin: () => cy.get('.cotazo-login-assistance-click-here'),
    loginAsEmployeeBtn: () => cy.get('[class="cotazo-login-collaborator-click-here-clickable"]'),
    usernameAdeoInput: () => cy.get('[name="pf.username"]'),
    passwordAdeoInput: () => cy.get('[name="pf.pass"]'),
    signOnAdeoBtn: () => cy.get('[id="my_sign_on_button"]')
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  };

  typePassword(password) {
    this.elements.passwordInput().type(password);
  };

  clickLogin() {
    this.elements.loginBtn().click();
  };

  verifyText() {
    this.elements.dashboardText().should('contains.text', 'Painel de controlo');
  };

  verifyErrorMessage() {
    this.elements.errorMessage().invoke('text').then((text) => {
      if (text.includes('Utilizador ou palavra-passe incorrectos')) {
        assert(true, 'I have found the error message');
      }
      else if (text.includes('Login está bloqueado')) {
        assert(true, 'I have found the alternative error message');
      }
      else {
        assert(false, 'I have NOT found any error message');
      }
    });
  };

  singIn (userType) {
    if (userType === 'administrator'){
      this.elements.usernameInput().type(Cypress.env('ADMIN_COTAZO_USERNAME'));
      this.elements.passwordInput().type(Cypress.env('ADMIN_COTAZO_PASSWORD'));
    }
    if (userType === 'installer') {
      this.elements.usernameInput().type(Cypress.env('INSTALLER_COTAZO_USERNAME'));
      this.elements.passwordInput().type(Cypress.env('INSTALLER_COTAZO_PASSWORD'));
    }
    if (userType === 'technician') {
      this.elements.usernameInput().type(Cypress.env('TECHNICIAN_COTAZO_USERNAME'));
      this.elements.passwordInput().type(Cypress.env('TECHNICIAN_COTAZO_PASSWORD'));
    }
    this.elements.loginBtn().click();
  };

  singInWithAdeo () {
    this.elements.usernameAdeoInput().type(Cypress.env('ADEO_USERNAME'));
    this.elements.passwordAdeoInput().type(Cypress.env('ADEO_PASSWORD'));
    this.elements.signOnAdeoBtn().click();
  }
}

module.exports = new loginPage();
