import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Add from './components/Add Coffee/AddCoffee.jsx';
import Update from './components/Update Coffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:3000/coffee')
  },
  {
    path:'/add',
    element:<Add></Add>

  },
  {
    path:"/update/:id",
    element:<Update></Update>,
    loader:({params})=> fetch(`http://localhost:3000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
