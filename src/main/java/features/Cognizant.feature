Feature:  Test Cognizant Website

  Scenario: Home Page
    Given I am on the cognizant.com page
    When I search for “QEA”
    Then I should find a link for “Quality Engineering & Assurance in Digital – Cognizant”


  Scenario: Verify Application Development Testing Section
    Given I am on the above page
    When I click on the tab for “Application Development Testing”
    Then I should see a Highlights section noting “90% Faster test cycles”


  Scenario: Verify Application Maintenance Testing Section
    Given I am on the above page
    When I click on the tab for “Application Maintenance Testing”
    Then I should see a Highlights section noting “ZERO Regression defect leakage to UAT”


  Scenario: Verify Test Advisory Section
    Given I am on the above page
    When I click on the tab for “Test Advisory”
    Then I should see a Highlights section noting "$3 mm Cost savings in 3 years"