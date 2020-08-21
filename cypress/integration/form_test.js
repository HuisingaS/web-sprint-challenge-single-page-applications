
describe('can add text to the name input', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('can navigate to the form page through the to form button', () => {
        cy.get('button').click()
    })
    it('can get name input and add text', () => {
        cy.get('input[name="name"]').type('BillyBob')
    })  
})