import React, { useEffect} from 'react';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';

import { fetchProducts } from './axios/axios';
import { routes } from './routes/index';
import {useDispatch,useSelector } from 'react-redux'
import {setProducts} from './redux/productSlice';
import Navbar from './components/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ede9f2',
    },
  },
});


const Layout = () => {

  return (
  <>
      <CssBaseline />
      <Navbar/>
        
        <Box sx={{

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height:'100%'

        }}>

          <Box sx={{
            backgroundColor: '#fff',
            padding: [0, 4, 4, 4],
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginTop: "2%",
            marginLeft: '5%'
          }}>
             <Outlet/>
          </Box>
        </Box>
   </>
  );
};

const App = () => {  
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.value)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: routes,
    },
  ])

  useEffect(() => {
      fetchProducts().then((value)=>{
        dispatch((setProducts(value)))
      }).catch((err)=>{
    console.log("err")
      })
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <RouterProvider router={router} />
        
      </ThemeProvider>
    </>
  );
};

export default App;
