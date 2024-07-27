import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './assets/component/Home';
import Login from './assets/component/Login';


const router = createBrowserRouter([
  {path:'/', element:<App/>,
  children:[
    {index:true,element:<Home/>},
    {path:'login',element:<Login/>},

  ]

}
])
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
