import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../components/DynamicProductCatalog/ProductDetails";
import ContactPage from "../Pages/ContactPage";
import ShippingAndDelivery from "../Pages/ShippingAndDelivery";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import AboutUs from "./../Pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/shipping", element: <ShippingAndDelivery /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/aboutUs", element: <AboutUs /> },
    ],
  },
]);
