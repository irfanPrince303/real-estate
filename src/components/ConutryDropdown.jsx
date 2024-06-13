import React, { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import { RiMapPinLine, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

function CountryDropdown() {
  const { countries,country,setCountry} = useContext(HouseContext);
  
 
  const [isOpen, setisOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setisOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[20px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select Your Place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>

      {/* Add Menu.Items and Menu.Item here for dropdown menu items */}
    </Menu>
  );
}

export default CountryDropdown;
