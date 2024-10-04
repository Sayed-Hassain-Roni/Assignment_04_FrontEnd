import { Button, Image, Rate, Spin } from "antd";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { TProducts } from "../../utils/type";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/featues/CartSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const PlantsPots = () => {
  const types = {
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    _id: "",
  };
  //Prodduct get funtion....
  const [products, setProduct] = useState([types]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = () => {
    const loadingToastId = toast.loading("Data is Loading...");

    axios
      .get("http://localhost:5000/api/v1/product")
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      })
      .finally(() => {
        toast.dismiss(loadingToastId);
      });
  };

  //  map over plants
  const mappedPlants = products.map((plant: any) => {
    return {
      ...plant,
    };
  });

  console.log(mappedPlants);
  // filter by category
  const filteredPlants = mappedPlants.filter(
    (plant: any) => plant.category === "Gardening tools and Pots"
  );
  console.log(filteredPlants.length);

  // Add To Cart Function..

  const dispatch = useDispatch();

  const handleAddtoCart = (plant: any) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="mt-5 mb-8">
      <h1 className="text-green-700 text-3xl ">Gardening Items</h1>
      <div className="my-8">
        <div className="">
          <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
              {filteredPlants.map((plant: TProducts) => (
                <CarouselItem
                  key={plant?._id}
                  className="pl-1 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1 w-auto">
                    <Card>
                      <CardContent className="flex justify-center p-2">
                        <div>
                          <Image
                            style={{ minWidth: "190px", height: "170px" }}
                            alt="example"
                            src={plant.imageUrl}
                          />

                          <h1 className="text-lg font-extrabold text-slate-700 font-mono">
                            Name:{" "}
                            <span className="text-base text-blue-900">
                              {" "}
                              {plant.name?.slice(0, 10)}
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
                            <Link to={plant?._id}>
                              <Button className="bg-green-600 font-extrabold w-20 h-10 text-white text-base">
                                Details
                              </Button>
                            </Link>
                            <Button
                              onClick={() => handleAddtoCart(plant)}
                              className="bg-green-500 font-extrabold w-25 h-10 text-white text-base"
                            >
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
        <NavLink to="/allproducts">
          <h1 className=" bg-blue-500 text-lg font-extrabold text-white border px-4 rounded py-1">
            View all <ArrowRightOutlined />
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default PlantsPots;
