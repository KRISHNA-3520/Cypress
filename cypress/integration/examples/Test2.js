describe('Checkbox Testing Suite',function(){

    it('Checkbox test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

     /*    //CHECKBOXE HANDLING
        //to check whether checkbox is checked and value is option1
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        //to uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // to click on multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2','option3']) */

/* 

        //STATIC DROPDOWN : to check option2 is selected
        cy.get('select').select('option2').should('have.value','option2')

        //DYANAMIC DROPDOWN : 
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1,index,$list)=>{

            if($e1.text()==='India')
            {
                cy.wrap($e1).click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')
 */

/* 
        //handling visible and invisible element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible') */

        //RADIO BUTTON

        cy.get('input[type="radio"]')
        .check(['radio1'])
        .should('be.checked')
        
    })
})