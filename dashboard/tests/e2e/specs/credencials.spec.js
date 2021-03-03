const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credentials', () => {
  it('should generate an api key', () => {
    cy.visit(APP_URL)

    cy.visit(APP_URL)

    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-login').type('igor@igor.me')
    cy.get('#password-login').type('1234')
    cy.get('#submit-button').click()
    cy.url().should('include', 'feedbacks')

    cy.wait(4000)
    cy.visit(`${APP_URL}/credencials`)
    cy.wait(2000)

    const oldApikey = cy.get('#api-key').invoke('text')
    cy.get('#generate-apikey').click()
    cy.wait(2000)
    const newApikey = cy.get('#api-key').invoke('text')

    expect(oldApikey).to.not.equal(newApikey)
  })
})
