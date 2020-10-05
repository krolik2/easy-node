import React from "react";
import styled from "styled-components";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import List from "./components/List";
import Settings from "./components/Settings";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ListContextProvider from "../src/contexts/ListContext";

const Content = styled.main`
  background-color: #232f3c;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

function App() {
  return (
    <>
      <ListContextProvider>
        <Header />
        <Content>
          <SideBar />
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Content>
      </ListContextProvider>
    </>
  );
}

export default App;
