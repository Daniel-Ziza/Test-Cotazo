Feature: Differentiated access - Budgets

    Feature verify differentiated accesses on the Budget

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-266
    Scenario: Verify all accesses on the Budgets
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
            | Orçamentos              | 0      |
            | Orçamentos              | 1      |
            | Orçamentos              | 2      |
            | Orçamentos              | 3      |
        And The user logs out
        And An "collaborator" logs in to cotazo
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        Then The user verifies that he has access to all "Budget" functionalities

    @LMPTCOTAZO-267
    Scenario: Verify that the user does not have access to synchronize budgets
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Sincronizar orçamento" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "sync budget"
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he have access to "conclude budget"
        And The user verifies that he have access to "download technical budget"
        And The user verifies that he have access to "download customer budget"
        And The user verifies that he have access to "delete budget"
        And The user verifies that he have access to "edit budget"
        And The user verifies that he have access to "add budget"
        And The user verifies that he have access to "see budget"

    @LMPTCOTAZO-268
    Scenario: Verify that the user does not have access to conclude budgets
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Concluir orçamento" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "sync budget"
        And The user verifies that he does not have access to "conclude budget"
        And The user verifies that he have access to "download technical budget"
        And The user verifies that he have access to "download customer budget"
        And The user verifies that he have access to "delete budget"
        And The user verifies that he have access to "edit budget"
        And The user verifies that he have access to "add budget"
        And The user verifies that he have access to "see budget"

    @LMPTCOTAZO-269
    Scenario: Verify that the user does not have access to download technical budget
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Descarregar orçamento de técnico" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "sync budget"
        And The user verifies that he does not have access to "conclude budget"
        And The user verifies that he does not have access to "download technical budget"
        And The user verifies that he have access to "download customer budget"
        And The user verifies that he have access to "delete budget"
        And The user verifies that he have access to "edit budget"
        And The user verifies that he have access to "add budget"
        And The user verifies that he have access to "see budget"

    @LMPTCOTAZO-270
    Scenario: Verify that the user does not have access to download customer budget
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Descarregar orçamento de cliente" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "sync budget"
        And The user verifies that he does not have access to "conclude budget"
        And The user verifies that he does not have access to "download technical budget"
        And The user verifies that he does not have access to "download customer budget"
        And The user verifies that he have access to "delete budget"
        And The user verifies that he have access to "edit budget"
        And The user verifies that he have access to "add budget"
        And The user verifies that he have access to "see budget"

    @LMPTCOTAZO-271
    Scenario: Verify that the user does not have access to delete budget
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "delete" action of the "Orçamentos" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "sync budget"
        And The user verifies that he does not have access to "conclude budget"
        And The user verifies that he does not have access to "download technical budget"
        And The user verifies that he does not have access to "download customer budget"
        And The user verifies that he does not have access to "delete budget"
        And The user verifies that he have access to "edit budget"
        And The user verifies that he have access to "add budget"
        And The user verifies that he have access to "see budget"

    @LMPTCOTAZO-272
    Scenario: Verify that the user does not have access to edit budget
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Orçamentos" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "sync budget"
        And The user verifies that he does not have access to "download technical budget"
        And The user verifies that he does not have access to "download customer budget"
        And The user verifies that he does not have access to "delete budget"
        And The user verifies that he does not have access to "edit budget"
        And The user verifies that he have access to "add budget"
        And The user verifies that he have access to "see budget"

    @LMPTCOTAZO-273
    Scenario: Verify that the user does not have access to add budget
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "add" action of the "Orçamentos" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "sync budget"
        And The user verifies that he does not have access to "download technical budget"
        And The user verifies that he does not have access to "download customer budget"
        And The user verifies that he does not have access to "delete budget"
        And The user verifies that he does not have access to "add budget"
        And The user verifies that he have access to "see budget"

    @LMPTCOTAZO-274
    Scenario: Verify that the user does not have access to view budget
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Orçamentos" access in the "Budget" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user has no access to the system