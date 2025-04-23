describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the main navigation', () => {
    cy.get('nav').should('be.visible')
    cy.get('nav').contains('ShopEase')
  })

  it('should display featured products', () => {
    cy.get('[data-testid="featured-products"]').should('be.visible')
  })

  it('should navigate to shop page', () => {
    cy.contains('Shop').click()
    cy.url().should('include', '/shop')
  })

  it('should display footer with all sections', () => {
    cy.get('footer').should('be.visible')
    cy.get('footer').contains('About ShopEase')
    cy.get('footer').contains('Shop Categories')
    cy.get('footer').contains('Quick Links')
    cy.get('footer').contains('Contact Us')
  })
}) 