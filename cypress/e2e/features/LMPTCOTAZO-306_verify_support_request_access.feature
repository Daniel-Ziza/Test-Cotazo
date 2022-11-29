Feature: Differentiated access - Support Request

    Feature verify differentiated accesses on the Support Request

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-307
    Scenario: Verify all accesses on the Support Request
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
            | access             | action |
            | Pedidos de suporte | 0      |
            | Pedidos de suporte | 2      |
            | Adicionar mensagem | 1      |
        And The user logs out
        And An "collaborator" logs in to cotazo
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        Then The user verifies that he has access to all "Support request" functionalities

    @LMPTCOTAZO-308
    Scenario: Verify that the user does not have access to add a message in support requests
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "add" action of the "Adicionar mensagem" access in the "Support Request" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "add message to support request"
        And The user verifies that he have access to "edit support request"
        And The user verifies that he have access to "see support request"

    @LMPTCOTAZO-309
    Scenario: Verify that the user does not have access to edit support requests
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Pedidos de suporte" access in the "Support Request" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "add message to support request"
        And The user verifies that he does not have access to "edit support request"
        And The user verifies that he have access to "see support request"

    @LMPTCOTAZO-310
    Scenario: Verify that the user does not have access to view support requests
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Pedidos de suporte" access in the "Support Request" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user has no access to the system