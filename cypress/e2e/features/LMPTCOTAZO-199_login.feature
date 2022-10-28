Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
      #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-195 @LMPTCOTAZO-199
    Scenario: Successful Login
        When A user provides correct credentials
        And A user clicks on the login button
        Then Main page is displayed

    @LMPTCOTAZO-197 @LMPTCOTAZO-199
    Scenario: Login with incorrect credentials
        When A user provides incorrect credentials
        And A user clicks on the login button
        Then An error is displayed

    @LMPTCOTAZO-198 @LMPTCOTAZO-199
    Scenario: Login as a leroy merlin employee
        When The user clicks on the employee login link
        And The user logs in with his login credentials
        Then Main page is displayed
    