import { Layout } from "antd";
import Products from "../../pages/Products/Products";
import LandingPage from "../../pages/Products/LandingPage";
import CommonLayout from "./CommonLayout";

const Mainlayout = () => {
  return (
    <Layout>
      <CommonLayout />
      <Products />
      <LandingPage />
    </Layout>
  );
};

export default Mainlayout;
