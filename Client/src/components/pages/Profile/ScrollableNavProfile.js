import ScrollNavigation from "../../commom/ScrollNavigation";
import styled from "styled-components";
import { useState, forwardRef, useImperativeHandle } from "react";

const StyledLinks = styled.div`
  &
    a[name="${(props) => {
      return props.activeSection;
    }}"] {
    border-bottom: 4px solid white;
  }
`;

const ScrollableNavProfile = forwardRef((props, sectionRef) => {
  const [activeSection, setActiveSection] = useState("");

  useImperativeHandle(sectionRef, () => ({
    setSectionActive: (section) => {
      setActiveSection((prevValue) =>
        section !== prevValue ? section : prevValue
      );
    },
  }));

  const normalFont = {
    variant: "titleNormal",
    cursor: "pointer",
    padding: "16px 0",
    color: "white",
    fontWeight: "100",
    letterSpacing: "0.03rem",
    fontSize: "xs",
    marginRight: "40px",
  };

  const scrollLinks = [
    {
      ...normalFont,
      to: "preferences",
      label: "YOUR PREFERENCES",
    },
    {
      ...normalFont,
      to: "interests",
      label: "YOUR INTERESTS",
    },
    {
      ...normalFont,
      to: "invoice",
      label: "REQUEST AN INVOICE",
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

export default ScrollableNavProfile;
