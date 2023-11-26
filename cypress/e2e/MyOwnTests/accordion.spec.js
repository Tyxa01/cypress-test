/// <reference types = "cypress" />

describe('Accordion UI', () =>{
    beforeEach(() =>{
        cy.visit('/layout/accordion')})
    
    it ('Toggle first item test', ()=> {
        cy.get('nb-accordion-item-body').first().should('be.hidden');
        cy.get('button.appearance-filled').click()
        cy.get('nb-accordion-item-body').first().should('be.visible')
     })
    })