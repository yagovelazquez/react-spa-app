import {
  Link
} from "react-scroll";
import Text from "./Text";
import { Fragment } from 'react';






function ScrollNavigation(props) {
  const { scrollLinks } = props;

  return (  
    
  <props.StyledLinks>     
      {scrollLinks.map((scrollLink) => {
        return (
          <Text
            {...scrollLink}
            key={scrollLink.to}
            as={Link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-113}
            duration={500}
          >
            {scrollLink.label}
          </Text>
        );
      })}
      </props.StyledLinks>
     
    
  );
}

export default ScrollNavigation;
