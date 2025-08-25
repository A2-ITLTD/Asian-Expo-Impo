import { createBrowserRouter, useLocation } from "react-router-dom";
import MainLayout from "./../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../components/DynamicProductCatalog/ProductDetails";
import ContactPage from "../Pages/ContactPage";
import ShippingAndDelivery from "../Pages/ShippingAndDelivery";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import AboutUs from "./../Pages/AboutUs";
import SearchResults from "../components/Search/SearchResults";
import ProductCatalog from "../components/DynamicProductCatalog/ProductCatalog";
import { useEffect } from "react";

export const SmoothScrollWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SmoothScrollWrapper>
        <MainLayout />
      </SmoothScrollWrapper>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/shipping", element: <ShippingAndDelivery /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/products", element: <ProductCatalog /> },
    ],
  },
]);
