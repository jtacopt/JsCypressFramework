
describe('Shadow Dom Test', () => {
    beforeEach(() => {
        cy.visit('https://jtacopt.github.io/HTML_Pages/shadow-root.html')
    })

    // https://on.cypress.io/interacting-with-elements

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get('login-form').shadow()
            .find('#username')
            .type('username').should('have.value', 'username')
        cy.get('login-form').shadow()
            .find('#password')
            // Ignore error checking prior to type
            // like whether the input is visible or disabled
            .type('senha')
           
    })
})