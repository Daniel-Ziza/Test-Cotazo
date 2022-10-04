Feature: Budget acceptance flow

Feature Budget acceptance flow between Cotazo and Instala


  Scenario: Verify budged available in store in Cotazo
    Given The user logs in Cotazo
    When The user searches a budget
    Then The user should see the tag "budget available in store"

  Scenario: Verify that the documents have been synchronized in Instala and indicate that the budget has been sent to the customer
    Given The user logs in instala
    When The user searches for the service order
    Then The user verifies that the budgets are correctly loaded
    And The user indicates that the budget has been sent to the customer

  Scenario: Verify that the budget is awaiting a response from the customer in Cotazo
    Given The user logs in Cotazo
    When The user searches a budget
    Then The user should see the tag "waiting for customer response"

  Scenario: The user indicates that the budget was approved by the customer in Instala
    Given The user logs in instala
    When The user searches for the service order
    Then The user indicates that the budget was approved by the customer

  Scenario: Verify that the budget is accepted by the customer in Cotazo
    Given The user logs in Cotazo
    When The user searches a budget
    Then The user should see the tag "budget Accepted"