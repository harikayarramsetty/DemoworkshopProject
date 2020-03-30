package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class GiftCardspage {
	
	private By giftCardsLoc = By.xpath("(//a[contains(text(),'Gift Cards')])[1]");
	private By listLoc = By.id("products-viewmode");
	private By itemLoc = By.xpath("(//div[@class='item-box'])[1]");
	
	private WebDriver driver;
	public GiftCardspage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public void clickOnGiftCards()
	{
		driver.findElement(giftCardsLoc).click();
	}
	
	public int heightOfFirstElement()
	{
		WebElement item = driver.findElement(itemLoc);
		int height = item.getSize().getHeight();
		System.out.println(height);
		return height;
	}
	
	
	public void selectList(String list)
	{
		Select viewSelect = new Select(driver.findElement(listLoc));
		viewSelect.selectByVisibleText(list);
	}
	
	
}
