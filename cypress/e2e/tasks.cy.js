/// <reference types="cypress" />

describe('tarefas', () => {
    let massaDados;

    before(() => {
        cy.fixture('tasks').then(t => {
            massaDados = t
        })
    })

    context('cadastro', () => {
        it('deve cadastrar uma nova tarefa', () => {
            const nomeTarefa = 'Ler um livro de Node.js'
    
            cy.excluirTarefaPelaAPI(nomeTarefa)
            cy.cadastrarTarefa(nomeTarefa)
    
            cy.contains('main div p', nomeTarefa) // ou main > div > p
                .should('be.visible')
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

    context('atualização', () => {
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

    context('exclusão', () => {
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