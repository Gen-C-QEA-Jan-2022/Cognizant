package pages;

import base.BaseTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CognizantSearchPage extends BaseTest {

    @FindBy(xpath="//*[@id='leftSearchDetails']/div[3]/h5/a")
    WebElement QEALink;

    public CognizantSearchPage(){
        PageFactory.initElements(driver, this);
    }

    public String getTitle(){
        return driver.getTitle();
    }

    public CognizantQEAPage gotoQEAPage(){
        QEALink.click();
        return new CognizantQEAPage();
    }
}
