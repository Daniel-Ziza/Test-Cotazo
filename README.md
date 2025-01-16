# Cotazo Testing Automation

Welcome to **Cotazo Testing Automation**,  
a project focused on test automation using Cypress.

## 💻 Prerequisites

Before getting started, make sure you have **Node.js** installed (version 18.0.0 or higher).  
You can download it here: [Node.js](https://nodejs.org/es/download/).

---

## 🛠️ Environment Setup

1. **Create the `.env` file:**  
   - Copy the content of the `dev.env` or `prod.env` file.  
   - Rename the file to `.env` and replace the values as needed.

2. **Install dependencies:**  
   Run the following command in the terminal to install the project dependencies:  
   ```bash
   npm install
   
🚀 Running the Project
To execute tests in Cypress:

bash
Copiar
Editar
npm run test
To execute tests directly in the terminal:

bash
Copiar
Editar
npm run test:run
To run a specific test:

Open the cypress.config.js file.
Update the specPattern parameter, specifying the desired test.
Example:
javascript
Copiar
Editar
specPattern: 'cypress/e2e/features/test.feature',
