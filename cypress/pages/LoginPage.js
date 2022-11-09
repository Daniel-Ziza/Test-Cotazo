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
      else if (text.includes('Não foi possível efectuar o login. Tente novamente.')) {
        assert(true, 'This user does not have access to cotazo')
      }
      else {
        assert(false, 'I have NOT found any error message');
      }
    });
  };

  singIn (userType) {
    if (userType === 'administrator' || userType === 'collaborator'){
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

  singInWithAdeo () {
    this.elements.usernameAdeoInput().type(Cypress.env('ADEO_USERNAME'));
    this.elements.passwordAdeoInput().type(Cypress.env('ADEO_PASSWORD'));
    this.elements.signOnAdeoBtn().click();
  }
}

module.exports = new loginPage();
