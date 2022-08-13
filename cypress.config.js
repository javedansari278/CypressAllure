const { defineConfig } = require("cypress");
const xlsx = require('xlsx');
const fs = require('fs')
const AllureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env :{
    "allure":true,
    "allureResultsPath":"allure-results",
    "allureAttachRequests":false
  },
  e2e: {
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "baseUrl": "https://demoqa.com/",
    "video": false,
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return config;
    },
  },
});
