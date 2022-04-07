$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cognizant.feature");
formatter.feature({
  "line": 1,
  "name": "Test Cognizant Website",
  "description": "",
  "id": "test-cognizant-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3056438700,
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
  "duration": 2502152000,
  "status": "passed"
});
formatter.match({
  "location": "CognizantHomePageSteps.i_search_for_QEA()"
});
formatter.result({
  "duration": 4173848300,
  "status": "passed"
});
formatter.match({
  "location": "CognizantHomePageSteps.i_should_find_a_link_for_Quality_Engineering_Assurance_in_Digital_Cognizant()"
});
formatter.result({
  "duration": 35517400,
  "status": "passed"
});
formatter.after({
  "duration": 164501800,
  "status": "passed"
});
formatter.before({
  "duration": 1941725800,
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
formatter.result({
  "duration": 8778462700,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_click_on_the_tab_for_Application_Development_Testing()"
});
formatter.result({
  "duration": 365309600,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_should_see_a_Highlights_section_noting_Faster_test_cycles()"
});
formatter.result({
  "duration": 1909121600,
  "status": "passed"
});
formatter.after({
  "duration": 213415600,
  "status": "passed"
});
formatter.before({
  "duration": 1935956800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Application Maintenance Testing Section",
  "description": "",
  "id": "test-cognizant-website;verify-application-maintenance-testing-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on the above page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on the tab for “Application Maintenance Testing”",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see a Highlights section noting “ZERO Regression defect leakage to UAT”",
  "keyword": "Then "
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_am_on_the_above_page()"
});
formatter.result({
  "duration": 8997665600,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_click_on_the_tab_for_Application_Maintenance_Testing()"
});
formatter.result({
  "duration": 2346162000,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_should_see_a_Highlights_section_noting_ZERO_Regression_defect_leakage_to_UAT()"
});
formatter.result({
  "duration": 78641700,
  "status": "passed"
});
formatter.after({
  "duration": 248996100,
  "status": "passed"
});
formatter.before({
  "duration": 1867753400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Test Advisory Section",
  "description": "",
  "id": "test-cognizant-website;verify-test-advisory-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on the above page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on the tab for “Test Advisory”",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see a Highlights section noting \"$3 mm Cost savings in 3 years\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_am_on_the_above_page()"
});
formatter.result({
  "duration": 8641958700,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_click_on_the_tab_for_Test_Advisory()"
});
formatter.result({
  "duration": 2194669400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$3 mm Cost savings in 3 years",
      "offset": 42
    }
  ],
  "location": "CognizantSearchPageSteps.i_should_see_a_Highlights_section_noting(String)"
});
formatter.result({
  "duration": 30993800,
  "status": "passed"
});
formatter.after({
  "duration": 217380700,
  "status": "passed"
});
});