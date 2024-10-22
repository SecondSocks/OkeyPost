import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Index } from "./pages/index/index"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HowBuy } from './pages/how-buy'
import { Sales } from './pages/sales'
import { Error404 } from './pages/error404'
import { Prices } from './pages/prices'
import { Help } from './pages/help'
import { Bonuses } from './pages/bonuses'
import { Blog } from './pages/blog'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        errorElement: <Error404 />
    },
    {
        path: '/how-buy',
        element: <HowBuy />,
    },
    {
        path: '/sales',
        element: <Sales />,
    },
    {
        path: '/prices',
        element: <Prices />,
    },
    {
        path: '/help',
        element: <Help />,
    },
    {
        path: '/bonuses',
        element: <Bonuses />,
    },
    {
        path: '/blog',
        element: <Blog />,
    },
    {
        path: '/shops',
        element: <h1>Shops</h1>,
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
