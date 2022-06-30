import { useField, Field, useFormikContext } from "formik";
import { useState, useEffect, useRef } from "react";
import {
  keyframes,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import Text from "./Text";
import styled from "styled-components";

const StyledSelect = styled.div`
  select {
    padding: 0px;
  }
  option {
    color: black;
  }
`;

const TextField = (props) => {
  const {
    label,
    selectOptions,
    name,
    checkAll,
    type,
    inputType,
    InputRightContent,
    checkBoxLabelProperties,
    inputRightElementSet,
    inputLeftElementSet,
    InputLeftContent,
    animation,
    inputProperties,
    labelProperties,
    selectProperties,
    placeHolder,
    checkBoxProperties,
  } = props;

  const [field, meta] = useField(name);
  const [labelStyle, setLabelStyle] = useState();
  const animateRef = useRef(false);

  const { setFieldValue, setFieldTouched } = useFormikContext();

  let keyFramesFoward, keyFramesBackward;

  if (animation) {
    keyFramesBackward = animation.keyFramesBackward;
    keyFramesFoward = animation.keyFramesFoward;
  } else {
    keyFramesFoward = keyframes`
    0% { transform: translate(17.5px, -28px) scale(1); opacity: 1; }
    50% { transform: translate(17.5px, -28px) scale(1); opacity: 0}
    99% { opacity: 0; }
    100% { transform: translate(10px, -51px) scale(0.9) ; opacity: 1; padding: 0 5px  }     
  `;

    keyFramesBackward = keyframes`
  
    0% { 
      transform: translate(10px, -51px) scale(0.9); opacity: 1; padding: 0 5px }
    50%  { 
      transform: translate(10px, -51px) scale(0.9); opacity: 0; padding: 0 5px }
    50.000001% {
      transform: translate(17.5px, -28px) scale(1) ; opacity: 0 ; padding: 0 0;
    }  
    100% { transform: translate(17.5px, -28px) ;  opacity: 1 ; }
  `;
  }

  const focusHandler = () => {
    if (animation) {
      setLabelStyle(`${keyFramesFoward} 0.3s linear  0s 1 forwards`);
    }
  };

  const blurHandler = () => {
    if (animation && !meta.value) {
      setLabelStyle(`${keyFramesBackward} 0.3s linear 0s 1 backwards `);
    }
  };

  const checkboxOnChangeHandler = (event) => {
    if (checkAll) {
      const valueString = event.target.value;

      let valueBool = valueString === "true" ? true : false;
      checkAll.checkBoxesNames.forEach((chebkBoxName) => {
        setFieldValue(chebkBoxName, !valueBool);
      });
    }

    field.onChange(event);
    setFieldTouched(event.target.name);
  };

  const selectChangeHandler = (event) => {
    field.onChange(event);
  };

  useEffect(() => {
    if (animation && meta.value) {
      setLabelStyle(`${keyFramesFoward} 0.3s linear  0s 1 forwards`);
    }
  }, [animation, meta, keyFramesFoward]);

  useEffect(() => {
    if (meta.value !== "" && !animation) {
      setLabelStyle(`${keyFramesFoward} 0.3s linear  0s 1 forwards`);
      animateRef.current = true;
    }
    if (meta.value === "" && animateRef.current && !animation) {
      setLabelStyle(`${keyFramesBackward} 0.3s linear 0s 1 normal `);
      animateRef.current = false;
    }
  }, [meta.value, animateRef, animation, keyFramesFoward, keyFramesBackward]);

  const errorLabelColor = meta.error && meta.touched ? "#cb2b2b" : null;

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      {inputType === "input" && (
        <InputGroup
          onBlur={() => {
            blurHandler();
          }}
        >
          <Input
            onFocus={focusHandler}
            _focus={{ borderColor: "black", boxShadow: "none" }}
            _invalid={{ borderColor: "#cb2b2b !important" }}
            borderRadius="0px"
            placeholder={placeHolder}
            {...field}
            {...inputProperties}
            type={type}
          ></Input>
          {InputRightContent && (
            <InputRightElement
              {...inputRightElementSet}
              color={meta.error && "#cb2b2b"}
              children={<InputRightContent />}
            ></InputRightElement>
          )}
          {InputLeftContent && (
            <InputLeftElement
              {...inputLeftElementSet}
              children={<InputRightContent />}
            ></InputLeftElement>
          )}
        </InputGroup>
      )}

      {inputType === "select" && (
        <StyledSelect>
          <Field
            _focus={{ borderColor: "black", boxShadow: "0 0 0 0px " }}
            onBlur={blurHandler}
            onFocus={focusHandler}
            onChange={selectChangeHandler}
            zIndex="18"
            id={name}
            as={Select}
            name={name}
            fontSize="lg"
            fontFamily="Monotype Garamond,garamond,serif"
            {...selectProperties}
            _invalid={{ borderColor: "#cb2b2b !important" }}
          >
            {!meta.value && <option> </option>}

            {selectOptions.map((option) => {
              const name = option.name;
              return (
                <option
                  id={name}
                  name={name}
                  label={name}
                  value={option.value || name}
                  key={name}
                ></option>
              );
            })}
          </Field>
        </StyledSelect>
      )}

      {inputType === "checkbox" && (
        <Field
          type="checkbox"
          id={name}
          as={Checkbox}
          name={name}
          onChange={checkboxOnChangeHandler}
          isChecked={field.value}
          size="lg"
          colorScheme="black"
          {...checkBoxProperties}
        >
          <Text
            verticalAlign="bottom"
            fontWeight="100"
            fontSize="xs"
            {...checkBoxLabelProperties}
          >
            {label}
          </Text>
        </Field>
      )}

      {inputType !== "checkbox" && !placeHolder && (
        <FormLabel
          margin="0px"
          bg={"white"}
          height="min-content"
          width="min-content"
          fontSize="md"
          cursor="text"
          transform={
            animation ? "translate(0px, -28px)" : "translate(17.5px, -28px)"
          }
          fontFamily="Garamond,Baskerville,Caslon,serif"
          animation={labelStyle}
          lineHeight="1rem"
          whiteSpace="nowrap"
          _invalid={{ color: "#cb2b2b" }}
          color={errorLabelColor}
          {...labelProperties}
        >
          {label}
        </FormLabel>
      )}
      {inputType !== "checkbox" && (
        <FormErrorMessage
          position={animation ? "absolute" : "relative"}
          zIndex={19}
          color="#ed8277"
          transform={!placeHolder ? "translateY(-15px)" : null}
        >
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextField;
