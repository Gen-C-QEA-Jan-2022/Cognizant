package pages;

import base.BaseTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CognizantHomePage extends BaseTest {
    @FindBy(xpath="/html/body/div[1]/div/div/div[6]/div/div/ul/li[10]/a")
    WebElement search;
    @FindBy(xpath="//*[@id='tagsChk']")
    WebElement searchBar;
    @FindBy(xpath="/html/body/div[1]/div/div/div[6]/div/div/ul/li[10]/ul/li/div[1]/div/h5")
    WebElement searchIconInSearchBar;

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
        try {
            Thread.sleep(5000);
        } catch (Exception e){
            e.printStackTrace();
        }
        return new CognizantSearchPage();
    }
}
