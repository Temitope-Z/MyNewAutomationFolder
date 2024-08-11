/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})

Given ('I open demoblaze Ecommerce website', function(){
    cy.visit('http://www.demoblaze.com/')
})
When ('I click on sign up Button', function(){
   cy.get('#signin2').click()
})
Then ('I entered a Username', function(){
   cy.get('#sign-username').type('Temisofine')
})   
When ('I entered a password', function(){
   cy.get('#sign-password').type('Temisofine2')
})    
Then ('I click on sign up Icon', function(){
   cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
})    
