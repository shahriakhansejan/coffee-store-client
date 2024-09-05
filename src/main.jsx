import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee.jsx';
import AddCoffee from './Pages/AddCoffee/AddCoffee.jsx';
import SignIn from './Pages/Login/SignIn.jsx';
import SignUp from './Pages/Login/SignUp.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Home from './Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-bwiq27eq3-shahria-khan-sejans-projects.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-bwiq27eq3-shahria-khan-sejans-projects.vercel.app/coffee/${params.id}`) 
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/users',
    element: <Home></Home>,
    loader: () => fetch('https://coffee-store-server-31r0r5bee-shahria-khan-sejans-projects.vercel.app')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
