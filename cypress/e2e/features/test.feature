Feature: testing

Feature Login instala

   Scenario: login Instala
      Given The user enters the instala page
      When The user enters the authorization data
      And The system obtains the token information
      Then The user enters the cockpit page