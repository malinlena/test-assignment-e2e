beforeEach(() => {
  cy.visit('/')
});

describe('movie service application', () => {

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

describe('searching for movies', () => {

  it('should show no result if input is less than three characters', () => {
    cy.get('input').type('he')
    cy.get('button').click()
    cy.get('p').should('have.text', 'Inga sökresultat att visa')
  });

});

describe('Tests for when movie is found', () => {

  it('Should create correct elements', () => {
    cy.get('input').type('The Matrix');

    cy.get('form').should('have.id', 'searchForm').and('exist');
    cy.get('form').submit();

    cy.get('div.movie').should('exist');
    cy.get('div.movie > h3').should('exist');
    cy.get('div.movie > h3').contains('The Matrix').should('exist');
    cy.get('div.movie > img').should('exist');
  });

});

});

