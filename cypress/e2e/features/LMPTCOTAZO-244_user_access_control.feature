Feature: User Configuration

    Feature User access control

    Background:
        #@LMPTCOTAZO-196
        Given The user opens cotazo website

    @LMPTCOTAZO-245
    Scenario: verify that an installer user can access the system
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "installer"
        And The user is disabled
        And The user logs out
        And An "installer" logs in to cotazo
        Then An error is displayed
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "installer"
        And The user is activated
        And The user logs out
        And An "installer" logs in to cotazo
        Then Main page is displayed

    @LMPTCOTAZO-246
    Scenario: verify that a technician user can access the system
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "technician"
        And The user is disabled
        And The user logs out
        And An "technician" logs in to cotazo
        Then An error is displayed
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "technician"
        And The user is activated
        And The user logs out
        And An "technician" logs in to cotazo
        Then Main page is displayed

    @LMPTCOTAZO-247
    Scenario: verify that a collaborator user can access the system
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user is disabled
        And The user logs out
        And An "collaborator" logs in to cotazo
        Then An error is displayed
        When An "moderator" logs in to cotazo
        And The user goes to "Configuration"
        And The user goes to "User"
        And The user searches for the user "collaborator"
        And The user is activated
        And The user logs out
        And The user goes to "click here"
        Then Main page is displayed