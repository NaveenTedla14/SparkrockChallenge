# SparkrockChallenge

To run Cypress tests on Chrome for the first time, you'll need to follow these steps to install Cypress and set up your environment:

1. Install Node.js
Cypress requires Node.jsto run. If you don't have Node.jsinstalled, download and install it from the official Node.js website.

2. Install Cypress
Open your terminal or command prompt and run the following command to install Cypress as a development dependency:

npm install cypress --save-dev

3. Open Cypress( if tests results are needed)
After installing Cypress, you can open the Cypress Test Runner by running:

npx cypress open

Select e2e testing option

Select chrome browser

Click on challengTest.cy.js file to start execution

4. Install Chrome (if not already installed)
Make sure you have Google Chrome installed on your machine.

5. Run Tests on Chrome from command line
To run your tests on Chrome, you can use the following command:

npx cypress run --browser chrome  --spec cypress/e2e/challengeTest.cy.js