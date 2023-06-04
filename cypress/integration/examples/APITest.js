describe('Pure API Testing Suite',function(){

    it('Pure API test case',function(){

        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

        "name":"Krishna",
        "isbn":"Krish",
        "aisle":"2626",
        "author":"Krishna Jamadar"
   
    }).then(function(response){
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
        })
       
    })
})