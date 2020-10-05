import React from "react";
import styled from "styled-components";

const ActiveSideNavigationElement = styled.div`
  border-bottom: 1px solid #2c3c4e;
  border-left: 5px solid #fdbd68;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NodeIconWrapper = styled.span`
  height: 48px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActiveSideNavigationElementTitle = styled.h3`
  color: #fff;
`;

const SideBarElementActive = ({ text, icon }) => {
  return (
    <>
      <ActiveSideNavigationElement>
        <NodeIconWrapper>{icon}</NodeIconWrapper>
        <ActiveSideNavigationElementTitle>
          {text}
        </ActiveSideNavigationElementTitle>
      </ActiveSideNavigationElement>
    </>
  );
};

export default SideBarElementActive;
