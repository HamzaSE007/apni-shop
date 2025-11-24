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
  Home,
  ProductDetail,
  ShoppingCart,
} from "./components/index.js";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Route>
      <Route path="/login" element={<Login/>}/>
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
