import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SideBarElement from "./SideBarElement";
import SideBarElementActive from "./SideBarElementActive";
import { Node, SettingsIcon } from "./Icons";

const SideNavigation = styled.div`
  background-color: #131a22;
  color: white;
  font-weight: bold;
  flex: 1;
  height: calc(100vh - 75px);
`;

const StyledNode = styled(Node)`
  height: 48px;
  width: auto;
`;

const StyledSettings = styled(SettingsIcon)`
  height: 48px;
  width: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("nodeList");

  return (
    <SideNavigation>
      <StyledLink
        to="/"
        onClick={() => {
          setActiveMenu("nodeList");
        }}
      >
        {activeMenu === "nodeList" ? (
          <SideBarElementActive
            text="node list"
            icon={<StyledNode firstColor="#fff" />}
          />
        ) : (
          <SideBarElement
            text="node list"
            icon={<StyledNode firstColor="#232f3c" />}
          />
        )}
      </StyledLink>
      <StyledLink
        to="/settings"
        onClick={() => {
          setActiveMenu("settings");
        }}
      >
        {activeMenu === "settings" ? (
          <SideBarElementActive
            text="settings"
            icon={<StyledSettings firstColor="#fff" />}
          />
        ) : (
          <SideBarElement
            text="settings"
            icon={<StyledSettings firstColor="#232f3c" />}
          />
        )}
      </StyledLink>
    </SideNavigation>
  );
};

export default SideBar;
