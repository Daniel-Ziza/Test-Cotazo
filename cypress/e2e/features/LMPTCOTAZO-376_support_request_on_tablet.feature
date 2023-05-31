Feature: Support request on tablet

    Feature to create a support request on tablet

    Background:
        #@LMPTCOTAZO-350
        Given Change the screen size to "tablet"
        #@LMPTCOTAZO-196
        And The user opens cotazo website

    @LMPTCOTAZO-377
    Scenario: Support request with login problems in Cotazo
        When The user goes to the support request
        And The user fills in the support request form and send it
        And The user returns to the login page
        And The user reloads the page
        And An "administrator" logs in to cotazo
        And The user clicks on toggle button
        Then The administrator can see the support request for access problems
        And The user clicks on toggle button
        When The user logs out
        And The user reloads the page
        And An "installer" logs in to cotazo
        And The user clicks on toggle button
        And The "installer" cannot see the request on the support request page
        And The user clicks on toggle button
        When The user logs out
        And The user reloads the page
        And An "technician" logs in to cotazo
        And The user clicks on toggle button
        And The "technician" cannot see the request on the support request page

    @LMPTCOTAZO-378
    Scenario: Support request by an installer in Cotazo
        When An "installer" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        And The "installer" creates a new support request
        Then The "installer" verifies that he can see the created request
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "administrator" logs in to cotazo
        And The user clicks on toggle button
        Then The "administrator" can see the request on the support request page
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "technician" logs in to cotazo
        And The user clicks on toggle button
        Then The "technician" cannot see the request on the support request page

    @LMPTCOTAZO-379
    Scenario: Support request by an technician in Cotazo
        When An "technician" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        And The "technician" creates a new support request
        Then The "technician" verifies that he can see the created request
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "administrator" logs in to cotazo
        And The user clicks on toggle button
        Then The "administrator" can see the request on the support request page
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "administrator" logs in to cotazo
        And The user clicks on toggle button
        Then The "installer" can see the request on the support request page

    @LMPTCOTAZO-380
    Scenario: Flow of a support request management
        When An "administrator" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        Then The administrator changes the status of the order to "in analysis"
        And The "administrator" sends a comment
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "installer" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        Then The installer checks the status of the support request
        And The installer checks the comment received
        And The "installer" sends a comment
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "administrator" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        Then The administrator checks the comment received
        Then The administrator changes the status of the order to "pending"
        And The "administrator" sends a comment
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "installer" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        Then The installer checks the status of the support request
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "administrator" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        Then The administrator checks the comment received
        Then The administrator changes the status of the order to "concluded"
        And The user clicks on toggle button
        And The user logs out
        And The user reloads the page
        When An "installer" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        Then The installer checks the status of the support request

    @LMPTCOTAZO-381
    Scenario: Negative flow of support request creation
        When The user goes to the support request
        And The user enters invalid "email" values
        And The subject is in read-only
        And The user enters invalid "messages" values
        Then The support request cannot be sent
        And The user returns to the login page
        When An "installer" logs in to cotazo
        And The user clicks on toggle button
        And The user goes to the support request page
        And The user go to the create new support request
        And The user enters invalid "subject" values
        And The user enters invalid "messages" values
        Then The support request cannot be sent