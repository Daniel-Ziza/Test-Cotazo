Feature: Budget creation steps on mobile

  Feature to test each of the steps for budget creation on mobile
  Background: Pre-Condition: login to cotazo
    #@LMPTCOTAZO-351
    Given Change the screen size to "mobile"
    #@LMPTCOTAZO-208
    And The user logs in Cotazo

  @LMPTCOTAZO-362
  Scenario: The user leaves the budget information form empty
    When The user searches the service order in "mobile"
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "mobile" version
    And the user leaves the editable fields empty
    Then The "Continue" button is disabled

  @LMPTCOTAZO-363
  Scenario: The user fills the budget information form with invalid values
    When The user searches the service order in "mobile"
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "mobile" version
    And User enters invalid "zip code"
    And User enters invalid "phone number"
    And User enters invalid "email"
    Then The "Continue" button is disabled

  # @LMPTCOTAZO-364
  # Scenario: The user checks actions that can be performed on the Service Information page
  #   When The user searches the service order in "mobile"
  #   And The user searches in cotazo for the service order created in the prerequisites
  #   And Check if the modal appears or not in the "mobile" version
  #   And The information of the filled service order appears
  #   And The user continues to the next step
  #   And The user searches for the service description "Km extra Abrigo Metal"
  #   And The user enters invalid quantity
  #   Then The "service information" table is empty
  #   And The user adds a valid service
  #   And The user edits the quantity of the service
  #   Then The user verifies that the edit is correct
  #   And The user removes the previously added service
  #   Then The "service information" table is empty
  #   And The user searches for the service description "Trab. Complementar Abrigo Metal"
  #   And The user leaves the new service description empty and tries to add the service
  #   Then The "service information" table is empty
  #   And The user adds a new description of the service and inserts
  #   And The "service information" table is not empty
  #   And The user adds a new description of the service and inserts
  #   Then The user verifies that he can add multiple extra jobs with the same reference number

  #@LMPTCOTAZO-365
  # Scenario: The user checks actions that can be performed on the Material Information page
  #   When The user searches the service order in "mobile"
  #   And The user searches in cotazo for the service order created in the prerequisites
  #   And Check if the modal appears or not in the "mobile" version
  #   And The information of the filled service order appears
  #   And The user continues to the next step
  #   And The user continues to the next step
  #   And The user leaves the material data empty
  #   Then The "Add" button is disabled
  #   And The user writes a valid "description"
  #   And User enters invalid "quantity"
  #   Then The "Add" button is disabled
  #   And The user writes a valid "description"
  #   And The user writes a valid "quantity"
  #   And User enters invalid "unit"
  #   And  The user clicks on the "add" button
  #   Then An error message appears
  #   And  The user clicks on the "clean" button
  #   Then The user verifies that all fields have been cleaned
  #   And The user writes a valid "description"
  #   And The user writes a valid "quantity"
  #   And The user writes a valid "unit"
  #   And The user writes a valid "observation"
  #   And  The user clicks on the "add" button
  #   Then The "material information" table is not empty
  #   And The user writes a valid "description"
  #   And The user writes a valid "quantity"
  #   And The user writes a valid "unit"
  #   And The user writes a valid "observation"
  #   And  The user clicks on the "add" button
  #   Then An error message appears
  #   And The user edits an added material
  #   And The user removes the material from the list
  #   Then The "material information" table is empty
  #   And The user exports the list of materials
  #   Then The user verifies that the List of Materials has been downloaded
  #   And The user loads a file with "incomplete file"
  #   Then The user verifies that message is appropriate for "incomplete file"
  #   And The user loads a file with "bad format file"
  #   Then The user verifies that message is appropriate for "bad format file"
  #   And The user loads a file with "missing required fields"
  #   Then The user verifies that message is appropriate for "missing required fields"
  #   And The user loads a file with "empty file"
  #   Then The user verifies that message is appropriate for "empty file"
  #   And The user loads a file with "equal descriptions"
  #   Then The user verifies that message is appropriate for "equal descriptions"
  #   And The user loads a file with "invalid quantity"
  #   Then The user verifies that message is appropriate for "invalid quantity"
  #   And The user loads a file with "invalid unit"
  #   Then The user verifies that message is appropriate for "invalid unit"
  #   And The user loads a file with "fields with more characters than allowed"
  #   Then The user verifies that message is appropriate for "fields with more characters than allowed"
  #   And The user loads a file with "valid file"
  #   Then The user verifies that message is appropriate for "valid file"

  @LMPTCOTAZO-366
  Scenario: The user verifies the actions that can be performed on the Final Notes page
    When The user searches the service order in "mobile"
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "mobile" version
    And The information of the filled service order appears
    And The user goes to the "end notes" page
    Then The user verifies that he can format the text in endnotes

