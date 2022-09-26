Feature: Support request

Feature to create a support request

  Background:
    Given The user opens cotazo website

  Scenario: Support request with login problems in Cotazo
    When The user goes to the support request
    And The user fills in the support request form and send it
    And The user returns to the login page
    Then The administrator can see the support request for access problems
    When The user logs out
    And The "installer" cannot see the request on the support request page
    When The user logs out
    And The "technician" cannot see the request on the support request page

  Scenario: Support request by an installer in Cotazo
    When An "installer" logs in to cotazo
    And The user goes to the support request page
    And The "installer" creates a new support request
    Then The "installer" verifies that he can see the created request
    When The user logs out
    And The "administrator" can see the request on the support request page
    When The user logs out
    And The "technician" cannot see the request on the support request page

  Scenario: Support request by an technician in Cotazo
    When An "technician" logs in to cotazo
    And The user goes to the support request page
    And The "technician" creates a new support request
    Then The "technician" verifies that he can see the created request
    When The user logs out
    And The "administrator" can see the request on the support request page
    When The user logs out
    And The "installer" can see the request on the support request page

  Scenario: Flow of a support request management
    When An "administrator" logs in to cotazo
    And The user goes to the support request page
    Then The administrator changes the status of the order to "in analysis"
    And The "administrator" sends a comment
    And The user logs out
    When An "installer" logs in to cotazo
    And The user goes to the support request page
    Then The installer checks the status of the support request
    And The installer checks the comment received
    And The "installer" sends a comment
    And The user logs out
    When An "administrator" logs in to cotazo
    And The user goes to the support request page
    Then The administrator checks the comment received
    Then The administrator changes the status of the order to "pending"
    And The "administrator" sends a comment
    And The user logs out
    When An "installer" logs in to cotazo
    And The user goes to the support request page
    Then The installer checks the status of the support request
    And The user logs out
    When An "administrator" logs in to cotazo
    And The user goes to the support request page
    Then The administrator checks the comment received
    Then The administrator changes the status of the order to "concluded"
    And The user logs out
    When An "installer" logs in to cotazo
    And The user goes to the support request page
    Then The installer checks the status of the support request

  Scenario: Negative flow of support request creation
    Given The user opens cotazo website
    When The user goes to the support request
    And The user enters invalid "email" values
    And The subject is in read-only
    And The user enters invalid "messages" values
    Then The support request cannot be sent
    And The user returns to the login page
    When An "installer" logs in to cotazo
    And The user goes to the support request page
    And The user go to the create new support request
    And The user enters invalid "subject" values
    And The user enters invalid "messages" values
    Then The support request cannot be sent