describe('template spec', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/pets', {
      statusCode: 200,
      fixture: "duke.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should select pet and be shown pet details for that pet', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.pet-card').get('.detail-link-icon').click()
    cy.url().should('eq', 'http://localhost:3000/2')
    cy.get('.details-container').get('.pet')
      .get('.details').contains('Owner: Alex')
      .get('.pet').find('.pet-icon[alt="Dog Icon"]')

    cy.get('.details-container')
      .get('.pet').contains('Duke')
      .get('.details').contains('Nickname: Doodle-bee')
      .get('.details').contains('Age: 19')
      .get('.details').contains('Fun Facts: He likes to go for car rides')
  })

  it('Should return home to all pets on button click', () => {
    cy.visit('http://localhost:3000/2')
    cy.url().should('eq', 'http://localhost:3000/2')
    cy.get('.back-to-all-pets-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})