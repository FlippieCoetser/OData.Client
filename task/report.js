var reporter = require('cucumber-html-reporter');

var options = {
       theme: 'bootstrap',
       jsonFile: 'test/report/report.json',
       output: 'test/report/report.html',
       reportSuiteAsScenarios: true,
       launchReport: true,
   };

   reporter.generate(options);