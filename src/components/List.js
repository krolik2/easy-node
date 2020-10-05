import React, { useContext, useState } from "react";
import styled from "styled-components";

import { ListContext } from "../contexts/ListContext";
import { LeafIcon } from "./Icons";
import EmptyList from "./EmptyList";
import Button from "./Button";

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

const StyledList = styled.ul`
  background-color: #131a22;
  width: calc(100% - 100px);
  padding: 20px 60px;
  margin: 0 auto;
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
`;

const ListItem = styled.li`
  list-style-type: none;
  color: white;
  /* min-height: 135px; */
  background-color: #2c3c4e;
  margin-bottom: 20px;
  padding: 15px;
  position: relative;
  border-bottom: 3px solid #fdbd68;
`;

const ListItemTop = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const LeftPanel = styled.div`
  font-size: 2rem;
  flex: 4;
`;

const RightPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  flex-direction: row;
`;

const Name = styled.span`
  margin-right: 4px;
`;

const Tooltip = styled.span`
  display: none;
  width: 140px;
  background-color: #fdbd68;
  color: #131a22;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  font-size: 1.2rem;
  position: absolute;
  z-index: 1;
  top: -3rem;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #fdbd68 transparent transparent transparent;
  }
`;

const Id = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover ${Tooltip} {
    display: inline;
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  height: 34px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const StyledLeafIcon = styled(LeafIcon)`
  height: 28px;
  width: auto;
`;

const ListItemBottom = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionsContainer = styled.span`
  display: flex;
  flex-direction: column;
`;

export default function List() {
  const { filteredData } = useContext(ListContext);
  const [tooltipText, setTooltipText] = useState("copy to clipboard");

  const handleMouseLeave = () => {
    setTooltipText("copy to clipboard");
  };

  const copyItemId = (id) => {
    navigator.clipboard.writeText(id).then(
      () => {
        setTooltipText("copied");
      },
      () => {
        setTooltipText("copy failed :(");
      }
    );
  };

  return (
    <ListContainer>
      <ListTitleWrapper>
        <ListTitle>node list:</ListTitle>
      </ListTitleWrapper>
      <ListWrapper>
        {filteredData.length > 0 ? (
          <StyledList>
            {filteredData.map((item) => {
              return (
                <ListItem key={item.node_id}>
                  <ListItemTop>
                    <LeftPanel>
                      <Name>{item.node_name} -</Name>
                      <Id
                        onClick={() => copyItemId(item.node_id)}
                        onMouseLeave={() => handleMouseLeave()}
                      >
                        {item.node_id}
                        <Tooltip>{tooltipText}</Tooltip>
                      </Id>
                    </LeftPanel>
                    <RightPanel>
                      <IconWrapper>
                        {item.is_leaf ? <StyledLeafIcon /> : null}
                      </IconWrapper>
                      <ActionsContainer>
                        <Button id={item.node_id} />
                      </ActionsContainer>
                    </RightPanel>
                  </ListItemTop>
                  <ListItemBottom>{item.path}</ListItemBottom>
                </ListItem>
              );
            })}
          </StyledList>
        ) : (
          <EmptyList />
        )}
      </ListWrapper>
    </ListContainer>
  );
}
