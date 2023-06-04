const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cypresscucumberReports",
  reportPath: "cypress/cypresscucumberReports/cucmberReport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "June 04th 2023, 11:21 PM EST" },
      { label: "Execution End Time", value: "June 04th 2023, 11:21 PM EST" },
    ],
  },
});