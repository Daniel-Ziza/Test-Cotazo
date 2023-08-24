Feature: Differentiated access - Contact

    Feature verify differentiated accesses on the Contact page

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-322
    Scenario: Verify all accesses on contact page
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
            | access   | action |
            | Contatos | 0      |
            | Contatos | 1      |
            | Contatos | 2      |
            | Contatos | 3      |
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        Then The user verifies that he has access to all "Contact" functionalities

    @LMPTCOTAZO-323
    Scenario: Verify that the user does not have access to delete contact
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "delete" action of the "Contatos" access in the "Contact" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "delete contact"
        And The user verifies that he have access to "edit contact"
        And The user verifies that he have access to "add contact"
        And The user verifies that he have access to "see contact"

    @LMPTCOTAZO-324
    Scenario: Verify that the user does not have access to edit contact
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Contatos" access in the "Contact" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "delete contact"
        And The user verifies that he does not have access to "edit contact"
        And The user verifies that he have access to "add contact"
        And The user verifies that he have access to "see contact"

    @LMPTCOTAZO-325
    Scenario: Verify that the user does not have access to create contact
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "add" action of the "Contatos" access in the "Contact" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "delete contact"
        And The user verifies that he does not have access to "edit contact"
        And The user verifies that he does not have access to "add contact"
        And The user verifies that he have access to "see contact"

    @LMPTCOTAZO-326
    Scenario: Verify that the user does not have access to view contact
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Contatos" access in the "Contact" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Configurações"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "Contactos"
        And The user has no access to the system
