package com.cts.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
public class ElectronicsPage {
	
	
	private By electronicsLoc = By.xpath("(//a[contains(text(),'Electronics')])[1]");
	private By cellphonesLoc = By.xpath("(//a[contains(text(),'Cell phones')])[4]");
	private By smartPhonesLoc = By.xpath("(//a[text()='Smartphone'])");
	private By descriptionLoc = By.xpath("//div[@itemprop='description']");
	private By idealLoc = By.xpath("//p[text()='Ideal for everyday use.']");
	
	private WebDriver driver;
	public ElectronicsPage(WebDriver driver)
	{
		this.driver=driver;
	}
	
	
	public void clickOnElectronics()
	{
		driver.findElement(electronicsLoc).click();
	}
	
	public void clickOnCellPhones()
	{
		driver.findElement(cellphonesLoc).click();
	}
	
	public void clickOnSmartphones()
	{
		driver.findElement(smartPhonesLoc).click();
	}
	
	public void getDetails(String tag) 
	{
		WebElement detailsBox = driver.findElement(descriptionLoc);
		List<WebElement> allDetails = detailsBox.findElements(By.tagName(tag));
		for(WebElement detail : allDetails)
		{
			String value = detail.getText();
			System.out.println(value);
			
		}
	
	}

	public String electronicsAssertion()
	{
		return driver.findElement(idealLoc).getText();
	}
	
}
