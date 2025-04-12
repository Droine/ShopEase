🛍 Perfume E-commerce Site
A modern e-commerce website for a perfume brand built with React, Vite, and Tailwind CSS. It features dynamic product listings, a shopping cart, category filtering (men's, women's, kids), and data fetching with React Query. State management is handled using Zustand.

Tech Stack
React + Vite

Tailwind CSS

React Query

Zustand

Features
Browse perfumes by brand or category

Add to cart / remove from cart

Product availability (in-stock check)

Smooth and fast UI with React Query caching

---

## Installation & Usage

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Download: https://nodejs.org/)
- **Git** (Download: https://git-scm.com/)

### Steps to Run the Project

1. **Clone the Repository**

```bash
git clone https://github.com/RabbitDaCoder59/Ours-Scent
cd Our-Scent
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`.

---

## Git Basics (Beginner-Friendly Tutorial)

Git is a version control system that helps you track changes in your code.

### How to Start Using Git in a New Project

1. **Initialize a New Git Repository:**

   ```bash
   git init
   ```

   This creates a `.git` folder in your project directory.

2. **Connect Your Local Repository to GitHub:**

   - Create a new repository on GitHub (without initializing README, .gitignore, or a license).
   - Copy the repository URL.
   - Run the following command in your terminal:
     ```bash
     git remote add origin <repository-url>
     ```

3. **Check the Status of Your Files:**

   ```bash
   git status
   ```

4. **Add All Changes to Staging:**

   ```bash
   git add .
   ```

5. **Commit Your Changes:**

   ```bash
   git commit -m "Initial commit"
   ```

6. **Push Your Code to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Common Git Commands

1. **Clone a Repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Check the Status of Your Files:**
   ```bash
   git status
   ```
3. **Add Changes to Staging:**
   ```bash
   git add .
   ```
4. **Commit Your Changes:**
   ```bash
   git commit -m "Your commit message"
   ```
5. **Push Changes to GitHub:**
   ```bash
   git push origin main
   ```
6. **Pull Latest Changes from GitHub:**
   ```bash
   git pull origin main
   ```

---

## JavaScript Basics (Beginner-Friendly Explanation)

JavaScript is a programming language used for building dynamic web applications. Below are key concepts to understand before learning React:

### 1. Variables & Data Types

```js
let name = "John"; // String
const age = 25; // Number
let isStudent = true; // Boolean
```

### 2. Functions

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

### 3. Arrays & Objects

```js
const fruits = ["Apple", "Banana", "Cherry"];
const user = { name: "John", age: 30 };
console.log(user.name); // Output: John
```

### 4. ES6 Features

- **Arrow Functions:**

```js
const add = (a, b) => a + b;
console.log(add(5, 3));
```

- **Destructuring:**

```js
const person = { name: "Alice", age: 22 };
const { name, age } = person;
console.log(name); // Output: Alice
```

### 5. Spread Operator

The spread operator (`...`) allows you to expand elements of an array or object.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
```

### 6. Array Methods (Explained for Beginners)

Arrays in JavaScript store multiple values. Here are some useful array methods:

- **map()** - Creates a new array by modifying each item in the original array.

  ```js
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]
  ```

- **filter()** - Creates a new array with items that match a condition.

  ```js
  const scores = [45, 80, 90, 30];
  const passed = scores.filter((score) => score >= 50);
  console.log(passed); // Output: [80, 90]
  ```

- **reduce()** - Reduces an array to a single value.

  ```js
  const nums = [1, 2, 3, 4];
  const sum = nums.reduce((total, num) => total + num, 0);
  console.log(sum); // Output: 10
  ```

- **forEach()** - Loops through each item in an array.

  ```js
  const colors = ["Red", "Green", "Blue"];
  colors.forEach((color) => console.log(color));
  ```

- **find()** - Returns the first element that matches a condition.

  ```js
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const user = users.find((user) => user.id === 1);
  console.log(user); // Output: { id: 1, name: "Alice" }
  ```

---

## Map (Array Function) Explained

The `.map()` function is an array method in JavaScript that creates a new array by applying a function to each element of the original array.

### Example:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```

### Explanation:

1. **Declaring an Array:**

   ```js
   const numbers = [1, 2, 3];
   ```

   - Defines an array `numbers` with three elements `[1, 2, 3]`.

2. **Using the `.map()` Method:**

   ```js
   const doubled = numbers.map((num) => num * 2);
   ```

   - `.map()` loops through each element in `numbers`.
   - The function `(num) => num * 2` takes each element and multiplies it by 2.
   - Returns a **new** array `[2, 4, 6]`.

3. **Logging the Output:**
   ```js
   console.log(doubled);
   ```
   - Prints `[2, 4, 6]` to the console.

### Summary:

- `.map()` is used to modify or transform an array.
- It **does not** change the original array.
- Returns a **new** array with modified values.

---

## Contributing

Feel free to fork this repository and contribute to the project!

---

## License

This project is licensed under the ACA License.
