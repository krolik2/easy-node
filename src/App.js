import React from "react";
import styled from "styled-components";
import "./App.css";

import List from "./components/List";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ListContextProvider from '../src/contexts/ListContext';

const Content = styled.main`
  background-color: #232f3c;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
`;

function App() {
  return (
    <>
      <ListContextProvider>
        <Header />
        <Content>
          <SideBar />
          <List />
        </Content>
      </ListContextProvider>
    </>
  );
}

export default App;
