const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {

        viewportHeight: 1080,
        viewportWight: 1930,
        specPattern:'cypress/e2e/**/*.{js,ts}',
        excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
        setupNodeEvents(on, config) {
          // implement node event listeners here
          
        },
  },
});
