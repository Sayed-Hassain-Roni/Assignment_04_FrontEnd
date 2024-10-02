import {
  Badge,
  Button,
  Col,
  Flex,
  Form,
  Image,
  Layout,
  Menu,
  MenuProps,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Table,
} from "antd";

import { Link, NavLink, Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Container from "../../components/ui/container";
import { CartIcon } from "../../components/layout/Icon";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { SearchOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { useAppDispatch } from "../../redux/hooks";
import CommonLayout from "../../components/layout/CommonLayout";

const items: MenuProps["items"] = [
  {
    key: "home",
    label: <NavLink to="/home">Home</NavLink>,
  },
  {
    key: "management",
    label: <NavLink to="/management">Management</NavLink>,
  },
  {
    key: "allproducts",
    label: <NavLink to="/allproducts">All Products</NavLink>,
  },
];

const AllProducts = () => {
  const types = {
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    _id: "",
  };

  const [products, setProduct] = useState([types]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  //Get Function...

  useEffect(() => {
    fetchRecords(1);
  }, []);

  const fetchRecords = (page: any) => {
    axios
      .get(`http://localhost:5000/api/v1/product/show?page=${page}&size=12`)
      .then((res) => {
        setProduct(res.data.products);
        setTotalPages(res.data.totalCount);
        console.log(res.data);
        console.log(res.data.totalPages);
      });
  };

  //Sorting Functions...
  const accending = () => {
    let data = [...products];
    if (data.length > 0) {
      let result = data.sort((a, b) => a.name.localeCompare(b.name));
      setProduct(result);
    }
  };
  const deaccending = () => {
    let data = [...products];
    if (data.length > 0) {
      let result = data.sort((a, b) => b.name.localeCompare(a.name));
      setProduct(result);
    }
  };

  return (
    <div>
      <Layout>
        <CommonLayout />
        <Container>
          <div>
            <Outlet />
          </div>
        </Container>
      </Layout>
      <div className="border-t-2">
        <Container>
          <div className="flex justify-end gap-8">
            <Search
              placeholder="Find your products..."
              allowClear
              className="w-56 text-center  my-10 "
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="mt-10 flex mr-10">
              <label
                className="font-bold mr-4 mt-1 text-green-800"
                htmlFor="sort"
              >
                Sort by:
              </label>
              <Flex gap="small" wrap>
                <Button onClick={accending} type="primary">
                  A to Z
                </Button>
                <Button onClick={deaccending}>Z to A</Button>
                <Button type="dashed" onClick={fetchRecords}>
                  Reset
                </Button>
              </Flex>
            </div>
          </div>
          <h1 className="mb-5 text-2xl text-green-600 font-semibold font-mono">
            All Products...
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {products
              .filter((product) => {
                if (search === "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product) => {
                return (
                  <div>
                    <Card className="py-2">
                      <CardContent>
                        <Image
                          style={{ minWidth: "230px", height: "190px" }}
                          alt="example"
                          src={product.imageUrl}
                        />

                        <h1 className="text-lg font-extrabold text-slate-700 font-mono">
                          Name:{" "}
                          <span className="text-base text-blue-900">
                            {" "}
                            {product.name.slice(0, 10)}
                          </span>
                        </h1>

                        <h1 className="text-lg font-extrabold text-slate-700 font-mono">
                          Price:{""}
                          <span className="text-lg font-serif text-blue-900">
                            {" "}
                            $ {product.price}
                          </span>
                        </h1>
                        <h1>
                          <span className="">
                            {" "}
                            <Rate
                              className="text-sm text-yellow-700"
                              disabled
                              defaultValue={product.rating}
                            />
                          </span>
                        </h1>

                        <div className=" flex justify-between mt-5">
                          <Link to={product?._id}>
                            <Button className="bg-green-600 font-extrabold w-20 h-10 text-white text-base">
                              Details
                            </Button>
                          </Link>
                          <Button className="bg-green-500 font-extrabold w-25 h-10 text-white text-base">
                            Add Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
          </div>

          <div className="my-10">
            <Pagination
              align="center"
              total={totalPages}
              pageSize={12}
              onChange={(page) => {
                fetchRecords(page);
              }}
            />
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts;
