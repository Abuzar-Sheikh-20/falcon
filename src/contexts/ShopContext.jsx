import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";

  const [search, setSearch] = useState("");

  // Static products data
  const [products] = useState([]);

  const value = {
    products,
    currency,
    search,
    setSearch,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
