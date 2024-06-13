import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { HouseContext } from "../../components/HouseContext";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import emailjs from '@emailjs/browser';

const PropertyDetails = () => {
  const { houses,userdata } = useContext(HouseContext);
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const form = useRef();
  

  // Fetch current user data from mock API
  useEffect(() => {
    fetch(`	https://real-estate-app.free.beeceptor.com/api/real-estate-data/${userdata}`)  
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  // Find the house by id
  const houseData = houses.find((house) => house.id === id);

  // If houseData is not found, return a message
  if (!houseData) {
    return <div>House not found</div>;
  }

  // Destructure the house data for easy access
  const { name, type, country, address, bedrooms, bathroom, surface, price, description, image } = houseData;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wujwuxd', 'template_2c4yvl9', form.current, '4Xiws2hx1smMWT5B1')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message, please try again.');
        }
      );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details bg-white shadow-lg p-6 md:p-8 rounded-lg w-full max-w-4xl mx-auto my-10">
      <h1 className="house-name text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">{name}</h1>
      <div className="property-info flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
        <div className="address text-lg font-semibold mb-2 md:mb-0">{address}</div>
        <div className="type-country flex items-center mb-2 md:mb-0">
          <span className="type bg-green-500 text-white rounded-full px-3 md:px-4 py-1 mx-1 md:mx-2">{type}</span>
          <span className="country bg-violet-500 text-white rounded-full px-3 md:px-4 py-1 mx-1 md:mx-2">{country}</span>
        </div>
        <div className="price text-violet-500 text-lg md:text-xl font-bold">$ {price}</div>
      </div>
      <div className="media-chat flex flex-col md:flex-row mb-4 md:mb-6">
        <div className="image-container w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <img src={image} alt={name} className="rounded-lg w-full" />
        </div>
        <div className="chat w-full md:w-1/2 md:pl-4 flex flex-col items-center justify-center bg-gray-100 rounded-lg border border-gray-200 p-4">
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="mb-2">
              <label className="block text-gray-700">Your Name:</label>
              <input
              
                type="text"
                name="user_name"
                value={user?.username || ""}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Your Email:</label>
              <input
                type="email"
                name="user_email"
                value={user?.email || ""}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Property Name:</label>
              <input
                type="text"
                name="property_name"
                value={name}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Property ID:</label>
              <input
                type="text"
                name="property_id"
                value={id}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Your Message:</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <input type="submit" value="Send" className="w-full py-2 bg-blue-500 text-white rounded"/>
          </form>
        </div>
      </div>
      <div className="details flex flex-col md:flex-row justify-between mb-4 md:mb-6">
        <div className="bedrooms flex items-center text-lg text-gray-700 mb-2 md:mb-0">
          <BiBed className="mr-2" /> Bedrooms: {bedrooms}
        </div>
        <div className="bathroom flex items-center text-lg text-gray-700 mb-2 md:mb-0">
          <BiBath className="mr-2" /> Bathroom: {bathroom}
        </div>
        <div className="surface flex items-center text-lg text-gray-700">
          <BiArea className="mr-2" /> Surface: {surface}
        </div>
      </div>
      <div className="description bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
