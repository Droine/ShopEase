import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/ProductStore";
import { useFetch } from "../hooks/UseFetch.js";
import Sidebar from "../components/Sidebar";
import SortingUI from "../components/SortingUI";
import Pagination from "../components/Pagination";
import ShopCard from "../components/ShopCard";

const Shop = () => {
  const { category, search } = useParams(); // Get search query from URL params
  const { data, isLoading, error } = useFetch(
    category
      ? `https://dummyjson.com/products/category/${category}`
      : "https://dummyjson.com/products"
  );

  const setProducts = useProductStore((state) => state.setProducts);

  const [sort, setSort] = useState("default");
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    if (data?.products) {
      let sorted = [...data.products];

      if (sort === "price-low") {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sort === "price-high") {
        sorted.sort((a, b) => b.price - a.price);
      } else if (sort === "discount") {
        sorted.sort((a, b) => b.discountPercentage - a.discountPercentage);
      }

      // Filter products if there's a search query
      if (search) {
        sorted = sorted.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setFiltered(sorted);
      setProducts(data.products);
    }
  }, [data, sort, search, setProducts]);

  const paginated = filtered.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <Sidebar data-testid="category-filter" />
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">
          {category
            ? `${category.replace("-", " ")} Products`
            : search
            ? `Search results for "${search}"`
            : "All Products"}
        </h2>

        {/* Sort */}
        <SortingUI setSort={setSort} sort={sort} />

        {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong!</p>}

        {/* Product Grid */}
        <div data-testid="product-grid">
          <ShopCard products={paginated} />
        </div>

        {/* Pagination */}
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default Shop;
