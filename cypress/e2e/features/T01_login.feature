Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
    Given The user opens cotazo website
    Scenario: Successful Login
        When A user provides correct credentials
        And A user clicks on the login button
        Then Main page is displayed
    Scenario: Login with incorrect credentials
        When A user provides incorrect credentials
        And A user clicks on the login button
        Then An error is displayed
    Scenario: Login as a leroy merlin employee
        When The user clicks on the employee login link
        And The user logs in with his login credentials
        Then Main page is displayed
    