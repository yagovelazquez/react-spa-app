import ScrollNavigation from "../../commom/ScrollNavigation";
import styled from "styled-components";

const StyledLinks = styled.div`
  & .active {
    border-bottom: 4px solid white;
  }
`;

function ScrollableNavProfile() {
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
    ></ScrollNavigation>
  );
}

export default ScrollableNavProfile;
