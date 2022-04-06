package pages;

import base.BaseTest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CognizantQEAPage extends BaseTest {
    @FindBy(xpath="//*[@id='panel2-label']/h3")
    WebElement appDevTesting; //Application Dev Testing

    @FindBy(xpath="//*[@id='panel3-label']/h3")
    WebElement appMainTesting; //Application Maintenance Testing

    @FindBy(xpath="//*[@id='panel4-label']/h3")
    WebElement testAdv; //Test advisory

    public CognizantQEAPage(){
        PageFactory.initElements(driver, this);
    }

    public String getTitle(){
        return driver.getTitle();
    }

    public void clickAppDevTesting() {
        appDevTesting.click();
        try {
            Thread.sleep(10000);
        } catch (Exception e) {}
    }

    public String verifyAppDevTesting(){
        //todo
        //I should see a Highlights section noting “90% Faster test cycles”
       return driver.findElement(By.xpath("//*[@id='panel2']/div/div[3]/div/div[2]")).getText();

    }

    public void clickAppMainTesting() {
        appMainTesting.click();
        try {
            Thread.sleep(10000);
        } catch (Exception e) {}
    }
    public String verifyAppMainTesting(){
        //todo
        //I should see a Highlights section noting “ZERO Regression defect leakage to UAT”
        return driver.findElement(By.xpath("//*[@id='panel3']/div/div[3]/div/div[3]")).getText();
    }

    public void clickTestAdv() {
        testAdv.click();
        try {
            Thread.sleep(10000);
        } catch (Exception e) {}
    }
    public String verifyTestAdv(){
        //todo
        //I should see a Highlights section noting “$3 mm Cost savings in 3 years”
        return driver.findElement(By.xpath("//*[@id='panel4']/div/div[3]/div/div[2]")).getText();
    }
}
