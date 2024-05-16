import {createBrowserRouter, BrowserRouter, Route, Routes, RouterProvider} from "react-router-dom"
import './App.css'
import { ContactPg, HomePg } from "./pages"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// https://mattfarley.ca/

function App() {

  
  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])

  function Root() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/contact" element={<ContactPg />} />
        </Routes>
        <ToastContainer />
      </div>
    )
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
