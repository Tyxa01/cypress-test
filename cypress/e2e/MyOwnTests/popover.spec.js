/// <reference types = "cypress" />

describe('Popover UI ', () =>{
    beforeEach(() =>{
        cy.visit('/modal-overlays/popover')})
    
    it ('Popover test', ()=> {
       cy.get('button.appearance-filled').contains('Right').trigger('mouseenter')
       cy.contains('nb-popover','Hello, how are you today?').should('be.visible')
       
     })
    })