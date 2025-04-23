describe('Shop Page', () => {
  beforeEach(() => {
    cy.visit('/shop')
  })

  it('should display product grid', () => {
    cy.get('[data-testid="product-grid"]').should('be.visible')
  })

  it('should filter products by category', () => {
    cy.get('[data-testid="category-filter"]').should('be.visible')
    cy.get('[data-testid="category-filter"]').contains('Electronics').click()
    cy.url().should('include', '/shop/category/electronics')
  })

  it('should add product to cart', () => {
    cy.get('[data-testid="product-card"]').first().click()
    cy.get('[data-testid="add-to-cart"]').click()
    cy.get('[data-testid="cart-count"]').should('be.visible')
  })

  it('should display product details', () => {
    cy.get('[data-testid="product-card"]').first().click()
    cy.url().should('include', '/product/')
    cy.get('[data-testid="product-details"]').should('be.visible')
  })
}) 