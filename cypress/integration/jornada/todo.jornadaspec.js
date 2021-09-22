///<reference types="cypress"/>

describe('TodoApp', () => {
    it('adicionar itens a lista de tarefas', () => {
        cy.visit('https://example.cypress.io/todo#/')
        cy.get('[data-test=new-todo]').type('preparar café {enter}')
    })
})