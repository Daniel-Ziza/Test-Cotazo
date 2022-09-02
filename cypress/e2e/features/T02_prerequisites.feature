Feature: Prerequisites

Feature Prerequisites to create budgets in cotazo

  Scenario: Create a service order
    Given The user successfully access the INSTALA system using a pre-existing URL containing an auth token
    And The user clicks on service order creation
    When The user fills out the service order creation form
    Then The user clicks on the save button
    And The user accepts the terms of service
    And The user searches for the service order
    And The user makes a manual distribution of the service
    And The technician agrees to perform the service
    And The client confirms the service
    And The technician starts the service
    And The technician terminates the service