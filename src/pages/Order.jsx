import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Order.css";
import sorryImg from "/images/sorry.png";
import BrunchMenuList from "../assets/api/BrunchMenuList";
import LunchMenuList from "../assets/api/LunchMenuList";
import DinnerMenuList from "../assets/api/DinnerMenuList";
import OrderingForm from "../components/OrderingForm";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

const Order = () => {
  const currentTime = new Date();
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false); // Added cart visibility state

  const addToCart = (item) => {
    // Check if the item already exists in the cart
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
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

  const brunchStartTime = new Date();
  brunchStartTime.setHours(9, 0, 0); // Set brunch start time to 09:00AM
  const brunchEndTime = new Date();
  brunchEndTime.setHours(10, 30, 0); // Set brunch end time to 10:30AM

  const lunchStartTime = new Date();
  lunchStartTime.setHours(11, 0, 0); // Set lunch start time to 11:00AM
  const lunchEndTime = new Date();
  lunchEndTime.setHours(13, 0, 0); // Set lunch end time to 01:00PM

  const dinnerStartTime = new Date();
  dinnerStartTime.setHours(17, 0, 0); // Set dinner start time to 05:00PM
  const dinnerEndTime = new Date();
  dinnerEndTime.setHours(20, 30, 0); // Set dinner end time to 07:30PM

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

    document.getElementById("order-form").style.scale = "1";
  };

  const MenuSection = ({ title, menuItems }) => (
    <div className="order-section">
      <div className="order-menu-list my-3">
        <h3 className="title p-3">{title}</h3>
        {menuItems.map((item) => {
          const { id, dishImg, dishName, dishPrice, abtDish } = item;
          return (
            <div className="order-list-item py-2 px-3" key={id}>
              <div className="order-row">
                <div className="item-img">
                  <img src={dishImg} alt={dishName} />
                </div>
                <div className="item-details">
                  <div className="item-name">
                    <h5 className="pb-2">{dishName}</h5>
                  </div>
                  <div className="item-detail">
                    <p className="text-secondary">{abtDish}</p>
                  </div>
                  <div className="item-price">
                    <p className="text-secondary">&#8377; {dishPrice}</p>
                  </div>
                  <div className="item-btn my-2">
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="cart-icon d-flex align-items center"
        onClick={() => {
          setIsCartOpen(true);
        }}
      >
        <FaShoppingCart />
        {cartItemCount > 0 && (
          <div className="cart-count">{cartItemCount}</div>
        )}
      </div>

      <div className={isCartOpen ? "cart cart-active" : "cart"}>
        <div
          className="close-cart-btn center"
          onClick={() => {
            setIsCartOpen(false);
          }}
        >
          <FaTimes />
        </div>

        <h4 className="title p-3 m-3">Nashto Cart</h4>
        {cart.length > 0 ? (
          <div className="cart-item">
            <ul className="p-2 my-2">
              {cart.map((item) => (
                <li key={item.id} className="m-2">
                  <div className="cart-dish-name">{item.dishName}</div>
                  <div className="cart-dish-price">
                    <p>&#8377; {item.dishPrice} </p>
                  </div>
                  <div className="cart-row">
                    <div className="cart-quantity my-2">
                      <button
                        className="qty-btn"
                        id="inc-btn"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <span className="px-3 py-2  mx-2">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        id="dec-btn"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                    </div>
                    <div className="cart-btn">
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-row">
              <div className="total-price">
                <h6 className="mx-3">
                  Total Price: &#8377;{calculateTotalPrice()}
                </h6>
              </div>

              <div className="order-btn">
                <button type="button" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-item">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <OrderingForm
        orderDetails={orderDetails}
        handleSubmit={setOrderDetails}
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
            <Link to="/timings" className="ms-1" style={{ color: "var(--materialRed)" }}>
              click here.
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Order;
