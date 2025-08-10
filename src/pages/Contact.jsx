import React, { useState } from "react";
import LocationMap from "../components/LocationMap";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main>
      <section className="contact min-h-screen flex items-center justify-center ">
        <div className="container max-w-7xl mx-auto px-4 py-24 space-y-6">
          <div className="overview">
            <h1 className="text-3xl font-extrabold text-neutral-900">
              Get in Touch
            </h1>
            <p className="text-neutral-700">
              Have a question or want to say hello? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" flex items-center flex-wrap gap-4 bg-neutral-950 rounded p-10">
              <div className="icon bg-orange-500 rounded-full p-2">
                <MdPhone size={48} />
              </div>
              <div className="detail">
                <p className="type text-xl font-bold text-neutral-100">Phone</p>
                <p className="text-neutral-200">+91 80808-08080</p>
              </div>
            </div>

            <div className=" flex items-center flex-wrap gap-4 bg-neutral-950 rounded p-10">
              <div className="icon bg-orange-500 rounded-full p-2">
                <MdEmail size={48} />
              </div>
              <div className="detail">
                <p className="type text-xl font-bold text-neutral-100">Email</p>
                <p className="text-neutral-200">nashtoclub@email.com</p>
              </div>
            </div>

            <div className=" flex items-center flex-wrap gap-4 bg-neutral-950 rounded p-10">
              <div className="icon bg-orange-500 rounded-full p-2">
                <MdLocationOn size={48} />
              </div>
              <div className="detail">
                <p className="type text-xl font-bold text-neutral-100">
                  Address
                </p>
                <p className="text-neutral-200">
                  Near Civil Hospital, Kharar, Mohali
                </p>
              </div>
            </div>
          </div>

          <div className="contact-contents grid grid-cols-1 lg:grid-cols-2 bg-neutral-950">
            <div className="form-box p-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full border-b-2 border-neutral-100 text-white outline-none py-4"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full border-b-2 border-neutral-100 text-white outline-none py-4"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full border-b-2 border-neutral-100 text-white outline-none py-4"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={8}
                    required
                    className="input-field w-full border-b-2 border-neutral-100 text-white outline-none py-4"
                  ></textarea>
                </div>
                <div>
                  <input type="submit" value="Send Message" className="text-white bg-orange-500 p-2 w-full rounded-lg mt-4"/>
                </div>
              </form>
            </div>
            <div className="h-full">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
