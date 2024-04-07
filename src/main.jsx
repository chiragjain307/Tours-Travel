import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Tickets from './pages/Tickets.jsx'
import Explore from './pages/Explore.jsx'
import Activity from './pages/Activity.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/tickets',
        element: <Tickets/>
      },
      {
        path: '/explore',
        element: <Explore/>
      },
      {
        path: '/activity',
        element: <Activity/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
