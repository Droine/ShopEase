// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to add product to cart
Cypress.Commands.add('addToCart', (productIndex = 0) => {
  cy.get('[data-testid="product-card"]').eq(productIndex).click()
  cy.get('[data-testid="add-to-cart"]').click()
})

// Custom command to check cart count
Cypress.Commands.add('checkCartCount', (expectedCount) => {
  cy.get('[data-testid="cart-count"]').should('have.text', expectedCount.toString())
})

// Custom command to navigate to category
Cypress.Commands.add('navigateToCategory', (category) => {
  cy.get('[data-testid="category-filter"]').contains(category).click()
}) 