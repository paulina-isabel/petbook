describe('Test HomeView', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://petbook-be-git-refactor-edit-server-name-aliceabarca.vercel.app/api/v1/pets', {
      statusCode: 200,
      fixture: 'allPets.json'
    })
    .visit('https://petbook-flame.vercel.app/')
  });

  it('should display header', () => {
    cy.intercept('GET', 'https://petbook-be.vercel.app/api/v1/pets', {
      statusCode: 200,
      fixture: 'allPets.json'
    })

    cy.visit('https://petbook-flame.vercel.app/')
    cy.get('.petbook-logo')
      .should('have.attr', 'alt')
    cy.get('h1')
      .should('contain', 'PetB🐾k')
    cy.get('.title-container > h2')
      .contains('Your Pet\'s Perfect Page')
  });

  it('should delete pet card', () => {
    cy.intercept('DELETE', 'https://petbook-be-git-refactor-edit-server-name-aliceabarca.vercel.app/api/v1/pets/3', {
      statusCode: 204
    }).as('deleteRequest');
    cy.get('.all-pets-container').find('.pet-card').should('have.length', 4)
    cy.get('.all-pets-container > :nth-child(3)')
      .get(':nth-child(3) > .info-container > .icon-container > .delete-icon').click();
    cy.wait('@deleteRequest');
    cy.get('.all-pets-container').find('.pet-card').should('have.length', 3);
  });

  it('should display card', () => {
    cy.get(':nth-child(1) > .info-container > .pet-icon')
      .should('have.attr', 'alt')
    cy.get(':nth-child(1) > .info-container > h2')
      .should('contain', 'Oreo')
    cy.get(':nth-child(1) > .info-container > h3')
      .should('contain', 'Cat')
    cy.get(':nth-child(1) > .info-container > .owner')
      .should('contain', 'Owner: Judy')
  });

  it('Should display error message with a 500 level error', () => {
    cy.intercept('GET', 'https://petbook-be-git-refactor-edit-server-name-aliceabarca.vercel.app/api/v1/pets', {
      statusCode: 500})
      cy.get('.error > h2').contains('Request failed - Unable to retrieve contacts from server.')    
  })

  it('Should display URL error page with a 404 level error', () => {
   cy.intercept('GET', 'https://petbook-be-git-refactor-edit-server-name-aliceabarca.vercel.app/api/v1/pets/nonsense', {
     statusCode: 404
   })
   cy.visit('https://petbook-flame.vercel.app/nonsense')
   cy.url().should('eq', 'https://petbook-flame.vercel.app/nonsense')
   cy.get('.error > h2').contains('Unable to retrieve contacts from server.')
   cy.get('.error-button').click()
   cy.url().should('eq', 'https://petbook-flame.vercel.app/')
 });

})
