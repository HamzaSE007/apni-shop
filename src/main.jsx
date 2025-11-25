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
import MainAdminPage from "./components/Admin/main/mainAdminPage.jsx";
import {
  ProductCategoryList,
  ProductList,
  VendorList,
  
} from "./components/Admin/adminIndex.js";
import Orders from "./components/Admin/Orders/Orders.jsx";


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

      {/* admin route */}
      <Route path="/admin" element={<MainAdminPage />}>
        <Route path="product-list" element={<ProductList />} />
        <Route path="product-category-list" element={<ProductCategoryList />}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="customers" element={<Customers/>}/>
        <Route path="vendors-list" element={<VendorList/>}/>
      </Route>
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
