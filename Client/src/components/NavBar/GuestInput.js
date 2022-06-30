import {
  VStack,
  Input,
  useDisclosure,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import Text from "../commom/Text";
import useOutsideClick from "../Hooks/useOutsideClick";
import { useRef } from "react";
import GuestController from "./GuestController";
import { BsPlus } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { CheckRatesContext } from "./CheckRatesContextProvider";
import { useContext } from "react";

const RoomCounter = ({ roomCount, roomInfo, roomKey, room, onRoomCount }) => {
  const subCountHandler = (label) => {
    if (label === "ADULTS") {
      onRoomCount((prevValue) => {
        const index = prevValue.guests.findIndex(
          (element) => element.key === roomKey
        );

        if (prevValue.guests[index].adultCount <= 1) return prevValue;

        const roomCountCloned = prevValue.guests.map((item) => {
          return { ...item };
        });

        roomCountCloned[index].adultCount -= 1;

        const clonedPrev = { ...prevValue };
        clonedPrev.guests = roomCountCloned;
        return clonedPrev;
      });
    }

    if (label === "CHILDREN") {
      onRoomCount((prevValue) => {
        const index = prevValue.guests.findIndex(
          (element) => element.key === roomKey
        );

        if (prevValue.guests[index].childrenCount <= 0) return prevValue;

        const roomCountCloned = prevValue.guests.map((item) => {
          return { ...item };
        });

        roomCountCloned[index].childrenCount -= 1;

        const clonedPrev = { ...prevValue };
        clonedPrev.guests = roomCountCloned;
        return clonedPrev;
      });
    }
  };

  const addCountHandler = (label) => {
    if (label === "ADULTS") {
      onRoomCount((prevValue) => {
        const roomCountCloned = prevValue.guests.map((item) => {
          return { ...item };
        });

        const index = roomCountCloned.findIndex(
          (element) => element.key === roomKey
        );

        roomCountCloned[index].adultCount += 1;

        const clonedPrev = { ...prevValue };
        clonedPrev.guests = roomCountCloned;
        return clonedPrev;
      });
    }

    if (label === "CHILDREN") {
      onRoomCount((prevValue) => {
        const roomCountCloned = prevValue.guests.map((item) => {
          return { ...item };
        });

        const index = roomCountCloned.findIndex(
          (element) => element.key === roomKey
        );

        roomCountCloned[index].childrenCount += 1;

        const clonedPrev = { ...prevValue };
        clonedPrev.guests = roomCountCloned;
        return clonedPrev;
      });
    }
  };

  const removeRoomHandler = () => {
    const result = roomCount.filter((room) => roomKey !== room.key);

    onRoomCount((prevValue) => {
      return { ...prevValue, guests: result };
    });
  };

  return (
    <VStack
      width="463px"
      height="80px"
      alignItems="flex-start"
      padding="10px"
      bg="white"
    >
      <HStack width="100%" justifyContent="space-between">
        <Text letterSpacing="3px" fontSize="0.625rem" fontWeight="700">
          ROOM {room}
        </Text>
        <Box _hover={{ bg: "black", color: "white" }} cursor="pointer">
          <VscChromeClose onClick={removeRoomHandler}></VscChromeClose>
        </Box>
      </HStack>

      <Flex columnGap="60px">
        <GuestController
          onAddCountHandler={addCountHandler}
          onSubHandler={subCountHandler}
          count={roomInfo.childrenCount}
          label="CHILDREN"
        ></GuestController>
        <GuestController
          onAddCountHandler={addCountHandler}
          onSubHandler={subCountHandler}
          count={roomInfo.adultCount}
          label="ADULTS"
        ></GuestController>
      </Flex>
    </VStack>
  );
};

function GuestInput({ variant }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const guestInputRef = useRef();
  const { setFormValues, guests } = useContext(CheckRatesContext);

  const childrenTotalCount = guests.reduce(
    (prevValue, roomInfo) => prevValue + roomInfo.childrenCount,
    0
  );
  const adultTotalCount = guests.reduce(
    (prevValue, roomInfo) => prevValue + roomInfo.adultCount,
    0
  );

  let inputValue;

  const inputParcialValue = `${guests.length} Rooms - ${adultTotalCount}`;

  if (adultTotalCount === 1) {
    if (childrenTotalCount === 1) {
      inputValue = `${inputParcialValue} Adult, ${childrenTotalCount} Child`;
    }
    if (childrenTotalCount === 0) {
      inputValue = `${inputParcialValue} Adult`;
    }
    if (childrenTotalCount > 1) {
      inputValue = `${inputParcialValue} Adult, ${childrenTotalCount} Children`;
    }
  }

  if (adultTotalCount > 1) {
    if (childrenTotalCount === 1) {
      inputValue = `${inputParcialValue} Adults, ${childrenTotalCount} Child`;
    }
    if (childrenTotalCount === 0) {
      inputValue = `${inputParcialValue} Adults`;
    }
    if (childrenTotalCount > 1) {
      inputValue = `${inputParcialValue} Adults, ${childrenTotalCount} Children`;
    }
  }

  useOutsideClick({
    ref: guestInputRef,
    value: "12312422141512",
    callback: onClose,
  });

  return (
    <VStack
      maxWidth={variant === "page" ? "100%" : "230px"}
      ref={guestInputRef}
      alignItems="flex-start"
      spacing={"5px"}
    >
      <Text letterSpacing="2px" fontSize="0.625rem" fontWeight="700">
        GUESTS
      </Text>

      <Input
        borderRadius={0}
        _focus={{}}
        bg="#f0f0f0"
        size="md"
        maxWidth={variant === "page" ? "100%" : "230px"}
        paddingLeft="10px"
        marginBottom="50px"
        minHeight="40px"
        onClick={onOpen}
        value={inputValue}
        border="1px solid rgb(216, 216, 216)"
        readOnly
        fontStyle="italic"
        fontFamily="Monotype Garamond,garamond,serif"
      />

      {isOpen && (
        <Box position="relative">
          <VStack
            padding="30px"
            position="absolute"
            bg="#f0f0f0"
            minHeight="235px"
            width="525px"
            top="15px"
            zIndex={98}
          >
            {guests.map((e, i) => {
              return (
                <RoomCounter
                  onRoomCount={setFormValues}
                  roomCount={guests}
                  room={i + 1}
                  roomInfo={e}
                  roomKey={e.key}
                  key={e.key}
                ></RoomCounter>
              );
            })}
            <HStack
              onClick={() => {
                setFormValues((prevValue) => {
                  const formValues = { ...prevValue };
                  const guests = [
                    ...formValues.guests,
                    { adultCount: 2, childrenCount: 0, key: Math.random() },
                  ];
                  formValues.guests = guests;
                  return formValues;
                });
              }}
              paddingTop="8px"
              spacing="5px"
              width="100%"
            >
              <BsPlus size="20px"></BsPlus>
              <Text
                paddingTop="3px"
                fontWeight="700"
                letterSpacing="3px"
                fontSize="0.625rem"
                textDecoration="underline"
                cursor="pointer"
                color="black"
              >
                ADD ANOTHER ROOM
              </Text>
            </HStack>
          </VStack>
        </Box>
      )}
    </VStack>
  );
}

export default GuestInput;
