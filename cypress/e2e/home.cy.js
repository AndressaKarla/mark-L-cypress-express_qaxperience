/// <reference types="cypress" />

/* home.cy.js
 *
 * Feature: Home
 *   Como um usuário do site Mark L
 *   Quero executar alguns casos de testes 
 *   Para validar a feature Home
 */

 describe('Home', () => {
  context("Dado que eu esteja na página Home do site Mark L", () => {
    beforeEach(() => {
      cy.visit('/')
    })

    context("Quando eu verificar o título", () => {
      it("Então deve ser apresentado o título Gerencie suas tarefas com Mark L", () => {
        cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
      })
    })
  })
})
