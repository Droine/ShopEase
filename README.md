# ShopEase

Welcome to the official repository of ShopEase, a modern e-commerce platform built with React, Vite, and Tailwind CSS. This documentation provides a comprehensive guide to the project's structure, components, and setup instructions.

## Table of Contents

<<<<<<< HEAD
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Assets](#assets)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [Progress](#progress)
=======
Visit the live demo: [ShopEase](https://shopease-green.vercel.app)
>>>>>>> c9acfab68750afa7f13f543defcf0cb058719a21

## Introduction

ShopEase is a technology firm dedicated to providing innovative e-commerce solutions through modern web development. Our goal is to deliver a seamless shopping experience with features like product browsing, cart management, and detailed product views.

## Project Structure

The project's file structure is organized as follows:

```
shopease/
├── public/
│   ├── index.html
├── src/
│   ├── api/           # API integration
│   ├── assets/        # Static assets(images)
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
│   ├── store/         # Zustand store
│   ├── Utils/         # Utility functions
│   ├── App.jsx        # Main application
│   ├── main.jsx       # Application entry
│   └── index.css      # Global styles
├── cypress/           # Cypress testing files
├── .gitignore
├── README.md
└── package.json
```

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/RabbitDaCoder59/shopease.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shopease
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server and open the application in your default web browser. The app will automatically reload if you make any changes to the code.

## Components

### Navbar Component

The Navbar component contains the navigation bar with links to different sections of the website:

- Home
- Shop
- Cart
- About Us
- Contact Us

### ShopCard Component

The ShopCard component displays product information including:

- Product image
- Title
- Price
- Add to cart button

### ProductDetails Component

The ProductDetails component shows detailed information about a product:

- Product images
- Description
- Price
- Add to cart functionality
- Related products

### CartSidebar Component

The CartSidebar component manages the shopping cart:

- List of added products
- Quantity controls
- Total price calculation
- Checkout button

## Assets

The assets used in this project, such as images and icons, are stored in the `src/assets` directory.

## Dependencies

The project uses the following major dependencies:

- React 19: JavaScript library for building user interfaces
- Vite 6: Build tool and development server
- Tailwind CSS: For styling the application
- Zustand: For state management
- React Router 7: For handling routing
- React Query: For API integration
- Framer Motion: For animations
- React Icons: For using icons
- Swiper: For carousel components
- Cypress: For end-to-end testing

For a complete list of dependencies, refer to the `package.json` file.

## Contributing

We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request on GitHub

## Progress

### Completed

- Home page implementation
- Shop page with product listing
- Cart functionality
- Product details page
- Responsive design
- State management with Zustand
- API integration with React Query
- Testing setup with Cypress

## Live Demo

Visit the live demo: [ShopEase](https://shopease-green.vercel.app)

---

_Code by Rabbitdacoder_
