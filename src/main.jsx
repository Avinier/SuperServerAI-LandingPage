import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './routes/root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AboutPage from './routes/about.jsx';
import Header from './components/Header.jsx';
import ContactSales from './routes/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Root/>
  },
  {
    path: "/about",
    element: <>
      <Header/>
      <AboutPage/>
    </>
  },
  {
    path: "/contact",
    element: <>
      <Header/>
      <ContactSales/>
    </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
