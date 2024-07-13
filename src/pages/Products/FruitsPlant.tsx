import { Button, Image, Rate, Spin } from "antd";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
// import Container from "../../components/ui/container";
import { ArrowRightOutlined, StarFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useGetPlantsQuery } from "../../redux/api/baseApi";
import { TProducts } from "../../utils/type";

const FruitsPlant = () => {
  //this is for loading spiner..
  const contentStyle: React.CSSProperties = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />;
  //this is for loading spiner.End.

  const { data, isLoading } = useGetPlantsQuery({});

  console.log(data);

  if (isLoading) {
    return (
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    );
  }

  const { data: plants } = data;
  console.log(plants.category);

  return (
    <div className="mt-5 mb-8">
      <h1 className="text-green-700 text-3xl  ">Fruits Plants</h1>
      <div className="my-8">
        <div className="">
          <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
              {plants.map((plant: TProducts) => (
                <CarouselItem
                  key={plant?._id}
                  className="pl-1 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1 w-auto">
                    <Card>
                      <CardContent className="flex justify-center p-2">
                        <div>
                          <Image
                            style={{ width: "250px", height: "200px" }}
                            alt="example"
                            src={plant.imageUrl}
                          />

                          <h1 className="text-lg font-extrabold text-slate-700 font-mono">
                            Name:{" "}
                            <span className="text-base text-blue-900">
                              {" "}
                              {plant.name}
                            </span>
                          </h1>

                          <h1 className="text-lg font-extrabold text-slate-700 font-mono">
                            Price:{""}
                            <span className="text-lg font-serif text-blue-900">
                              {" "}
                              $ {plant.price}
                            </span>
                          </h1>
                          <h1>
                            <span className="">
                              {" "}
                              <Rate
                                className="text-sm text-yellow-700"
                                disabled
                                defaultValue={plant.rating}
                              />
                            </span>
                          </h1>

                          <div className="flex justify-between mt-8">
                            <NavLink to={plant?._id}>
                              <Button className="bg-green-600 font-extrabold w-20 h-10 text-white text-base">
                                Details
                              </Button>
                            </NavLink>
                            <Button className="bg-green-500 font-extrabold w-25 h-10 text-white text-base">
                              Add Cart
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <NavLink to="/cart">
          <h1 className=" bg-blue-500 text-lg font-extrabold text-white border px-4 rounded py-1">
            View all <ArrowRightOutlined />
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default FruitsPlant;
