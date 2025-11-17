import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import AddContextProvider from "./context/addCartContext";
import CartDrawerContextProvider from "./context/CartDrawerContext";
import CartDrawer from "./components/ShoppingCart/CartDrawer";

function App() {
  return (
    <>
      <AddContextProvider>
        <CartDrawerContextProvider>
          <Header />
          <CartDrawer/>
          <Outlet />
          <Footer />
        </CartDrawerContextProvider>
      </AddContextProvider>
    </>
  );
}

export default App;
