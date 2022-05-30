/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("Counter Function",function(){
    // it("Button shuld visible",function(){
    //   cy.visit("http://localhost:3000/");
    //   cy.get(".counterBtn").should("exist");
    //   cy.get(".doesnotexists").should("not.exist");
      
    // })
    // it("it should increment counter",function(){
    //     cy.visit("http://localhost:3000/");
    //     cy.get(".counterBtn").should("have.text","Count is: 0");
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").click()
    //     cy.get(".counterBtn").should("have.text","Count is: 4");
    // })
  
    beforeEach(function(){
      cy.visit("http://localhost:3000/")
    })
    it("basic",function(){
      cy.intercept("GET","http://localhost:8080/counter",{
        value:100
      }).as("counterreq")
    cy.wait("@counterreq")
  cy.get(".counter-value").should("have.text","Count is: 100")
    })
})