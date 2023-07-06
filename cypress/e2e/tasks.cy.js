/// <reference types="cypress" />

/* tasks.cy.js
 *
 * Feature: Tarefas
 *   Como um usuário do site Mark L
 *   Quero executar alguns casos de testes 
 *   Para validar a feature de tarefas
 */

describe('Tarefas', () => {
    let massaDados;

    before(() => {
        cy.fixture('tasks').then(t => {
            massaDados = t
        })
    })

    context('Cadastro', () => {
        context('Dado que eu esteja na página Home do site Mark L', () => {
            const nomeTarefa = 'Ler um livro de Node.js'

            beforeEach(() => {
                cy.visit('/')
                cy.excluirTarefaPelaAPI(nomeTarefa)
            })
            
            context('Quando eu cadastrar uma nova tarefa', () => {
                beforeEach(() => {
                    cy.cadastrarTarefa(nomeTarefa)
                })
                

                it.only('Então a nova tarefa cadastrada deve deve ser apresentada em "Created Tasks"', () => {
                    cy.contains('main div p', nomeTarefa) // ou main > div > p
                        .should('be.visible')
                })
            })
        })


        it('não deve cadastrar uma tarefa duplicada', () => {
            const tarefa = massaDados.tarefa_duplicada

            cy.excluirTarefaPelaAPI(tarefa.name)

            // Dado que eu tenha uma tarefa cadastrada
            cy.cadastrarTarefaPelaAPI(tarefa)

            // Quando eu tentar cadastrar uma tarefa duplicada
            cy.cadastrarTarefa(tarefa.name)

            // Então deve ser apresentada uma mensagem de duplicidade
            // E não deve cadastrar uma tarefa duplicada
            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
        })

        it('campo obrigatório', () => {
            cy.cadastrarTarefa()

            const mensagemEsperada = 'This is a required field'
            cy.validarCampoPropRequired(mensagemEsperada)
        })
    })

    context('Atualização', () => {
        it('deve concluir uma tarefa', () => {
            const tarefa = massaDados.tarefa_atualizacao

            cy.excluirTarefaPelaAPI(tarefa.name)
            cy.cadastrarTarefaPelaAPI(tarefa)

            cy.visit('/')

            cy.contains('p', tarefa.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', tarefa.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('Exclusão', () => {
        it('deve excluir uma tarefa', () => {
            const tarefa = massaDados.tarefa_exclusao

            cy.excluirTarefaPelaAPI(tarefa.name)
            cy.cadastrarTarefaPelaAPI(tarefa)

            cy.visit('/')

            cy.contains('p', tarefa.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', tarefa.name)
                .should('not.exist')
        })
    })
})