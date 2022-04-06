package stepdefinitions;
import base.BaseTest;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.CognizantHomePage;
import pages.CognizantQEAPage;
import pages.CognizantSearchPage;
import utils.Constants;


public class CognizantHomePageSteps extends BaseTest {


    @Before
    public void openBrowser(){
        BaseTest.setupBrowser();
    }

    @After
    public void closeBrowser(){
        driver.close();
    }

    CognizantHomePage cognizantHomePage;
    CognizantSearchPage cognizantSearchPage;


    @Given("^I am on the cognizant.com page$")
    public void i_am_on_the_cognizant_com_page() {
        // Write code here that turns the phrase above into concrete actions
        String URL = prop.getProperty("baseURL");
        driver.get(URL);
        cognizantHomePage = new CognizantHomePage();

        //verify we are on the cognizant Home Page
        String expectedTitle = Constants.COGNIZANT_HOME_TITLE;
        Assert.assertEquals(expectedTitle, cognizantHomePage.getTitle());
    }

    @When("^I search for “QEA”$")
    public void i_search_for_QEA(){
        // Write code here that turns the phrase above into concrete actions
        cognizantSearchPage = cognizantHomePage.doSearch();

        String expectedTitle = Constants.COGNIZANT_SEARCH_TITLE;
        Assert.assertEquals(expectedTitle, cognizantSearchPage.getTitle());
    }

    @Then("^I should find a link for “Quality Engineering & Assurance in Digital – Cognizant”$")
    public void i_should_find_a_link_for_Quality_Engineering_Assurance_in_Digital_Cognizant(){
        // Write code here that turns the phrase above into concrete actions
        //We do not click the QEA page, we need to verify that the link exist
        Assert.assertTrue(cognizantSearchPage.verifyLink());
    }


}
