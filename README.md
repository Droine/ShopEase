# ShopEase - E-commerce Platform

ShopEase is a modern e-commerce platform built with React, Vite, and Tailwind CSS. This project provides a seamless shopping experience with features like product browsing, cart management, and user authentication.

## 🌐 Live Demo

Visit the live demo: [ShopEase](https://shopease.vercel.app)

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router 7
- **API Integration:** React Query
- **Animation:** Framer Motion
- **UI Components:** React Icons, Swiper
- **Testing:** Cypress
- **Deployment:** Vercel

## 📁 Project Structure

```
shopease/
├── src/
│   ├── api/           # API integration and services
│   ├── assets/        # Static assets (images, fonts, etc.)
│   ├── components/    # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ShopCard.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Sidebar.jsx
│   │   └── CartSidebar.jsx
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── Cart.jsx
│   │   ├── AboutUs.jsx
│   │   └── ContactUs.jsx
│   ├── store/         # Zustand store configuration
│   ├── Utils/         # Utility functions and helpers
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── cypress/           # Cypress testing files
│   ├── e2e/          # End-to-end tests
│   │   ├── home.cy.js
│   │   ├── shop.cy.js
│   │   ├── cart.cy.js
│   │   ├── about.cy.js
│   │   ├── contact.cy.js
│   │   └── navigation.cy.js
│   ├── support/      # Support files
│   │   ├── e2e.js
│   │   └── commands.js
│   └── fixtures/     # Test data
├── public/           # Public static files
├── .gitignore       # Git ignore configuration
├── eslint.config.js # ESLint configuration
├── index.html       # HTML entry point
├── package.json     # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js   # Vite configuration
└── cypress.config.js # Cypress configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shopease.git
   cd shopease
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run Cypress tests in headless mode
- `npm run test:watch` - Open Cypress Test Runner

## 🚀 Deployment

The project is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a new project on Vercel
3. Import your forked repository
4. Deploy!

## 🧪 Testing with Cypress

The project uses Cypress for end-to-end testing. The test files are located in the `cypress/e2e` directory.

### Running Tests

1. Start the development server:
   ```bash
   npm run dev
   ```

2. In a new terminal, run the tests:
   ```bash
   # Run tests in headless mode
   npm run test

   # Or open Cypress Test Runner
   npm run test:watch
   ```

### Test Structure

- `home.cy.js` - Tests for the home page
- `shop.cy.js` - Tests for the shop page
- `cart.cy.js` - Tests for the cart functionality
- `about.cy.js` - Tests for the about page
- `contact.cy.js` - Tests for the contact page
- `navigation.cy.js` - Tests for the navigation component

### Custom Commands

The project includes custom Cypress commands in `cypress/support/commands.js`:
- `addToCart()` - Add a product to cart
- `checkCartCount()` - Check cart count
- `navigateToCategory()` - Navigate to a specific category

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses ESLint for code linting. The configuration can be found in `eslint.config.js`.

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=your_api_url
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Router Documentation](https://reactrouter.com/)
- [Cypress Documentation](https://docs.cypress.io/)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
