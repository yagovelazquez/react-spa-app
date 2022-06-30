import { Link } from "react-scroll";
import Text from "./Text";

function ScrollNavigation(props) {
  const { scrollLinks, activeSection } = props;

  return (
    <props.StyledLinks activeSection={activeSection}>
      {scrollLinks.map((scrollLink) => {
        return (
          <Text
            key={scrollLink.to}
            name={scrollLink.to}
            as={Link}
            spy={true}
            smooth={true}
            offset={-113}
            duration={500}
            {...scrollLink}
          >
            {scrollLink.label}
          </Text>
        );
      })}
    </props.StyledLinks>
  );
}

export default ScrollNavigation;
