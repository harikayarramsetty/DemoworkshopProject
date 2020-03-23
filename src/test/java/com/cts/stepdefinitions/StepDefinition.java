package com.cts.stepdefinitions;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.cts.base.LauchWebBrowser;
import com.cts.pages.ApparelAndShoesPage;
import com.cts.pages.DigitalDownloadsPage;
import com.cts.pages.ElectronicsPage;
import com.cts.pages.GiftCardspage;
import com.cts.pages.Jewellrypage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition {
	
	WebDriver driver;
	
	@Given("I have a browser with demoworkshop page")
	public void i_have_a_browser_with_demoworkshop_page() {
		
		LauchWebBrowser.start();
		this.driver= LauchWebBrowser.driver;
		
	}

	//1st scenario
	@When("I enter username as {string} and password as {string} and I go to electronics and click on phone and get the details of the product")
	public void i_enter_username_as_and_password_as_and_I_go_to_electronics_and_click_on_phone_and_get_the_details_of_the_product(String username, String password) throws IOException {
	    
		ElectronicsPage electronics = new ElectronicsPage(driver);
		//click on login 
		electronics.clickOnLogin();
		//enter user name
		electronics.enterUsername(username);
		//enter password
		electronics.enterPassword(password);
		//click on login button
		electronics.clickOnLoginButton();
		
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
		
	    LauchWebBrowser.endBrowser();
	
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
		
		LauchWebBrowser.endBrowser();

	}

		//3rd scenario
	
	@When("I enter username as {string} and password as {string} and I go to digital downloads and change the sort by to {string}")
	public void i_enter_username_as_and_password_as_and_I_go_to_digital_downloads_and_change_the_sort_by_to(String username, String password, String sort) {
	    
		
		ElectronicsPage electronics = new ElectronicsPage(driver);
		//click on login
		electronics.clickOnLogin();
		//enter username
		electronics.enterUsername(username);
		//enter password
		electronics.enterPassword(password);
		//click on login button
		electronics.clickOnLoginButton();
		
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
	  	
	  	LauchWebBrowser.endBrowser();
	    
	}


	//4th scenario
	
	@When("I enter username as {string} and password as {string} and I go to jewelry change the filter by price")
	public void i_enter_username_as_and_password_as_and_I_go_to_jewelry_change_the_filter_by_price(String username, String password) {
	    
		ElectronicsPage electronics = new ElectronicsPage(driver);
		//click on login
		electronics.clickOnLogin();
		//enter username
		electronics.enterUsername(username);
		//enter password
		electronics.enterPassword(password);
		//click on login button
		electronics.clickOnLoginButton();
		
		
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
		
		LauchWebBrowser.endBrowser();
		
	 }


	//5th scenario

	@When("I enter username as {string} and password as {string} and I go to gift cards change the view as to {string}")
	public void i_enter_username_as_and_password_as_and_I_go_to_gift_cards_change_the_view_as_to(String username, String password, String list) {
		ElectronicsPage electronics = new ElectronicsPage(driver);
		//click on login
		electronics.clickOnLogin();
		//enter username
		electronics.enterUsername(username);
		//enter password
		electronics.enterPassword(password);
		//click on login button
		electronics.clickOnLoginButton();
		
		GiftCardspage giftCard = new GiftCardspage(driver);
		//click on gift cards
		giftCard.clickOnGiftCards();
		//select list from the dropdown
		giftCard.selectClick(list);
		
	}

	@Then("It should be changed to list")
	public void it_should_be_changed_to_list() {
	  
		GiftCardspage giftCard = new GiftCardspage(driver);
		//storing the actual text in a variable
		String actItem = giftCard.getGiftCardName();
		//comparing the actal and excepted text
		Assert.assertEquals("$5 Virtual Gift Card", actItem);
		
		LauchWebBrowser.endBrowser();
		
	}
	
}
