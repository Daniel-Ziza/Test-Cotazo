Feature: Budget creation steps

  Feature to test each of the steps for budget creation

  Background: Pre-Condition: login to cotazo
    #@LMPTCOTAZO-208
    Given The user logs in Cotazo

  @LMPTCOTAZO-209 @LMPTCOTAZO-201
  Scenario: The user leaves the budget information form empty
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And the user leaves the editable fields empty
    Then The "Continue" button is disabled

  @LMPTCOTAZO-210 @LMPTCOTAZO-201
  Scenario: The user fills the budget information form with invalid values
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And User enters invalid "zip code"
    And User enters invalid "phone number"
    And User enters invalid "email"
    Then The "Continue" button is disabled

  @LMPTCOTAZO-211 @LMPTCOTAZO-201
  Scenario: The user checks actions that can be performed on the Service Information page
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And The information of the filled service order appears
    And The user continues to the next step
    And The user searches for the service description "Km extra Abrigo Metal"
    And The user enters invalid quantity in "desktop"
    Then The "service information" table is empty
    And The user adds a valid service in "desktop"
    And The user edits the quantity of the service in "desktop"
    Then The user verifies that the edit is correct
    And The user removes the previously added service
    Then The "service information" table is empty
    And The user searches for the service description "Trab. Complementar Abrigo Metal"
    And The user leaves the new service description empty and tries to add the service in "desktop"
    Then The "service information" table is empty
    And The user adds a new description of the service and inserts in "desktop"
    And The "service information" table is not empty
    And The user adds a new description of the service and inserts in "desktop"
    Then The user verifies that he can add multiple extra jobs with the same reference number

  @LMPTCOTAZO-212 @LMPTCOTAZO-201
  Scenario: The user checks actions that can be performed on the Material Information page
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
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
    And  The user clicks on the "add" button in "desktop"
    Then An error message appears
    And  The user clicks on the "clean" button in "desktop"
    Then The user verifies that all fields have been cleaned
    And The user writes a valid "description"
    And The user writes a valid "quantity"
    And The user writes a valid "unit"
    And The user writes a valid "observation"
    And  The user clicks on the "add" button in "desktop"
    Then The "material information" table is not empty
    And The user writes a valid "description"
    And The user writes a valid "quantity"
    And The user writes a valid "unit"
    And The user writes a valid "observation"
    And  The user clicks on the "add" button in "desktop"
    Then An error message appears
    And The user edits an added material in "desktop"
    And The user removes the material from the list
    Then The "material information" table is empty
    And The user exports the list of materials in "desktop"
    Then The user verifies that the List of Materials has been downloaded
    And The user loads a file with "incomplete file" in "desktop"
    Then The user verifies that message is appropriate for "incomplete file"
    And The user loads a file with "bad format file" in "desktop"
    Then The user verifies that message is appropriate for "bad format file"
    And The user loads a file with "missing required fields" in "desktop"
    Then The user verifies that message is appropriate for "missing required fields"
    And The user loads a file with "empty file" in "desktop"
    Then The user verifies that message is appropriate for "empty file"
    And The user loads a file with "equal descriptions" in "desktop"
    Then The user verifies that message is appropriate for "equal descriptions"
    And The user loads a file with "invalid quantity" in "desktop"
    Then The user verifies that message is appropriate for "invalid quantity"
    And The user loads a file with "invalid unit" in "desktop"
    Then The user verifies that message is appropriate for "invalid unit"
    And The user loads a file with "fields with more characters than allowed" in "desktop"
    Then The user verifies that message is appropriate for "fields with more characters than allowed"
    And The user loads a file with "valid file" in "desktop"
    Then The user verifies that message is appropriate for "valid file"

  @LMPTCOTAZO-213 @LMPTCOTAZO-201
  Scenario: The user verifies the actions that can be performed on the Final Notes page
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And The user goes to the "end notes" page
    Then The user verifies that he can format the text in endnotes

  @LMPTCOTAZO-327
  Scenario: Verification of character limit in text boxes in budget creation
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And The information of the filled service order appears
    And The user continues to the next step
    And The user searches for the service description "Trab. Complementar Abrigo Metal"
    And The user tries to write more than "250" characters in "extra work" in "desktop"
    Then The user verifies that the character counter shows "250/250" characters in "extra work"
    And The user adds a new description of the service and inserts in "desktop"
    And The user continues to the next step
    When The user tries to write more than "250" characters in "material description" in "desktop"
    Then The user verifies that the character counter shows "250/250" characters in "material description"
    When The user tries to write more than "250" characters in "material observation" in "desktop"
    Then The user verifies that the character counter shows "250/250" characters in "material observation"
    And The user loads a file with "fields with more characters than allowed" in "desktop"
    Then The user verifies that message is appropriate for "fields with more characters than allowed"
  # And The user continues to the next step
  # When The user tries to write more than "7000" characters in "endnotes"
  # Then The user verifies that the character counter shows "7000/7000" characters in "endnotes"
  # And The user saves the budget and verifies that it is in editing status
  # And The user deletes the previously created budget

  @LMPTCOTAZO-214
  Scenario: The user starts creating the budget and saves it
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And The information of the filled service order appears
    And The user continues to the next step
    And The user selects a group of service
    And The user selects "Km extra Abrigo Metal [REF.ª 49010901]" in "desktop"
    And The user continues to the next step
    And The user completes the material information form
      | description         | quantity | unit | observation          |
      | example description | 3        | uni  | example observations |
    And The user continues to the next step
    And The user completes the final notes form
      | duration | End_Notes         |
      | 2h       | example End Notes |
    Then The user saves the budget and verifies that it is in editing status in "desktop"
    And The user deletes the previously created budget in "desktop"

  @LMPTCOTAZO-215
  Scenario: User creates budget and only concludes it
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And The information of the filled service order appears
    And The user continues to the next step
    And The user selects a group of service
    And The user selects "Km extra Abrigo Metal [REF.ª 49010901]" in "desktop"
    And The user continues to the next step
    And The user completes the material information form
      | description         | quantity | unit | observation          |
      | example description | 3        | uni  | example observations |
    And The user continues to the next step
    And The user completes the final notes form
      | duration | End_Notes         |
      | 2h       | example End Notes |
    Then The user completes the budget and verifies that it is pending in "desktop"
    And The user deletes the previously created budget in "desktop"

  @LMPTCOTAZO-216
  Scenario: The user starts with budget creation, and tries to finish with missing information
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "desktop" version
    And The information of the filled service order appears
    And The user continues to the next step
    And The user continues to the next step
    And The user continues to the next step
    Then The message appears "A lista de serviços para o orçamento encontra-se vazia."
    And The message appears "A lista de materiais para o orçamento encontra-se vazia."
    And The message appears "O Campo de Duração da Obra encontra-se vazio"
    And The "Conclude" button is disabled
    And The "Conclude and Synchronize" button is disabled