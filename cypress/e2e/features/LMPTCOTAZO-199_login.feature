Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-195 @LMPTCOTAZO-199
    Scenario: Successful Login with login page
        When A user provides correct credentials
        Then Main page is displayed

    @LMPTCOTAZO-197 @LMPTCOTAZO-199
    Scenario: Login with incorrect credentials
        When The user creates an invalid email and password
        And The user provides incorrect credentials
        Then An error is displayed
        When The user enters invalid emails
            | email                           | message        |
            | example                         | Email inválido |
            | 123456@                         | Email inválido |
            | example@leroymerlincom          | Email inválido |
            | @leroymerlincom                 | Email inválido |
            | example@@leroymerlin.com        | Email inválido |
            | example""@leroymerlin.com       | Email inválido |
            | example@leroymerlin.leroymerlin | Email inválido |
        Then The "Enter" button is disabled


    @LMPTCOTAZO-198 @LMPTCOTAZO-199
    Scenario: Login as a leroy merlin employee
        When The user clicks on the employee login link
        And The user logs in with his login credentials
        Then Main page is displayed

    @LMPTCOTAZO-340 @LMPTCOTAZO-199
    Scenario: Verify failed login lockout attempts
        When The user creates an invalid email and password
        And The user enters an invalid password 5 times in a row
        Then The user verifies that the login is blocked
        When The user waits "1" min to unlock login
        Then The user verifies that the login has been unlocked
        When The user repeats wrong login 5 times after the first lockout
        Then The user verifies that the login is blocked
        When The user waits "5" min to unlock login
        Then The user verifies that the login has been unlocked