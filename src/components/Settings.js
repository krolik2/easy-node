import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  padding-top: 35px;
  flex: 4;
  height: calc(100vh - 75px);
`;

const ListTitleWrapper = styled.div`
  border-bottom: 3px solid #fdbd68;
  width: calc(100% - 100px);
  margin: 0 auto;
  background-color: #131a22;
  height: 60px;
  display: flex;
  align-items: center;
`;

const ListTitle = styled.h2`
  padding-left: 60px;
`;

const ListWrapper = styled.div`
  background-color: #131a22;
  margin: 0 auto;
  width: calc(100% - 100px);
  height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Settings() {
  return (
    <ListContainer>
      <ListTitleWrapper>
        <ListTitle>settings:</ListTitle>
      </ListTitleWrapper>
      <ListWrapper></ListWrapper>
    </ListContainer>
  );
}
