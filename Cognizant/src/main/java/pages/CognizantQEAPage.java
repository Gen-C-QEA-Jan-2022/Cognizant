package pages;

import base.BaseTest;
import org.openqa.selenium.support.PageFactory;

public class CognizantQEAPage extends BaseTest {
    public CognizantQEAPage(){
        PageFactory.initElements(driver, this);
    }

    public String getTitle(){
        return driver.getTitle();
    }

    public void verifyAppDevTesting(){
        //todo
    }
    public void verifyAppMainTesting(){
        //todo
    }
    public void verifyTestAdv(){
        //todo
    }
}
