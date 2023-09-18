# cotazo-testing-automation

## 💻 Pre-requisites
```
Before you use this project you only need to have Node Js >= 18.0.0 installed in your computer.

https://nodejs.org/es/download/

```

## Create the .env file
```
Copy/Paste the .dev.env or .prod.env file, name it .env and replace values inside.
```

## Install the project
```
Install project dependencies with: npm i
```

## Run the project: 
```
Open the terminal and run:
npm run test =>to execute tests in cypress
or
npm run test:run => to execute tests in the terminal instead.

if you want to run a specific test in the terminal, change the specPattern parameter in the cypress.config.js file, specifying the feature you want to run.

Example:
specPattern: 'cypress/e2e/features/test.feature',
```

## Documentation:

https://jira.adeo.com/confluence/display/lmportugalHD/Cotazo+Testing+Automation
