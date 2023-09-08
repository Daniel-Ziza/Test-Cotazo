Feature: Differentiated access - Configuration

    Feature verify differentiated accesses on the Configuration

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-276
    Scenario: Verfy all accesses on the configuration
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
            | access                 | action |
            | Configurações          | 0      |
            | Traduções              | 2      |
            | Parâmetros             | 2      |
            | Serviços               | 2      |
            | Tipologias             | 2      |
            | IVA                    | 2      |
            | Utilizadores           | 3      |
            | Perfis de Utilizadores | 1      |
            | Perfis de Utilizadores | 2      |
            | Perfis de Utilizadores | 3      |
            | Grupos de Acesso       | 1      |
            | Grupos de Acesso       | 2      |
            | Grupos de Acesso       | 3      |
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        Then The user verifies that he has access to all "Configuration" functionalities

    @LMPTCOTAZO-277
    Scenario: Verify that the user does not have access to activate/deactivate the user group
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "delete" action of the "Grupos de Acesso" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "toggle action user group"
        And The user verifies that he have access to "edit user group"
        And The user verifies that he have access to "create user group"
        And The user verifies that he have access to "see user group"
        And The user verifies that he have access to "toggle action user profile"
        And The user verifies that he have access to "edit user profile"
        And The user verifies that he have access to "create user profile"
        And The user verifies that he have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-278
    Scenario: Verify that the user does not have access to edit user group
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Grupos de Acesso" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "toggle action user group"
        And The user verifies that he does not have access to "edit user group"
        And The user verifies that he have access to "create user group"
        And The user verifies that he have access to "see user group"
        And The user verifies that he have access to "toggle action user profile"
        And The user verifies that he have access to "edit user profile"
        And The user verifies that he have access to "create user profile"
        And The user verifies that he have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-279
    Scenario: Verify that the user does not have access to add user group
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "add" action of the "Grupos de Acesso" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "toggle action user group"
        And The user verifies that he does not have access to "edit user group"
        And The user verifies that he does not have access to "create user group"
        And The user verifies that he have access to "see user group"
        And The user verifies that he have access to "toggle action user profile"
        And The user verifies that he have access to "edit user profile"
        And The user verifies that he have access to "create user profile"
        And The user verifies that he have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-280
    Scenario: Verify that the user does not have access to view user group
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Grupos de Acesso" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he have access to "toggle action user profile"
        And The user verifies that he have access to "edit user profile"
        And The user verifies that he have access to "create user profile"
        And The user verifies that he have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-281
    Scenario: Verify that the user does not have access to activate/deactivate user profile
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "delete" action of the "Perfis de Utilizadores" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "toggle action user profile"
        And The user verifies that he have access to "edit user profile"
        And The user verifies that he have access to "create user profile"
        And The user verifies that he have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-282
    Scenario: Verify that the user does not have access to edit user profile
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Perfis de Utilizadores" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "toggle action user profile"
        And The user verifies that he does not have access to "edit user profile"
        And The user verifies that he have access to "create user profile"
        And The user verifies that he have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-283
    Scenario: Verify that the user does not have access to add user profile
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "add" action of the "Perfis de Utilizadores" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "toggle action user profile"
        And The user verifies that he does not have access to "edit user profile"
        And The user verifies that he does not have access to "create user profile"
        And The user verifies that he have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-284
    Scenario: Verify that the user does not have access to view user profile
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Perfis de Utilizadores" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-285
    Scenario: Verify that the user does not have access to activate/deactivate user
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "delete" action of the "Utilizadores" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see user action"
        And The user verifies that he have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-286
    Scenario: Verify that the user does not have access to view user
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Utilizadores" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-287
    Scenario: Verify that the user does not have access to import services
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Importar" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "import services"
        And The user verifies that he have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-288
    Scenario: Verify that the user does not have access to export services
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Exportar" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "import services"
        And The user verifies that he does not have access to "export services"
        And The user verifies that he have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-289
    Scenario: Verify that the user does not have access to edit IVA
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "IVA" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "import services"
        And The user verifies that he does not have access to "export services"
        And The user verifies that he does not have access to "edit IVA"
        And The user verifies that he have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-290
    Scenario: Verify that the user does not have access to view IVA
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "IVA" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "import services"
        And The user verifies that he does not have access to "export services"
        And The user verifies that he does not have access to "see IVA"
        And The user verifies that he have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-291
    Scenario: Verify that the user does not have access to edit typology
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Tipologias" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "import services"
        And The user verifies that he does not have access to "export services"
        And The user verifies that he does not have access to "see IVA"
        And The user verifies that he does not have access to "edit typology"
        And The user verifies that he have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-292
    Scenario: Verify that the user does not have access to view typology
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Tipologias" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "import services"
        And The user verifies that he does not have access to "export services"
        And The user verifies that he does not have access to "see IVA"
        And The user verifies that he does not have access to "edit typology"
        And The user verifies that he does not have access to "see typology"
        And The user verifies that he have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-293
    Scenario: Verify that the user does not have access to edit services
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Serviços" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "import services"
        And The user verifies that he does not have access to "export services"
        And The user verifies that he does not have access to "see IVA"
        And The user verifies that he does not have access to "edit typology"
        And The user verifies that he does not have access to "see typology"
        And The user verifies that he does not have access to "edit services"
        And The user verifies that he have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-294
    Scenario: Verify that the user does not have access to view services
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Serviços" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "see services"
        And The user verifies that he have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-295
    Scenario: Verify that the user does not have access to edit parameters
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Parâmetros" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "see services"
        And The user verifies that he does not have access to "edit parameters"
        And The user verifies that he have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-296
    Scenario: Verify that the user does not have access to view parameters
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Parâmetros" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "see services"
        And The user verifies that he does not have access to "see parameters"
        And The user verifies that he have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-297
    Scenario: Verify that the user does not have access to edit translations
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "edit" action of the "Traduções" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "see services"
        And The user verifies that he does not have access to "see parameters"
        And The user verifies that he does not have access to "edit translations"
        And The user verifies that he have access to "see translations"

    @LMPTCOTAZO-298
    Scenario: Verify that the user does not have access to view translations
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "view" action of the "Traduções" access in the "Configuration" functionality
        And The user logs out
        Given The user opens cotazo website
        And An "collaborator" logs in to cotazo
        And The user reloads the page
        Then The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        And The user verifies that he does not have access to "see user group"
        And The user verifies that he does not have access to "see user profile"
        And The user verifies that he does not have access to "see users"
        And The user verifies that he does not have access to "see services"
        And The user verifies that he does not have access to "see parameters"
        And The user verifies that he does not have access to "see translations"
        And The user has no access to the system