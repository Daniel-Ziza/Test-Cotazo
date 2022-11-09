Feature: User Profile Configuration

    Feature User profile access control

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-249
    Scenario: verify that a user with a user profile installer can access the system
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User profiles"
        And The user searches for the profile "Installer"
        And The user profile is disabled
        And The user logs out
        And An "installer" logs in to cotazo
        Then The user has no access to the system
        And The user logs out
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User profiles"
        And The user searches for the profile "Installer"
        And The user profile is activated
        And The user logs out
        And An "installer" logs in to cotazo
        Then Main page is displayed

    @LMPTCOTAZO-250
    Scenario: verify that a user with user profile technician can access the system
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User profiles"
        And The user searches for the profile "technician"
        And The user profile is disabled
        And The user logs out
        And An "technician" logs in to cotazo
        Then The user has no access to the system
        And The user logs out
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User profiles"
        And The user searches for the profile "technician"
        And The user profile is activated
        And The user logs out
        And An "technician" logs in to cotazo
        Then Main page is displayed

    @LMPTCOTAZO-251
    Scenario: verify that a user with user profile collaborator can access the system
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user profile is disabled
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user has no access to the system
        And The user logs out
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User profiles"
        And The user searches for the profile "collaborator"
        And The user profile is activated
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then Main page is displayed