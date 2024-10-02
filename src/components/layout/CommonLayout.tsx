import { Badge, Col, Layout, Menu, MenuProps, Row } from "antd";
import Container from "../ui/container";
import { NavLink, Outlet } from "react-router-dom";

import { CartIcon } from "./Icon";

const items: MenuProps["items"] = [
  {
    key: "home",
    label: <NavLink to="/home">Home</NavLink>,
  },
  {
    key: "allproducts",
    label: <NavLink to="/allproducts">All Products</NavLink>,
  },
  {
    key: "management",
    label: <NavLink to="/management">Management</NavLink>,
  },
];

const CommonLayout = () => {
  return (
    <Layout>
      <div className="sticky top-0 z-50" style={{ background: "#fffdfd" }}>
        <Container>
          <Row>
            <Col span={9}>
              <div style={{ display: "flex", marginTop: "-20px" }}>
                <img
                  style={{ width: "100px", height: "120px" }}
                  src="/img/logo3.png"
                  alt=""
                />
                <NavLink to="/home">
                  <h1
                    style={{
                      fontSize: "18px",
                      fontWeight: "bolder",
                      color: "#006400",
                      marginTop: "65px",
                      fontFamily: "Garamond",
                      marginLeft: "-30px",
                    }}
                  >
                    UDBHOSHITO UDYAN
                  </h1>
                </NavLink>
              </div>
            </Col>
            <Col span={9}>
              <header>
                <Menu
                  theme="light"
                  mode="horizontal"
                  items={items}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: "#fffdfd",
                    fontWeight: "Bold",
                    fontSize: "16px",
                    font: "blue",
                    border: "none",
                    marginTop: "35px",
                    fontFamily: "monospace",
                  }}
                />
              </header>
            </Col>
            <Col span={6}>
              <div style={{ display: "flex", marginTop: "38px" }}>
                <NavLink to="/cart">
                  <Badge count={5}>
                    <CartIcon />
                  </Badge>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div>
          <Outlet />
        </div>
      </Container>
    </Layout>
  );
};

export default CommonLayout;
