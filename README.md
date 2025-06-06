SDET Intern Assignment Solution

Automation tests for Saucedemo website and OpenWeather API using Playwright with JavaScript.

Features
- Page Object Model implementation
- End-to-end UI tests
- API testing
- Test data management

Test Scenarios
1. User login with valid credentials
2. Complete checkout flow
3. Weather API verification

Setup
1. Clone repository
2. Install dependencies:
   npm install 
3. Set OpenWeather API key:
   export OPENWEATHER_API_KEY=your_api_key

Running Tests
- Run all tests:
  npx playwright test

- Run specific test:
  npx playwright test tests/login.test.js
  
- View report:
  npx playwright show-report
