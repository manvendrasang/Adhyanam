import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Scholarships from './pages/Scholarships.jsx'
import Intern from './pages/Intern.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/intern',
    element: <Intern />
  },
  {
    path: '/faq',
    element: <Faq />
  },
  {
    path: '/scholarships',
    element: <Scholarships />
  },  
  {
    path: '/contact',
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
