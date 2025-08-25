import React, { useState, useEffect } from "react";
import ProductCategory from "./ProductCategory";
import ProductSubcategory from "./ProductSubcategory";
import ProductList from "./ProductList";

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch("/categories.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data);

        if (data.length > 0) {
          const defaultCategory = data[0];
          const defaultSubcategory =
            defaultCategory?.subcategories?.[0] || null;

          setSelectedCategory(defaultCategory);
          setSelectedSubcategory(defaultSubcategory);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load product categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedBrand(null);
    setShowBrandDropdown(false);

    if (category.subcategories && category.subcategories.length > 0) {
      setSelectedSubcategory(category.subcategories[0]);
    } else {
      setSelectedSubcategory(null);
    }
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedBrand(null);
    setShowBrandDropdown(false);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setShowBrandDropdown(false);
  };

  const toggleBrandDropdown = () => {
    setShowBrandDropdown(!showBrandDropdown);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  const scrollToProducts = () => {
    const productsSection = document.querySelector(".lg\\:flex-row");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get unique brands from current subcategory products
  const getUniqueBrands = () => {
    if (!selectedSubcategory || !selectedSubcategory.products) return [];

    const brands = [
      ...new Set(
        selectedSubcategory.products
          .map((product) => product.brand)
          .filter((brand) => brand)
      ),
    ];

    return brands.sort();
  };

  const uniqueBrands = getUniqueBrands();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-teal-800">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center p-4 bg-red-50 rounded-lg max-w-md">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="px-4 max-w-7xl mx-auto">
        {/* Search Bar Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What are you looking for?
          </h2>
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <h1 className="text-3xl font-bold text-teal-800 mb-4 text-center">
          Product Catalog
        </h1>

        <div className="text-center mb-1 animate-bounce">
          <p className="text-teal-700">Explore Our Products Below</p>
          <button
            onClick={scrollToProducts}
            className="text-teal-700 hover:text-teal-900 transition-colors focus:outline-none"
            aria-label="Scroll to products"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <ProductCategory
              key={category.id}
              category={category}
              isSelected={selectedCategory?.id === category.id}
              onSelect={handleCategorySelect}
            />
          ))}
        </div>

        {selectedCategory && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* left side of subcategory and products */}
            <div className="lg:w-1/4 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                <span className="mr-2 text-2xl">{selectedCategory.icon}</span>
                {selectedCategory.name}
              </h2>

              <div className="space-y-2">
                {selectedCategory.subcategories?.map((subcategory) => (
                  <ProductSubcategory
                    key={subcategory.id}
                    subcategory={subcategory}
                    isSelected={selectedSubcategory?.id === subcategory.id}
                    onSelect={handleSubcategorySelect}
                  />
                ))}
              </div>
            </div>

            {/* right side of products and brand filter */}
            <div className="lg:w-3/4">
              {selectedSubcategory ? (
                <div>
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-teal-800 flex items-center">
                        <span className="mr-2 text-2xl">
                          {selectedCategory.icon}
                        </span>
                        {selectedSubcategory.name}
                      </h2>
                      <p className="text-gray-600">
                        {selectedSubcategory.products?.length || 0} products
                        available
                        {selectedBrand && ` in ${selectedBrand}`}
                      </p>
                    </div>

                    {uniqueBrands.length > 0 && (
                      <div className="relative">
                        <button
                          onClick={toggleBrandDropdown}
                          className="flex items-center justify-between px-4 py-2 bg-teal-100 text-teal-800 rounded-lg hover:bg-teal-200 transition-colors"
                        >
                          <span>{selectedBrand || "All Brands"}</span>
                          <svg
                            className={`ml-2 h-4 w-4 transition-transform ${
                              showBrandDropdown ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {showBrandDropdown && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200 overflow-hidden">
                            <div
                              className="px-4 py-2 hover:bg-teal-50 cursor-pointer text-teal-900 font-medium"
                              onClick={() => handleBrandSelect(null)}
                            >
                              All Brands
                            </div>
                            {uniqueBrands.map((brand) => (
                              <div
                                key={brand}
                                className="px-4 py-2 hover:bg-teal-50 cursor-pointer text-teal-900"
                                onClick={() => handleBrandSelect(brand)}
                              >
                                {brand}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <ProductList
                    category={selectedCategory}
                    subcategory={selectedSubcategory}
                    selectedBrand={selectedBrand}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl text-gray-600 mb-4">
                    Select a subcategory to view products
                  </h3>
                  <p className="text-gray-500">
                    Choose from the list on the left to see available products
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
