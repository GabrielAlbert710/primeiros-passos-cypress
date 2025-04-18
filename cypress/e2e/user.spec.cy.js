import userData from '../fixtures/user-data.json'

describe('Orange HRM Test ', () => {
  
  const selectorList = {
    usernameField: "[name='username']",
    paswordField: "[name='password']",
    loginButton: '[type="submit"]',
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboarGrid: '.orangehrm-dashboard-grid',
    wrongCredencialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateFiel: '[placeholder="yyyy-mm-dd"]',
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",




  };
  
  it.only('User info update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.paswordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboarGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('First name test')
    cy.get(selectorList.lastNameField).clear().type('Albert')
    cy.get(selectorList.genericField).eq(3).clear().type('123456789')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DriverLicensNumberTest')
    cy.get(selectorList.genericField).eq(6).clear().type('1997-22-03')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
});


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.paswordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)

  });
