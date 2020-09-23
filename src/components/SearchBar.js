import React, { useContext } from "react";
import styled from "styled-components";

import data from "../data_source";
import { SearchIcon } from "./Icons";
import { ListContext } from "../contexts/ListContext";

const SearchWrapper = styled.div`
  height: 32px;
  background-color: #fff;
  border: 1px transparent;
  border-radius: 4px;
  position: relative;
  width: calc(100% - 220px);
  margin: 0 auto;
`;

const SearchInput = styled.input`
  display: flex;
  color: #000;
  font-size: 18px;
  line-height: 40px;
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px transparent;
  border-radius: 4px;
  padding-left: 50px;
`;

const SearchIconWrapper = styled.span`
  height: 32px;
  width: 48px;
  background-color: #fdbd68;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0 0 4px;
`;

export default function SearchBar() {
  const { setFilteredData } = useContext(ListContext);
  const searchFilter = (userInput) => {
    const codesData = data.filter((item) => {
      const itemData = `${item.node_name.toUpperCase()}`;
      const userInputData = userInput.toUpperCase();

      return itemData.indexOf(userInputData) !== -1;
    });
    setFilteredData(codesData);
  };

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon firstColor="#0F141A"/>
      </SearchIconWrapper>
      <SearchInput
        placeholder="Search for a node..."
        onChange={(e) => searchFilter(e.target.value)}
      />
    </SearchWrapper>
  );
}
