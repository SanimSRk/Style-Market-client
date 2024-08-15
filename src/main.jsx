import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import SignUp from './Compment/SignUp/SignUp.jsx';
import Login from './Compment/Login/Login.jsx';
import AuthProvider from './AuthProviders/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
