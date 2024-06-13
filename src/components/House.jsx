import React, { useContext } from "react";
 import { HouseContext } from "./HouseContext";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";

function House({ house, deleteButton }) {
  const { id, image, type, country, address, bedrooms, bathroom, price, surface } = house;
  const { sethouses } = useContext(HouseContext);

  const deleteHouse = async () => {
    try {
      await fetch(`	https://real-estate-app2.free.beeceptor.com/api/property/${id}`, {
        method: 'DELETE',
      });
      // Update the state
      sethouses((prevHouses) => prevHouses.filter((house) => house.id !== id));
      alert("Property successfully deleted!");
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("An error occurred while deleting the data.");
    }
  };

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-t1-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img src={image} alt="" className="mb-5" />
      <div className="text-sm font-semibold flex gap-2">
        <div className="bg-green-500 rounded-full px-3 text-white">{type}</div>
        <div className="bg-violet-500 rounded-full px-3 text-white">{country}</div>
      </div>
      <div className="text-lg font-semibold max-w-[250px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center gap-1 text-gray-700 text-[20px]">
          <div><BiBed /></div>
          <div>{bedrooms}</div>
        </div>

        <div className="flex items-center gap-1 text-gray-700 text-[20px]">
          <div><BiBath /></div>
          <div>{bathroom}</div>
        </div>

        <div className="flex items-center gap-1 text-gray-700">
          <div className="text-[20px]"><BiArea /></div>
          <div>{surface}</div>
        </div>
      </div>

      <div className="text-violet-500 mb-4">{price}</div>
      <Link to={`/property/${id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mx-3">
          View
        </button>
      </Link>
      {deleteButton && (
        <button
          onClick={deleteHouse}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      )}
      
    </div>
  );
}

export default House;
