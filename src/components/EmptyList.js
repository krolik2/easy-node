import React from "react";
import styled from "styled-components";
import { AmazonArrow } from "./Icons";

const StyledAmazonArrow = styled(AmazonArrow)`
  height: 128px;
  width: auto;
`;

const EmptyList = () => {
  return <StyledAmazonArrow />;
};

export default EmptyList;
