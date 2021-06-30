Feature: Registration Test

  As a user I want to register my account on nopcommerce website

  @Smoke
  Scenario: User should navigate to register page successfully
    Given I am on homepage
    When I click on register link
    Then I should be able to navigate to the registration page
    And I should be able to see "Register" page title

  @Smoke@Regression
  Scenario: User should able to register with valid inputs to all mandatory field
    Given I am on homepage
    When I click on register link
    And I enter first name "Dipak"
    And I enter last name "Patel"
    And I enter email "dip1akp213@yahoo.com"
    And I enter password "abc1234"
    And I enter confirm password "abc1234"
    And I click on register button
    Then I should be able to register
    And I should be able to see "Your registration completed" message

  @Sanity@Regression
  Scenario Outline: User should not be able to register with any empty mandatory field
    Given I am on homepage
    When I click on register link
    And I enter first name "<firstName>"
    And I enter last name "<lastName>"
    And I enter email "<email>"
    And I enter password "<password>"
    And I enter confirm password "<confirmPassword>"
    And I click on register button
    Then I should be able to see "<errorMessage>" under first name field
    Examples:
      | firstName | lastName | email | password | confirmPassword | errorMessage            |
      |           | Patel    | dip   | abc1234  | abc1234         | First name is required. |