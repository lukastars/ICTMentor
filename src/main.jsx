import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import Explore from './routes/explore';
import Signup from './routes/signup.jsx';
import Login from './routes/login';
import Consultation from './routes/consultation';
import Blog from './routes/blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/sign-up',
    element: <Signup />,
  },
  {
    path: '/log-in',
    element: <Login />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/consultation',
    element: <Consultation />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
