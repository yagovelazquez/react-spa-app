import { VStack, Box, Image,Flex } from "@chakra-ui/react";
import Text from "./Text";
import Button from "./Button";

function Card({ selectedCard, content, onChangingCard }) {
  const boxProperties = selectedCard
    ? { minWidth: "400px", width: "400px", height: "600px", bg: "white" }
    : {
        minWidth: "325px",
        width: "325px",
        height: "500px",
        bg: "transparent",
        border: "1px solid white",
      };

  return (
    <Box
      {...boxProperties}
      onClick={() => {
        return onChangingCard ? onChangingCard() : null;
      }}
    >
      {selectedCard && (
      
        <VStack spacing="32px" height="600px">
          <Text marginTop="32px" color="black" variant="titleSelected">
            {content.title}
          </Text>
          <Image
            overflow="clip"
            src={content.imgUrl}
            minHeight="231.25px"
            maxHeight="231.25px"
            width="400px"
            alt={content.title}
          ></Image>
          <Flex
            display="flex"
            alignItems="center"
            height="100%"
            justifyContent="space-between"
   
            flexDirection="column"
        
          >
            <Text
              margin="0 32px"
              textAlign="center"
              fontSize="lg"
              variant="normalText"
              color="black"
            >
              {content.description}
            </Text>
        

            <Button marginBottom="50px" invertColor={true}>View Property</Button>
          </Flex>
        </VStack>
    
      )}

      {!selectedCard && (
        <Text
          textAlign="center"
          marginTop="32px"
          color="white"
          variant="titleSelected"
        >
          {content.title}
        </Text>
      )}
    </Box>
  );
}

export default Card;
