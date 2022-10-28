Feature: Budget creation steps

Feature to test each of the steps for budget creation

  Background: Pre-Condition: login to cotazo
    #@LMPTCOTAZO-208
    Given The user logs in Cotazo

  @LMPTCOTAZO-209 @LMPTCOTAZO-201
  Scenario: The user leaves the budget information form empty
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And the user leaves the editable fields empty
    Then The "Continue" button is disabled

  @LMPTCOTAZO-209 @LMPTCOTAZO-201
  Scenario: The user fills the budget information form with invalid values
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And User enters invalid "zip code"
    And User enters invalid "phone number"
    And User enters invalid "email"
    Then The "Continue" button is disabled

  @LMPTCOTAZO-211 @LMPTCOTAZO-201
  Scenario: The user checks actions that can be performed on the Service Information page
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And The information of the filled service order appears
    And The user continues to the next step
    And The user searches for the service description "Km extra Abrigo Metal"
    And The user enters invalid quantity
    Then The "service information" table is empty
    And The user adds a valid service
    And The user edits the quantity of the service
    Then The user verifies that the edit is correct
    And The user removes the previously added service
    Then The "service information" table is empty
    And The user searches for the service description "Trabalho Extra Abrigo Metal"
    And The user leaves the new service description empty and tries to add the service
    Then The "service information" table is empty
    And The user adds a new description of the service and inserts
    Then The "service information" table is not empty

  @LMPTCOTAZO-212 @LMPTCOTAZO-201
  Scenario: The user checks actions that can be performed on the Material Information page
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And The information of the filled service order appears
    And The user continues to the next step
    And The user continues to the next step
    And The user leaves the material data empty
    Then The "Add" button is disabled
    And The user writes a valid "description"
    And User enters invalid "quantity"
    Then The "Add" button is disabled
    And The user writes a valid "description"
    And The user writes a valid "quantity"
    And User enters invalid "unit"
    And  The user clicks on the "add" button
    Then An error message appears
    And  The user clicks on the "clean" button
    Then The user verifies that all fields have been cleaned
    And The user writes a valid "description"
    And The user writes a valid "quantity"
    And The user writes a valid "unit"
    And The user writes a valid "observation"
    And  The user clicks on the "add" button
    Then The "material information" table is not empty
    And The user writes a valid "description"
    And The user writes a valid "quantity"
    And The user writes a valid "unit"
    And The user writes a valid "observation"
    And  The user clicks on the "add" button
    Then An error message appears
    And The user edits an added material
    And The user removes the material from the list
    Then The "material information" table is empty
    And The user exports the list of materials
    Then The user verifies that the List of Materials has been downloaded
    And The user loads a file with "incomplete file"
    Then The user verifies that message is appropriate for "incomplete file"
    And The user loads a file with "bad format file"
    Then The user verifies that message is appropriate for "bad format file"
    And The user loads a file with "missing required fields"
    Then The user verifies that message is appropriate for "missing required fields"
    And The user loads a file with "empty file"
    Then The user verifies that message is appropriate for "empty file"
    And The user loads a file with "equal descriptions"
    Then The user verifies that message is appropriate for "equal descriptions"
    And The user loads a file with "invalid quantity"
    Then The user verifies that message is appropriate for "invalid quantity"
    And The user loads a file with "invalid unit"
    Then The user verifies that message is appropriate for "invalid unit"
    And The user loads a file with "valid file"
    Then The user verifies that message is appropriate for "valid file"

  @LMPTCOTAZO-213 @LMPTCOTAZO-201
  Scenario: The user verifies the actions that can be performed on the Final Notes page
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And The user goes to the "end notes" page
    And The user verifies that the text tool appears