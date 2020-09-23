import React, { createContext, useState } from "react";

import data from "../data_source";
export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <ListContext.Provider
      value={{
        filteredData,
        setFilteredData,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
