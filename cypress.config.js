const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern=[
        'cypress/e2e/Login.cy.js',
        'cypress/e2e/Sites/AddSites.cy.js',
        'cypress/e2e/Sites/UpdateSites.cy.js',
        'cypress/e2e/Sites/AddBuilding.cy.js',
        'cypress/e2e/Sites/UpdateBuilding.cy.js',
        'cypress/e2e/Sites/AddAreas.cy.js',
        'cypress/e2e/Sites/UpdateAreas.cy.js',
        'cypress/e2e/Users/AddUser.cy.js',
        'cypress/e2e/Users/UpdateUser.cy.js',
        'cypress/e2e/Assets/AddAsset.cy.js',
        'cypress/e2e/Assets/UpdateAsset.cy.js',
        'cypress/e2e/Assets/GetAssetDetails.cy.js'
      ]
      return config;
    },
  },
});
