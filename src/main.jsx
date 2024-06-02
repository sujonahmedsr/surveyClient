import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes.jsx'
import 'flowbite';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
const queryClient = new QueryClient()
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
      <ToastContainer></ToastContainer>
    </QueryClientProvider>

  </React.StrictMode>,
)
