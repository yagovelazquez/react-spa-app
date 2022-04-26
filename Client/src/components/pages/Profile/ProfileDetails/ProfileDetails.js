import { HStack, Flex, Link, Heading, Progress } from "@chakra-ui/react";
import Text from "../../../commom/Text";
import { Link as RouterLink } from "react-router-dom";
import Button from "../../../commom/Button";

function ProfileDetails() {
  return (
    <Flex alignItems="flex-start" justifyContent="center" padding="145px 0">
      <Flex width="435px" flexDir="column" alignItems="flex-start">
        <Heading letterSpacing="1.43px" fontWeight="100" marginBottom="30px">
          Mr Lucas Dominato
        </Heading>
        <Text letterSpacing=".1875rem" fontSize="0.65rem" marginBottom="6px">
          60% COMPLETE
        </Text>
        <Progress
          colorScheme="blacks"
          width="280px"
          height={1}
          value={60}
          marginBottom="50px"
        ></Progress>
        <Link
          as={RouterLink}
          to="./edit"
          fontWeight="700"
          fontSize="xs"
          borderBottom="1px solid black"
          textDecoration="none"
          _hover={{ borderBottom: "1px solid #767676", color: "#767676" }}
          letterSpacing=".1875rem"
        >
          COMPLETE YOUR PROFILE
        </Link>
      </Flex>
      <Flex width="435px" flexDir="column" gap="30px" paddingTop="30px" alignItems="flex-start">
        <Text fontSize="3xl" >
          You don't seem to have any upcoming trips. Would you like to add one?
        </Text>
        <Button invertColor="true" width="100%">add existing reservation</Button>
        <Button width="100%" border="1px solid black">book now</Button>
      </Flex>
    </Flex>
  );
}

export default ProfileDetails;
