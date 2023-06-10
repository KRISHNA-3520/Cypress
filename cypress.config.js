const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');


async function setupNodeEvents(on, config) {

  config.db = {
    userName: "",
    password: "",
    server: "",
    options: {
    database: "",
    encrypt: true,
    rowCollectionOnRequestCompletion : true
    }
}

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);


  on("file:preprocessor", browserify.default(config));

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

 /*  on('task',{

    excelToJsonConverter(filePath)
    {
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
});
return result
    }
  })
 */
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },

  projectId: '4t8aiu',
  e2e: {
    setupNodeEvents,
    specPattern:'cypress/integration/examples/*.js',
    //specPattern:'cypress/integration/examples/BDD/*.feature'
  },
});
