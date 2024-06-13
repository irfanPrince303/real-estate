import React, { createContext, useContext, useEffect, useState } from "react";

export const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const [houses, sethouses] = useState([]);
  const [country, setCountry] = useState("location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Pricerange (any)");
  const [loading, setLoading] = useState(false);
  const [userdata, setuserdata] = useState('');
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch("https://real-estate-app2.free.beeceptor.com/api/property");
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }
        const data = await response.json();
        sethouses(data);
  
        // Set unique countries from fetched data
        const allCountries = data.map((house) => house.country);
        const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
        setCountries(uniqueCountries);
  
        // Set unique properties from fetched data
        const allProperties = data.map((house) => house.type);
        const uniqueProperties = ["Property (any)", ...new Set(allProperties)];
        setProperties(uniqueProperties);
      } catch (error) {
        console.error("Error fetching houses data:", error);
        // Handle error state or display a message to the user
      }
    };
  
    fetchHouses();
  }, []);

  // Handle search
  const handelClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = houses.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house && house.country === country;
        }
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property && house;
        }
      }
    });

    setTimeout(() => {
      sethouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        sethouses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        setLoading,
        handelClick,
        userdata, setuserdata
      }}
    >
      {children}
    </HouseContext.Provider>
  );
}

export default HouseContextProvider;
