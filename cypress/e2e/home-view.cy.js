describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/pets', {
      statusCode: 200,
      fixture: 'example.json'
    })
    .visit('http://localhost:3000')
  })
  it('should display header', () => {
    cy.visit('http://localhost:3000')
    cy.get('.petbook-logo')
      .should('have.attr', 'alt')
    cy.get('h1')
      .should('contain', 'PetB🐾k')
    cy.get('.title-container > h2')
      .contains('Your Pet\'s Perfect Page')
  })
  it('should delete pet card', () => {
    cy.get('.delete-icon')
      .should('have.attr', 'alt')
  })
  it('should display card', () => {
    cy.get(':nth-child(1) > .info-container > .pet-icon')
      .should('have.attr', 'alt')
    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Oreo')
    cy.get(':nth-child(1) > .info-container > h3')
      .should('contain', 'Cat')
    cy.get(':nth-child(1) > .info-container > .owner')
      .should('contain', 'Owner: Judy')
  })
  it('should take you to pet details when link is clicked', () => {
    cy.get(':nth-child(1) > .info-container > a > .detail-link-icon').first().click()
      .url().should('eq', 'http://localhost:3000/1')
  })
})
