export class TranslationConfiguration {

    elements = {
        translationAction: () => cy.get('.budget-rect-icons'),
    };


}

export const translationConfiguration = new TranslationConfiguration();