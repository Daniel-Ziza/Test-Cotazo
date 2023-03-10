Feature: Prerequisites

  Feature Prerequisites to create budgets in cotazo

  #@LMPTCOTAZO-200
  Scenario: Create a service order
    Given The user enters the instala page
    When The user enters the authorization data
    And The system obtains the token information
    Then The user enters the cockpit page
    And The user clicks on service order creation
    When The user fills out the service order creation form
    Then The user clicks on the save button
    And Search for service order
    And The link to the terms and conditions of sale is obtained
    And The user accepts the terms of service
    And The user searches for the service order
    And The user makes a manual distribution of the service
    And The technician agrees to perform the service
    And The client confirms the service
    And The technician starts the service
    And The technician terminates the service