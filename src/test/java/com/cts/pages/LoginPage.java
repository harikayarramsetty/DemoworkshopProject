package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
	
	private  By loginLoc = By.linkText("Log in"); 
	private By usernameLoc = By.id("Email");
	private By passwordLoc = By.id("Password");
	private By loginButtonLoc = By.xpath("//input[@value='Log in']");
	
	private WebDriver driver;
	public LoginPage(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public  void clickOnLogin()
	{
		driver.findElement(loginLoc).click();
	}
	
	public void enterUsername(String username)
	{
		driver.findElement(usernameLoc).sendKeys(username);
	}
	
	public void enterPassword(String password)
	{
		driver.findElement(passwordLoc).sendKeys(password);
	}
	
	public void clickOnLoginButton()
	{
		driver.findElement(loginButtonLoc).click();
	}
	
	
	

}
