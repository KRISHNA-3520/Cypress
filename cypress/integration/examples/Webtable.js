describe('WebTable suite',function(){
    it('WebTable test cases',function(){
/* 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
        cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{

            const text=$e1.text()

            if(text.includes("Python"))
            {
                //move to sibling from tr --> td --> td, 
                //python is on 7th index i.e. eq(7), than we solved promises with the help of then
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                   const pricetext= price.text()
                   expect(pricetext).to.equal('25')
                })
            }
        
        })

        
     */
    
        cy.visit('https://www.dezlearn.com/webtable-example/')
        cy.get('tr td:nth-child(1)').each(($e1,index,$list)=>{

            const name=$e1.text()

            if(name.includes("Monica"))
            {
                //move to sibling from tr -->td
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(email){
                    const emailID = email.text()
                    expect(emailID).to.equal('monica@dezlearn.com')
                })
            }
        })

    
    })
})