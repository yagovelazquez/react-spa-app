import { Link as  LinkChakra } from "@chakra-ui/react";

function Link(props) {
    return (<LinkChakra {...props}>{props.children}</LinkChakra>  );
}

export default Link;