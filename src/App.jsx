import { useState } from 'react'
import Acceuille from './components/Acceuille'
import LoginPage from './Authentification/login'
import Signup from './Authentification/signup'
import{RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([

    {
      path: "/signup",
      element:<Signup/>

    },
   { path: "/login",
      element:<LoginPage/>
    },
    { path: "/",
      element:<Acceuille/>
    },
    { path: "/Home",
    element:<Home/>
  }


  ])
 

  return <RouterProvider router= {router}/>
}

export default App
