const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   return config;
// }

let serviceOrderNumber = null;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      config.env = process.env

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      on('task', {
        setServiceOrderNumber: (number) => {
          return (serviceOrderNumber = number);
        },
        getServiceOrderNumber: () => {
          return serviceOrderNumber;
        },
      });

      await addCucumberPreprocessorPlugin(on, config);


      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    // specPattern: [
    //   'cypress/e2e/features/LMPTCOTAZO-199_login.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-200_prerequisites.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-201_budget_creation_steps.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-202_budget_creation.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-203_budget_acceptance_flow.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-204_budget_refusal_flow.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-205_new_budget_version-budget_acceptance_flow.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-206_new_budget_version-budget_refusal_flow.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-207_support_request.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-244_user_access_control.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-248_user_profile_access_control.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-252_user_group_access_control.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-260_verify_dashboard_access.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-265_verify_budget_access.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-275_verify_configuration_access.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-299_verify_analysis_access.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-306_verify_support_request_access.feature',
    //   'cypress/e2e/features/LMPTCOTAZO-321_verify_contact _access.feature',
    //   'cypress/e2e/features/set_default_values.feature',
    //   'cypress/e2e/features/test.feature',
    // ],

    baseUrl: process.env.BASE_URL,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    viewportWidth: 1200,
    viewportHeight: 680,
    //numTestsKeptInMemory: 10,
    video: false,
    /*"retries": {
      "runMode": 1,
      "openMode":1
    },*/
  },
});
