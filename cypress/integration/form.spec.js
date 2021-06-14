describe("Form Tests", () => {

    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select')
    const sauceInput = () => cy.get('input[name="sauce"]')
    const specialInput = () => cy.get('input[name="special"]')
    const pepperoniInput = () => cy.get('input[name="pepperoni"]')
    const baconInput = () => cy.get('input[name="bacon"]')
    const olivesInput = () => cy.get('input[name="olives"]')
    const quantityInput = () => cy.get('input[name="quantity"]')

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Allows text to be added', () => {
        specialInput().type('Ranch Please')
        specialInput().should('have.value', 'Ranch Please')
    })

    it('Allows selection of multiple toppings', () => {
        pepperoniInput().check()
        baconInput().check()
        olivesInput().check()
    })

    it('Submits the form', () => {
        cy.get('button').should('be.disabled')
        nameInput().type("Rika")
        sizeInput().select("small")
        sauceInput().check('alfredo')
        pepperoniInput().check()
        baconInput().check()
        olivesInput().check()
        specialInput().type("Deliver to door")
        quantityInput().type('1')
        cy.get('button').should('be.enabled')

    })
}) 
// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form