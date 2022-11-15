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

//Pending
And('The user selects the {string} access with the action {string}', (access, action) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    if (action === 'view') {
        userProfileConfiguration.togglePermission(access, 0);
    }
    if (action === 'add') {
        userProfileConfiguration.togglePermission(access, 1);
    }
    if (action === 'edit') {
        userProfileConfiguration.togglePermission(access, 2);
    }
    if (action === 'delete') {
        userProfileConfiguration.togglePermission(access, 3);
    }
    userProfileConfiguration.elements.saveProfile().click();
});

Then('The user verifies that he has access to all {string} functionalities', (element) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    if (element === 'Dashboard') {
        userProfileConfiguration.verifyAccess('dashboard');
        userProfileConfiguration.verifyAccess('analysis');
        userProfileConfiguration.verifyAccess('export');
    }
});

And('The user deactivates the {string} action of {string}', (action, access) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    if (action === 'view') {
        userProfileConfiguration.togglePermission(access, 0);
    }
    if (action === 'add') {
        userProfileConfiguration.togglePermission(access, 1);
    }
    if (action === 'edit') {
        userProfileConfiguration.togglePermission(access, 2);
    }
    if (action === 'delete') {
        userProfileConfiguration.togglePermission(access, 3);
    }
    userProfileConfiguration.elements.saveProfile().click();
});

And('The user verifies that he does not have access to {string}', (access) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    if (access === 'export') {
        homePage.elements.exportAnalysisDashboard().should('not.exist');
    }
    if (access === 'analysis') {
        homePage.elements.filtersAnalysisDashboardAccessBtn().should('not.exist');
        homePage.elements.dashboardAnalysisContent().should('not.exist');;
    }

});

And('The user verifies that he have access to {string}', (access) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.verifyAccess(access);
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