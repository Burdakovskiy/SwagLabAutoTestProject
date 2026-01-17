# Test Catalog — SauceDemo

Conventions:
- Tags: @smoke / @regression + @ui
- Journey mapping: JP / NJ / AJ from `docs/user-journeys.md`
- Risk mapping: Area from `docs/risk-matrix.md`

---

## UI Smoke

| Test ID   | Name                         | Type | Tags        | Journey | Risk Area  | Priority | Key Assertions |
|----------:|------------------------------|------|-------------|---------|------------|----------|----------------|
| UI-SM-001 | Valid login shows inventory  | UI   | @smoke @ui  | JP-01   | Auth       | High     | Inventory page is displayed; product list visible |
| UI-SM-002 | Inventory shows products     | UI   | @smoke @ui  | JP-01   | Inventory  | High     | Inventory list is not empty; key UI elements present |
| UI-SM-003 | Add product to cart          | UI   | @smoke @ui  | JP-02   | Inventory  | High     | Cart badge increments; cart contains selected product |
| UI-SM-004 | Cart reflects selected items | UI   | @smoke @ui  | JP-02   | Cart       | High     | Cart items match selection; item count correct |
| UI-SM-005 | Complete checkout (happy)    | UI   | @smoke @ui  | JP-03   | Checkout   | High     | Can proceed through checkout; confirmation page shown |

## UI Regression

| Test ID   | Name                                           | Type | Tags              | Journey | Risk Area  | Priority | Key Assertions |
|----------:|------------------------------------------------|------|-------------------|---------|------------|----------|----------------|
| UI-RG-001 | Invalid login shows error                       | UI   | @regression @ui   | NJ-01   | Auth       | High     | Error message shown; user remains on login page |
| UI-RG-002 | Unauthenticated user cannot access inventory    | UI   | @regression @ui   | (Rule)  | Auth       | Medium   | Direct open `/inventory.html` redirects to login or blocks access |
| UI-RG-003 | Remove item from cart                           | UI   | @regression @ui   | AJ-02   | Cart       | Medium   | Item removed; cart becomes empty; badge updates |
| UI-RG-004 | Add/remove sync on inventory page               | UI   | @regression @ui   | AJ-01   | Inventory  | Medium   | Button toggles Add↔Remove; badge 0→1→0; cart empty at end |
| UI-RG-005 | Checkout validation: missing first name         | UI   | @regression @ui   | NJ-02   | Checkout   | Medium   | Cannot continue; validation error displayed |
| UI-RG-006 | Checkout validation: missing last name          | UI   | @regression @ui   | NJ-02   | Checkout   | Medium   | Cannot continue; validation error displayed |
| UI-RG-007 | Checkout validation: missing postal code        | UI   | @regression @ui   | NJ-02   | Checkout   | Medium   | Cannot continue; validation error displayed |
| UI-RG-008 | Checkout overview shows selected items          | UI   | @regression @ui   | JP-03   | Checkout   | Medium   | Overview lists same products as cart |
| UI-RG-009 | Total and tax are calculated and consistent     | UI   | @regression @ui   | JP-03   | Checkout   | High     | Total = items sum + tax; values are present and > 0 |
| UI-RG-010 | Cancel checkout from step one returns correctly | UI   | @regression @ui   | (Map)   | Checkout   | Medium   | Cancel from step-one returns to cart (confirm actual behavior) |
| UI-RG-011 | Cancel checkout from overview returns correctly | UI   | @regression @ui   | (Map)   | Checkout   | Medium   | Cancel from overview returns to inventory (confirm actual behavior) |
| UI-RG-012 | Sorting changes product order                   | UI   | @regression @ui   | AJ-03   | Sorting    | Low      | Selected sort changes order according to option |

## API Smoke (TBD)
API automation is not applicable for SauceDemo.

---

## API Regression (TBD)
API automation is not applicable for SauceDemo.