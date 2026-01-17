# Product Map — SauceDemo (Swag Labs)

## 1. Product Purpose
SauceDemo is a demo e-commerce web application that allows users to:
- authenticate
- browse a product catalog
- add/remove products to/from a cart
- complete a checkout flow

---

## 2. Main Pages / Screens

### 2.1 Login Page
- URL: `https://www.saucedemo.com/`
- Purpose: user authentication
- Entry point of the application

### 2.2 Inventory Page (Product Catalog)
- URL: `/inventory.html`
- Purpose: browse products, sort, add/remove items to cart
- Accessible only after successful login

### 2.3 Cart Page
- URL: `/cart.html`
- Purpose: review selected products
- Actions:
  - remove item
  - continue shopping
  - proceed to checkout


### 2.4 Checkout — Your Information
- URL: `/checkout-step-one.html`
- Purpose: collect customer information
- Required fields:
  - First Name
  - Last Name
  - Postal Code
- Actions:
  - cancel checkout
  - continue checkout

### 2.5 Checkout — Overview
- URL: `/checkout-step-two.html`
- Purpose: order review before completion
- Displays:
  - selected items
  - payment information (displayed)
  - shipping information (displayed)
  - total price
  - tax
- Actions:
  - cancel checkout
  - finish checkout


### 2.6 Checkout — Complete
- URL: `/checkout-complete.html`
- Purpose: confirmation of successful checkout
- Actions:
  - back home

---

## 3. Core Domain Entities

### User
- username
- password
- authentication state (logged in / logged out)

### Product
- name
- description
- price

### Cart
- list of products
- item count

### Order / Checkout
- customer information (first name, last name, postal code)
- selected products
- payment information (displayed)
- shipping information (displayed)
- total price (calculated)
- tax (calculated)
- confirmation status

---

## 4. Key Business Rules
- User must be authenticated to access the inventory page
- Cart must always reflect selected products
- Checkout cannot be completed without required customer information
- Successful checkout ends with confirmation page