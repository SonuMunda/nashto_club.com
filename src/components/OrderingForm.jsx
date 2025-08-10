import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdClear } from "react-icons/md";

function OrderingForm({
  orderDetails,
  isOrderFormActive,
  setIsOrderFormActive,
}) {
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderDetails: orderDetails,
    }));
  }, [orderDetails]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    orderDetails: orderDetails,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    });

    setIsOrderFormActive(false);

    toast("Thankyou for ordering from NashtoClub");
  };
  return (
    <>
      <Toaster />
      <section
        className={`order-form fixed inset-0 min-h-screen w-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300 ${
          isOrderFormActive
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        id="order-form"
      >
        <div className="container h-full max-w-7xl mx-auto flex items-center justify-center">
          <div className="form-content relative bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
              onClick={() => {
                setIsOrderFormActive(false);
              }}
            >
              <MdClear size={24} />
            </button>

            {/* Title */}
            <div className="form-title border-b border-gray-200">
              <h4 className="p-5 text-xl font-bold text-orange-500">
                Nasto Order
              </h4>
            </div>

            {/* Form */}
            <form
              onSubmit={handleFormSubmit}
              id="ordering-form"
              className="p-5 space-y-4"
            >
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-input mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  value={formData.firstName}
                  pattern="[A-Za-z\s]+"
                  minLength={4}
                  maxLength={24}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-input mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  value={formData.lastName}
                  pattern="[A-Za-z\s]+"
                  minLength={4}
                  maxLength={24}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  value={formData.phone}
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={12}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  value={formData.email}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-input mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  value={formData.address}
                  minLength={4}
                  maxLength={50}
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <input
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-colors cursor-pointer"
                  type="submit"
                  value="Place Order"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderingForm;
