import {
  Box,
  Grid,
  GridItem,
  Image,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GiConfirmed } from "react-icons/gi";
import Text from "./Text";

const animationKeyframes = keyframes`
  0% { transform:  rotate(0); border-width: 5px; }
  50% { transform: rotate(180deg); border-width: 1px; }
  100% { transform: rotate(360deg); border-width: 5px; }
`;

const animation = `${animationKeyframes} 2s linear infinite`;

export default function LoadingLogoSpinner() {
  return (
    <Grid templateRows="min-content min-content min-content" >
      <GridItem display="flex" alignItems="center" justifyContent="center" gridArea="1/1/2/2">
        <Box
          as={motion.div}
          animation={animation}
          padding="2"
          height="250px"
          width="250px"
          border="8px solid transparent"
          borderRadius="50%"
          borderTopColor="black"
          borderBottomColor="black"
          zIndex="2"
          display="flex"
        ></Box>
      </GridItem>
      <GridItem display="flex" alignItems="center" justifyContent="center" gridArea="1/1/2/2">
        <Image
       
         
          overflow="clip"
          src="/treeLogoBlack.png"
          boxSize="200px"
          alt="spinner"
        ></Image>
      </GridItem>
      <GridItem display="flex" gap="10px" justifyContent="center" alignItems="center">
        <Box  as={GiConfirmed} size="24px"></Box>
        <Text paddingTop="2px" lineHeight="1rem" letterSpacing=".1rem">BEST RATE GUARANTEED</Text>
      </GridItem>
    </Grid>
  );
}
