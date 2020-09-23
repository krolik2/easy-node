import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// import { Arrow } from "./Icons";

// const ArrowIconWrapper = styled.span`
//   align-self: flex-end;
// `;

const listVariants = {
  visible: {
    opacity: 1,
    visibility: "visible",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    visibility: "hidden",
    transition: {
      when: "afterChildren",
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -110 },
};

const ActionsButton = styled(motion.button)`
  width: 125px;
  height: 34px;
  background-color: #131a22;
  font-size: 1.6rem;
  border: 1px transparent;
  border-radius: 4px;
  color: #fff;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const ListStyled = styled(motion.ul).attrs(() => ({
  initial: "hidden",
  variants: listVariants,
}))`
  width: 125px;
  background-color: #1d2733;
  color: #fff;
  padding: 8px;
  margin-top: -3px;
  border-radius: 0 0 4px 4px;
`;

const ListItem = styled(motion.li).attrs(() => ({
  initial: "hidden",
  variants: itemVariants,
}))`
  display: flex;
  justify-content: center;
  align-items: space-evenly;
  font-size: 1.3rem;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Link = styled.a`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fdbd68;
  }
`;

export default function Button({ id }) {
  const [isVisible, setIsVisible] = useState(false);
  const catalogURL = "https://www.amazon.se/b?ie=UTF8&node=";
  const treeURL =
    "https://browse-classification-eu.amazon.com/bcb/BrowseBrowser.do?marketplaceID=704403121&merchantID=0&maxLimit=25&changeListIDs=&customerID=0&filters=&locale=&&nodeID=";

  const handleClick = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <ActionsButton onClick={() => handleClick()}>actions</ActionsButton>
      <ListStyled animate={isVisible ? "visible" : "hidden"}>
        <ListItem>
          <Link
            href={`${treeURL}${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            view in tree
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={`${catalogURL}${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            view in catalogue
          </Link>
        </ListItem>
      </ListStyled>
    </>
  );
}
