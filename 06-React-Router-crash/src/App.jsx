import React from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Home from "./components/Home/Home"
import About from "./components/About/About"


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <div>
//         <Header />
//         <Home />
//         <Footer />
//       </div>,
//     },
//     {
//       path: "/about",
//       element: <div>
//         <Header />
//         <About />
//         <Footer />
//       </div>,
//     }
//   ]
// );
const App = () => {

  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
