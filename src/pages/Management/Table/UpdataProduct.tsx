import React, { useEffect, useState } from "react";
import { Form, Input, Button, Space, message } from "antd";
import type { FormInstance } from "antd/es/form";
import Container from "../../../components/ui/container";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Define the SubmitButtonProps interface
interface SubmitButtonProps {
  form: FormInstance;
}

type TProducts = {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  imageUrl?: string;
};
// SubmitButton Component
const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

// CreateNewProduct Component
const UpdataProduct: React.FC = () => {
  const [form] = Form.useForm();

  const types = {
    name: "",
    price: "",
    category: "",
    description: "",
    stockQuantity: "",
    imageUrl: "",
    _id: "",
  };

  const { id } = useParams();
  const [product, setProduct] = useState(types);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/${id}`)
      .then((response) => {
        setProduct(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = async (values: TProducts) => {
    await axios
      .put(`http://localhost:5000/api/v1/product/${id}`, values)
      .then((response) => {
        message.success("Product Updated Successfully!");
        navigate("/management");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-10">
      {/* <CommonLayout /> */}
      <Container>
        <div className="bg-slate-100">
          <h1 className="text-center pt-10 font-bold text-fuchsia-900 font-serif text-3xl">
            Edit Your New Product
          </h1>
          <Link className="flex justify-end mr-16 " to={"/management"}>
            {" "}
            <Button className="bg-green-500 w-24 h-10 font-bold text-white">
              Back
            </Button>
          </Link>
          <div className="flex justify-center mt-6 font-extrabold">
            <Form
              className="w-6/12"
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              onFinish={handleSubmit} // Handle form submission here
            >
              <Form.Item name="name" label="Title" rules={[{ required: true }]}>
                <Input
                  className="placeholder-blue-900"
                  placeholder={product.name}
                  defaultValue={product.name}
                />
              </Form.Item>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true }]}
              >
                <Input
                  className="placeholder-blue-900"
                  type="number"
                  placeholder={product.price}
                  defaultValue={product.price}
                />
              </Form.Item>

              <Form.Item
                name="stockQuantity"
                label="Product Quantity"
                rules={[{ required: true }]}
              >
                <Input
                  className="placeholder-blue-900"
                  type="number"
                  placeholder={product.stockQuantity}
                  defaultValue={product.stockQuantity}
                />
              </Form.Item>
              <Form.Item
                name="description"
                label="Descriptions"
                rules={[{ required: true }]}
              >
                <Input.TextArea
                  className="placeholder-blue-900"
                  placeholder={product.description}
                  defaultValue={product.description}
                />
              </Form.Item>
              <Form.Item
                name="imageUrl"
                label="Image Url"
                rules={[{ required: true }]}
              >
                <Input
                  className="placeholder-blue-900"
                  placeholder={product.imageUrl}
                  defaultValue={product.imageUrl}
                />
              </Form.Item>
              <Form.Item>
                <Space>
                  <SubmitButton form={form}>Update Product</SubmitButton>
                  <Button htmlType="reset">Reset</Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdataProduct;
