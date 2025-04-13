describe('Orange HRM Test ', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('Test123')
    cy.get('[type="submit"]').click()
    cy.get('[type="submit"]')
  })
  
}) 