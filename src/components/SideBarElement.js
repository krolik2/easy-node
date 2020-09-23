import React from "react";
import styled from "styled-components";
import { Node } from "./Icons";

const SideNavigationElement = styled.div`
  border-bottom: 1px solid #2c3c4e;
  border-left: 5px solid #fdbd68;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NodeIconWrapper = styled.span``;

const SideNavigationElementTitle = styled.h3``;

const StyledNode = styled(Node)`
  height: 48px;
  width: auto;
`;

const SideBarElement = ({text}) => {
  return (
    <SideNavigationElement>
      <NodeIconWrapper>
        <StyledNode firstColor="#fff" />
      </NodeIconWrapper>
      <SideNavigationElementTitle>{text}</SideNavigationElementTitle>
    </SideNavigationElement>
  );
};

export default SideBarElement;
