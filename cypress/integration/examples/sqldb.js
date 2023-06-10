/// <reference types="cypress"/>

context('Window',()=>{
 
    it('Database Interaction',() => {

        //print first records last name
       cy.sqlServer("select * from Persons").then(function(result){

        //0th row and 1st Column
        console.log(result[0][1])
       })
    })
})