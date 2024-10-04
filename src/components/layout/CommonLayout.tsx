import { Badge, Col, Layout, Menu, MenuProps, Row } from "antd";
import Container from "../ui/container";
import { NavLink, Outlet } from "react-router-dom";
import { CartIcon } from "./Icon";
import { useSelector } from "react-redux";

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
  {
    key: "about",
    label: <NavLink to="/about">About Us</NavLink>,
  },
];

const CommonLayout = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <Layout>
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "#e2e8f0" }}
      >
        <Container>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} lg={8} sm={8} md={9}>
              <div style={{ display: "flex", alignItems: "center" }}>
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
                      fontFamily: "Garamond",
                    }}
                  >
                    UDBHOSHITO UDYAN
                  </h1>
                </NavLink>
              </div>
            </Col>
            <Col xs={7} lg={10} sm={16} md={9}>
              <header>
                <Menu
                  theme="light"
                  mode="horizontal"
                  items={items}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: "#e2e8f0",
                    fontWeight: "Bold",
                    fontSize: "16px",
                    border: "none",
                    fontFamily: "monospace",
                  }}
                />
              </header>
            </Col>
            <Col xs={15} lg={6} sm={6} md={6}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <NavLink to="/cart">
                  <Badge count={cartTotalQuantity}>
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
