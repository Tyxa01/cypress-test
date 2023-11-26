/// <reference types = "cypress" />

describe('Dialog UI ', () =>{
    const name = "Artur"
    beforeEach(() =>{
        cy.visit('/modal-overlays/dialog')})
    
    it ('Dialog test', ()=> {
        cy.contains('button', 'Enter Name').click()
        cy.get('nb-dialog-container').should('be.visible')
        cy.get ('input.shape-rectangle').type(name)
        cy.get ('button.appearance-filled').contains('Submit').click()
        cy.get('li.ng-star-inserted').contains(name).should('be.visible')
     })
    })