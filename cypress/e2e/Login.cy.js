import userData from '../fixtures/user-data.json'

describe('Orange HRM Test ', () => {
  
  const selectorList = {
    usernameField: "[name='username']",
    paswordField: "[name='password']",
    loginButton: '[type="submit"]',
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboarGrid: '.orangehrm-dashboard-grid',
    wrongCredencialAlert: "[role='alert']",
  };
  
  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.paswordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboarGrid)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.paswordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
  })
  
})