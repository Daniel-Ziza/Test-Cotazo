class loginPage {
  elements = {
    usernameInput: () => cy.get('[placeholder="utilizador"]'),
    passwordInput: () => cy.get('[placeholder="palavra-passe"]'),
    loginBtn: () => cy.get('[type="submit"]'),
    dashboardText: () => cy.get('[class="text-dark"]'),
    errorMessage: () => cy.get('[class="cotazo-login-error"]'),
    assistanceRequestWithoutLogin: () => cy.get('.cotazo-login-assistance-click-here'),
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
}

module.exports = new loginPage();
