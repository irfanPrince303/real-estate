import React, { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import { RiWallet3Fill, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

function PriceRangeDropdown() {
  const {price,setPrice} = useContext(HouseContext);
   const prices =[
    {
        value:"Price Range (any)"
    },
    {
        value:"1100000 - 1500000"
    },
    {
        value:"1500000 - 2000000"
    },
    {
        value:"2000000 - 2500000"
    },
   ]
 
  const [isOpen, setisOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setisOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Fill className="dropdown-icon-primary" />
        <div>
          <div className="text-[20px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Select Your Place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>

      {/* Add Menu.Items and Menu.Item here for dropdown menu items */}
    </Menu>
  );
}

export default PriceRangeDropdown;
