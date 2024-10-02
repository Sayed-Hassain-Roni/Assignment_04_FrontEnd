import CommonLayout from "../../components/layout/CommonLayout";
import Container from "../../components/ui/container";

import TableDemo from "./Table/TableCard";
import { NavLink } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";

const Management = () => {
  return (
    <div>
      <CommonLayout />
      <div className="border-2">
        <Container>
          <div className="pt-8  ">
            <h1 className="text-center mb-10 text-3xl font-serif text-green-600 font-bold">
              Manage your product
            </h1>
          </div>

          <div className="mb-5  flex justify-end ">
            <NavLink to="/createproduct">
              <button className="mr-28 w-60 h-10 py-2 rounded-sm bg-green-600 text-white">
                <span className="mr-3">CREATE NEW PRODUCT</span>{" "}
                <PlusCircleOutlined />{" "}
              </button>
            </NavLink>
          </div>
          <div>
            <TableDemo />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Management;
