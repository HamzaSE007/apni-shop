import { createContext, useState } from "react";

// Context to manage the open/close state of the cart drawer in the application
export const CartDrawerContext = createContext();

export default function CartDrawerContextProvider({children}) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <CartDrawerContext.Provider value={{isOpen, setIsOpen}}>
        {children}
       
    </CartDrawerContext.Provider>
  );
}
