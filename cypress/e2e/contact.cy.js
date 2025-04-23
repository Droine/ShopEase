describe('Contact Us Page', () => {
  beforeEach(() => {
    cy.visit('/contact-us')
  })

  it('should display contact information', () => {
    cy.get('h2').contains('Contact Us').should('be.visible')
    cy.contains('Call To Us').should('be.visible')
    cy.contains('Write To Us').should('be.visible')
    cy.contains('Visit Us').should('be.visible')
  })

  it('should display contact form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
    cy.get('textarea').should('be.visible')
  })

  it('should validate contact form', () => {
    cy.get('input[type="text"]').type('John Doe')
    cy.get('input[type="email"]').type('john@example.com')
    cy.get('input[type="tel"]').type('1234567890')
    cy.get('textarea').type('Test message')
    cy.get('button[type="submit"]').click()
    // Add assertion for successful submission
  })

  it('should display correct contact details', () => {
    cy.contains('support@shopease.ng').should('be.visible')
    cy.contains('+234 803 702 0923').should('be.visible')
    cy.contains('123 E-commerce Street, Lagos, Nigeria').should('be.visible')
  })
}) 