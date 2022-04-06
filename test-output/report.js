$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cognizant.feature");
formatter.feature({
  "line": 1,
  "name": "Test Cognizant Website",
  "description": "",
  "id": "test-cognizant-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3312578600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Home Page",
  "description": "",
  "id": "test-cognizant-website;home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the cognizant.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for “QEA”",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should find a link for “Quality Engineering \u0026 Assurance in Digital – Cognizant”",
  "keyword": "Then "
});
formatter.match({
  "location": "CognizantHomePageSteps.i_am_on_the_cognizant_com_page()"
});
formatter.result({
  "duration": 3466463500,
  "status": "passed"
});
formatter.match({
  "location": "CognizantHomePageSteps.i_search_for_QEA()"
});
formatter.result({
  "duration": 7283614700,
  "status": "passed"
});
formatter.match({
  "location": "CognizantHomePageSteps.i_should_find_a_link_for_Quality_Engineering_Assurance_in_Digital_Cognizant()"
});
formatter.result({
  "duration": 130393900,
  "status": "passed"
});
formatter.after({
  "duration": 4193043500,
  "status": "passed"
});
formatter.before({
  "duration": 3613166700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Application Development Testing Section",
  "description": "",
  "id": "test-cognizant-website;verify-application-development-testing-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on the above page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on the tab for “Application Development Testing”",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see a Highlights section noting “90% Faster test cycles”",
  "keyword": "Then "
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_am_on_the_above_page()"
});
