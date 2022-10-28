Feature: Budget refusal flow

Feature Budget refusal flow between Cotazo and Instala

  @LMPTCOTAZO-223
  Scenario: Verify budged available in store in Cotazo
    Given The user logs in Cotazo
    When The user searches a budget
    Then The user should see the tag "budget available in store"

  @LMPTCOTAZO-224
  Scenario: Verify that the documents have been synchronized in Instala and indicate that the budget has been sent to the customer
    Given The user logs in instala
    When The user searches for the service order
    Then The user verifies that the budgets are correctly loaded
    And The user indicates that the budget has been sent to the customer

  @LMPTCOTAZO-225
  Scenario: Verify that the budget is awaiting a response from the customer in Cotazo
    Given The user logs in Cotazo
    When The user searches a budget
    Then The user should see the tag "waiting for customer response"

  @LMPTCOTAZO-226
  Scenario: The user indicates that the quotation was refused by the customer in Instala
    Given The user logs in instala
    When The user searches for the service order
    Then The user indicates that the budget was refused by the customer

  @LMPTCOTAZO-227
  Scenario: Verify that the budget is accepted by the customer in Cotazo
    Given The user logs in Cotazo
    When The user searches a budget
    Then The user should see the tag "budget refused by the customer"