import { Col, Image, Rate, Row, Space, Spin } from "antd";
import CommonLayout from "../../components/layout/CommonLayout";
import Container from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { IntegerStep } from "./Quantity";
import { useParams } from "react-router-dom";
import { useGetSinglePlantsQuery } from "../../redux/api/baseApi";

const Detail = () => {
  //this is for loading spiner..
  const contentStyle: React.CSSProperties = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />;
  //this is for loading spiner.End.

  const { id: _id } = useParams();
  // console.log(slug);
  const { data, isLoading } = useGetSinglePlantsQuery(_id as string);

  if (isLoading) {
    return (
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    );
  }

  // const { data: movie } = data.movie;
  const { data: plants } = data;
  // console.log(plants.name);

  return (
    <div>
      <CommonLayout />

      <Container>
        <div className="pt-10 border-t-2 ">
          <Row className="flex  mx-auto w-3/4">
            <Col span={16}>
              <div>
                <img
                  style={{ width: "470px", height: "380px" }}
                  src={plants.imageUrl}
                  alt=""
                />
              </div>
            </Col>
            <Col span={8}>
              {" "}
              <div>
                <h1 className="text-2xl text-green-800 font-serif font-bold border-b-2 inline-block pb-2 border-black">
                  {plants.name}
                </h1>
                <h4 className="text-lg text-green-800 font-serif font-semibold mt-3">
                  $ {plants.price}
                </h4>
                <Rate
                  className="text-sm text-yellow-600"
                  disabled
                  defaultValue={3}
                />
                <p className="mt-3 text-base text-green-700 font-semibold font-serif">
                  {plants.description}
                </p>
                <Space
                  style={{ width: "100%", marginTop: "8px" }}
                  direction="vertical"
                >
                  <span className="text-lg text-green-800 font-serif font-semibold">
                    Quantity:
                    <IntegerStep />
                  </span>
                </Space>
                <Button className="bg-purple-500 w-full font-serif font-semibold text-base mx-auto mt-5">
                  ADD TO CART
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
