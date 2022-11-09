Feature: User Group Configuration

    Feature User group access control

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-253
    Scenario: verify that a collaborator with user group specific can access the system
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user obtains the profile associated with his collaborator
        And The user goes to "User group"
        And The user searches for the group
        And The user group is disabled
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then The user has no access to the system
        And The user logs out
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User group"
        And The user searches for the group
        And The user group is activated
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then Main page is displayed