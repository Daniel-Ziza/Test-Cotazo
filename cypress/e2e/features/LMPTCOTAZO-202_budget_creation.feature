Feature: Budget creation

Feature for creating a new budget

  Background:
    #@LMPTCOTAZO-208
    Given The user logs in Cotazo

  @LMPTCOTAZO-214 @LMPTCOTAZO-202
  Scenario: The user starts creating the budget and saves it
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And The information of the filled service order appears
    And The user continues to the next step
    And The user selects a group of service
    And The user selects "Km extra Abrigo Metal [REF.ª 49010901]"
    And The user continues to the next step
    And The user completes the material information form
      | description         | quantity | unit | observation          |
      | example description | 3        | uni  | example observations |
    And The user continues to the next step
    And The user completes the final notes form
      | duration | End_Notes         |
      | 2h       | example End Notes |
    Then The user saves the budget and verifies that it is in editing status
    And The user deletes the previously created budget

  @LMPTCOTAZO-215
  Scenario: User creates budget and only concludes it
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And The information of the filled service order appears
    And The user continues to the next step
    And The user selects a group of service
    And The user selects "Km extra Abrigo Metal [REF.ª 49010901]"
    And The user continues to the next step
    And The user completes the material information form
      | description         | quantity | unit | observation          |
      | example description | 3        | uni  | example observations |
    And The user continues to the next step
    And The user completes the final notes form
      | duration | End_Notes         |
      | 2h       | example End Notes |
    Then The user completes the budget and verifies that it is pending
    And The user deletes the previously created budget

  @LMPTCOTAZO-216
  Scenario: The user starts with budget creation, and tries to finish with missing information
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And The information of the filled service order appears
    And The user continues to the next step
    And The user continues to the next step
    And The user continues to the next step
    Then The message appears "A lista de serviços para o orçamento encontra-se vazia."
    And The message appears "A lista de materiais para o orçamento encontra-se vazia."
    And The message appears "O Campo de Duração da Obra encontra-se vazio"
    And The "Conclude" button is disabled
    And The "Conclude and Synchronize" button is disabled

  @LMPTCOTAZO-217
  Scenario: The user successfully completes and synchronizes a budget
    When The user clicks on the button budgets to be created
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not
    And The user continues to the next step
    And The user searches for the service description "Km extra Abrigo Metal"
    And The user selects "Km extra Abrigo Metal [REF.ª 49010901]"
    And The user searches for the service description "Visita Orç.Paineis Aquec.Agua"
    And The user selects "Visita Orç.Paineis Aquec.Agua [REF.ª 49010522]"
    And The user searches for the service description "Trab. Complementar Paineis Solares"
    And The user adds a new description of the service and inserts
    And The user searches for the service description "Km extra Paineis Solares"
    And The user modifies the quantity of service
    And The user selects "Km extra Paineis Solares [REF.ª 49010524]"
    And The user continues to the next step
    And The user completes the material information form
      | description         | quantity | unit | observation          |
      | example description | 3        | uni  | example observations |
    And The user continues to the next step
    And The user completes the final notes form
      | duration | End_Notes         |
      | 2h       | example End Notes |
    Then The user creates and synchronizes a budget and verifies that it is on sent