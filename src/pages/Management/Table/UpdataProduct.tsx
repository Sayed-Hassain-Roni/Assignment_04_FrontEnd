import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Container from "../../../components/ui/container";
import "react-toastify/dist/ReactToastify.css";
import { message } from "antd";

type TProducts = {
  name: string;
  description: string;
  price: number;
  rating: number;
  stockQuantity: number;
  category: string;
  imageUrl?: string;
};

const UpdateProduct: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<TProducts>({
    name: "",
    description: "",
    price: 0,
    stockQuantity: 0,
    category: "",
    imageUrl: "",
    rating: 0,
  });

  useEffect(() => {
    axios
      .get(
        `https://assignment04-backend-reo9q2mt6-sayed-hassain-ronis-projects.vercel.app/api/v1/product/${id}`
      )
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://assignment04-backend-reo9q2mt6-sayed-hassain-ronis-projects.vercel.app/api/v1/product/${id}`,
        product
      );
      message.success("Product Updated Successfully!");
      navigate("/management");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 md:p-10">
      <Container>
        <div className="bg-slate-100 rounded-lg shadow-md p-6">
          <h1 className="text-center pt-4 font-bold text-fuchsia-900 font-serif text-3xl">
            Edit Your New Product
          </h1>
          <Link className="ml-24 mx-5" to="/management">
            <button className="bg-green-500 w-24 h-10 font-bold text-white">
              Back
            </button>
          </Link>
          <div className="mx-auto">
            <form
              className="max-w-lg mx-auto pb-16 font-semibold"
              onSubmit={handleSubmit}
            >
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Title :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter product title"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Price :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="number"
                  min={1}
                  step={0.01}
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  required
                  placeholder="Enter product price"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Quantity :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="number"
                  min={1}
                  id="stockQuantity"
                  name="stockQuantity"
                  value={product.stockQuantity}
                  onChange={handleChange}
                  required
                  placeholder="Enter product quantity"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Rating :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="number"
                  min={1}
                  max={5}
                  id="rating"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  required
                  placeholder="Enter rating (min-1 , max-5)"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="category"
                >
                  Category :
                </label>
                <select
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">{product.category}</option>
                  <option value="Flowering Plants">Flowering Plants</option>
                  <option value="Fruits Plants">Fruits Plants</option>
                  <option value="Indoor Plants">Indoor Plants</option>
                  <option value="Gardening tools and Pots">
                    Gardening tools and Pots
                  </option>
                </select>
              </div>

              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Descriptions :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="text"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                  placeholder="Enter product descriptions"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  ImageUrl :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={product.imageUrl}
                  onChange={handleChange}
                  required
                  placeholder="Enter product image url"
                />
              </div>

              <div className="mt-6 flex gap-7">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Update Product
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setProduct({
                      name: "",
                      description: "",
                      price: 0,
                      rating: 0,
                      stockQuantity: 0,
                      category: "",
                      imageUrl: "",
                    })
                  }
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateProduct;
