import React from "react";

const SortingUI = ({ setSort, sort }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <label className="text-sm">
        Sort by:
        <select
          className="ml-2 border rounded px-2 py-1"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="discount">Highest Discount</option>
        </select>
      </label>
    </div>
  );
};

export default SortingUI;
