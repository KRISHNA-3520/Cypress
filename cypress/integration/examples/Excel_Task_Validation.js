/// <reference types="cypress"/>

const cypress = require("cypress")

let productName

describe('JWT Session',()=>{
    it('is logged in through local storage',()=>{

        //LoginAPI is custom command created in command.js file
        cy.LoginAPI().then(async function(){

            //Injecting token before visiting the website
            cy.visit("https://rahulshettyacademy.com/client/",{

                //here we need to write javascript code to inject token into local storage of browser
                onBeforeLoad : function(window)
                {
                    //Inject token into Local storage
                    window.localStorage.setItem('token',Cypress.env('token'))
                }

            })
        })

        cy.get(".card-body b").eq(1).then(function(ele){
           productName= ele.text()
        })

        cy.get(".card-body button:last-of-type").eq(1).click()

        cy.get("[routerlink*='cart']").click()

        cy.contains("Checkout").click()

        cy.get("input[placeholder='Select Country']").type("ind")

        cy.get(".ta-results button").each(($e1,index,$list)=>{

            if($e1.text()===" India")
            {
                cy.wrap($e1).click()
            }
        })

        
        cy.get(".action__submit").click()


        //csv file will get downloaded
        cy.contains("Click To Download Order Details in Excel").click()

      /*   const filePath = Cypress.config("fileServerFolder")+"\\cypress\\downloads\\order-invoice_order.xlsx"
        cy.task('excelToJsonConverter',filePath).then(function(result){
            cy.log(result.data[1].A)
        }) */

      /*   cy.readFile(filePath).then(function(text){
            expect(text).to.include(productName)
        }) */
       

    })
})