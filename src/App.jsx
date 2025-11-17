import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import AddContextProvider from "./context/addCartContext";
import CartDrawerContextProvider from "./context/CartDrawerContext";

function App() {
  return (
    <>
      <AddContextProvider>
        <CartDrawerContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </CartDrawerContextProvider>
      </AddContextProvider>
    </>
  );
}

export default App;
