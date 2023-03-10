Feature: Budget creation on tablet

    Feature for creating a new budget on tablet

    @LMPTCOTAZO-200
    Scenario: Create a service order - Prerequisetes for test on tablet
        Given The user enters the instala page
        When The user enters the authorization data
        And The system obtains the token information
        Then The user enters the cockpit page
        And The user clicks on service order creation
        When The user fills out the service order creation form
        Then The user clicks on the save button
        And Search for service order
        And The link to the terms and conditions of sale is obtained
        And The user accepts the terms of service
        And The user searches for the service order
        And The user makes a manual distribution of the service
        And The technician agrees to perform the service
        And The client confirms the service
        And The technician starts the service
        And The technician terminates the service

    @LMPTCOTAZO-372
    Scenario: The user successfully completes and synchronizes a budget on tablet
        Given Change the screen size to "tablet"
        And The user logs in Cotazo
        When The user searches the service order in "tablet"
        And The user searches in cotazo for the service order created in the prerequisites
        And Check if the modal appears or not in the "tablet" version
        And The information of the filled service order appears
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