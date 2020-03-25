$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/demo.feature");
formatter.feature({
  "name": "In order to buy products",
  "description": "         As a e-commerce customer\n         I want to register into the application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "View as list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
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
  "status": "passed"
});
});