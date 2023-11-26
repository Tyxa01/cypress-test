/// <reference types = "cypress" />

describe('First UI ', () =>{
    const colors = {
       "Light":      "rgb(255, 255, 255)",
       "Dark":       "rgb(34, 43, 69)",
       "Cosmic":     "rgb(50, 50, 89)",
       "Corporate":  "rgb(255, 255, 255)"
       };
beforeEach(()=>{
cy.visit('/')
})
it ('Background Color Check', ()=> {
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Light, );
    cy.get ('button.select-button').should('contain', 'Light').click()
    cy.get('nb-option').eq(1).should('contain', 'Dark').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Dark);
    cy.get ('button.select-button').click()
    cy.get('nb-option').eq(2).should('contain', 'Cosmic').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Cosmic);
    cy.get ('button.select-button').click()
    cy.get('nb-option').eq(3).should('contain', 'Corporate').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Corporate);
   
 })
})

describe('Second UI ', () =>{
beforeEach(() =>{
    cy.visit('/layout/accordion')})

it ('Toggle first item test', ()=> {
    cy.get('nb-accordion-item-body').first().should('be.hidden');
    cy.get('button.appearance-filled').click()
    cy.get('nb-accordion-item-body').first().should('be.visible')
 })
})

describe('Third UI ', () =>{
    beforeEach(() =>{
        cy.visit('/modal-overlays/popover')})
    
    it ('Popover test', ()=> {
       cy.get('button.appearance-filled').contains('Right').trigger('mouseenter')
       cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')
       
     })
    })

describe('Fourth UI ', () =>{
    beforeEach(() =>{
        cy.visit('/modal-overlays/dialog')})
    
    it ('Dialog test', ()=> {
        cy.contains('button', 'Enter Name').click()
        cy.get('nb-dialog-container').should('be.visible')
        const name = "Artur"
        cy.get ('input.shape-rectangle').type(name)
        cy.get ('button.appearance-filled').contains('Submit').click()
        cy.get('li.ng-star-inserted').contains(name)
     })
    })