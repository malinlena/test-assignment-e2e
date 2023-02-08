beforeEach(() => {
  cy.visit('http://localhost:1234/')
});

describe('movie service application', () => {
  it('passes', () => {
    cy.visit('http://localhost:1234/')
  });

  it('should show search form', () => {
    cy.get('#searchForm').should('be.visible')
  });

  it('should show search button', () => {
    cy.get('button').should('be.visible')
  });

  it('should be able to type', () => {
    cy.get('input').type('test').should('have.value', 'test')
  });

  it('should be able to press button', () => {
    cy.get('button').should('be.visible').click()
  });


  describe('should show no result if input is less than three characters', () => {

  it('should show no result if input is two characters', () => {
    cy.get('input').type('he')
    cy.get('button').click()
    cy.get('p').should('have.text', 'Inga sökresultat att visa')
  });

  it('should show no result if input is more than three characters', () => {
    cy.get('input').type('hello')
    cy.get('button').click()
    cy.get('p').should('not.have.text', 'Inga sökresultat att visa')
  });

  });

});

