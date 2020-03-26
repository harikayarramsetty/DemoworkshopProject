$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/demo.feature");
formatter.feature({
  "name": "In order to buy products",
  "description": "         As a e-commerce customer\n         I want to register into the application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Details of phone",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027\u003cusername\u003e\u0027 and password as \u0027\u003cpassword\u003e\u0027 and I go to electronics and click on phone and get the details of the product",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the details of phone",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mohithayarramsetty@gmail.com",
        "yarramsetty"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with demoworkshop page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_have_a_browser_with_demoworkshop_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Details of phone",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027mohithayarramsetty@gmail.com\u0027 and password as \u0027yarramsetty\u0027 and I go to electronics and click on phone and get the details of the product",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_electronics_and_click_on_phone_and_get_the_details_of_the_product(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d(//a[text()\u003d\u0027Smartphone\u0027])\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HARIKA\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.pages.ElectronicsPage.clickOnSmartphones(ElectronicsPage.java:36)\r\n\tat com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_electronics_and_click_on_phone_and_get_the_details_of_the_product(StepDefinition.java:51)\r\n\tat ✽.I enter username as \u0027mohithayarramsetty@gmail.com\u0027 and password as \u0027yarramsetty\u0027 and I go to electronics and click on phone and get the details of the product(file:///D:/SeleniumProject/DemoWorkShopProject2/src/main/resources/feature/demo.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should get the details of phone",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_should_get_the_details_of_phone()"
});
formatter.result({
  "status": "skipped"
});
