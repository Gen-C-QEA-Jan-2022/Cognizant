package pages;

import base.BaseTest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.Constants;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class CognizantQEAPage extends BaseTest {
    @FindBy(xpath="//*[@id=\"panel2-label\"]/h3")
    WebElement appDevTesting; //Application Dev Testing

    @FindBy(xpath="//*[@id=\"panel3-label\"]/h3")
    WebElement appMainTesting; //Application Maintenance Testing

    @FindBy(xpath="//*[@id=\"panel4-label\"]/h3")
    WebElement testAdv; //Test advisory

    public CognizantQEAPage(){
        PageFactory.initElements(driver, this);
    }

    public String getTitle(){
        return driver.getTitle();
    }

    public void clickAppDevTesting() {
        appDevTesting.click();
    }

    public String verifyAppDevTesting(){
        //I should see a Highlights section noting “90% Faster test cycles”
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until(ExpectedConditions.visibilityOf(appDevTesting));
        return driver.findElement(By.xpath("//*[@id='panel2']/div/div[3]/div/div[2]")).getText();
    }

    public void clickAppMainTesting() {
        new WebDriverWait(driver, Duration.ofSeconds(5)).until(ExpectedConditions.elementToBeClickable(appMainTesting)).click();
    }

    public String verifyAppMainTesting(){
        //I should see a Highlights section noting “ZERO Regression defect leakage to UAT”
        WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(5));
        wait.until(ExpectedConditions.visibilityOf(appMainTesting));
        return driver.findElement(By.xpath("//*[@id='panel3']/div/div[3]/div/div[3]")).getText();
    }

    public void clickTestAdv() {
        testAdv.click();
        WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(5));
        wait.until(ExpectedConditions.visibilityOf(testAdv));
    }
    public String verifyTestAdv(){
        //I should see a Highlights section noting “$3 mm Cost savings in 3 years”
        return driver.findElement(By.xpath("//*[@id='panel4']/div/div[3]/div/div[2]")).getText();
    }
}
