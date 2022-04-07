$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cognizant.feature");
formatter.feature({
  "line": 1,
  "name": "Test Cognizant Website",
  "description": "",
  "id": "test-cognizant-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2880405600,
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
  "duration": 2654366700,
  "status": "passed"
});
formatter.match({
  "location": "CognizantHomePageSteps.i_search_for_QEA()"
});
formatter.result({
  "duration": 4401641200,
  "status": "passed"
});
formatter.match({
  "location": "CognizantHomePageSteps.i_should_find_a_link_for_Quality_Engineering_Assurance_in_Digital_Cognizant()"
});
formatter.result({
  "duration": 66349000,
  "status": "passed"
});
formatter.after({
  "duration": 164463200,
  "status": "passed"
});
formatter.before({
  "duration": 1789284400,
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
  "duration": 7358673500,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_click_on_the_tab_for_Application_Development_Testing()"
});
formatter.result({
  "duration": 443489600,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_should_see_a_Highlights_section_noting_Faster_test_cycles()"
});
formatter.result({
  "duration": 1855536800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[90% Faster test cycles]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefinitions.CognizantSearchPageSteps.i_should_see_a_Highlights_section_noting_Faster_test_cycles(CognizantSearchPageSteps.java:45)\r\n\tat ✽.Then I should see a Highlights section noting “90% Faster test cycles”(Cognizant.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 222501400,
  "status": "passed"
});
formatter.before({
  "duration": 1797195300,
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
  "duration": 7545461400,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_click_on_the_tab_for_Application_Maintenance_Testing()"
});
formatter.result({
  "duration": 1419070100,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ch3 class\u003d\"text-white m0 py1 px-half\" data-equalizer-watch\u003d\"\" style\u003d\"height: auto;\"\u003e...\u003c/h3\u003e is not clickable at point (376, 565). Other element would receive the click: \u003ca href\u003d\"https://www.cognizant.com/cookiepolicy\" target\u003d\"_blank\" id\u003d\"truste-cookie-button\" style\u003d\"cursor:pointer; text-decoration: none;\" class\u003d\"truste-cookie-link\" rel\u003d\"noopener noreferrer\" new-data-attribute\u003d\" \"\u003e...\u003c/a\u003e\n  (Session info: headless chrome\u003d98.0.4758.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LTUS155170\u0027, ip: \u0027192.168.1.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\955113\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:61683}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e713fecd2480e36a8a3895448ee2103c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pages.CognizantQEAPage.clickAppMainTesting(CognizantQEAPage.java:48)\r\n\tat stepdefinitions.CognizantSearchPageSteps.i_click_on_the_tab_for_Application_Maintenance_Testing(CognizantSearchPageSteps.java:50)\r\n\tat ✽.When I click on the tab for “Application Maintenance Testing”(Cognizant.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_should_see_a_Highlights_section_noting_ZERO_Regression_defect_leakage_to_UAT()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 262416900,
  "status": "passed"
});
formatter.before({
  "duration": 1917024900,
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
  "duration": 7943267000,
  "status": "passed"
});
formatter.match({
  "location": "CognizantSearchPageSteps.i_click_on_the_tab_for_Test_Advisory()"
});
formatter.result({
  "duration": 1477504000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cli class\u003d\"text-center mr0 accordion-item accordion-gradient-100\" data-accordion-item\u003d\"\"\u003e...\u003c/li\u003e is not clickable at point (391, 525). Other element would receive the click: \u003cdiv id\u003d\"truste-consent-text\" class\u003d\"truste-messageColumn\"\u003e...\u003c/div\u003e\n  (Session info: headless chrome\u003d98.0.4758.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LTUS155170\u0027, ip: \u0027192.168.1.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\955113\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53549}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f3ba3cbad0d2856dd294a2508733cae3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pages.CognizantQEAPage.clickTestAdv(CognizantQEAPage.java:60)\r\n\tat stepdefinitions.CognizantSearchPageSteps.i_click_on_the_tab_for_Test_Advisory(CognizantSearchPageSteps.java:60)\r\n\tat ✽.When I click on the tab for “Test Advisory”(Cognizant.feature:23)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 278629000,
  "status": "passed"
});
});