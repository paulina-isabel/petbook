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
    // cy.get('h1')
    //   .should()
    cy.get('.title-container > h2')
      .contains('Your Pet\'s Perfect Page')
  })
  it('should delete pet card', () => {
    cy.get('.delete-icon')
      .should('have.attr', 'alt')
  })
  it('should display pets name and owners name', () => {
    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Oreo')
    cy.get(':nth-child(1) > .info-container > .owner')
      .should('contain', 'Owner: Judy')
  })
})
