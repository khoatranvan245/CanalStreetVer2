import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Food from './Pages/Food.tsx'
import Menu from './Components/Menu.tsx'
import Retail from './Pages/Retail.tsx'
import Community from './Pages/Community.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/food',
        element: <Food/>
      },
      {
        path: '/retail',
        element: <Retail/>
      },
      {
        path: '/community',
        element: <Community/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
