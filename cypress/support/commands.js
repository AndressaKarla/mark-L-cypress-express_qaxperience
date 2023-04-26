/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('cadastrarTarefa', (nomeTarefa = '') => {
    cy.wait(10000)
    
    cy.visit('/')
    
    cy.get('input[placeholder="Add a new Task"]').as('campoTarefa')

    if (nomeTarefa !== ''){
        cy.get('@campoTarefa')
        .type(nomeTarefa)
    }
    
    cy.wait(10000)

    cy.contains('button', 'Create').click()
})

Cypress.Commands.add('validarCampoPropRequired', (mensagemEsperada) => {
    cy.get('@campoTarefa')
    .invoke('prop', 'validationMessage')
    .should((mensagemObtida) => {
        expect(
            mensagemEsperada
        ).to.eq(mensagemObtida)
    })
})

Cypress.Commands.add('excluirTarefaPelaAPI', (nomeTarefa) => {
    cy.request({
        url: Cypress.env('apiUrl') + 'helper/tasks',
        method: 'DELETE',
        body: { name: nomeTarefa }
    }).then(response => {
        expect(response.status).to.eq(204)
    })
})

Cypress.Commands.add('cadastrarTarefaPelaAPI', (tarefa)=> {
    cy.request({
        url: Cypress.env('apiUrl') + 'tasks', 
        method: 'POST',
        body: tarefa
     }).then(response => {
         expect(response.status).to.eq(201)
     })
})
