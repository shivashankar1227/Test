package org.cucumber.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(
		features="src/test/java/features",
		glue={"org.cucumber.stepdefs"},
		plugin=
				{"pretty",
				"html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/CucumberTestReport.json",
				"rerun:target/cucumber-reports/re-run.txt"}
		)
public class LoginTest {

	public static WebDriver driver;
	private TestNGCucumberRunner testRunner;
	
	@BeforeClass
	public void setUP()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Automation\\chromedriver.exe");
		driver = new ChromeDriver();
		testRunner = new TestNGCucumberRunner(LoginTest.class);	
	}
	
	@Test(description="login",dataProvider="Features")
	public void login(CucumberFeatureWrapper cFeature)
	{
		testRunner.runCucumber(cFeature.getCucumberFeature());
	}
	
	@DataProvider(name="Features")
	public Object[][] getFeatures()
	{
		return testRunner.provideFeatures();
	}
	
	@AfterClass
	public void tearDown()
	{
		testRunner.finish();
	}
	
	
}
