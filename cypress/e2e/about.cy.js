describe('About Us Page', () => {
  beforeEach(() => {
    cy.visit('/about-us')
  })

  it('should display the about section', () => {
    cy.get('h2').contains('Our Story').should('be.visible')
  })

  it('should display company statistics', () => {
    cy.get('[data-testid="stats-section"]').should('be.visible')
    cy.get('[data-testid="stats-section"]').contains('Verified Sellers')
    cy.get('[data-testid="stats-section"]').contains('Products Available')
    cy.get('[data-testid="stats-section"]').contains('Happy Customers')
  })

  it('should display team section', () => {
    cy.get('h2').contains('Our Leadership Team').should('be.visible')
    cy.get('[data-testid="team-member"]').should('have.length.at.least', 1)
  })

  it('should have working social media links', () => {
    cy.get('[data-testid="social-links"]').should('be.visible')
    cy.get('[data-testid="social-links"] a').should('have.attr', 'href')
  })
}) 