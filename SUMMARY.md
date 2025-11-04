# Code Summary: Harvest Table Food Ordering Application

## Project Overview
**Harvest Table** (also referred to as "Tomato App") is a React-based food ordering web application that allows users to browse a menu, add items to their cart, and place orders online. The application provides a complete e-commerce experience for food delivery services.

## Technology Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Routing**: React Router DOM 6.26.1
- **Styling**: CSS (component-scoped)
- **Package Manager**: npm
- **Linting**: ESLint 9.9.0

## Application Architecture

### Entry Point
- **main.jsx**: The application entry point that renders the root component with:
  - `BrowserRouter` for routing functionality
  - `StoreContexProvider` for global state management
  - Main `App` component

### Core Components

#### 1. App Component (`App.jsx`)
- Main application container
- Manages login popup visibility state
- Defines routing structure with three main routes:
  - `/` - Home page
  - `/cart` - Shopping cart
  - `/order` - Order placement/checkout
- Includes persistent components: Navbar, Footer

#### 2. State Management (`context/storeContext.jsx`)
Implements React Context API for global state management:
- **State Variables**:
  - `cartItems`: Object storing item IDs and quantities
  - `food_list`: Array of available food items
- **Functions**:
  - `addToCart(itemId)`: Adds or increments item quantity
  - `removeFromCart(itemId)`: Decrements item quantity
  - `getTotalCratAmount()`: Calculates total cart value
- **Note**: Contains typo "Crat" instead of "Cart" in function name

### Pages

#### 1. Home Page (`pages/Home/Home.jsx`)
Main landing page containing:
- `Header`: Hero section with call-to-action
- `ExploreMenu`: Category filter navigation
- `FoodDisplay`: Grid of food items
- `AppDownload`: App download section
- Category state management for filtering menu items

#### 2. Cart Page (`pages/Cart/Cart.jsx`)
Shopping cart interface with:
- Line item display (image, name, price, quantity, total)
- Remove item functionality
- Cost breakdown:
  - Subtotal
  - Delivery fee ($2 if cart not empty)
  - Total amount
- Promo code input section
- "Proceed to Checkout" button (navigates to `/order`)
- **Note**: Contains typo "CHHECKOUT" in button text

#### 3. Place Order Page (`pages/PlaceOrder/PlaceOrder.jsx`)
Checkout page with:
- Delivery information form fields:
  - First name, Last name
  - Email, Street
  - City, State
  - Zip code, Country (typo: "Contry")
  - Phone number
- Cart total summary (same as Cart page)
- "Proceed to Payment" button
- **Note**: Contains typos in placeholder text

### Components

#### 1. Navbar (`componetes/Nevbar/Nevbar.jsx`)
Navigation bar featuring:
- Logo (links to home)
- Menu items: Home, Menu, Mobile-app, Contact-us
- Active state highlighting
- Search icon
- Shopping cart icon with item count indicator (dot)
- Sign-in button (triggers login popup)
- **Note**: Folder name has typo "Nevbar" instead of "Navbar"

#### 2. Header (`componetes/Header/Header.jsx`)
Hero section with:
- Main heading: "Order your food here"
- Descriptive text about the ordering system
- "View menu" call-to-action button

#### 3. ExploreMenu (`componetes/ExploreMenu/ExploreMenu.jsx`)
Menu category selector:
- Displays category icons from `menu_list`
- Toggles between selected category and "All"
- Visual feedback for active category
- Category filtering for food display

#### 4. FoodDisplay (`componetes/FoodDisplay/FoodDisplay.jsx`)
Food items grid:
- Displays "Top dishes" heading
- Renders food items based on selected category
- Filters items: shows all if category is "All", otherwise filters by category
- Maps through `food_list` and renders `Fooditem` components

#### 5. Fooditem (`componetes/Fooditem/Fooditem.jsx`)
Individual food item card:
- Product image with add/remove controls overlay
- Item name and star rating
- Description and price
- Add to cart button (white plus icon)
- Quantity counter with increment/decrement buttons (appears when item in cart)
- Uses Context API for cart operations

