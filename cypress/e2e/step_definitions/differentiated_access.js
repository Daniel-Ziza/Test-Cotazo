import {
    Given,
    When,
    And,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';
import { userProfileConfiguration } from '../../pages/configuration/UserProfileConfiguration';
import { userConfiguration } from '../../pages/configuration/UserConfiguration';
import { userGroupConfiguration } from '../../pages/configuration/UserGroupConfiguration';
import { homePage } from '../../pages/HomePage';

//steps for user features 

And('The user searches for the profile {string}', (profile) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    let text = profile.toUpperCase();
    cy.slowDown(700);
    userProfileConfiguration.searchProfile(text);
    cy.slowDownEnd();
});

And('The user profile is disabled', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.actionUserProfileBtn().click();
});

And('The user profile is activated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.actionUserProfileBtn().click();
});

And('The user verifies that the profile to be selected does not have any access marked', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.permissionsSet().uncheck();
});

And('The user selects access levels', (table) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.enablePermits(table);
    userProfileConfiguration.elements.saveProfile().click();
});

And('The user edits profile', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userProfileConfiguration.elements.editProfileBtn().click();
});

And('The user activates all available accesses', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.get('input[type="checkbox"]').check();
    userProfileConfiguration.elements.saveProfile().click();
});

And('The user obtains the profile associated with his collaborator', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
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

    cy.on('uncaught exception', (err, runnable) => {
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

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });

    if (element === 'Dashboard') {
        userProfileConfiguration.verifyAccess('dashboard');
        userProfileConfiguration.verifyAccess('analysis');
        userProfileConfiguration.verifyAccess('export');
    }
    if (element === 'Budget') {
        cy.slowDown(500);
        userProfileConfiguration.verifyAccess('see budget');
        userProfileConfiguration.verifyAccess('add budget');
        userProfileConfiguration.verifyAccess('edit budget');
        userProfileConfiguration.verifyAccess('delete budget');
        userProfileConfiguration.verifyAccess('download customer budget');
        userProfileConfiguration.verifyAccess('download technical budget');
        userProfileConfiguration.verifyAccess('conclude budget');
        userProfileConfiguration.verifyAccess('sync budget');
        cy.slowDownEnd();
    }
    if (element === 'Configuration') {
        userProfileConfiguration.verifyAccess('see translations');
        userProfileConfiguration.verifyAccess('edit translations');
        userProfileConfiguration.verifyAccess('see parameters');
        userProfileConfiguration.verifyAccess('edit parameters')
        userProfileConfiguration.verifyAccess('see services');
        userProfileConfiguration.verifyAccess('edit services');
        userProfileConfiguration.verifyAccess('see typology');
        userProfileConfiguration.verifyAccess('edit typology');
        userProfileConfiguration.verifyAccess('see IVA');
        userProfileConfiguration.verifyAccess('edit IVA');
        userProfileConfiguration.verifyAccess('export services');
        userProfileConfiguration.verifyAccess('import services');
        userProfileConfiguration.verifyAccess('see users');
        userProfileConfiguration.verifyAccess('see user action');
        userProfileConfiguration.verifyAccess('see user profile');
        userProfileConfiguration.verifyAccess('create user profile');
        userProfileConfiguration.verifyAccess('edit user profile');
        userProfileConfiguration.verifyAccess('toggle action user profile');
        userProfileConfiguration.verifyAccess('see user group');
        userProfileConfiguration.verifyAccess('create user group');
        userProfileConfiguration.verifyAccess('edit user group');
        userProfileConfiguration.verifyAccess('toggle action user group');
    }
    if (element === 'Analysis') {
        userProfileConfiguration.verifyAccess('see payments');
        userProfileConfiguration.verifyAccess('see export analysis');
        userProfileConfiguration.verifyAccess('see import analysis');
        userProfileConfiguration.verifyAccess('see budget analysis');
        userProfileConfiguration.verifyAccess('export budget analysis');
    }
    if (element === 'Support request') {
        userProfileConfiguration.verifyAccess('see support request');
        userProfileConfiguration.verifyAccess('add message to support request');
        userProfileConfiguration.verifyAccess('edit support request');
    }
    if (element === 'Contact') {
        userProfileConfiguration.verifyAccess('see contact');
        userProfileConfiguration.verifyAccess('add contact');
        userProfileConfiguration.verifyAccess('edit contact');
        userProfileConfiguration.verifyAccess('delete contact');
    }
});

And('The user deactivates the {string} action of the {string} access in the {string} functionality', (action, access, feature) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });

    if (action === 'view') {
        userProfileConfiguration.togglePermission(access, 0, feature);
    }
    if (action === 'add') {
        userProfileConfiguration.togglePermission(access, 1, feature);
    }
    if (action === 'edit') {
        userProfileConfiguration.togglePermission(access, 2, feature);
    }
    if (action === 'delete' || action === 'toggle') {
        userProfileConfiguration.togglePermission(access, 3, feature);
    }
    userProfileConfiguration.elements.saveProfile().click();
});

And('The user verifies that he does not have access to {string}', (access) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.slowDown(200);
    userProfileConfiguration.checkNoAccess(access);
    cy.slowDownEnd();
});

And('The user verifies that he have access to {string}', (access) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.slowDown(200);
    userProfileConfiguration.verifyAccess(access);
    cy.slowDownEnd();
});

//steps for users feature
Then('The user has no access to the system', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    homePage.elements.bodyHomePage().should('have.text', 'Recurso não encontrado');
});

And('The user searches for the user {string}', (user) => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    let text = user.toUpperCase();
    cy.slowDown(250);
    userConfiguration.searchUser(text);
    cy.slowDownEnd();
});

And('The user is disabled', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userConfiguration.elements.actionUserBtn().dblclick();
});

And('The user is activated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userConfiguration.elements.actionUserBtn().dblclick();
});

//Steps for users Group feature

And('The user searches for the group', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    cy.slowDown(250);
    userGroupConfiguration.searchUserGroup();
    cy.slowDownEnd();
});

And('The user group is disabled', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userGroupConfiguration.elements.actionUserGroupBtn().dblclick();
});

And('The user group is activated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    cy.on('uncaught exception', (err, runnable) => {
        return false;
    });
    userGroupConfiguration.elements.actionUserGroupBtn().click();
});