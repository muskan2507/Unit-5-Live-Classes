/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("todo tests",function(){
    beforeEach(function(){
        cy.visit("https://example.cypress.io/todo")
    })
    it("should show basic structure",function(){
        cy.get(".new-todo").should("exist");
    })
    it("should be able to add todo",function(){
        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".new-todo").type("Automated tests{enter}")
        cy.get(".todo-list").children().should("have.length",3)
    })
    it("should increase footer text",function(){
        cy.get(".todo-count strong").should("have.text",2)
        cy.get(".new-todo").type("Automated tests{enter}")
        cy.get(".todo-count strong").should("have.text",3)
    })
})