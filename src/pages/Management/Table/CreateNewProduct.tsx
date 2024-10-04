import React from "react";
import { Form, Input, Button, Space, Select, message } from "antd";
import type { FormInstance } from "antd/es/form";
import Container from "../../../components/ui/container";
import { useCreatePlantsMutation } from "../../../redux/api/baseApi";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
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

  // form.resetFields();

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

// CreateNewProduct Component
const CreateNewProduct: React.FC = () => {
  const [form] = Form.useForm();

  const [cratePlants] = useCreatePlantsMutation();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (values: TProducts) => {
    console.log("Form values:", values);
    await cratePlants(values);
    navigate("/management");
    message.success("Product added successfully!");
    form.resetFields();
  };

  return (
    <div className="p-10">
      {/* <CommonLayout /> */}
      <Container>
        <div className="bg-slate-100">
          <h1 className="text-center pt-10 font-bold text-fuchsia-900 font-serif text-3xl">
            Add Your New Product
          </h1>
          <Link className=" ml-16 " to={"/management"}>
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
                <Input placeholder="Product Title" />
              </Form.Item>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true }]}
              >
                <Input min={1} type="number" placeholder="Product Price" />
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true }]}
              >
                <Select placeholder="Select a category">
                  <Select.Option value="Flowers">
                    Flowering Plants
                  </Select.Option>
                  <Select.Option value="Trees">Fruits Plants</Select.Option>
                  <Select.Option value="Shrubs and Bushes">
                    Indoor Plants
                  </Select.Option>
                  <Select.Option value="Vegetables">
                    Gardening tools and Pots
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="stockQuantity"
                label="Product Quantity"
                rules={[{ required: true }]}
              >
                <Input min={1} type="number" placeholder="Product Quantity" />
              </Form.Item>
              <Form.Item
                name="rating"
                label="Product Rating"
                rules={[{ required: true }]}
              >
                <Input
                  min={1}
                  max={5}
                  type="number"
                  placeholder="Product Rating out of 5 "
                />
              </Form.Item>
              <Form.Item
                name="description"
                label="Descriptions"
                rules={[{ required: true }]}
              >
                <Input.TextArea placeholder="Product Descriptins" />
              </Form.Item>
              <Form.Item
                name="imageUrl"
                label="Image Url"
                rules={[{ required: true }]}
              >
                <Input placeholder="Product Image URL" />
              </Form.Item>
              <Form.Item>
                <Space>
                  <SubmitButton form={form}>Add Product</SubmitButton>
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

export default CreateNewProduct;
