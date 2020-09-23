import React from "react";
import styled from "styled-components";

import SideBarElement from "./SideBarElement";

const SideNavigation = styled.div`
  background-color: #131a22;
  color: white;
  font-weight: bold;
  flex: 1;
  height: calc(100vh - 75px);
`;

const SideBar = () => {
  return (
    <SideNavigation>
      <SideBarElement text="node list" />
    </SideNavigation>
  );
};

export default SideBar;
