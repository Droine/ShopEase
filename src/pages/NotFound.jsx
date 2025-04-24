// 404Page.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-4">
      <h1 className="text-6xl font-bold text-blue-900">404</h1>
      <p className="text-xl text-blue-700 mt-4">
        Oops! The page you're looking for does not exist.
      </p>
      <p className="mt-4 text-sm text-blue-600">
        It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
