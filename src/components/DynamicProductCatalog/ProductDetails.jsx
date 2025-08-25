import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const productFromState = location.state?.product;

  const [product, setProduct] = useState(productFromState || null);

  useEffect(() => {
    if (!productFromState) {
      fetch("/categories.json")
        .then((res) => res.json())
        .then((data) => {
          const allProducts = data.flatMap(
            (cat) =>
              cat.subcategories?.flatMap((sub) => sub.products || []) || []
          );
          const foundProduct = allProducts.find(
            (p) => String(p.id) === String(id)
          );
          setProduct(foundProduct || null);
        })
        .catch((err) => console.error("Error loading categories.json:", err));
    }
  }, [id, productFromState]);

  if (!product) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

      {/* Image Carousel */}
      <div className="flex gap-4">
        <div className="w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-96"
          />
        </div>
        <div className="w-2/3">
          <div className="grid grid-cols-3 gap-4">
            {product.additionalImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className="object-contain w-full h-32 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Quick Details */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-2xl text-teal-600 font-semibold">
            {product.offerPrice || product.price}
          </p>
          {product.offerPrice && (
            <p className="text-gray-500 line-through">{product.price}</p>
          )}
          {product.moq && (
            <p className="text-gray-700">
              <strong>MOQ:</strong> {product.moq}
            </p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Details</h2>
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              {product.brand && (
                <tr>
                  <td className="px-4 py-2 font-medium">Brand</td>
                  <td className="px-4 py-2">{product.brand}</td>
                </tr>
              )}
              {product.size && (
                <tr>
                  <td className="px-4 py-2 font-medium">Size</td>
                  <td className="px-4 py-2">{product.size}</td>
                </tr>
              )}
              {product.pattern && (
                <tr>
                  <td className="px-4 py-2 font-medium">Pattern</td>
                  <td className="px-4 py-2">{product.pattern}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supplier Information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Supplier Information</h3>
        <p className="text-gray-700">
          <strong>Company:</strong> {product.supplier?.companyName}
        </p>
        <p className="text-gray-700">
          <strong>Location:</strong> {product.supplier?.location}
        </p>
        <p className="text-gray-700">
          <strong>Verified:</strong>{" "}
          {product.supplier?.isVerified ? "Yes" : "No"}
        </p>
        <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium">
          Contact Supplier
        </button>
      </div>

      {/* Product Description */}
      {product.description && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
