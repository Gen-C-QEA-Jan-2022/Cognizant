package stepdefinitions;
import base.BaseTest;
import org.junit.Assert;
import pages.CognizantHomePage;
import pages.CognizantQEAPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pages.CognizantSearchPage;
import utils.Constants;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class CognizantSearchPageSteps extends BaseTest {


    CognizantSearchPage cognizantSearchPage = new CognizantSearchPage();
    CognizantQEAPage cognizantQEAPage;
    CognizantHomePage cognizantHomePage;


    @Given("^I am on the above page$")
    public void i_am_on_the_above_page() {
        // Write code here that turns the phrase above into concrete actions
        //cognizantSearchPage = cognizantHomePage.doSearch();
        String URL = prop.getProperty("baseURL");
        driver.get(URL);
        cognizantHomePage = new CognizantHomePage();
        cognizantSearchPage = cognizantHomePage.doSearch();
        cognizantQEAPage = cognizantSearchPage.gotoQEAPage();
        String expectedTitle = Constants.COGNIZANT_QEA_TITLE;
        Assert.assertEquals(expectedTitle, cognizantQEAPage.getTitle());
    }

    @When("^I click on the tab for “Application Development Testing”$")
    public void i_click_on_the_tab_for_Application_Development_Testing() {
        // Write code here that turns the phrase above into concrete actions
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        cognizantQEAPage.clickAppDevTesting();
    }

    @Then("^I should see a Highlights section noting “90% Faster test cycles”$")
    public void i_should_see_a_Highlights_section_noting_Faster_test_cycles() {
        Assert.assertEquals(Constants.QEA_APP_DEV_TESTING, cognizantQEAPage.verifyAppDevTesting()
                .replace("\n", " "));
    }

    @When("^I click on the tab for “Application Maintenance Testing”$")
    public void i_click_on_the_tab_for_Application_Maintenance_Testing() {
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        cognizantQEAPage.clickAppMainTesting();
    }

    @Then("^I should see a Highlights section noting “ZERO Regression defect leakage to UAT”$")
    public void i_should_see_a_Highlights_section_noting_ZERO_Regression_defect_leakage_to_UAT() {
        Assert.assertEquals(Constants.QEA_APP_MAIN_TESTING, cognizantQEAPage.verifyAppMainTesting()
                .replace("\n", " "));
    }

    @When("^I click on the tab for “Test Advisory”$")
    public void i_click_on_the_tab_for_Test_Advisory() {
        cognizantQEAPage.clickTestAdv();
    }

    @Then("^I should see a Highlights section noting \"([^\"]*)\"$")
    public void i_should_see_a_Highlights_section_noting(String arg1) {
        Assert.assertEquals(Constants.QEA_TEST_ADV, cognizantQEAPage.verifyTestAdv()
                .replace("\n", " "));
    }
}
