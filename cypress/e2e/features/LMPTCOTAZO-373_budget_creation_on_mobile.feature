Feature: Budget creation on mobile

Feature for creating a new budget on mobile

@LMPTCOTAZO-217
Scenario: The user successfully completes and synchronizes a budget on mobile
    Given Change the screen size to "mobile"
    And The user logs in Cotazo
    When The user searches the service order in "mobile"
    And The user searches in cotazo for the service order created in the prerequisites
    And Check if the modal appears or not in the "mobile" version
    And The information of the filled service order appears
    And The user continues to the next step
    And The user searches for the service description "Km extra Abrigo Metal"
    And The user selects "Km extra Abrigo Metal [REF.ª 49010901]" in "mobile"
    And The user searches for the service description "Visita Orç. Painéis Prod. Água Quente"
    And The user selects "Visita Orç. Painéis Prod. Água Quente [REF.ª 49010522]" in "mobile"
    And The user searches for the service description "Trab. Compl. Paineis Prod. Água Quente"
    And The user adds a new description of the service and inserts in "mobile"
    And The user searches for the service description "Km extra Painéis Prod. Água Quente"
    And The user modifies the quantity of service in "mobile"
    And The user selects "Km extra Painéis Prod. Água Quente [REF.ª 49010524]" in "mobile"
    And The user continues to the next step
    And The user completes the material information form
        | description         | quantity | unit | observation          |  type  |
        | example description | 3        | uni  | example observations | mobile |
    And The user continues to the next step
    And The user completes the final notes form
        | duration | End_Notes         |
        | 2h       | example End Notes |
    Then The user creates and synchronizes a budget and verifies that it is on sent