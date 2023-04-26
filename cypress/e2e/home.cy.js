/// <reference types="cypress" />

describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('/')

    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
    
    cy.wait(5000)
  })
})
