import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Order.css";
import sorryImg from "/images/sorry.png";
import BrunchMenuList from "../assets/api/BrunchMenuList";
import LunchMenuList from "../assets/api/LunchMenuList";
import DinnerMenuList from "../assets/api/DinnerMenuList";
import OrderingForm from "../components/OrderingForm";
import {
  FaShoppingCart,
  FaArrowRight,
  FaAngleUp,
  FaAngleDown,
  FaTrashAlt,
  FaTimes,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <section className="order-section center">
      <ToastContainer />
      <div className="order-container container-fluid d-flex">
        <div className="order-menu-list">
          <h3 className="title p-3">{title} Menu</h3>
          <div className="order-items-cards p-4">
            {menuItems.map((item) => {
              const { id, dishImg, dishName, dishPrice, abtDish } = item;
              return (
                <div className="item-card p-4" key={id}>
                  <div className="item-img">
                    <img src={dishImg} alt={dishName} />
                  </div>
                  <div className="item-details">
                    <div className="item-name">
                      <h5 className="py-3 fw-bold">{dishName}</h5>
                    </div>
                    {/* <div className="item-detail">
                      <p className="text-secondary">{abtDish}</p>
                    </div> */}
                    <div className="space-between">
                      <div className="item-price center gap-2">
                        <p className="text-secondary">Price</p>
                        <p className="text-success fw-bold fs-4">
                          &#8377; {dishPrice}
                        </p>
                      </div>
                      <div className="item-btn my-2">
                        <button
                          onClick={() => addToCart(item)}
                          className="add-to-cart-btn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="cart-icon px-2"
          onClick={() => {
            setIsCartOpen(true);
          }}
        >
          <div className="icon fs-4 text-white">
            <FaShoppingCart />
          </div>
          {/* {cartItemCount > 0 && (
            <div className="cart-count">{cartItemCount}</div>
          )} */}
        </div>

        <div className={`cart ${isCartOpen ? "cart-open" : "cart-close"} `}>
          <div
            className="close-cart-btn py-2 px-3"
            onClick={() => {
              setIsCartOpen(false);
            }}
          >
            <FaTimes />
          </div>

          <h4 className="cart-title text-white">Nashto Cart</h4>

          {cart.length > 0 ? (
            <div className="cart-item">
              <ul className="cart-list p-2 my-2">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="cart-list-item mb-2 rounded px-2"
                  >
                    <div className="item-details space-between">
                      <div className="center">
                        <div className="cart-item-image">
                          <img src={item.dishImg} alt={item.dishName} />
                        </div>

                        <div className="veritcal-center flex-column">
                          <div className="cart-dish-name text-center fs-6 text-white">
                            {item.dishName}
                          </div>

                          <div className="cart-dish-price fw-bold text-white">
                            <p>&#8377; {item.dishPrice} </p>
                          </div>
                        </div>
                      </div>

                      <div className="center gap-2 me-2">
                        <div className="cart-quantity center flex-column m-2 text-white">
                          <button
                            className="qty-btn text-white"
                            id="inc-btn"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <FaAngleUp />
                          </button>
                          <span className="quantity-count">
                            {item.quantity}
                          </span>
                          <button
                            className="qty-btn text-white"
                            id="dec-btn"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <FaAngleDown />
                          </button>
                        </div>

                        <div className="cart-btn">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="remove-item-btn text-white fs-4"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-buy-option">
                <div className="total-price">
                  <p className="text-center p-2 text-white fs-5 border-bottom">
                    Total Price: &#8377;{calculateTotalPrice()}
                  </p>
                </div>

                <div className="order-btn">
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="p-3 bg-white fw-bold"
                    id="order-btn"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-item">
              <p className="ms-4 mb-2 py-4 fs-5 text-white">
                Your cart is empty.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
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
        <div className="timings-message center flex-column p-4">
          <img src={sorryImg} alt="sorry icon" style={{ width: "15%" }} />
          <h1 className="text-center">
            Sorry, we are currently not serving any meals at this time.
          </h1>
          <p className="py-2  fs-5 text-center">
            Please check the ordering timings
            <Link
              to="/timings"
              className="ms-1"
              style={{ color: "var(primary-dark-red)" }}
            >
              click here.
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Order;
