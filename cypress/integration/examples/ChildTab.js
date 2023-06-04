describe('ChildTab Testing Suite',function(){

    it('ChildTab test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
        //first remove target= _blank attribute from DOM 
        cy.get('#opentab').invoke('removeAttr','target').click()
        
        //to check whether given string is included in currently opened page url or not
        //console.log(cy.url())
        
        
        cy.url().should('include','qaclickacademy')
        

        //to go back to previous page
      //  cy.go('back')
    })
})