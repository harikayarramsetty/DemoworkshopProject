$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/demo.feature");
formatter.feature({
  "name": "In order to buy products",
  "description": "         As a e-commerce customer\n         I want to register into the application",
  "keyword": "Feature"
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
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter login details from excel \"src/test/resources/resources/DemowebShop.xlsx\" with sheetname \"loginDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_login_details_from_excel_with_sheetname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the details of phone",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_should_get_the_details_of_phone()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Setting the quantity of the product to 2",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I  go to apparel and shoes and click on any product and change the quantity to \u00272\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_go_to_apparel_and_shoes_and_click_on_any_product_and_change_the_quantity_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The quantity of the product should be changed to \u00272\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.the_quantity_of_the_product_should_be_changed_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Sort By price",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027\u003cusername\u003e\u0027 and password as \u0027\u003cpassword\u003e\u0027 and I go to digital downloads and change the sort by to \u0027Price: High to Low\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "It should be sorted to high to low",
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
    },
    {
      "cells": [
        "trustxd@gmail.com",
        "trustXD"
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
  "name": "Sort By price",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027mohithayarramsetty@gmail.com\u0027 and password as \u0027yarramsetty\u0027 and I go to digital downloads and change the sort by to \u0027Price: High to Low\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_digital_downloads_and_change_the_sort_by_to(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should be sorted to high to low",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.it_should_be_sorted_to_high_to_low()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Sort By price",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027trustxd@gmail.com\u0027 and password as \u0027trustXD\u0027 and I go to digital downloads and change the sort by to \u0027Price: High to Low\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_digital_downloads_and_change_the_sort_by_to(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should be sorted to high to low",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.it_should_be_sorted_to_high_to_low()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Filter by price",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027\u003cusername\u003e\u0027 and password as \u0027\u003cpassword\u003e\u0027 and I go to jewelry change the filter by price",
  "keyword": "When "
});
formatter.step({
  "name": "It should be change to 700-3000 filter",
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
    },
    {
      "cells": [
        "trustxd@gmail.com",
        "trustXD"
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
  "name": "Filter by price",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027mohithayarramsetty@gmail.com\u0027 and password as \u0027yarramsetty\u0027 and I go to jewelry change the filter by price",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_jewelry_change_the_filter_by_price(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should be change to 700-3000 filter",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.it_should_be_change_to_filter(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Filter by price",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027trustxd@gmail.com\u0027 and password as \u0027trustXD\u0027 and I go to jewelry change the filter by price",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_jewelry_change_the_filter_by_price(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should be change to 700-3000 filter",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.it_should_be_change_to_filter(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "View as list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027\u003cusername\u003e\u0027 and password as \u0027\u003cpassword\u003e\u0027 and I go to gift cards change the view as to \u0027List\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "It should be changed to list",
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
    },
    {
      "cells": [
        "trustxd@gmail.com",
        "trustXD"
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
  "name": "View as list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027mohithayarramsetty@gmail.com\u0027 and password as \u0027yarramsetty\u0027 and I go to gift cards change the view as to \u0027List\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_gift_cards_change_the_view_as_to(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should be changed to list",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.it_should_be_changed_to_list()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: changed from grid to list expected:\u003c280\u003e but was:\u003c145\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat com.cts.stepdefinitions.StepDefinition.it_should_be_changed_to_list(StepDefinition.java:260)\r\n\tat ✽.It should be changed to list(file:///D:/SeleniumProject/DemoWorkShopProject2/src/main/resources/feature/demo.feature:41)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
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
  "name": "View as list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027trustxd@gmail.com\u0027 and password as \u0027trustXD\u0027 and I go to gift cards change the view as to \u0027List\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.i_enter_username_as_and_password_as_and_I_go_to_gift_cards_change_the_view_as_to(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should be changed to list",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinition.it_should_be_changed_to_list()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: changed from grid to list expected:\u003c280\u003e but was:\u003c145\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat com.cts.stepdefinitions.StepDefinition.it_should_be_changed_to_list(StepDefinition.java:260)\r\n\tat ✽.It should be changed to list(file:///D:/SeleniumProject/DemoWorkShopProject2/src/main/resources/feature/demo.feature:41)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});