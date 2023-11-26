/// <reference types = "cypress" />

describe('Header UI ', () =>{
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





