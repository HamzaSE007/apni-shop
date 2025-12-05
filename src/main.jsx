import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Collections,
  Contact,
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
  AdminProductList,
  VendorList,
} from "./components/AdminPanel/adminIndex.js";
import Orders from "./components/AdminPanel/Orders/Orders.jsx";
import Layout from "./components/AdminPanel/main/Layout.jsx";

import {
  VendorAddNewProduct,
  VendorCategoryList,
  VendorHome,
  VendorOrders,
  VendorProductList,
  VendorProfile,
} from "./components/VendorPanel/vendorIndex.js";
import DashboardProductDetail from "./components/sharedComponents/DashboardProductDetail.jsx";
import VendorLayout from "./components/VendorPanel/VendorLayout.jsx";
import Customers from "./components/AdminPanel/Customers/Customers.jsx";
import SuperAdminLayout from "./components/SuperAdminPanel/SuperAdminLayout.jsx";
import {
  AdminDetailPage,
  AdminList,
  CreateAdmin,
  SuperAdminCategoryList,
  SuperAdminCreateVendor,
  SuperAdminCustomerList,
  SuperAdminDashboard,
  SuperAdminOrderList,
  SuperAdminProductList,
  SuperAdminProfile,
  SuperAdminVendorList,
} from "./components/SuperAdminPanel/SuperAdminIndex.js";
import CustomerDashboardLayout from "./components/CustomerDashboard/CustomerDashboardLayout.jsx";
import { CustomerDashboardOverview, CustomerOrders } from "./components/CustomerDashboard/CustomerDashboardIndex.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      {/* ------------------------- HOME route ------------------------- */}

      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Route>


      {/* ------------------------- login route ------------------------- */}

      <Route path="/login" element={<Login />} />


      {/* ----------------------- Admin Panel route ----------------------- */}

      <Route path="/admin" element={<Layout />}>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="product-list" element={<AdminProductList />} />
        <Route path="product-category-list" element={<ProductCategoryList />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="vendors-list" element={<VendorList />} />
        <Route path="vendor-creation" element={<CreateVendor />} />
      </Route>
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route
        path="/admin/productDetail/:productId"
        element={<DashboardProductDetail />}
      />


      {/* ----------------------- Vendor Panel routes ----------------------- */}

      <Route path="/vendor" element={<VendorLayout />}>
        <Route path="/vendor" element={<VendorHome />} />
        <Route path="product-list" element={<VendorProductList />} />
        <Route path="product-category-list" element={<VendorCategoryList />} />
        <Route path="orders" element={<VendorOrders />} />
        <Route path="add-new-product" element={<VendorAddNewProduct />} />
      </Route>
      <Route path="/vendor/profile" element={<VendorProfile />} />
      <Route
        path="/vendor/productDetail/:productId"
        element={<DashboardProductDetail />}
      />


      {/* ------------------ Super Admin Panel Routes ----------------- */}

      <Route path="/superAdmin" element={<SuperAdminLayout />}>
        <Route path="/superAdmin" element={<SuperAdminDashboard />} />
        <Route path="admin-list" element={<AdminList />} />
        <Route path="create-admin" element={<CreateAdmin/>}/>
        <Route path="vendor-list" element={<SuperAdminVendorList />} />
        <Route path="create-vendor" element={<SuperAdminCreateVendor />} />
        <Route path="product-list" element={<SuperAdminProductList />} />
        <Route path="customer-list" element={<SuperAdminCustomerList/>}/>
        <Route
          path="product-category-list"
          element={<SuperAdminCategoryList />}
        />
        <Route path="orders" element={<SuperAdminOrderList />} />
      </Route>
      <Route path="/superAdmin/profile" element={<SuperAdminProfile />} />
      <Route
        path="/superAdmin/productDetail/:productId"
        element={<DashboardProductDetail />}
      />
      <Route
        path="/superAdmin/adminDetail/:adminId"
        element={<AdminDetailPage />}
      />


      {/* ------------------ Customer Dashboard Routes ----------------- */}

      <Route path="/customerDashboard" element={<CustomerDashboardLayout/>}>
      <Route index element={<CustomerDashboardOverview/>}/>
      <Route path="overview" element={<CustomerDashboardOverview/>}/>
      <Route path="my-orders" element={<CustomerOrders/>}/>
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
