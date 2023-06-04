describe('Checkbox Testing Suite',function(){

    it('Checkbox test case',function(){
      /*   cy.visit('https://formstone.it/components/dropdown/demo/')

        cy.get('#demo_basic-dropdown-selected')
        .click()
        .get('#demo_basic')
        .select('2', {force: true})
        
         */

        cy.visit('https://www.amazon.com/')
        
        
        cy.get('#twotabsearchtextbox')
        .click()
        .get('#searchDropdownBox')
        .select('search-alias=instant-video', {force: true})

    })
})