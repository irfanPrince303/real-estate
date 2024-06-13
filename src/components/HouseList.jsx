import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from 'react-icons/im';

function HouseList({ deleteButton = false }) {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (<ImSpinner2 className="mx-auto animate-spin text-violet-600 text-4xl" />);
  }
  if (houses.length < 1) {
    return <div className="text-center text-gray-500 text-4xl mt-[90px]">Sorry, nothing found</div>;
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <div key={index}>
                <House house={house} deleteButton={deleteButton} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HouseList;
