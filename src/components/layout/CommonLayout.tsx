import { Badge, Col, Layout, Menu, MenuProps, Row } from "antd";
import Container from "../ui/container";
import { NavLink, Outlet } from "react-router-dom";

import SearchBox from "./SerarchBox";

import { CartIcon } from "./Icon";

const items: MenuProps["items"] = [
  {
    key: "home",
    label: <NavLink to="/home">Home</NavLink>,
  },
  {
    key: "cart",
    label: <NavLink to="/cart">Cart</NavLink>,
  },
];

const CommonLayout = () => {
  return (
    <Layout>
      <div style={{ background: "#fffdfd" }}>
        <Container>
          <Row>
            <Col span={9}>
              <div style={{ display: "flex", marginTop: "-28px" }}>
                <img
                  style={{ width: "150px", height: "170px" }}
                  src="/img/logo3.png"
                  alt=""
                />
                <NavLink to="/home">
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "green",
                      marginTop: "100px",
                      marginLeft: "-45px",
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
                    fontSize: "20px",
                    font: "blue",
                    border: "none",
                    marginTop: "60px",
                    fontFamily: "monospace",
                  }}
                />
              </header>
            </Col>
            <Col span={6}>
              <div style={{ display: "flex", marginTop: "68px" }}>
                <SearchBox />
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

      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default CommonLayout;
