import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [surface, setSurface] = useState("");
  const [years, setYears] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      type,
      name,
      country,
      address,
      bedrooms,
      bathroom,
      surface,
      years,
      price,
      description,
      image,
    };

    try {
      const response = await fetch("https://real-estate-app2.free.beeceptor.com/api/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        alert("Data successfully posted!");
        setTimeout(() => {
          navigate("/home", { replace: true });
          window.location.reload();
        }, 1000);
      } else {
        alert("Failed to post data.");
      }
    } catch (error) {
      alert("An error occurred while posting data. See console for details.");
    }
  };

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="text-2xl font-light text-gray-400 mb-6">
          <h1>Add New Record</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6 shadow-lg p-8 rounded-lg bg-white">
          <div className="flex justify-center mb-4 md:mb-0">
            <img
              src={image || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="Property"
              className="h-64 w-64 rounded-lg object-cover shadow-md"
              onError={(e) => { e.target.src = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"; }}
            />
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Image URL</label>
                <input
                  type="text"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Type</label>
                <input
                  type="text"
                  placeholder="House"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="House1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Address</label>
                <input
                  type="text"
                  placeholder="st .2 delhi"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Bedrooms</label>
                <input
                  type="number"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Bathroom</label>
                <input
                  type="number"
                  value={bathroom}
                  onChange={(e) => setBathroom(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Surface</label>
                <input
                  type="text"
                  value={surface}
                  onChange={(e) => setSurface(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Years</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                />
              </div>
              <button type="submit" className="w-full p-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700 transition mt-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
