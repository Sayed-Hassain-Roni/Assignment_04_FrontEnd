import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import CartLayout from "../components/layout/CartLayout";
import Detail from "../pages/details/Detail";
import Management from "../pages/Management/Management";
import CreateNewProduct from "../pages/Management/Table/CreateNewProduct";
import UpdataProduct from "../pages/Management/Table/UpdataProduct";
import AllProducts from "../pages/All Product/AllProducts";
import NotFound from "../pages/NotFound";

export const route = createBrowserRouter([
  {
    path: "/notfound",
    element: <NotFound />,
  },

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartLayout />,
  },

  {
    path: "/home/:id",
    element: <Detail />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },

  {
    path: "/management",
    element: <Management />,
  },
  {
    path: "/management/edit/:id",
    element: <UpdataProduct />,
  },
  {
    path: "/createproduct",
    element: <CreateNewProduct />,
  },
  {
    path: "/allproducts",
    element: <AllProducts />,
  },
  {
    path: "/allproducts/:id",
    element: <Detail />,
  },
]);
