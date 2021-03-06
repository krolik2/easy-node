import React from "react";
import styled from "styled-components";

const SideNavigationElement = styled.div`
  border-bottom: 1px solid #2c3c4e;
  border-left: 5px solid transparent;
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

const SideNavigationElementTitle = styled.h3`
  color: #232f3c;
`;


const SideBarElement = ({ text, icon }) => {
  return (
    <>
      <SideNavigationElement>
        <NodeIconWrapper>{icon}</NodeIconWrapper>
        <SideNavigationElementTitle>{text}</SideNavigationElementTitle>
      </SideNavigationElement>
    </>
  );
};

export default SideBarElement;
