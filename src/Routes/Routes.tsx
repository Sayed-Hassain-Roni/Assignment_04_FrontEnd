import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartLayout from "../components/layout/CartLayout";
import Detail from "../pages/details/Detail";
import Management from "../pages/Management/Management";
import CreateNewProduct from "../pages/Management/Table/CreateNewProduct";
import AllProducts from "../pages/All Product/AllProducts";
import NotFound from "../pages/NotFound";
import UpdateProduct from "../pages/Management/Table/UpdataProduct";
import AboutUs from "../pages/AboutUs";
import CheckOutPage from "../components/layout/ChecKout";

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
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/cart",
    element: <CartLayout />,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
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
    element: <UpdateProduct />,
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
