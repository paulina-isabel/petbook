describe('template spec', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/pets', {
      statusCode: 200,
      fixture: "duke.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should select pet and be shown pet details for that pet', () => {
    cy.get('.pet-card').get('a').click()
    cy.url().should('eq', 'http://localhost:3000/2')
    cy.get('.details-container').get('.owner-info')
      .get('.owner-info').contains('Owner Name: Alex')
      .get('.owner-info').contains('Owner Details:')
      .get('.owner-info').find('.pet-image[alt="cat"]')

    cy.get('.details-container').get('.owner-info')
      .get('.pet-info').contains('Pet Name: Duke')
      .get('.pet-info').contains('Nickname: Doodle-bee')
      .get('.pet-info').contains('Pet Age: 19')
      .get('.pet-info').contains('Fun Facts: He likes to go for car rides')
  })

  it('Should return home to all pets on button click', () => {
    cy.visit('http://localhost:3000/2')
    cy.url().should('eq', 'http://localhost:3000/2')
    cy.get('.back-to-all-pets-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})