import { Heading as HeadingChakra } from "@chakra-ui/react";

function Heading(props) {
    return (<HeadingChakra {...props}>{props.children}</HeadingChakra>  );
}

export default Heading;