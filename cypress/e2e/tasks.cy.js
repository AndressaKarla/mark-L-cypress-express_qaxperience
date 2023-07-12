/// <reference types="cypress" />

/* tasks.cy.js
 *
 * Feature: Tarefas
 *   Como um usuário do site Mark L
 *   Quero executar alguns casos de testes 
 *   Para validar a feature Tarefas
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


                it('Então a nova tarefa cadastrada deve ser apresentada em Created Tasks', () => {
                    cy.contains('main div p', nomeTarefa) // ou main > div > p
                        .should('be.visible')
                })
            })
        })

        context('Dado que eu esteja na página Home do site Mark L', () => {
            beforeEach(() => {
                cy.visit('/')

                const tarefa = massaDados.tarefa_duplicada
                cy.excluirTarefaPelaAPI(tarefa.name)
            })

            context('E eu cadastre uma nova tarefa', () => {
                beforeEach(() => {
                    const tarefa = massaDados.tarefa_duplicada
                    cy.cadastrarTarefaPelaAPI(tarefa)
                })

                context('Quando eu tentar cadastrar uma tarefa duplicada', () => {
                    beforeEach(() => {
                        const tarefa = massaDados.tarefa_duplicada
                        cy.cadastrarTarefa(tarefa.name)
                    })

                    it('Então deve ser apresentada uma mensagem de duplicidade', () => {
                        cy.get('.swal2-html-container')
                            .should('be.visible')
                            .should('have.text', 'Task already exists!')
                    })
                })
            })
        })

        context('Dado que eu esteja na página Home do site Mark L', () => {
            beforeEach(() => {
                cy.visit('/')
            })

            context('Quando eu tentar cadastrar uma nova tarefa sem informar o campo Add a new Task', () => {
                beforeEach(() => {
                    cy.cadastrarTarefa()
                })

                it('Então deve ser apresentada uma mensagem de obrigatoriedade', () => {
                    const mensagemEsperada = 'This is a required field'
                    cy.validarCampoPropRequired(mensagemEsperada)
                })
            })
        })
    })

    context('Atualização', () => {
        context('Dado que eu esteja na página Home do site Mark L', () => {
            beforeEach(() => {
                cy.visit('/')

                const tarefa = massaDados.tarefa_atualizacao
                cy.excluirTarefaPelaAPI(tarefa.name)
            })

            context('E eu cadastre uma nova tarefa', () => {
                beforeEach(() => {
                    const tarefa = massaDados.tarefa_atualizacao
                    cy.cadastrarTarefaPelaAPI(tarefa)

                    cy.reload()
                })

                context('Quando eu concluir a tarefa', () => {
                    beforeEach(() => {
                        const tarefa = massaDados.tarefa_atualizacao

                        cy.contains('p', tarefa.name)
                            .parent()
                            .find('button[class*=ItemToggle]')
                            .click()
                    })

                    it('Então a tarefa cadastrada deve ser apresentada como concluída', () => {
                        const tarefa = massaDados.tarefa_atualizacao

                        cy.contains('p', tarefa.name)
                            .should('have.css', 'text-decoration-line', 'line-through')
                    })
                })
            })
        })
    })

    context('Exclusão', () => {
        context('Dado que eu esteja na página Home do site Mark L', () => {
            beforeEach(() => {
                cy.visit('/')

                const tarefa = massaDados.tarefa_exclusao
                cy.excluirTarefaPelaAPI(tarefa.name)
            })

            context('E eu cadastre uma nova tarefa', () => {
                beforeEach(() => {
                    const tarefa = massaDados.tarefa_exclusao
                    cy.cadastrarTarefaPelaAPI(tarefa)

                    cy.reload()
                })

                context('Quando eu excluir a tarefa', () => {
                    beforeEach(() => {
                        const tarefa = massaDados.tarefa_exclusao

                        cy.contains('p', tarefa.name)
                            .parent()
                            .find('button[class*=ItemDelete]')
                            .click()
                    })

                    it('Então a tarefa excluída não deve ser apresentada em Created Tasks', () => {
                        const tarefa = massaDados.tarefa_exclusao

                        cy.contains('p', tarefa.name)
                            .should('not.exist')
                    })
                })
            })
        })
    })
})