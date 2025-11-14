import { Footer, Header} from "./components"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import AddContextProvider from "./context/addCartContext"

function App() {
  return (
    <>
    <AddContextProvider>
     <Header />
     <Outlet />
     <Footer />
    </AddContextProvider>
    </>
  )
}

export default App
