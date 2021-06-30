$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/1registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "\r\nAs a user I want to register my account on nopcommerce website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "User should not be able to register with any empty mandatory field",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Sanity"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should be able to see \"\u003cerrorMessage\u003e\" under first name field",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword",
        "errorMessage"
      ],
      "line": 37,
      "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;1"
    },
    {
      "cells": [
        "",
        "Patel",
        "dip",
        "abc1234",
        "abc1234",
        "First name is required."
      ],
      "line": 38,
      "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3253732200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User should not be able to register with any empty mandatory field",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Sanity"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter first name \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter last name \"Patel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"dip\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"abc1234\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"abc1234\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should be able to see \"First name is required.\" under first name field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 97750200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1188479900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "RegistrationStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1136960600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegistrationStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 1107598300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dip",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1107224800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1125396900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 26
    }
  ],
  "location": "RegistrationStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1083033400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 64703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 25
    }
  ],
  "location": "RegistrationStepdefs.iShouldBeAbleToSeeUnderFirstNameField(String)"
});
formatter.result({
  "duration": 39832000,
  "status": "passed"
});
formatter.after({
  "duration": 667561000,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/2login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2513911300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    },
    {
      "line": 13,
      "name": "@Sanity"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter email \"dipakp213@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"abc1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see \"Log out\" option",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 12900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 469980000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dipakp213@yahoo.com",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1115113700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1100682400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1028519400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 25
    }
  ],
  "location": "LoginStepdefs.iShouldBeAbleToSeeOption(String)"
});
