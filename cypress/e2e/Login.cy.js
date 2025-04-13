describe('Orange HRM Test ', () => {
  
  const selectorList = {
    usernameField: "[name='username']",
    paswordField: "[name='password']",
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '[pathname]',
    wrongCredencialAlert: '[type="submit"]',
  }
  
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.paswordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location(selectorList.sectionTitleTopBar).should('equal', '/web/index.php/dashboard/index')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.paswordField).type('Test123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
  })
  
}) 