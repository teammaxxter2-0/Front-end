import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from "./error-page.tsx"
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Chatbot from './chatbot.tsx';
import Catalog from './catalog.tsx';
import PriceList from './pricelist.tsx';
import CatchTheButton from './catchthebutton.tsx';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/chatbot",
        element: <Chatbot />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/catalog",
        element: <Catalog/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/pricelist",
        element: <PriceList />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/catchthebutton",
        element: <CatchTheButton />,
        errorElement: <ErrorPage />,
    },

    
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
       
  </React.StrictMode>,
)
