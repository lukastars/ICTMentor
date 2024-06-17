import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextProvider from './context/Context.jsx';

import './index.css';
import Root from './routes/root';
import Explore from './routes/explore';
import Signup from './routes/signup.jsx';
import Login from './routes/login';
import Services from './routes/services';
import Blog from './routes/blog';
import BlogPage from './routes/blogPage';
import Consultation from './routes/consultation';
import AI from './routes/ai';

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
    path: '/services',
    element: <Services />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:blogId',
    element: <BlogPage />,
  },
  {
    path: '/consultation',
    element: <Consultation />,
  },
  {
    path: '/ai',
    element: <AI />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
