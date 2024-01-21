import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home/Home";
import AllProduct from "../Pages/AllProduct/AllProduct";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import Contacts from "../Pages/Contacts/Contacts";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/allProduct',
          element:<AllProduct></AllProduct>
        },
        {
          path:'/contact',
          element:<Contacts/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
        
      ]
    },
    {
      path:'dashboard',
      element:<AdminDashboard/>
    }
  ]);
export default router;