import { createContext, useState } from "react";

export const AddContext = createContext();

export default function AddContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <AddContext.Provider value={{ cart, setCart }}>
      {children}
    </AddContext.Provider>
  );
}
