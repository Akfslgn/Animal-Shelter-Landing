import React from 'react';
import Adopt from './pages/Adopt.jsx';
import ContactUs from './pages/ContactUs.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import RootLayout from './components/RootLayout.jsx';
import { createBrowserRouter } from 'react-router';
import Home from './pages/Home.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/adopt/:petId',
        element: <Adopt />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/adopt',
        element: <Adopt />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
