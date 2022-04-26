import { Box, Grid, keyframes } from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
import React from "react";

const animationKeyframesCircle = keyframes`
0% {clip-path: polygon(50% 50%, 400% 50%, 400% 50%)}
8.3333333% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%)}
8.3444444% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, 50% 400%)}
16.666666% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, -400% 50%)}
16.666667% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, -400% 50%, -400% 50%)}
25% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, -400% 50%, 50% -400%)}
25.00001% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, -400% 50%, 50% -400%, 50% -400%)}
33.33333% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, -400% 50%, 50% -400%, 400% 50%);}
66.33333% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, -400% 50%, 50% -400%, 400% 50%); opacity: 1;} 
100% {clip-path: polygon(50% 50%, 400% 50%, 50% 400%, -400% 50%, 50% -400%, 400% 50%); opacity: 0} 
`;

const animationCircle = `${animationKeyframesCircle} 1.5s linear forwards`;

const animationKeyframesCheck = keyframes`
0% {clip-path: polygon(100% -100%, 100% -100%, 100% 100%, 100% 100% )}
100% {clip-path: polygon(100% -100%, -100% -100%, -100% 100%, 100% 100% )}
`;

const animationCheck = `${animationKeyframesCheck} 1s linear forwards`;

function CheckAnimation(props) {
  return (
    <React.Fragment>
      {props.isActive && (
        <Grid justifyItems="center" alignItems="center">
          <Box
            clipPath="polygon(50% 50%, 100.1% 50%, 101% 50%)"
            animation={animationCircle}
            borderRadius="50%"
            border="1px solid green"
            height="28px"
            width="28px"
            gridArea="1/1/2/2"
   
          ></Box>
          <Box
            as={AiOutlineCheck}
            gridArea="1/1/2/2"
            size="20px"
            animation={animationCheck}
            clipPath="polygon(100% -100%, 100% -100%, 100% 100%, 100% 100% )"
          ></Box>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default CheckAnimation;
