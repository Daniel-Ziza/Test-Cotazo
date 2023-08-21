Feature: Support request on mobile

    Feature to create a support request on mobile

    Background:
        Given Change the screen size to "mobile"
        #@LMPTCOTAZO-196
        Given The user opens cotazo website "username page"

    @LMPTCOTAZO-383
    Scenario: Support request with login problems in Cotazo
        When The user goes to the support request
        And The user fills in the support request form and send it
        And The user returns to the login page
        And The user reloads the page
        And An "administrator" logs in to cotazo
        And The user clicks on toggle button in "mobile"
        Then The administrator can see the support request for access problems
        And The user clicks on toggle button in "mobile"
        When The user logs out
        Given The user opens cotazo website "username page"
        And An "installer" logs in to cotazo
        And The user clicks on toggle button in "mobile"
        And The "installer" cannot see the request on the support request page
        And The user clicks on toggle button in "mobile"
        When The user logs out
        And The user reloads the page
        And An "technician" logs in to cotazo
        And The user clicks on toggle button in "mobile"
        And The "technician" cannot see the request on the support request page

    @LMPTCOTAZO-384
    Scenario: Support request by an installer in Cotazo
        When An "installer" logs in to cotazo
        And The user clicks on toggle button in "mobile"
        And The user goes to the support request page
        And The "installer" creates a new support request in "mobile"
        Then The "installer" verifies that he can see the created request
        And The user clicks on toggle button in "mobile"
        And The user logs out
        And The user reloads the page
        When An "administrator" logs in to cotazo
        And The user clicks on toggle button in "mobile"
        Then The "administrator" can see the request on the support request page
        And The user clicks on toggle button in "mobile"
        And The user logs out
        Given The user opens cotazo website "username page"
        When An "technician" logs in to cotazo
        And The user clicks on toggle button in "mobile"
        Then The "technician" cannot see the request on the support request page

@LMPTCOTAZO-385
Scenario: Support request by an technician in Cotazo
    When An "technician" logs in to cotazo
    And The user goes to the support request page
    And The "technician" creates a new support request
    Then The "technician" verifies that he can see the created request
    When The user logs out
    And The "administrator" can see the request on the support request page
    When The user logs out
    And The "installer" can see the request on the support request page

@LMPTCOTAZO-386
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

@LMPTCOTAZO-387
Scenario: Negative flow of support request creation
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