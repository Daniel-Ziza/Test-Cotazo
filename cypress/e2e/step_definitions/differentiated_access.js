import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
import userProfileConfiguration from '../../pages/configuration/UserProfileConfiguration';
import userConfiguration from '../../pages/configuration/UserConfiguration';
import userGroupConfiguration from '../../pages/configuration/UserGroupConfiguration';
import homePage from '../../pages/HomePage';

//steps for user features 

And('The user searches for the profile {string}', (profile) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    let text = profile.toUpperCase();
    cy.slowDown(500);
    userProfileConfiguration.searchProfile(text);
    cy.slowDownEnd();
});

And('The user profile is disabled', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.actionUserProfileBtn().click();
});

And('The user profile is activated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.actionUserProfileBtn().click();
});

And('The user verifies that the profile to be selected does not have any access marked', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.permissionsSet().uncheck();
});

And('The user selects access levels', (table) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.enablePermits(table);
    userProfileConfiguration.elements.saveProfile().click();
});

And('The user edits profile', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.editProfileBtn().click();
});

And('The user activates all available accesses', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.get('input[type="checkbox"]').check();
    userProfileConfiguration.elements.saveProfile().click();
});

And('The user obtains the profile associated with his collaborator', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.profileAssociatedLabel().invoke('text').then(profileAssociated => {
        Cypress.env('userProfile', profileAssociated);
    });
});

//steps for users feature
Then('The user has no access to the system', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    homePage.elements.bodyHomePage().should('have.text', 'Recurso não encontrado');
});

And('The user searches for the user {string}', (user) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    let text = user.toUpperCase();
    cy.slowDown(500);
    userConfiguration.searchUser(text);
    cy.slowDownEnd();
});

And('The user is disabled', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userConfiguration.elements.actionUserBtn().click();
});

And('The user is activated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userConfiguration.elements.actionUserBtn().click();
});

//Steps for users Group feature

And('The user searches for the group', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.slowDown(500);
    userGroupConfiguration.searchUserGroup();
    cy.slowDownEnd();
});

And('The user group is disabled', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userGroupConfiguration.elements.actionUserGroupBtn().click();
});

And('The user group is activated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userGroupConfiguration.elements.actionUserGroupBtn().click();
});