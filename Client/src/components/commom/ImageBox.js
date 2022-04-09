import TitleArrow from "./TitleArrow";
import { VStack, Box, Image } from '@chakra-ui/react';
import Text from "./Text";

function ImageBox({title, description, url,boxStyles}) {


    return ( 
    
    <Box  {...boxStyles}>
    <VStack alignItems="left"  spacing="10px">
       <Image overflow="clip" src={url} marginBottom="10px"  alt={title}></Image>
       <TitleArrow textStyles={{fontSize: "xs", letterSpacing: ".25rem" } }>{title}</TitleArrow>
       <Text color="black" variant="normalText">{description}</Text>
    </VStack>
    </Box> );
}

export default ImageBox;