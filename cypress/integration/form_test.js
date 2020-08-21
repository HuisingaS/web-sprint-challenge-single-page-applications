
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
});

describe('can select multiple toppings', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('can navigate to the form page through the to form button', () => {
        cy.get('button').click()
    })
    it('can get pepperoni input and select it', () => {
        cy.get('input[name="pepperoni"]').click()
    })
    it('can get sausage input and select it', () => {
        cy.get('input[name="sausage"]').click()
    })
});

describe('can submit the form', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('can navigate to the form page through the to form button', () => {
        cy.get('button').click()
    })
    it('can get name input and add text', () => {
        cy.get('input[name="name"]').type('BarryBob')
    })
    it('can get pizzaSize input and select size', () => {
        cy.get('select').select("Gargantuan")
    })
    it('can get sausage input and select it', () => {
        cy.get('input[name="sausage"]').click()
    })
    it('can get pepperoni input and select it', () => {
        cy.get('input[name="pepperoni"]').click()
    })
    it('can get beef input and select it', () => {
        cy.get('input[name="beef"]').click()
    })
    it('can get chicken input and select it', () => {
        cy.get('input[name="chicken"]').click()
    })
    it('can get bacon input and select it', () => {
        cy.get('input[name="bacon"]').click()
    })
    it('can get veggies input and select it', () => {
        cy.get('input[name="veggies"]').click()
    })
    it('can get extraCheese input and select it', () => {
        cy.get('input[name="extraCheese"]').click()
    })
    it('can get specialOrder input and add text', () => {
        cy.get('input[name="specialOrder"]').type('Yuck, pizza again!')
    })
    it('can get select order button and submit order', () => {
        cy.get('button').click()
    })
    
});