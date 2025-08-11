import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrunchMenuList from "../assets/api/BrunchMenuList";
import LunchMenuList from "../assets/api/LunchMenuList";
import DinnerMenuList from "../assets/api/DinnerMenuList";
import OrderingForm from "../components/OrderingForm";
import {
  MdAddCircle,
  MdCancel,
  MdClear,
  MdCurrencyRupee,
  MdRemoveCircle,
  MdShoppingCart,
} from "react-icons/md";

const Order = () => {
  const currentTime = new Date();
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderFormActive, setIsOrderFormActive] = useState(false);

  const addToCart = (item) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      toast.success("Item added");
    }
  };
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId && item.quantity < 5) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
  };

  const cartItemCount = cart.length;

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.dishPrice * item.quantity;
    });
    return total;
  };

  //brunch ordering time
  const brunchStartTime = new Date();
  brunchStartTime.setHours(9, 0, 0);
  const brunchEndTime = new Date();
  brunchEndTime.setHours(10, 30, 0);

  //lunch ordering time
  const lunchStartTime = new Date();
  lunchStartTime.setHours(11, 0, 0);
  const lunchEndTime = new Date();
  lunchEndTime.setHours(13, 0, 0);

  //dinner ordering time
  const dinnerStartTime = new Date();
  dinnerStartTime.setHours(17, 0, 0);
  const dinnerEndTime = new Date();
  dinnerEndTime.setHours(21, 30, 0);

  //time checks
  const isBrunchTime =
    currentTime >= brunchStartTime && currentTime <= brunchEndTime;
  const isLunchTime =
    currentTime >= lunchStartTime && currentTime <= lunchEndTime;
  const isDinnerTime =
    currentTime >= dinnerStartTime && currentTime <= dinnerEndTime;

  const brunchMenu = BrunchMenuList;

  const lunchMenu = LunchMenuList;

  const dinnerMenu = DinnerMenuList;

  const handlePlaceOrder = () => {
    const orderItems = cart.map((item) => ({
      dishName: item.dishName,
      dishPrice: item.dishPrice,
      quantity: item.quantity,
    }));

    const totalAmount = calculateTotalPrice();

    const orderDetails = {
      items: orderItems,
      totalAmount: totalAmount,
    };

    setOrderDetails(orderDetails);

    setIsOrderFormActive(true);
  };

  const MenuSection = ({ title, menuItems }) => (
    <main className="main w-full overflow-x-hidden">
      <section className="order-section center">
        <div className="container max-w-7xl mx-auto px-6 py-24">
          <div className="order-content grid grid-cols-1 lg:grid-cols-3 justify-between gap-10">
            <div className="order-menu-list lg:col-span-2">
              <h3 className="heading pb-6 text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
                {title} Menu
              </h3>
              <div className="order-items-cards grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {menuItems.map((item) => {
                  const { id, dishImg, dishName, dishPrice, abtDish } = item;
                  return (
                    <div
                      key={id}
                      className="bg-white flex flex-col h-full overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={dishImg}
                          alt={dishName}
                          className="w-full h-48 rounded-xl object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 py-4">
                        {/* Name */}
                        <h5 className="text-lg font-bold text-orange-500 mb-1">
                          {dishName}
                        </h5>

                        {/* Description */}
                        <p className="text-neutral-700 text-sm flex-1">
                          {abtDish}
                        </p>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-800 font-bold text-sm">
                            Price
                          </span>
                          <span className="flex items-center font-semibold text-neutral-800">
                            <MdCurrencyRupee className="text-orange-500" />
                            {dishPrice}
                          </span>
                        </div>

                        {/* Add Button */}
                        <button
                          onClick={() => addToCart(item)}
                          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="cart-icon block lg:hidden fixed bottom-6 right-6 bg-neutral-950 shadow-lg rounded-full p-3 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={() => {
                setIsCartOpen(true);
              }}
            >
              <div className="icon text-orange-500 relative">
                <MdShoppingCart size={28} />
                {cartItemCount > 0 && (
                  <span className="cart-count absolute -top-2 -right-2 bg-orange-500 text-white w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full shadow-md">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </div>

            <div
              className={`cart ${
                isCartOpen ? "block" : "hidden"
              } fixed top-0 left-0 h-screen bg-neutral-950 w-full max-w-md z-20 overflow-y-auto lg:relative lg:z-1 lg:rounded-xl lg:block`}
            >
              {/* Close Button */}
              <div
                className="absolute block lg:hidden right-4 top-4 text-white cursor-pointer hover:text-orange-500 transition-colors"
                onClick={() => setIsCartOpen(false)}
              >
                <MdCancel size={24} />
              </div>

              {/* Title */}
              <h4 className="text-xl p-4 cursive-text font-bold text-orange-500 text-center">
                Nashto Cart
              </h4>

              {cart.length > 0 ? (
                <div className="flex flex-col">
                  {/* Cart Items */}
                  <ul className="flex-1 overflow-y-auto px-6">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="grid grid-cols-7 gap-4 py-4 px-2"
                      >
                        {/* Item Info */}
                        <div className="flex items-center col-span-4 gap-3">
                          <img
                            src={item.dishImg}
                            alt={item.dishName}
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-white font-semibold">
                              {item.dishName}
                            </p>
                            <p className="text-orange-400 font-bold">
                              ₹{item.dishPrice}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center mx-auto gap-2 col-span-2  p-1  rounded-full">
                          <button
                            className="text-white hover:text-orange-500"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <MdAddCircle size={24} />
                          </button>
                          <span className="text-white font-bold">
                            {item.quantity}
                          </span>
                          <button
                            className="text-white hover:text-orange-500"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <MdRemoveCircle size={24} />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-white hover:text-orange-600 transition-colors"
                        >
                          <MdCancel size={24} />
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="p-4 border-t border-neutral-700 space-y-4">
                    <div className="price-breakout pb-4 border-b border-neutral-700">
                      {cart.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between text-white"
                          >
                            <p>{item.dishName}</p>
                            <p className="flex items-center gap-2">
                              <span>{item.dishPrice}</span> <MdClear />
                              <span>{item.quantity}</span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-lg text-white font-semibold flex justify-between mb-3">
                      <span>Total:</span>
                      <p className="flex items-center">
                        <MdCurrencyRupee />
                        {calculateTotalPrice()}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handlePlaceOrder}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-orange-500 text-center">
                    Your cart is empty.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  return (
    <div>
      <OrderingForm
        orderDetails={orderDetails}
        handleSubmit={setOrderDetails}
        isOrderFormActive={isOrderFormActive}
        setIsOrderFormActive={setIsOrderFormActive}
      />

      {isBrunchTime && <MenuSection title="Brunch" menuItems={brunchMenu} />}
      {isLunchTime && <MenuSection title="Lunch" menuItems={lunchMenu} />}
      {isDinnerTime && <MenuSection title="Dinner" menuItems={dinnerMenu} />}
      {!isBrunchTime && !isLunchTime && !isDinnerTime && (
        <div className="flex flex-col items-center justify-center text-center px-6 py-24 min-h-[65vh] bg-white rounded-lg shadow-md">
          <div className="contents">
            <img
              src="/images/sorry.png"
              alt="sorry icon"
              className="w-24 md:w-32 mb-4"
            />

            <h1 className="text-2xl max-w-3xl md:text-3xl font-semibold text-gray-800 mb-2">
              Sorry, we are currently not serving any meals at this time.
            </h1>

            <p className="text-center max-w-3xl md:text-lg text-gray-600">
              Please check the ordering timings
              <Link
                to="/timings"
                className="ml-2 text-orange-700 font-medium hover:underline hover:text-red-800 transition-colors duration-200"
              >
                click here.
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
