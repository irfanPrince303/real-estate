import React, { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import { RiHome2Fill, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

function PropertyDropdown() {
  const { properties,property,setProperty} = useContext(HouseContext);
  
 
  const [isOpen, setisOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setisOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome2Fill className="dropdown-icon-primary" />
        <div>
          <div className="text-[20px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]">Select Your Place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((property, id) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              key={id}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>

    </Menu>
  );
}

export default PropertyDropdown;
