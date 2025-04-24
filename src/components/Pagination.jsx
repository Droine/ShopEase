import React from "react";

const Pagination = ({ totalPages, page, setPage }) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 border rounded ${
            page === p ? "bg-blue-700 text-white" : "bg-white text-blue-900"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
