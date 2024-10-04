import React from "react";
import { Button, Carousel } from "antd";

const Products = () => {
  const contentStyle: React.CSSProperties = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="mt-28">
      <div>
        <Carousel arrows infinite={true} autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                style={{ width: "100%", height: "650px", objectFit: "fill" }}
                src="https://images.unsplash.com/photo-1513246419778-6b7b51417adf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </h3>
            <div
              style={{
                marginTop: "-35%",
                marginLeft: "100px",
                width: "550px",
                height: "300px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  color: "white",
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  lineHeight: "70px",
                }}
              >
                We Provide All Kind Of Plants..
              </h1>
              <div style={{ marginTop: "30px" }}>
                <Button type="primary" size={"large"}>
                  SHOP NOW
                </Button>
                <Button style={{ marginLeft: "35px" }} size={"large"}>
                  MORE INFO
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                style={{ width: "100%", height: "650px", objectFit: "fill" }}
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </h3>
            <div
              style={{ marginTop: "-35%", marginLeft: "100px", width: "550px" }}
            >
              <h1
                style={{
                  fontSize: "40px",
                  color: "white",
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  lineHeight: "60px",
                }}
              >
                Are you looking for a flowers for your garden?
              </h1>
              <div style={{ marginTop: "30px" }}>
                <Button type="primary" size={"large"}>
                  SHOP NOW
                </Button>
                <Button style={{ marginLeft: "35px" }} size={"large"}>
                  MORE INFO
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 style={contentStyle}>
              <img
                style={{ width: "100%", height: "650px", objectFit: "fill" }}
                src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </h3>
            <div
              style={{ marginTop: "-35%", marginLeft: "100px", width: "550px" }}
            >
              <h1
                style={{
                  fontSize: "40px",
                  color: "white",
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  lineHeight: "70px",
                }}
              >
                Start your Garding from today, We are here to help you.
              </h1>
              <div style={{ marginTop: "30px" }}>
                <Button type="primary" size={"large"}>
                  SHOP NOW
                </Button>
                <Button style={{ marginLeft: "35px" }} size={"large"}>
                  MORE INFO
                </Button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
