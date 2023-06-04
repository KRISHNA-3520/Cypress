describe('Popup Testing Suite',function(){

    it('Popup test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
        //click on alert
        cy.get('#alertbtn').click()

        //click on Confirm button
        cy.get('#confirmbtn').click()

        //window alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window confirm
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})