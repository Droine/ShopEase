// 404Page.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="text-xl text-gray-700 mt-4">
        Oops! The page you're looking for does not exist.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
