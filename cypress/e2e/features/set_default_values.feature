Feature: set default values

    Feature set default values

    Scenario: define the default values for the developer profile
        Given The user opens cotazo website
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User profiles"
        And The user searches for the profile "Developer"
        And The user edits profile
        And The user activates all available accesses
        And The user goes to "User profiles"
        And The user searches for the profile "Developer"
        And The user edits profile
        And The user deactivates the "add" action of the "Pedidos de suporte" access in the "Support Request" functionality
