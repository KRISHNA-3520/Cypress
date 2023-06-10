/// <reference types="cypress"/>
const neatCSV = require('neat-csv')
let productName,orderID

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

         //cy.wait(2000)

        //csv file will get downloaded
        cy.contains("Click To Download Order Details in CSV").click()

        cy.wait(10000)

       /*  cy.get("table td[class='em-spacer-1'] label[class='ng-star-inserted']").then(function(ele){
            orderID = ele.text()
            orderID = orderID.replace(/[^A-Z0-9]/ig,'');
            console.log(orderID)
        }) */

        //get dynamic path of project
       // Cypress.config("fileServerFolder")

        //convert file to text and solving the promise
        cy.readFile(Cypress.config("fileServerFolder")+"\\cypress\\downloads\\order-invoice_kjamadar26.csv")
        .then(async(text)=>{
           
            const csv = await neatCSV(text)
            console.log(csv)
            //get product name from csv file
            const actualProductCSV=csv[0]["Product Name"]
            const actualOrderID=csv[0]["Invoice Number"]

            //validating csv file content
           expect(productName).to.eq(actualProductCSV)
         //  expect(orderID).to.eq(actualOrderID)
        })
       

    })
})