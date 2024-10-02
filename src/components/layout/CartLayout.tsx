import { Layout } from "antd";
import "react-toastify/dist/ReactToastify.css";
import CommonLayout from "./CommonLayout";
import Container from "../ui/container";
import Footer from "../../pages/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { removeFromCart } from "../../redux/featues/CartSlice";
import { ToastContainer } from "react-toastify";

const CartLayout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveCart = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <Layout>
      <CommonLayout />
      <ToastContainer />
      <Container>
        <div>
          <h1 className="text-center text-red-600 my-10 font-semibold text-3xl">
            Shopping Cart
          </h1>
          {cart.cartItems.length === 0 ? (
            <div className="text-center font-semibold min-h-80 mt-20 text-lg">
              <p>Your cart is currently empty</p>
              <div>
                <ArrowLeftOutlined />
                <Link to={"/"}>Start Shopping</Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-12 gap-4 text-lg font-mono text-red-950 pl-5 py-2 border-b-2 border-gray-500 ">
                <div className="col-span-6">
                  <p>PRODUCT</p>
                </div>
                <div className="col-span-2 text-center">
                  <p>PRICE</p>
                </div>
                <div className="col-span-2 text-center">
                  <p>QUANTITY</p>
                </div>
                <div className="col-span-2 flex justify-end mr-6">
                  <p>TOTAL</p>
                </div>
              </div>

              <div>
                {cart.cartItems?.map((cartItem: any) => (
                  <div
                    key={cartItem._id}
                    className="grid grid-cols-12 gap-4 text-lg font-mono text-red-950 pl-5  border-b-2 border-gray-500 py-5 mb-10"
                  >
                    <div className="col-span-6 flex">
                      <img
                        className="w-36 h-36"
                        src={cartItem.imageUrl}
                        alt="image"
                      />
                      <div className="ml-10 mt-3">
                        <h3 className="text-lg font-semibold font-serif">
                          {cartItem.name}
                        </h3>
                        <p className="text-sm text-red-950">
                          {cartItem.description}
                        </p>
                        <button
                          onClick={() => handleRemoveCart(cartItem)}
                          className="mt-5 text-sm font-bold text-gray-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 mt-10 text-center">
                      <p className="text-1xl font-semibold">
                        {" "}
                        ${cartItem.price}
                      </p>
                    </div>
                    <div className="col-span-2 ml-10 mx-auto my-auto text-center mt-8 border-2 border-gray-400 h-10 flex px-4 font-semibold ">
                      <button>-</button>
                      <div className=" my-auto px-5">
                        {cartItem.cartQuantity}
                      </div>
                      <button>+</button>
                    </div>
                    <div className="col-span-2 font-semibold mt-9 flex justify-end mr-9">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mr-10 mb-16">
                <button className="border-2 border-gray-400 rounded-sm text-center p-2 h-12 my-auto w-28 text-gray-900 font-semibold">
                  Clear Cart
                </button>
                <div>
                  <div className="flex text-lg font-semibold justify-between text-red-950">
                    <h3>Subtotal</h3>
                    <p>${cart.cartTotalAmount}</p>
                  </div>

                  <button className="my-4  bg-blue-700 w-64 h-10 rounded-sm text-white font-semibold">
                    {" "}
                    Check Out{" "}
                  </button>
                  <Link to={"/"}>
                    {" "}
                    <p className="text-sm font-semibold">
                      {" "}
                      <ArrowLeftOutlined /> Continue Shopping
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default CartLayout;
