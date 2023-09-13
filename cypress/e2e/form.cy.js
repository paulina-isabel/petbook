describe('test form', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/pets', {
      statusCode: 200,
      fixture: 'example.json'
    })
    .visit('http://localhost:3000')
  })
  it('passes', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/pets', {
      statusCode: 200,
      body: {
        petsName: 'Rocco',
        type: 'Dog',
        petsNickname: 'Rock',
        petsAge: '3',
        petsFunFact: 'Very Fun',
        petOwnersName: 'Alice'
      }
    })
    cy.visit('http://localhost:3000')
    cy.get('.form-section').should('exist')
    cy.get('.new-pet').contains('Add New Pet')
    cy.get('.paws-image').should('exist')
    cy.get('.pets-name-section > label').contains('Pets Name:')
    cy.get('#pets-name').get('input[name="petsName"]').type('Rocco')
    cy.get('.pets-type-checkbox').get('[type="checkbox"]').check('dog').and('have.value', 'dog')
    cy.get('.pets-type-checkbox').get('[type="checkbox"]').uncheck('cat').and('have.value', 'cat')
    cy.get('.pets-nickname-section > label').contains('Pets Nickname:')
    cy.get('#pets-nickname').get('input[name="petsNickname"]').type('Rock')
    cy.get('.pets-age-section > label').contains('Pets Age:')
    cy.get('#pets-age').get('input[name="petsAge"]').type('3')
    cy.get('.pets-fun-fact-section > label').contains('Pets Fun Fact:')
    cy.get('#pets-fun-fact').get('input[name="petsFunFact"]').type('Very Fun')
    cy.get('.pet-owners-name-section > label').contains('Pet Owners Name:')
    cy.get('#pet-owners-name').get('input[name="petOwnersName"]').type('Alice')
    cy.get('button')
    .click()
    .get('.all-pets-container').children().should('have.length', 5)
    cy.get('.all-pets-container').last().contains('h2', 'Rocco')
    cy.get('.all-pets-container').last().contains('p', 'Alice')
  })
})