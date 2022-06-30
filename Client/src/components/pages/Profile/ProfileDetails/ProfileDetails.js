import {
  useDisclosure,
  Flex,
  Link,
  Heading,
  Progress,
  useMediaQuery,
} from "@chakra-ui/react";
import Text from "../../../commom/Text";
import { Link as RouterLink } from "react-router-dom";
import Button from "../../../commom/Button";
import useUser from "./../../../Hooks/useUser";
import { useQueryClient, useQuery } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import Modal from "../../../commom/Modal";
import { getGeneralCall } from "../../../../Lib/fetchServer";
import ReservactionForm from "../ReservationForm";
import { useNavigate } from "react-router-dom";

function ProfileDetails() {
  const { user } = useUser();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();

  let navigate = useNavigate();

  const bookNowHandler = () => {
    navigate("../check-rates");
  };

  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan0] = useMediaQuery("(min-width: 0px)");

  const { data } = useQuery(
    [queryKeys.user, queryKeys.title],
    () => {
      return getGeneralCall(`${serverUrl}/user/edit/title`, user.token);
    },
    {
      enabled: !!user,
      initialData: queryClient.getQueriesData(queryKeys.user)[0][1]["title"],
    }
  );

  const { retrieveLocalUser } = useLocalStorage();

  const storagedUser = retrieveLocalUser();

  const userInfoList = [
    { key: "title", type: "string" },
    { key: "languages", type: "array" },
    { key: "phones", type: "array" },
    { key: "addresses", type: "array" },
    { key: "interests", type: "array" },
  ];

  const infoPercentageComplete = userInfoList.reduce(
    (prevValue, currentValue) => {
      if (currentValue.type === "string") {
        if (storagedUser[currentValue.key]) return 10 + prevValue;
        return prevValue;
      }

      if (storagedUser[currentValue.key].length >= 1) return 10 + prevValue;
      return prevValue;
    },
    50
  );

  let size;

  if (isLargerThan960) {
    size = "3xl";
  }
  if (isLargerThan700 && !isLargerThan960) {
    size = "2xl";
  }
  if (isLargerThan0 && !isLargerThan700) {
    size = "full";
  }

  const modalProperties = {
    size: size,
  };

  const modalContentProperties = {
    borderRadius: 0,
    padding: "0 60px",
  };

  return (
    <Flex
      alignItems="flex-start"
      flexDir={["column", "row", "row"]}
      justifyContent="center"
      padding={["100px 0", "145px 0"]}
    >
      <Modal
        modalProperties={modalProperties}
        ModalBodyContent={ReservactionForm}
        isOpen={isOpen}
        modalContentProperties={modalContentProperties}
        onClose={onClose}
      ></Modal>
      <Flex
        width={["100%", "372.5px", "435px"]}
        flexDir="column"
        alignItems={["center", "flex-start"]}
      >
        <Heading
          letterSpacing="1.43px"
          fontWeight="100"
          marginBottom="30px"
          paddingRight="10px"
          textAlign={"center"}
        >
          {data && `${data} `} {`${user.name} ${user.lastName}`}
        </Heading>
        <Text letterSpacing=".1875rem" fontSize="0.65rem" marginBottom="6px">
          {infoPercentageComplete}% COMPLETE
        </Text>
        <Progress
          colorScheme="blacks"
          width={["80vw", "280px"]}
          height={1}
          value={infoPercentageComplete}
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
      <Flex
        width={["auto", "275.5px", "435px"]}
        flexDir="column"
        gap="30px"
        paddingTop="30px"
        margin={["0 40px", "0"]}
        alignItems={["center", "center", "flex-start"]}
      >
        <Text textAlign={["center", "start"]} fontSize={["lg", "lg", "3xl"]}>
          You don't seem to have any upcoming trips. Would you like to add one?
        </Text>
        <Button
          fontSize={["0.625rem", "0.625rem", "xs"]}
          onClick={onOpen}
          invertColor="true"
          margin={["0 40px", "0"]}
          width="100%"
        >
          add existing reservation
        </Button>
        <Button
          fontSize={["0.625rem", "0.625rem", "xs"]}
          margin={["0 40px", "0"]}
          width="100%"
          border="1px solid black"
          onClick={bookNowHandler}
        >
          book now
        </Button>
      </Flex>
    </Flex>
  );
}

export default ProfileDetails;
