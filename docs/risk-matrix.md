# SauceDemo E2E Test Automation

## 1. Project Overview
This repository contains end-to-end (E2E) UI and API automated tests
for the SauceDemo (Swag Labs) web application.

The goal of this project is to provide:
- fast feedback on critical user flows (Smoke tests)
- stable regression coverage for core business scenarios
- CI-ready automated checks for every code change

---

## 2. Test Scope
### Covered:
- UI E2E tests (Playwright)
  - Authentication
  - Product catalog
  - Cart
  - Checkout flow
- API tests (Playwright APIRequestContext)
  - Core backend endpoints
  - Test data preparation
- Smoke and Regression test suites

### Not covered:
- Visual/UI styling validation
- Performance/load testing
- Cross-browser layout testing
- Accessibility testing

---

## 3. Tech Stack

- Playwright Test
- TypeScript
- Node.js
- GitHub Actions (CI)
- Playwright HTML Reports


## 4. Requirements

- Node.js >= 18
- npm >= 9

Check versions:
```bash
node -v
npm -v
```

## 5. Installation

Clone repository:
```bash
git clone <REPO_URL>
cd <REPO_FOLDER>
```

Install project dependencies:
```bash
npm install
```

Install Playwright browsers:
```bash
npx playwright install
```

## 6. Running Tests

Run all tests:
```bash
npm test
```
Run Smoke tests:
```bash
npm run test:smoke
```

Run UI E2E tests:
```bash
npm run test:ui
```

Run API tests:
```bash
npm run test:api
```

Debug mode:
```bash
npm run test:debug
```

## 7. View report
```bash
npm run report
```

