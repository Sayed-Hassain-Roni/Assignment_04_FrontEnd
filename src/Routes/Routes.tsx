import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartLayout from "../components/layout/CartLayout";
import Detail from "../pages/details/Detail";

export const route = createBrowserRouter([
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
]);
