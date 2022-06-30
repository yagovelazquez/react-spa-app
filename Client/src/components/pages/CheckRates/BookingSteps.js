import { HStack } from "@chakra-ui/react";
import BookingStep from "./BookStep";
function BookingSteps() {
  const steps = [
    {
      color: "rgb(45, 45, 45)",
      bg: "white",
      borderColor: "rgb(45, 45, 45)",
      text: "PLAN YOUR STAY",
    },
    {
      color: "white",
      bg: "rgb(45, 45, 45)",
      borderColor: "white",
      text: "CHOOSE YOUR ROOM",
    },
    {
      color: "white",
      bg: "rgb(45, 45, 45)",
      borderColor: "white",
      text: "CONFIRM YOUR STAY",
    },
    {
      color: "white",
      bg: "rgb(45, 45, 45)",
      borderColor: "white",
      text: "PERSONALIZE YOUR STAY",
    },
  ];

  return (
    <HStack justifyContent="center" height="40px" bg="rgb(45, 45, 45)">
      {steps.map((item, index) => {
        const { color, bg, borderColor, text } = item;

        return (
          <BookingStep
            key={text}
            color={color}
            bg={bg}
            borderColor={borderColor}
            number={index + 1}
            text={text}
          ></BookingStep>
        );
      })}
    </HStack>
  );
}

export default BookingSteps;
