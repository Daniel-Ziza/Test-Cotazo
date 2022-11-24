Feature: Differentiated access - Configuration

    Feature verify differentiated accesses on the Configuration

    Scenario: Verfy all accesses on the configuration
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
            | access                 | action |
            | Configurações          | 0      |
            | Traduções              | 2      |
            | Parametros             | 2      |
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
        And An "collaborator" logs in to cotazo
        And The user verifies that he does not have access to "Início"
        And The user verifies that he does not have access to "Orçamentos"
        And The user verifies that he does not have access to "Análises"
        And The user verifies that he does not have access to "Pedidos de Suporte"
        Then The user verifies that he has access to all "Configuration" functionalities

    Scenario: Verify that the user does not have access to toggle user group
        Given The user opens cotazo website
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "toggle" action of the "Grupos de Acesso" access in the "Configuration" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to edit user group
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to add user group
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to view user group
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to toggle user profile
        Given The user opens cotazo website
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "toggle" action of the "Perfis de Utilizadores" access in the "Configuration" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to edit user profile
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to add user profile
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to view user profile
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to toggle user
        Given The user opens cotazo website
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user edits profile
        And The user deactivates the "toggle" action of the "Utilizadores" access in the "Configuration" functionality
        And The user logs out
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to view user
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

    Scenario: Verify that the user does not have access to import services
        Given The user opens cotazo website
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
        And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to export services
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to edit IVA
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to view IVA
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to edit typology
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to view typology
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to edit Serviços
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to view Serviços
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to edit parameters
    Given The user opens cotazo website
    When An "moderator" logs in to cotazo
    And The user goes to "Configuration"
    And The user goes to "User"
    And The user searches for the user "collaborator"
    And The user obtains the profile associated with his collaborator
    And The user goes to "User profiles"
    And The user searches for the profile "collaborator"
    And The user edits profile
    And The user deactivates the "edit" action of the "Parametros" access in the "Configuration" functionality
    And The user logs out
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to view parameters
    Given The user opens cotazo website
    When An "moderator" logs in to cotazo
    And The user goes to "Configuration"
    And The user goes to "User"
    And The user searches for the user "collaborator"
    And The user obtains the profile associated with his collaborator
    And The user goes to "User profiles"
    And The user searches for the profile "collaborator"
    And The user edits profile
    And The user deactivates the "view" action of the "Parametros" access in the "Configuration" functionality
    And The user logs out
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to edit translations
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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

Scenario: Verify that the user does not have access to see translations
    Given The user opens cotazo website
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
    And An "collaborator" logs in to cotazo
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