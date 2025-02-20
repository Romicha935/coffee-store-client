import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import SignUp from './Components/SignUp.jsx'
import SignIn from './Components/SignIn.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Users from './Components/Users.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
   path:'/addCoffee',
   element:<AddCoffee/>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee/>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signUp',
    element:<SignUp/>
  },
  {
    path:'/signIn',
    element:<SignIn/>
  },
  {
    path:'/users',
    element:<Users/>,
    loader: ()=> fetch('http://localhost:5000/user')
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </StrictMode>,
)
