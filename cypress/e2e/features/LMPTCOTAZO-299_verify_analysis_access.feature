Feature: Differentiated access - Analysis

    Feature verify differentiated accesses on the Analysis

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-300
    Scenario: Verify all accesses on the Analysis
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user verifies that the profile to be selected does not have any access marked
        And The user selects access levels
            #   Action 0 = View; 1 = Add; 2 = Edit; 3 = Delete
            | access                  | action |
            | Acesso a todas as lojas | 0      |
            | Análises                | 0      |
        And The user logs out
        And An "collaborator" logs in to cotazo
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        Then The user verifies that he has access to all "Analysis" functionalities

    @LMPTCOTAZO-301
    Scenario: Verify that the user does not have access to export budgets
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Exportar" access in the "Budget analysis" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "export budget analysis"
        And The user verifies that he have access to "see budget analysis"
        And The user verifies that he have access to "see import analysis"
        And The user verifies that he have access to "see export analysis"
        And The user verifies that he have access to "see payments"

    @LMPTCOTAZO-302
    Scenario: Verify that the user does not have access to view budgets
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Orçamentos" access in the "Analysis" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see budget analysis"
        And The user verifies that he have access to "see import analysis"
        And The user verifies that he have access to "see export analysis"
        And The user verifies that he have access to "see payments"

    @LMPTCOTAZO-303
    Scenario: Verify that the user does not have access to import analysis
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Importar" access in the "Analysis" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see budget analysis"
        And The user verifies that he does not have access to "see import analysis"
        And The user verifies that he have access to "see export analysis"
        And The user verifies that he have access to "see payments"

    @LMPTCOTAZO-304
    Scenario: Verify that the user does not have access to export analysis
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Exportar" access in the "Analysis" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see budget analysis"
        And The user verifies that he does not have access to "see import analysis"
        And The user verifies that he does not have access to "see export analysis"
        And The user verifies that he have access to "see payments"

    @LMPTCOTAZO-305
    Scenario: Verify that the user does not have access to view payments
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Pagamentos" access in the "Analysis" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see budget analysis"
        And The user verifies that he does not have access to "see payments"
        And The user has no access to the system