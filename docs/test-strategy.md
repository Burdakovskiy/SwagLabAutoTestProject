# Test Strategy — SauceDemo

## 1. Purpose
Provide a stable, maintainable automated test suite that:
- detects critical failures early (Smoke)
- covers core business logic (Regression)
- integrates with CI/CD pipelines

---

## 2. Scope

### In Scope
- UI E2E tests for core user flows
- Smoke and Regression suites

### Out of Scope
- Visual regression testing
- Performance and load testing
- Accessibility testing
- Basic API checks (Not applicable)
- Cross-browser layout testing

---

## 3. Test Levels

### UI E2E
- Covers critical user journeys
- Implemented with Playwright
- Uses stable locators only

### API
- Not applicable: no stable Fetch/XHR endpoints were found during network analysis
- UI E2E is the primary automation level for this application

---

## 4. Test Suites

### 4.1 Smoke Tests
Criteria:
- Business-critical
- Fast (<10 minutes)
- Stable

Includes:
- UI Smoke: see `docs/test-catalog.md` → UI Smoke
- API Smoke: API automation is not applicable for SauceDemo.

Tags:
- @smoke
- @ui

---

### 4.2 Regression Tests
Criteria:
- Covers edge cases and validations
- May run longer
- Executed nightly or before release

Includes:
- UI Regression: see `docs/test-catalog.md` → UI Regression
- API Regression: API automation is not applicable for SauceDemo.

Tags:
- @regression
- @ui

---

## 5. Tagging Rules
- @smoke — critical tests
- @regression — extended coverage
- @ui — browser tests

---

## 6. Stability Rules
- No hard waits or sleeps
- Tests must be independent
- Clear, business-level assertions
- Failures must be debuggable via report artifacts

---

## 7. CI Execution Plan
- Pull Requests: Smoke tests
- Nightly builds: Regression tests
- Always publish HTML report