package pages;

import base.BaseTest;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Constants;

import java.util.concurrent.TimeUnit;

public class CognizantSearchPage extends BaseTest {

    @FindBy(xpath="//*[@id='leftSearchDetails']/div[3]/p[1]/a")
    WebElement QEALink;

    public CognizantSearchPage(){
        PageFactory.initElements(driver, this);
    }

    public String getTitle(){
        return driver.getTitle();
    }


    //write method that verify that I should find a link for “Quality Engineering & Assurance in Digital – Cognizant”
    public boolean verifyLink(){
        System.out.println(QEALink.getText());
        if (QEALink.getText().equalsIgnoreCase("https://www.cognizant.com/ch/en/qualityengineeringandassurance")) return true;
        else return false;
    }
    public CognizantQEAPage gotoQEAPage(){
        QEALink.click();
        return new CognizantQEAPage();
    }
}