#@LMPTCOTAZO-367
# Scenario: Verification of character limit in text boxes in budget creation
# When The user searches the service order in "mobile"
# And The user searches in cotazo for the service order created in the prerequisites
# And Check if the modal appears or not in the "mobile" version
# And The information of the filled service order appears
# And The user continues to the next step
# And The user searches for the service description "Trab. Complementar Abrigo Metal"
# And The user tries to write more than "250" characters in "extra work"
# Then The user verifies that the character counter shows "250/250" characters in "extra work"
# And The user adds a new description of the service and inserts
# And The user continues to the next step
# When The user tries to write more than "250" characters in "material description"
# Then The user verifies that the character counter shows "250/250" characters in "material description"
# When The user tries to write more than "250" characters in "material observation"
# Then The user verifies that the character counter shows "250/250" characters in "material observation"
# And The user loads a file with "fields with more characters than allowed"
# Then The user verifies that message is appropriate for "fields with more characters than allowed"

#@LMPTCOTAZO-368
# Scenario: The user starts creating the budget and saves it
# When The user searches the service order in "mobile"
# And The user searches in cotazo for the service order created in the prerequisites
# And Check if the modal appears or not in the "mobile" version
# And The information of the filled service order appears
# And The user continues to the next step
# And The user selects a group of service
# And The user selects "Km extra Abrigo Metal [REF.ª 49010901]"
# And The user continues to the next step
# And The user completes the material information form
#   | description         | quantity | unit | observation          |
#   | example description | 3        | uni  | example observations |
# And The user continues to the next step
# And The user completes the final notes form
#   | duration | End_Notes         |
#   | 2h       | example End Notes |
# Then The user saves the budget and verifies that it is in editing status
# And The user deletes the previously created budget

#@LMPTCOTAZO-369
# Scenario: The user creates budget and only concludes it
# When The user searches the service order in "mobile"
# And The user searches in cotazo for the service order created in the prerequisites
# And Check if the modal appears or not in the "mobile" version
# And The information of the filled service order appears
# And The user continues to the next step
# And The user selects a group of service
# And The user selects "Km extra Abrigo Metal [REF.ª 49010901]"
# And The user continues to the next step
# And The user completes the material information form
#   | description         | quantity | unit | observation          |
#   | example description | 3        | uni  | example observations |
# And The user continues to the next step
# And The user completes the final notes form
#   | duration | End_Notes         |
#   | 2h       | example End Notes |
# Then The user completes the budget and verifies that it is pending
# And The user deletes the previously created budget

#@LMPTCOTAZO-370
# Scenario: The user starts with budget creation, and tries to finish with missing information
# When The user searches the service order in "mobile"
# And The user searches in cotazo for the service order created in the prerequisites
# And Check if the modal appears or not in the "mobile" version
# And The information of the filled service order appears
# And The user continues to the next step
# And The user continues to the next step
# And The user continues to the next step
# Then The message appears "A lista de serviços para o orçamento encontra-se vazia."
# And The message appears "A lista de materiais para o orçamento encontra-se vazia."
# And The message appears "O Campo de Duração da Obra encontra-se vazio"
# And The "Conclude" button is disabled
# And The "Conclude and Synchronize" button is disabled