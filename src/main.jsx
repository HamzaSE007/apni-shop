import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import {
  About,
  Collections,
  Contact,
  Customers,
  Home,
  ProductDetail,
  ShoppingCart,
} from "./components/index.js";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js";
import Login from "./components/Login/Login.jsx";
import {
  AdminHome,
  AdminProfile,
  CreateVendor,
  ProductCategoryList,
  ProductList,
  VendorList,
  
} from "./components/AdminPortal/adminIndex.js";
import Orders from "./components/AdminPortal/Orders/Orders.jsx";
import Layout from "./components/AdminPortal/main/Layout.jsx";
import VendorLayout from "./components/VendorPortal/VendorLayout.jsx";
import { VendorAddNewProduct, VendorCategoryList, VendorHome, VendorOrders, VendorProductList, VendorProfile } from "./components/VendorPortal/vendorIndex.js";
import ProductDetails from "./components/VendorPortal/Product/ProductList/ProductDetails.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* HOME route */}
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Route>

      {/* login route */}
      <Route path="/login" element={<Login />} />

      {/* Admin Portal route */}
      <Route path="/admin" element={<Layout />}>
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="product-list" element={<ProductList />} />
        <Route path="product-category-list" element={<ProductCategoryList />}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="customers" element={<Customers/>}/>
        <Route path="vendors-list" element={<VendorList/>}/>
        <Route path="vendor-creation" element={<CreateVendor/>}/>
      </Route>
      <Route path="/admin/profile" element={<AdminProfile/>}/>

      {/* Vendor Portal routes */}
      <Route path="/vendor" element={<VendorLayout/>}>
      <Route path="/vendor" element={<VendorHome/>}/>
      <Route path="product-list" element={<VendorProductList/>}/>
      <Route path="product-category-list" element={<VendorCategoryList/>}/>
      <Route path="orders" element={<VendorOrders/>}/>
      <Route path="add-new-product" element={<VendorAddNewProduct/>}/>
      </Route>
      <Route path="/vendor/productDetail/:productId" element={<ProductDetails/>}/>
      <Route path="/vendor/profile" element={<VendorProfile/>}/>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
