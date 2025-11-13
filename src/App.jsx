import { Footer, Header} from "./components"
import { Outlet } from "react-router-dom"
import createAddContext from "./context/AddCart"
import { useState } from "react"

function App() {
  return (
    <>
    <createAddContext>
     <Header />
     <Outlet />
     <Footer />
    </createAddContext>
    </>
  )
}

export default App
