describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display logo and brand name', () => {
    cy.get('nav').contains('ShopEase').should('be.visible')
  })

  it('should have working navigation links', () => {
    cy.contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')

    cy.contains('Shop').click()
    cy.url().should('include', '/shop')

    cy.contains('About Us').click()
    cy.url().should('include', '/about-us')

    cy.contains('Contact Us').click()
    cy.url().should('include', '/contact-us')
  })

  it('should display cart icon', () => {
    cy.get('[data-testid="cart-icon"]').should('be.visible')
  })

  it('should show cart count when items are added', () => {
    // Add item to cart
    cy.visit('/shop')
    cy.get('[data-testid="product-card"]').first().click()
    cy.get('[data-testid="add-to-cart"]').click()
    
    // Check cart count
    cy.get('[data-testid="cart-count"]').should('be.visible')
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('[data-testid="mobile-menu"]').should('be.visible')
    cy.get('[data-testid="mobile-menu"]').click()
    cy.get('[data-testid="mobile-nav"]').should('be.visible')
  })
}) 