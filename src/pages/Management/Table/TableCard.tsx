import { Button, Image, Pagination, message } from "antd";
import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import Container from "../../../components/ui/container";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

const TableDemo = () => {
  // const data = useGetPlantsQuery({});
  // const mydata = data;
  // const [deleteProduct] = useDeleteProductMutation();

  const types = {
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    _id: "",
  };

  const [products, setProduct] = useState([types]);
  const [totalPages, setTotalPages] = useState(1);
  console.log(products);

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

  //deleteProduct Functions
  const deleteUser = async (id: string) => {
    await axios
      .delete(`http://localhost:5000/api/v1/product/${id}`)
      .then((response) => {
        setProduct((preProduct) =>
          preProduct.filter((products) => products._id !== id)
        );
        console.log(response);
        window.confirm("Are you sure to delete this product");
        message.success("Product Deleted");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Container>
        <Table className="border-2 border-red-950 mb-16 ">
          <TableHeader className="border-b-2 border-red-900">
            <TableRow className="text-lg ">
              <TableHead className="border-2 border-red-900 font-bold text-center">
                SL.No
              </TableHead>
              <TableHead className="border-2 border-red-900 font-bold text-center">
                Product Image
              </TableHead>
              <TableHead className="border-2 border-red-900 font-bold text-center">
                Title
              </TableHead>
              <TableHead className="border-2 border-red-900 font-bold text-center">
                Price
              </TableHead>
              <TableHead className="border-2 border-red-900 font-bold text-center">
                Category
              </TableHead>
              <TableHead className="border-2 border-red-900 font-bold text-center">
                <h1>Actions</h1>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {products.map((product, index) => {
              return (
                <TableRow
                  key={product?._id}
                  className="text-lg text-red-700 border-red-900 border-2 "
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="border-2 border-red-900">
                    <Image
                      style={{ width: "250px", height: "150px" }}
                      alt="example"
                      src={product?.imageUrl}
                    />
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    {product?.name}
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    ${product?.price}
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    {product?.category}
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    <div className="flex justify-center gap-3">
                      <Button
                        className="bg-red-800 text-white font-bold"
                        onClick={() => deleteUser(product?._id)}
                      >
                        Delete
                      </Button>
                      <Link to={`/management/edit/` + product?._id}>
                        <Button className="bg-green-600 text-white font-bold">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="mb-10">
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
  );
};

export default TableDemo;
