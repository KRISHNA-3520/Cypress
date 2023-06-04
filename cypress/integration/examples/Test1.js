///<reference types="Cypress"/>

//test suite
describe('My first test suite', function(){
    //test case
    it('My first test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        
        cy.get('.products:visible').as('productLocator')
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

          cy.get('@productLocator').find('.product').each(($el,index,$list)=>{

            const vegtext = $el.find('h4.product-name').text()

            if(vegtext.includes('Capsicum'))
            {
                cy.wrap($el).find('button').click()
            //    cy.wait(2000)
                cy.get('.cart-icon > img').click()
         //       cy.get('.cart-item:visible').find('.product-remove').click()
         //       cy.get('.empty-cart').contains('You cart is empty!')

                cy.contains('PROCEED TO CHECKOUT').click()
                cy.contains('Place Order').click()
            }
          })

          //manually resolving non-cypress command
       /*   cy.get(".brand").then(function(logtext){

            cy.log(logtext.text())
         }) */

         //assert if logo text is correctly displayed
      //   cy.get('.brand').should('have.text','GREENKART')
          

    })
})
