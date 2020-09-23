import React from "react";
import styled from "styled-components";

import SearchBar from "../components/SearchBar";

const Heading = styled.header`
  background-color: #131a22;
  height: 100%;
  display: flex;
  flex: 1 100%;
`;

const TitleWrapper = styled.div`
  background-color: #0F141A;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75px;
`;

const SearchBarWrapper = styled.div`
  flex: 4;
  min-height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
`;

const Header = () => {
  return (
    <Heading>
      <TitleWrapper><Title>easy node</Title></TitleWrapper>
      <SearchBarWrapper><SearchBar /></SearchBarWrapper> 
    </Heading>
  );
};

export default Header;

// data={data} setFilteredData={setFilteredData} 