#### 6. LoginPopup (`componetes/LoginPopup/LoginPopup.jsx`)
Modal authentication form:
- Toggles between "Login" and "Sign-Up" states
- Conditional fields:
  - Sign-Up: Name, Email, Password
  - Login: Email, Password
- Terms & conditions checkbox
- State toggle link
- Close button (X icon)
- **Note**: Contains typo "Sing Up" instead of "Sign Up"

#### 7. Footer (`componetes/Footer/Footer.jsx`)
Footer section with three columns:
- Left: Logo, description, social media icons (Facebook, Twitter, LinkedIn)
- Center: Company links (Home, About us, Delivery, Privacy policy)
- Right: Contact information (phone, email)
- Copyright notice
- **Note**: Contains typo "Copyrigt@2024"

#### 8. AppDownload (`componetes/AppDownload/AppDownload.jsx`)
App promotion section:
- Message encouraging app download
- Platform badges for Play Store and App Store
- **Note**: Contains typo "experence" instead of "experience"

## Data Flow

1. **Food Menu Data**: Imported from `assets/assets.js` and provided through Context API
2. **Cart Management**: All cart operations flow through `StoreContex` using Context API
3. **Navigation**: React Router handles page transitions
4. **State Updates**: Cart modifications trigger re-renders across components using the same context

## Key Features

1. **Menu Browsing**: 
   - Category-based filtering
   - Visual food item display with images and descriptions

2. **Shopping Cart**:
   - Add/remove items
   - Quantity adjustment
   - Real-time total calculation
   - Persistent across pages (via Context)

3. **Checkout Flow**:
   - Cart review
   - Delivery information collection
   - Order summary with fees

4. **User Interface**:
   - Responsive navigation
   - Modal login/signup
   - Visual cart indicator
   - Category filtering
   - Social media integration

## Notable Issues/Observations

### Typos Found:
1. Context: "StoreContex" should be "StoreContext"
2. Function: "getTotalCratAmount" should be "getTotalCartAmount"
3. Folder: "componetes" should be "components"
4. Folder: "Nevbar" should be "Navbar"
5. Button text: "CHHECKOUT" should be "CHECKOUT"
6. Text: "experence" should be "experience"
7. Text: "Copyrigt@2024" should be "Copyright@2024"
8. Placeholder: "Contry" should be "Country"
9. Login state: "Sing Up" should be "Sign Up"

### Unused Imports:
- Multiple files import `React` but don't use it (not required in React 17+)
- `useEffect` imported but not used in `storeContext.jsx`

### Missing Functionality:
- Login/signup forms don't have actual submission logic
- Promo code submission has no handler
- Payment processing not implemented
- No backend integration
- Search functionality in navbar is decorative only

## File Structure
```
src/
├── App.jsx                          # Main app component
├── main.jsx                         # Entry point
├── index.css                        # Global styles
├── assets/
│   └── assets.js                    # Static assets and data
├── componetes/                      # Components (typo in folder name)
│   ├── Nevbar/                      # Navigation bar (typo)
│   ├── Header/                      # Hero section
│   ├── ExploreMenu/                 # Category selector
│   ├── FoodDisplay/                 # Food items grid
│   ├── Fooditem/                    # Individual food card
│   ├── LoginPopup/                  # Authentication modal
│   ├── Footer/                      # Footer section
│   └── AppDownload/                 # App download CTA
├── context/
│   └── storeContext.jsx             # Global state management
└── pages/
    ├── Home/                        # Home page
    ├── Cart/                        # Shopping cart page
    └── PlaceOrder/                  # Checkout page
```

## Build & Development

### Available Scripts:
- `npm run dev` - Start development server (Vite)
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Development Server:
The application uses Vite for fast development with Hot Module Replacement (HMR).

## Summary
This is a functional food ordering application prototype built with React and modern web development practices. It demonstrates key e-commerce concepts including product browsing, cart management, and checkout flow. While the UI and user flow are well-implemented, it lacks backend integration and has several minor typos that should be addressed in production. The application uses Context API for state management, React Router for navigation, and follows a component-based architecture typical of React applications.
