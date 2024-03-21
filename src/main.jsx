import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './assets/Pages/Home.jsx';
import Blogs from './assets/Pages/Blogs.jsx';
import Bookmark from './assets/Pages/Bookmark.jsx';
import MainLouts from './assets/layouts/MainLouts.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLouts></MainLouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/Bookmark',
        element: <Bookmark></Bookmark>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
