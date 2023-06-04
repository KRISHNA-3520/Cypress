describe('Fake test suite',function(){
    it('Fake test cases',function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    
       cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
       },{
        statusCode : 200,
        body :  [
            {
            "book_name": "null",
            "isbn": "SPY40",
            "aisle": "2529857"
        },
        
    ]
       }).as('bookretrievals')

       cy.get('button[class="btn btn-primary"]').click()

       //get access to response
       cy.wait('@bookretrievals').then(({request,response})=>{

        //get count of tr tag
        cy.get('tr').should('have.length',response.body.length+1)
       })
       cy.get('p').should('have.text','Oops only 1 Book available')
    

       //length of the response array = rows of the table

    })
})