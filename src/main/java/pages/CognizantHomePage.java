package pages;

import base.BaseTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.Constants;

import java.util.concurrent.TimeUnit;

public class CognizantHomePage extends BaseTest {
    @FindBy(xpath="/html/body/div[1]/div/div/div[6]/div/div/ul/li[10]/a")
    WebElement search;
    @FindBy(xpath="//*[@id='tagsChk']")
    WebElement searchBar;
    @FindBy(xpath="/html/body/div[1]/div/div/div[6]/div/div/ul/li[10]/ul/li/div[1]/div/h5")
    WebElement searchIconInSearchBar;
    @FindBy(xpath="//*[@id='leftSearchDetails']/div[3]/p[1]/a")
    WebElement QEALink;
    public CognizantHomePage(){
        PageFactory.initElements(driver, this);
    }

    public String getTitle(){
        return driver.getTitle();
    }

    public CognizantSearchPage doSearch(){
        //todo
        //search for "QEA"
        //should return search page?
        search.click();
        searchBar.sendKeys(prop.getProperty("searchOne"));
        searchIconInSearchBar.click();
        //try {
         //   Thread.sleep(5000);
        //} catch (Exception e){
         //   e.printStackTrace();
        //}
        //driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
        WebDriverWait wait = new WebDriverWait(driver,5);
        wait.until(ExpectedConditions.visibilityOf(QEALink));
        return new CognizantSearchPage();
    }
}
