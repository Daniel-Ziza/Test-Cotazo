Feature: Differentiated access - Dashboard

    Feature verify differentiated accesses on the dashboard

    Scenario: Verfy all accesses on the dashboard
        Given The user opens cotazo website
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
            #  Action 0 = View; 1 = Add; 2 = Edit; 3 = Delete
            | access    | action |
            | Dashboard | 0      |
        And The user logs out
        And An "collaborator" logs in to cotazo
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        Then The user verifies that he has access to all "Dashboard" functionalities

    Scenario: Verify that the user does not have access to export analysis from the dahboard
        Given The user opens cotazo website
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Exportar" access in the "Dashboard" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "export"
        And The user verifies that he have access to "analysis"
        And The user verifies that he have access to "dashboard"
        And The user logs out

    Scenario: Verify that the user does not have access to analysis from the dahboard
        Given The user opens cotazo website
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Analysis" access in the "Dashboard" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "export"
        And The user verifies that he does not have access to "analysis"
        And The user verifies that he have access to "dashboard"
        And The user logs out

    Scenario: Verify that the user does not have access to analysis from the dahboard
        Given The user opens cotazo website
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Dashboard" access in the "Dashboard" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user has no access to the system