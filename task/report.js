var reporter = require('cucumber-html-reporter');

var options = {
       theme: 'bootstrap',
       jsonFile: 'E2E/report/report.json',
       output: 'E2E/report/report.html',
       reportSuiteAsScenarios: true,
       launchReport: true,
   };

   reporter.generate(options);