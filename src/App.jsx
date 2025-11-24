import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import CartDrawer from "./components/ShoppingCart/CartDrawer";

function App() {
  return (
    <>
      <Header />
      <CartDrawer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
