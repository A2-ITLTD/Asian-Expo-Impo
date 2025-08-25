import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo2 from "/assets/website_big_logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  // Product categories data
  const productCategories = [
    {
      name: "Vehicle Parts & Accessories",
      items: [
        "Truck Tires",
        "Golf Cart",
        "Rim",
        "Electric Bike",
        "Other Parts",
      ],
    },
    {
      name: "Metals & Metal Products",
      items: ["Copper Scrap", "Cathode Copper", "Aluminum Metal"],
    },
    {
      name: "Dry Food",
      items: ["Rice", "Sugar", "Nuts"],
      subItems: ["Cashew Nuts", "Almond Nuts"],
    },
    {
      name: "Agriculture",
      items: ["Fresh Potatoes", "Fresh Onion", "Organic Tea"],
    },
    {
      name: "Frozen Fish",
      items: [
        "Eel",
        "Crab",
        "Shrimps",
        "Frozen Tilapia",
        "Pacific Mackerel Fish",
      ],
    },
    {
      name: "Wood",
      items: ["Wood Pellets"],
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-800 to-teal-600 shadow-lg px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo2}
              alt="Asian Import and Export"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-7">
          <Link
            to="/"
            className="text-white font-medium hover:text-amber-200 transition-colors py-2 border-b-2 border-transparent hover:border-amber-200"
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleProducts}
              className="text-white font-medium hover:text-amber-300 transition-colors flex items-center py-2 border-b-2 border-transparent hover:border-amber-300"
            >
              Products
              <FaChevronDown className="ml-1 text-sm" />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white shadow-2xl rounded-lg p-4 w-[950px] z-20 border border-teal-200">
                <div className="flex gap-3">
                  {/* Vehicle Parts & Accessories */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-teal-800 pb-1 mb-2 border-b border-teal-200">
                      Vehicle Parts
                    </h3>
                    <div className="space-y-0.5">
                      {productCategories[0].items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block py-1 px-2 hover:bg-teal-50 rounded text-xs text-gray-700 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Metals & Metal Products */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-teal-800 pb-1 mb-2 border-b border-teal-200">
                      Metals
                    </h3>
                    <div className="space-y-0.5">
                      {productCategories[1].items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block py-1 px-2 hover:bg-teal-50 rounded text-xs text-gray-700 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Dry Food */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-teal-800 pb-1 mb-2 border-b border-teal-200">
                      Dry Food
                    </h3>
                    <div className="space-y-0.5">
                      {productCategories[2].items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block py-1 px-2 hover:bg-amber-50 rounded text-xs text-gray-700 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                    {productCategories[2].subItems && (
                      <div className="mt-1 pl-2 border-l border-amber-200">
                        <div className="space-y-0.5">
                          {productCategories[2].subItems.map(
                            (subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="block py-0.5 px-2 hover:bg-amber-50 rounded text-xs text-gray-600 transition-colors"
                              >
                                {subItem}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Agriculture */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-teal-800 pb-1 mb-2 border-b border-teal-200">
                      Agriculture
                    </h3>
                    <div className="space-y-0.5">
                      {productCategories[3].items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block py-1 px-2 hover:bg-teal-50 rounded text-xs text-gray-700 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Frozen Fish & Wood Combined */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-teal-800 pb-1 mb-2 border-b border-teal-200">
                      Frozen Fish
                    </h3>
                    <div className="space-y-0.5">
                      {productCategories[4].items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block py-1 px-2 hover:bg-teal-50 rounded text-xs text-gray-700 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>

                    <h3 className="text-sm font-bold text-teal-800 pb-1 mb-2 mt-2 border-b border-teal-200">
                      Wood
                    </h3>
                    <div className="space-y-0.5">
                      {productCategories[5].items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block py-1 px-2 hover:bg-amber-50 rounded text-xs text-gray-700 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View All Products Button */}
                <div className="mt-4 pt-3 border-t border-teal-200">
                  <a
                    href="#"
                    className="block py-1.5 px-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded text-xs text-center hover:from-teal-700 hover:to-teal-800 transition-all"
                  >
                    View All Products
                  </a>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/aboutUs"
            className="text-white font-medium hover:text-amber-200 transition-colors py-2 border-b-2 border-transparent hover:border-amber-200"
          >
            About Us
          </Link>
          <Link
            to="/shipping"
            className="text-white font-medium hover:text-amber-200 transition-colors py-2 border-b-2 border-transparent hover:border-amber-200"
          >
            Shipping & Delivery
          </Link>
          <Link
            to="/privacy"
            className="text-white font-medium hover:text-amber-200 transition-colors py-2 border-b-2 border-transparent hover:border-amber-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:text-amber-200 transition-colors py-2 border-b-2 border-transparent hover:border-amber-200"
          >
            Contact
          </Link>
        </div>

        {/* Contact Info to fill the empty space */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="text-white text-sm border-l border-teal-500 pl-4">
            <div className="font-medium">Import & Export Experts</div>
            <div className="text-teal-200 text-xs">Since 2017</div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            className="text-white p-2 rounded-lg hover:bg-teal-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 py-4 border-t border-teal-700 bg-teal-800 rounded-lg">
          <div className="flex flex-col space-y-1 px-4">
            <a
              href="#"
              className="text-white font-medium py-3 px-4 hover:bg-teal-700 rounded-md transition-colors"
            >
              Home
            </a>

            <div className="">
              <button
                onClick={toggleProducts}
                className="text-white font-medium flex items-center justify-between "
              >
                Products
                <FaChevronDown
                  className={`transform transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div className="pl-2 bg-teal-700 rounded p-1">
                  {productCategories.map((category, index) => (
                    <div key={index}>
                      <p className="text-xs font-semibold text-teal-200 mb-0">
                        {category.name}
                      </p>
                      <div>
                        {category.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href="#"
                            className="block text-white py-0 px-1 hover:bg-teal-600 text-xs"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                      {category.subItems && (
                        <div className="pl-1">
                          {category.subItems.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block text-teal-200 py-0 px-1 hover:bg-teal-600 text-xs"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/aboutUs"
              className="text-white font-medium py-3 px-4 hover:bg-teal-700 rounded-md transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/shipping"
              className="text-white font-medium py-3 px-4 hover:bg-teal-700 rounded-md transition-colors"
            >
              Shipping & Delivery
            </Link>
            <Link
              to="/privacy"
              className="text-white font-medium py-3 px-4 hover:bg-teal-700 rounded-md transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-white font-medium py-3 px-4 hover:bg-teal-700 rounded-md transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
