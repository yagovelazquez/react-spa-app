import {
  Flex,
  Image,
  Link,
  Box,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Modal from "../../commom/Modal";
import Text from "../../commom/Text";
import Button from "../../commom/Button";
import ConstructionForm from "./ConstructionForm";
import AnimatedPage from "../../commom/AnimatedPage";
import { useMediaQuery } from "@chakra-ui/react";

function ModalBodyContent() {
  return (
    <AnimatedPage>
      <VStack spacing="30px" paddingBottom="50px">
        <Text
          paddingTop="30px"
          fontStyle="italic"
          fontSize="3xl"
          fontWeight="700"
        >
          This Page is Coming Soon
        </Text>
        <Text color="blackAlpha.600" fontSize="xl">
          We're working hard to finish the development of this site. Sign up
          bellow to receive updates and to be notified when we finish
          everything!
        </Text>
        <ConstructionForm />
      </VStack>
    </AnimatedPage>
  );
}

function ConstructionPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  let imgHeight = "350px";
  let marginTopContainer = "0px";
  let containerWidth = "100%";
  let containerFlexDir = "column-reverse";
  let oopsProps = {
    fontSize: "5xl",
    paddingTop: "10px",
    fontWeight: "700",
  };
  let underProps = {
    fontSize: "2xl",
    fontWeight: "700",
  };
  let messageProps = {
    width: "240px",
    fontSize: "lg",
  };

  if (isLargerThan700) {
    containerFlexDir = "row";
    marginTopContainer = "50px";
    oopsProps = {
      fontSize: "5xl",
      paddingTop: "50px",
      fontWeight: "700",
    };

    imgHeight = "250px";
  }

  if (!isLargerThan700) {
    messageProps = {
      width: "100%",
      padding: "0 30px",
      fontSize: "lg",
      textAlign: "center",
    };
  }

  if (isLargerThan800) {
    marginTopContainer = "100px";
    imgHeight = "300px";
    oopsProps = {
      fontSize: "7xl",
      paddingTop: "50px",
      fontWeight: "700",
    };
    underProps = {
      fontSize: "3xl",
      fontWeight: "700",
    };

    messageProps = {
      width: "270px",
      fontSize: "xl",
    };
  }

  if (isLargerThan930) {
    imgHeight = "400px";
  }

  return (
    <AnimatedPage>
      <Modal
        ModalBodyContent={ModalBodyContent}
        isOpen={isOpen}
        onClose={onClose}
      ></Modal>
      <Flex marginTop={marginTopContainer} justifyContent="center">
        <Flex
          flexDir={containerFlexDir}
          height={!isLargerThan700 && "calc(100vh - 95px)"}
          alignItems="center"
          width={containerWidth}
          justifyContent="center"
          spacing={0}
        >
          <Flex
            flexDir="column"
            alignItems={isLargerThan700 ? "flex-start" : "center"}
            spacing="0"
          >
            <Text {...oopsProps}>Oops!</Text>
            <Text {...underProps}>Under construction</Text>
            <Text {...messageProps} color="blackAlpha.600">
              Please excuse our mess as we build our website
            </Text>
            <Button
              onClick={onOpen}
              padding="20px"
              marginTop="20px"
              borderRadius="50"
              invertColor={true}
            >
              More Info
            </Button>
          </Flex>

          <Image
            maxHeight={imgHeight}
            src="constructionPage.jpg"
            filter="grayscale(100)"
          ></Image>
        </Flex>
      </Flex>
      <Box marginTop={"300px"}>
        <Link href="http://www.freepik.com" isExternal>
          Designed by stories / Freepik
        </Link>
      </Box>
    </AnimatedPage>
  );
}

export default ConstructionPage;
