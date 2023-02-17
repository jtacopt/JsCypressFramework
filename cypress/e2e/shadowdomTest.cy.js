/// <reference types="cypress" />

describe('Shadow Dom Test', () => {
    beforeEach(() => {
        cy.visit('https://jtacopt.github.io/HTML_Pages/shadow-root.html')
    })

    it('Populate login form', () => {
       
        // https://on.cypress.io/type
        cy.get('login-form').shadow()
            .find('#username')
            .type('username').should('have.value', 'username')

        cy.get('login-form').shadow()
            .find('#password')
            .type('senha')
           
    })
})