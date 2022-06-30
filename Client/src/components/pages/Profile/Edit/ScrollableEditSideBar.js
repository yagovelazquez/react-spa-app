import ScrollNavigation from "../../../commom/ScrollNavigation";
import styled from "styled-components";
import { useState, forwardRef, useImperativeHandle } from "react";

const StyledLinks = styled.div`
  &
    a[name="${(props) => {
      return props.activeSection;
    }}"] {
    color: white;
  }

  &
    a[name="${(props) => {
      return props.activeSection;
    }}"]:before {
    background: #fff;
    border-radius: 100%;
    content: "";
    display: inline-block;
    height: 5px;
    width: 5px;
    position: absolute;
    left: 0px;
    top: 4px;
  }
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: gray;
`;

const ScrollableEditSideBar = forwardRef((props, sectionRef) => {
  const [activeSection, setActiveSection] = useState("");

  useImperativeHandle(sectionRef, () => ({
    setSectionActive: (section) => {
      setActiveSection(section);
    },
  }));

  const normalFont = {
    variant: "titleNormal",
    cursor: "pointer",
    color: "#bbb",
    fontWeight: "700",
    letterSpacing: "0.14rem",
    fontSize: "0.625rem",
    paddingLeft: "20px",
    position: "relative",
  };

  const scrollLinks = [
    {
      ...normalFont,
      to: "emailSec",
      label: "EMAILS",
      offset: -90,
    },
    {
      ...normalFont,
      to: "phoneSec",
      label: "PHONE NUMBERS",
      offset: -90,
    },
    {
      ...normalFont,
      to: "addressSec",
      label: "ADDRESSES",
      offset: -90,
    },
    {
      ...normalFont,
      to: "languageSec",
      label: "COUNTRY & LANGUAGE",
      offset: -90,
    },
    {
      ...normalFont,
      to: "subscriptionSec",
      label: "EMAIL SUBSCRIPTIONS",
      offset: -90,
    },
  ];

  return (
    <ScrollNavigation
      StyledLinks={StyledLinks}
      scrollLinks={scrollLinks}
      activeSection={activeSection}
    ></ScrollNavigation>
  );
});

export default ScrollableEditSideBar;
