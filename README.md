⚙️ Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (LTS version recommended)

Visual Studio Code

🚀 Installation Instructions
Follow these steps to set up the project locally:

Clone the repository (or download the source code):

Bash
git clone https://github.com/dulX404/IT3040---ITPM-Assignment.git)

cd IT3040_Assignment1_IT23601574

Install project dependencies:

Bash
npm install
Install Playwright browsers:

Bash
npx playwright install


🧪 How to Run Tests
1. Run All Tests
To execute all test suites (Positive, Negative, and UI) together:

Bash
npx playwright test

2. Run Specific Test Suites
If you want to run only one type of test:

Positive Functional Tests:

Bash
npx playwright test tests/positive.spec.js
Negative Functional Tests:

Bash
npx playwright test tests/negative.spec.js
UI Tests:

Bash
npx playwright test tests/ui.spec.js
