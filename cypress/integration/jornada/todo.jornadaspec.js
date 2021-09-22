///<reference types="cypress"/>

//HOOKS

describe('TodoApp', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo#/') // URL do site que vai automatizar
    })
    it('adicionar itens a lista de tarefas', () => {
        cy.get('[data-test=new-todo]') // seleciona elemento
            .type('preparar café {enter}') // inseri o texto  preparar café
            .type('preparar pão {enter}') // inseri o texto  preparar café
            .type('preparar suco {enter}') // inseri o texto  preparar café
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('Concluir uma tarefa', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://example.cypress.io/todo#/')
        cy.contains('Walk the dog') // comando contains procura elemento pelo texto
            .parent()
            .find('input')
            .check()

        //cy.get('[data-id="1632335129003"] > .view > .toggle').check()
        /* ==== End Cypress Studio ==== */
    })
})

//it('Concluir uma tarefa', function()  comenta o código
//it.only('Concluir uma tarefa', function()  coloca ".only " para executar somente este teste