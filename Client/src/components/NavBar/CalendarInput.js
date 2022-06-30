import {
  useDisclosure,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import useOutsideClick from "../Hooks/useOutsideClick";
import Text from "../commom/Text";
import { CheckRatesContext } from "./CheckRatesContextProvider";
import { useContext } from "react";

const CalendarWrapter = styled.div`
  .react-datepicker {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", sans-serif;
    overflow: hidden;
    position: absolute;

    z-index: 98;
  }

  .react-datepicker {
    border-radius: 0;
    margin-top: 20px;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 90px;
  }

  .react-datepicker__day--keyboard-selected {
    background: none;
    color: black;
  }

  .react-datepicker__navigation-icon--next,
  .react-datepicker__navigation-icon--previous {
    &:before {
      height: 10px;
      width: 10px;
      margin-top: 5px;
      border-color: black;
      border-width: 0px;
      border-right-width: 1px;
      border-top-width: 1px;
    }
  }

  .react-datepicker__header {
    border-radius: 0;
    background: #f7fafc;
  }

  .react-datepicker,
  .react-datepicker__header,
  .react-datepicker__time-container {
    border-color: #f0f0f0;
    background: #f0f0f0;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-family: "Monotype Garamond, garamond, serif
    Monotype Garamond,garamond,serif";
    font-weight: 100;
    font-style: italic;
  }

  .react-datepicker_day--selected
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    margin: 0 1px 0 0;
    height: auto;
    padding: 7px 10px;

    &:hover {
      background: #edf2f7;
    }
  }

  .react-datepicker__day {
    &:hover {
      background: black;
      color: white;
      border-radius: 50%;
    }
  }

  .react-datepicker__day--in-selecting-range {
    background: ${(props) =>
      props.endDate || props.startDate ? "none" : "black "};
    color: ${(props) => (props.endDate || props.startDate ? "black" : "white")};
    border-radius: 50%;
  }

  .react-datepicker__day--in-selecting-range-end {
    background: black !important;
  }

  .react-datepicker__day--in-range,
  .react-datepicker__day--selected,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background: black;
    color: white;
    border-radius: 50%;
    font-weight: normal;

    &:hover {
      background: black;
    }
  }
`;

function CalendarInput({ variant }) {
  const { setFormValues, checkin, checkout } = useContext(CheckRatesContext);

  const calendarRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleDateChange(date) {
    function compareDates() {
      const prevDate = new Date(checkin).getTime();
      const afterDate = new Date(date).getTime();

      return afterDate > prevDate ? true : false;
    }

    if (!checkin && !checkout) {
      setFormValues((prevValue) => {
        const formValues = { ...prevValue };
        formValues.checkin = date;
        return formValues;
      });
    } else if (checkin && !checkout && compareDates()) {
      setFormValues((prevValue) => {
        const formValues = { ...prevValue };
        formValues.checkout = date;
        return formValues;
      });
    }
    if (checkin && checkout) {
      setFormValues((prevValue) => {
        const formValues = { ...prevValue };
        formValues.checkin = date;
        formValues.checkout = null;
        return formValues;
      });
    }
  }

  const resetDatesHandler = () => {
    setFormValues((prevValue) => {
      const formValues = { ...prevValue };
      formValues.checkin = null;
      formValues.checkout = null;
      return formValues;
    });
  };

  useOutsideClick({
    ref: calendarRef,
    value: "12312422141512",
    callback: onClose,
  });

  let calendarInputValue = "Check In - Check Out";

  if (checkin) {
    calendarInputValue = `${format(checkin, "dd/MM/yyyy")}`;
  }

  if (checkin && checkout) {
    calendarInputValue = `${format(checkin, "dd/MM/yyyy")} - ${format(
      checkout,
      "dd/MM/yyyy"
    )}`;
  }

  return (
    <Flex maxWidth={variant === "page" ? "100%" : "230px"} flexDir="column">
      <Text
        marginBottom="5px"
        letterSpacing="2px"
        fontSize="0.625rem"
        fontWeight="700"
      >
        CHECK IN — CHECK OUT
      </Text>
      <InputGroup maxWidth={variant === "page" ? "100%" : "230px"}>
        <Input
          borderRadius={0}
          _focus={{}}
          bg="#f0f0f0"
          value={calendarInputValue}
          size="md"
          maxWidth={variant === "page" ? "100%" : "230px"}
          paddingLeft="10px"
          onClick={onOpen}
          border="1px solid rgb(216, 216, 216)"
          readOnly
          fontStyle="italic"
          fontFamily="Monotype Garamond,garamond,serif"
        />
        <InputRightElement
          cursor={"pointer"}
          onClick={resetDatesHandler}
          children={<IoMdClose size="20px" color="black" />}
        ></InputRightElement>
      </InputGroup>

      {isOpen && (
        <Box ref={calendarRef} position="relative">
          <CalendarWrapter startDate={checkin} endDate={checkout}>
            <DatePicker
              onChange={(date) => handleDateChange(date)}
              selectsStart
              selected={checkin}
              startDate={checkin}
              endDate={checkout}
              selectsEnd
              minDate={new Date()}
              inline
            ></DatePicker>
          </CalendarWrapter>
        </Box>
      )}
    </Flex>
  );
}

export default CalendarInput;
