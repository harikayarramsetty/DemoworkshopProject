package com.cts.stepdefinitions;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.cts.base.LaunchWebBrowser;
import com.cts.pages.ApparelAndShoesPage;
import com.cts.pages.DigitalDownloadsPage;
import com.cts.pages.ElectronicsPage;
import com.cts.pages.GiftCardspage;
import com.cts.pages.Jewellrypage;
import com.cts.pages.LoginPage;
import com.cts.utils.ReadExcel;

import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition {
	
	WebDriver driver;
	
	@After
	public void endBrowser()
	{
		Date date = new Date();
		String dateStr = date.toString().replace(":", "-");
		
		//taking screenshot
		TakesScreenshot ts = (TakesScreenshot) driver;
		File file = ts.getScreenshotAs(OutputType.FILE);
		file.renameTo(new File("src/test/resources/screenshots/image" +dateStr+ ".png"));
		
		//closing the browser
		driver.quit();
	}

	
	@Given("I have a browser with demoworkshop page")
	public void i_have_a_browser_with_demoworkshop_page() {
		//launching the web browser
		LaunchWebBrowser.start("ch");
		this.driver= LaunchWebBrowser.driver;
		
	}

	
	//1st scenario
	@When("I enter login details from excel {string} with sheetname {string}")
	public void i_enter_login_details_from_excel_with_sheetname(String fileName, String sheetName) throws IOException {
		//fetching the details from excel
		String data[][] = ReadExcel.getSheetIntoStringArray(fileName, sheetName);
		
		LoginPage login = new LoginPage(driver);
		ElectronicsPage electronics = new ElectronicsPage(driver);
		//click on login 
		login.clickOnLogin();
		//enter user name
		login.enterUsername(data[0][0]);
		//enter password
		login.enterPassword(data[0][1]);
		//click on login button
		login.clickOnLoginButton();
		
		//click on electronics
		electronics.clickOnElectronics();
		//click on cell phones
		electronics.clickOnCellPhones();
		//click on smart phones
		electronics.clickOnSmartphones();
		//getting the details of the product
		electronics.getDetails("p");	
		
	}

	@Then("I should get the details of phone")
	public void i_should_get_the_details_of_phone() {
		
		ElectronicsPage electronics = new ElectronicsPage(driver);
		//storing the actual text in a variable
		String actText = electronics.electronicsAssertion();
		//comparing the actual and expected text
		Assert.assertEquals("Ideal for everyday use.", actText);
			
	}

	//2nd scenario
	@When("I  go to apparel and shoes and click on any product and change the quantity to {string}")
	public void i_go_to_apparel_and_shoes_and_click_on_any_product_and_change_the_quantity_to(String qty) {
	    
	
		ApparelAndShoesPage apparel = new ApparelAndShoesPage(driver);
		//click on apparel and shoes
		apparel.clickOnApparelAndShoes();
		//click on blue and green sneaker
		apparel.clickOnBlueAndGreenSneaker();
		//clear the quantity of the shoes
		apparel.clearQuantity();
		//enter the quantity of the shoes
		apparel.enterQuantity(qty);
		//click on add to cart
		apparel.clickOnAddtoCart();
		//click on shopping cart
		apparel.clickOnShoppingCart();
		
	}

	@Then("The quantity of the product should be changed to {string}")
	public void the_quantity_of_the_product_should_be_changed_to(String expQty) {
	   
		ApparelAndShoesPage apparel = new ApparelAndShoesPage(driver);
		//stoing the actual quantity  in a variable
		String actQty = apparel.quantityAssertion();
		System.out.println(actQty);
		//comparing the actual and expected quantity
		Assert.assertEquals(expQty, actQty);
		
	}

	//3rd scenario
	@When("I enter username as {string} and password as {string} and I go to digital downloads and change the sort by to {string}")
	public void i_enter_username_as_and_password_as_and_I_go_to_digital_downloads_and_change_the_sort_by_to(String username, String password, String sort) {
	    
		LoginPage login = new LoginPage(driver);
		//click on login
		login.clickOnLogin();
		//enter username
		login.enterUsername(username);
		//enter password
		login.enterPassword(password);
		//click on login button
		login.clickOnLoginButton();
		
		DigitalDownloadsPage digital = new DigitalDownloadsPage(driver);
		//click on digital downloads
		digital.clickOnDigitalDownloads();
		//select price from high to low
		digital.selectPrice(sort);
	}

	
	@Then("It should be sorted to high to low")
	public void it_should_be_sorted_to_high_to_low() {
		
		DigitalDownloadsPage digital = new DigitalDownloadsPage(driver);
		//getting the price of first product
		String ele1 = digital.getFirstPrice();
		//getting the price of second product
		String ele2 = digital.getSecondprice();
		//getting the price of third product
	  	String ele3 = digital.getThirdPrice();
	  		
	  	//converting string to double
	  	double firstEle = Double.parseDouble(ele1);
	  	double secondEle = Double.parseDouble(ele2);
	  	double thirdEle = Double.parseDouble(ele3);
	  	
	  	//comparing the prices
	  	if(firstEle > secondEle && secondEle > thirdEle)
	  	{
	  		System.out.println("sorted");
	  	}
	  	else
	  	{
	  		Assert.fail("not sorted");
	  	}
	  	
	    
	}


	//4th scenario
	@When("I enter username as {string} and password as {string} and I go to jewelry change the filter by price")
	public void i_enter_username_as_and_password_as_and_I_go_to_jewelry_change_the_filter_by_price(String username, String password) {
	    
		LoginPage login = new LoginPage(driver);
		//click on login
		login.clickOnLogin();
		//enter username
		login.enterUsername(username);
		//enter password
		login.enterPassword(password);
		//click on login button
		login.clickOnLoginButton();
		
		
		Jewellrypage jewelry = new Jewellrypage(driver);
		//click on jewelry
		jewelry.clickOnJewelry();
		//filter by price
		jewelry.clickOnPrice();
	}
	
	@Then("It should be change to {int}-{int} filter")
	public void it_should_be_change_to_filter(Integer value1, Integer value2) {
		
		Jewellrypage jewelry = new Jewellrypage(driver);
		//storing the actual price in a variable
		String valueText = jewelry.getPrice();
		//coverting string to integer
		valueText = valueText.replace(".00", "");
		int value = Integer.parseInt(valueText);

		//comparing the prices
		if (value > value1 && value < value2) {
			System.out.println("filterd by price");
		} else {
			Assert.fail("Do not filtered by value");
		}
				
	 }


	//5th scenario
	@When("I enter username as {string} and password as {string} and click on giftcards")
	public void i_enter_username_as_and_password_as_and_click_on_giftcards(String username, String password) {
		LoginPage login = new LoginPage(driver);
		//click on login
		login.clickOnLogin();
		//enter username
		login.enterUsername(username);
		//enter password
		login.enterPassword(password);
		//click on login button
		login.clickOnLoginButton();
		
		GiftCardspage giftCard = new GiftCardspage(driver);
		//click on gift cards
		giftCard.clickOnGiftCards();
		
	}

	@Then("I sort grid to {string}")
	public void i_sort_grid_to(String list) {
		GiftCardspage giftCard = new GiftCardspage(driver); 
		GiftCardspage heightOfItem = new GiftCardspage(driver);
		
		//getting the height of first product when it is viewed as grid
		int actGridHeight = heightOfItem.heightOfFirstElement();
		
		//changing to list from grid
		giftCard.selectList(list);
		
		//getting the height of the first product when it is viewed as list
		int actListHeight = heightOfItem.heightOfFirstElement();
				
		//comparing the height of the first product when it is viewed in grid and list
		//Assert.assertEquals("changed from grid to list", actGridHeight, actListHeight);
		boolean check = actGridHeight!=actListHeight;
		Assert.assertTrue("Not changed from grid to list", check);
		 
	}
	
}
