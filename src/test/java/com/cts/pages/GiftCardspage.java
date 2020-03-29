package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class GiftCardspage {
	
	private By giftCardsLoc = By.xpath("(//a[contains(text(),'Gift Cards')])[1]");
	private By listLoc = By.id("products-viewmode");
	private By gridHeightLoc = By.xpath("(//div[@class='item-box'])[1]");
	private By listHeightLoc = By.xpath("(//div[@class='item-box'])[1]");
	
	private WebDriver driver;
	public GiftCardspage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public void clickOnGiftCards()
	{
		driver.findElement(giftCardsLoc).click();
	}
	
	public int heightOfFirstElementInGrid()
	{
		WebElement item1 = driver.findElement(gridHeightLoc);
		int height1 = item1.getSize().getHeight();
		System.out.println(height1);
		return height1;
	}
	
	
	public void selectList(String list)
	{
		Select viewSelect = new Select(driver.findElement(listLoc));
		viewSelect.selectByVisibleText(list);
	}
	
	public int heightOfFirstElementInList()
	{
		WebElement listItem1 = driver.findElement(listHeightLoc);
		int listHeight1 = listItem1.getSize().getHeight();
		System.out.println(listHeight1);
		return listHeight1;
	}
	
	
	
}
