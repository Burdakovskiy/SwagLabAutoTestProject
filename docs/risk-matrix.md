# Risk Matrix — SauceDemo


| Area       | Risk Description                                      | Impact | Frequency | Volatility | Priority | Automation Level        |
|------------|-------------------------------------------------------|:------:|:---------:|:----------:|:--------:|-------------------------|
| Auth       | User cannot login with valid credentials               |   5    |     5     |     2      | High     | UI (Smoke) + API        |
| Auth       | Invalid credentials allow login                        |   5    |     3     |     2      | High     | UI (Regression)         |
| Inventory  | Product list not displayed after login                 |   5    |     4     |     2      | High     | UI (Smoke)              |
| Inventory  | Add to cart button does not work                       |   5    |     4     |     3      | High     | UI (Smoke)              |
| Inventory  | Remove from inventory does not update cart             |   4    |     3     |     3      | Medium   | UI (Regression)         |
| Cart       | Cart does not reflect selected products                |   5    |     4     |     3      | High     | UI (Smoke)              |
| Cart       | Remove item from cart does not work                    |   4    |     3     |     2      | Medium   | UI (Regression)         |
| Checkout   | Checkout cannot be completed (happy path broken)       |   5    |     4     |     3      | High     | UI (Smoke)              |
| Checkout   | Checkout allows missing required customer information  |   4    |     3     |     2      | Medium   | UI (Regression)         |
| Checkout   | Incorrect total or tax calculation                     |   5    |     2     |     3      | Medium   | UI (Regression)         |
| Sorting    | Product sorting does not change order                  |   2    |     2     |     3      | Low      | UI (Regression)         |
| UI Layout  | Visual misalignment or broken layout                   |   1    |     2     |     5      | Low      | Manual / Not automated  |


Notes:
- Impact: business impact if broken (1–5)
- Frequency: how often user hits the area (1–5)
- Volatility: how often it changes (1–5)

Automation ROI: (Impact × Frequency) – Volatility