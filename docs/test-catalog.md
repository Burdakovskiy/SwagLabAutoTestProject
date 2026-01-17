# User Journeys — SauceDemo

## 1. Happy Path Journeys

### JP-01: Successful Login
**Goal:** Access product catalog

Preconditions:
- User is on login page

Steps:
1. User enters valid credentials
2. User submits login form

Expected Result:
- Inventory page is displayed
- Product list is visible

---

### JP-02: Add Product to Cart
**Goal:** Select a product for purchase

Preconditions:
- User is authenticated
- User is on inventory page
- Cart is empty

Steps:
1. User adds a product to the cart
2. User opens cart page

Expected Result:
- Cart contains selected product
- Cart item count is updated

---

### JP-03: Complete Checkout
**Goal:** Purchase selected product

Preconditions:
- User is authenticated
- User has at least one product in the cart
- User is on cart page

Steps:
1. User proceeds to checkout
2. User fills required customer information
3. User reviews order
4. User completes checkout

Expected Result:
- Checkout complete page is displayed
- Confirmation message is shown


---

## 2. Negative Journeys

### NJ-01: Invalid Login
**Goal:** Prevent unauthorized access

Preconditions:
- User is on login page
- User is not authenticated

Steps:
1. User enters invalid credentials
2. User submits login form

Expected Result:
- Error message is displayed
- User remains on login page

---

### NJ-02: Checkout with Missing Required Fields
**Goal:** Enforce data validation

Preconditions:
- User is authenticated
- User has at least one product in the cart
- User is on checkout information page

Variants:
- Missing first name
- Missing last name
- Missing postal code

Steps (for each variant):
1. User leaves one required field empty
2. User attempts to continue checkout

Expected Result:
- Checkout cannot proceed
- Validation error is shown

---

## 3. Alternative / Edge Journeys

### AJ-01: Add and Remove Item from Inventory Page
**Goal:** Verify cart and UI state synchronization on inventory page

Preconditions:
- User is authenticated
- User is on inventory page
- Cart is empty

Steps:
1. User adds a product to the cart from inventory page
2. User removes the same product from inventory page

Expected Result:
- Cart becomes empty
- Cart item count is updated accordingly
- Product action button changes from "Add to cart" to "Remove" and back


---

### AJ-02: Remove Item from Cart
**Goal:** Modify selected products

Preconditions:
- User is authenticated
- User has at least one product in the cart
- User is on cart page

Steps:
1. User removes product from cart

Expected Result:
- Cart becomes empty
- Cart item count is updated

---

### AJ-03: Sorting Products
**Goal:** Browse products differently

Preconditions:
- User is authenticated
- User is on inventory page

Steps:
1. User changes sorting option

Expected Result:
- Product order changes accordingly