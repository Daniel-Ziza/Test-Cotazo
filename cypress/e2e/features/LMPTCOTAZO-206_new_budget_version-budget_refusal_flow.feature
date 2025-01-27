#It is necessary to update according to the new AHS project.

# Feature: Create new budget version

# Feature Create new budget version (budget refusal flow)

#   @LMPTCOTAZO-234
#   Scenario: Creation of a new version of the budget in Cotazo before delivering the budget to the customer
#     Given The user logs in Cotazo
#     When The user searches a budget
#     And The user should see the tag "budget available in store"
#     Then The user edits the budget
#     And The user goes to the "material information" page
#     And The user adds new material information
#     When The user saves the budget
#     And The user searches a budget
#     And The user goes to "in edition"
#     Then The user verifies that the budget has version "v2"
#     #And The user goes to "already launched" //Pending
#     #Then The user verifies that the budget has version "v1"  //Pending
#     And The user goes to "in edition"
#     Then The user edits the budget
#     And The user goes to the "end notes" page
#     Then The user completes the budget
#     And The user searches a budget
#     And The user goes to "in pending"
#     Then The user verifies that the budget has version "v2"
#     #And The user goes to "already launched"  //Pending
#     #Then The user verifies that the budget has version "v1"  //Pending
#     #And The user goes to "in pending"  //Pending
#     Then The user edits the budget
#     And The user goes to the "end notes" page
#     And The user synchronizes the budget
#     And The user searches a budget
#     And The user goes to "already launched"
#     Then The user verifies that the budget has version "v2"
#     Then The user should see the tag "budget available in store"

#   @LMPTCOTAZO-235
#   Scenario: Verify that the documents have been synchronized in Instala and indicate that the budget has been sent to the customer
#     Given The user enters the instala page
#     When The user enters the authorization data
#     And The system obtains the token information
#     Then The user enters the cockpit page
#     When The user searches for the service order
#     Then The user verifies that the budgets are correctly loaded
#     And The user indicates that the budget has been sent to the customer

#   @LMPTCOTAZO-236
#   Scenario: Creation of a new version of the budget in Cotazo after delivering the budget to the customer
#     Given The user logs in Cotazo
#     When The user searches a budget
#     And The user should see the tag "waiting for customer response"
#     Then The user edits the budget
#     And The user goes to the "material information" page
#     And The user adds new material information
#     When The user saves the budget
#     And The user searches a budget
#     And The user goes to "in edition"
#     Then The user verifies that the budget has version "v3"
#     #And The user goes to "already launched" //Pending
#     #Then The user verifies that the budget has version "v2"  //Pending
#     And The user goes to "in edition"
#     Then The user edits the budget
#     And The user goes to the "end notes" page
#     Then The user completes the budget
#     And The user searches a budget
#     And The user goes to "in pending"
#     Then The user verifies that the budget has version "v3"
#     #And The user goes to "already launched"  //Pending
#     #Then The user verifies that the budget has version "v2"  //Pending
#     #And The user goes to "in pending"  //Pending
#     Then The user edits the budget
#     And The user goes to the "end notes" page
#     And The user synchronizes the budget
#     And The user searches a budget
#     And The user goes to "already launched"
#     Then The user verifies that the budget has version "v3"
#     Then The user should see the tag "budget available in store"

#   @LMPTCOTAZO-237
#   Scenario: Indicate that the budget was delivered and refused by the customer
#     Given The user enters the instala page
#     When The user enters the authorization data
#     And The system obtains the token information
#     Then The user enters the cockpit page
#     When The user searches for the service order
#     Then The user indicates that the budget has been sent to the customer
#     And The user indicates that the budget was refused by the customer

#   @LMPTCOTAZO-238
#   Scenario: Creation of a new version of the budget in Cotazo after the customer has refused the budget
#     Given The user logs in Cotazo
#     When The user searches a budget
#     And The user should see the tag "budget refused by the customer"
#     Then The user edits the budget
#     And The user goes to the "material information" page
#     And The user adds new material information
#     When The user saves the budget
#     And The user searches a budget
#     And The user goes to "in edition"
#     Then The user verifies that the budget has version "v4"
#     #And The user goes to "already launched" //Pending
#     #Then The user verifies that the budget has version "v3"  //Pending
#     And The user goes to "in edition"
#     Then The user edits the budget
#     And The user goes to the "end notes" page
#     Then The user completes the budget
#     And The user searches a budget
#     And The user goes to "in pending"
#     Then The user verifies that the budget has version "v4"
#     #And The user goes to "already launched"  //Pending
#     #Then The user verifies that the budget has version "v3"  //Pending
#     #And The user goes to "in pending"  //Pending
#     Then The user edits the budget
#     And The user goes to the "end notes" page
#     And The user synchronizes the budget
#     And The user searches a budget
#     And The user goes to "already launched"
#     Then The user verifies that the budget has version "v4"
#     Then The user should see the tag "budget refused by the customer"