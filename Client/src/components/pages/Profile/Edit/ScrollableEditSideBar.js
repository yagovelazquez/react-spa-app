import ScrollNavigation from "../../../commom/ScrollNavigation";
import styled from "styled-components";
import { VStack } from "@chakra-ui/react";

const StyledLinks = styled.div`
  & .active {
    border-bottom: 4px solid white;
    color: white;
    
  }

  & .active:before {
    background: #fff;
    border-radius: 100%;
    content: "ds";
    display: block;
    height: 5px;
    width: 5px;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -3px;
}
  
  a {
      color: #bbb;
  }
  display: flex;
  flex-direction: column;
  gap: 35px;

`;

function ScrollableEditSideBar() {
  const normalFont = {
    variant: "titleNormal",
    cursor: "pointer",
    color: "white",
    fontWeight: "700",
    letterSpacing: "0.14rem",
    fontSize: "0.625rem",
    paddingLeft: "20px"
  };

  const scrollLinks = [
    {
      ...normalFont,
      to: "emailSec",
      label: "EMAILS",
    },
    {
      ...normalFont,
      to: "phoneSec",
      label: "PHONE NUMBERS",
    },
    {
      ...normalFont,
      to: "addressSec",
      label: "ADDRESSES",
    },
  ];

  return (

            <ScrollNavigation
      StyledLinks={StyledLinks}
      scrollLinks={scrollLinks}
    ></ScrollNavigation>
  

  );
}

export default ScrollableEditSideBar;
