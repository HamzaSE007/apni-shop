import { createContext, useState } from "react";

export const addCartContext = createContext();
export default function createAddContext({children}) {
    const [productId, setProductId] = useState(0);
  return (
    <addCartContext.Provider value={{productId, setProductId}}>
        {children}
    </addCartContext.Provider>
  )
}
