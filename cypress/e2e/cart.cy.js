describe('Cart Page', () => {
  beforeEach(() => {
    cy.visit('/shop')
    // Add a product to cart first
    cy.get('[data-testid="product-card"]').first().click()
    cy.get('[data-testid="add-to-cart"]').click()
    cy.visit('/cart')
  })

  it('should display cart items', () => {
    cy.get('[data-testid="cart-items"]').should('be.visible')
  })

  it('should update product quantity', () => {
    cy.get('[data-testid="quantity-input"]').first().type('{uparrow}')
    cy.get('[data-testid="cart-total"]').should('be.visible')
  })

  it('should remove product from cart', () => {
    cy.get('[data-testid="remove-item"]').first().click()
    cy.get('[data-testid="cart-items"]').should('not.exist')
  })

  it('should proceed to checkout', () => {
    cy.get('[data-testid="checkout-button"]').click()
    cy.url().should('include', '/checkout')
  })
}) 