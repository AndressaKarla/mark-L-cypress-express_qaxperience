const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',

    env: {
      apiUrl: 'http://localhost:3333/'
    },

    viewportWidth: 1920,
		viewportHeight: 1080,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
