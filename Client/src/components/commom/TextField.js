import { useField } from "formik";
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
} from "@chakra-ui/react";

const TextField = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const [labelStyle, setLabelStyle] = useState();

  const animateRef = useRef(false);

  const {
    InputRightContent,
    inputRightElementSet,
    inputLeftElementSet,
    InputLeftContent,
    ...inputProperties
  } = props;

  const keyFramesFoward = keyframes`

  0% { transform: translate(17.5px, -28px) scale(1); opacity: 1; }
  50% { transform: translate(17.5px, -28px) scale(1); opacity: 0}
  99% { opacity: 0; }
  100% { transform: translate(10px, -51px) scale(0.9) ; opacity: 1; padding: 0 5px  }     


`;

  const keyFramesBackward = keyframes`

  0% { 
    transform: translate(10px, -51px) scale(0.9); opacity: 1; padding: 0 5px }
  50%  { 
    transform: translate(10px, -51px) scale(0.9); opacity: 0; padding: 0 5px }
  50.000001% {
    transform: translate(17.5px, -28px) scale(1) ; opacity: 0 ;   padding: 0 0;
  }  
  100% { transform: translate(17.5px, -28px) ;  opacity: 1 ;   }

`;

const errorLabelColor = meta.error ? "#cb2b2b" : null

  useEffect(() => {
    if (meta.value !== "") {
      setLabelStyle(`${keyFramesFoward} 0.3s linear  0s 1 forwards`);
      animateRef.current = true;
    }
    if (meta.value === "" && animateRef.current) {
      setLabelStyle(`${keyFramesBackward} 0.3s linear 0s 1 normal `);
      animateRef.current = false;
    }
  }, [meta.value, animateRef, keyFramesFoward, keyFramesBackward]);

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <InputGroup >
        <Input
          _focus={{  borderColor: "black", boxShadow: "0 0 0 0px " }}
          _invalid={{borderColor: "#cb2b2b !important"}}
          borderRadius="0px"
          {...field}
          {...inputProperties}
          border="1px solid gray"
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
      <FormLabel
        margin="0px"
        bg={"white"}
        height="min-content"
        width="min-content"
        fontSize="md"
        cursor="text"
        transform="translate(17.5px, -28px)"
        fontFamily="Garamond,Baskerville,Caslon,serif"
        animation={labelStyle}
        lineHeight="1rem"
        whiteSpace="nowrap"
        _invalid={{color: "#cb2b2b"}}
        errorLabelColor
      >
        {label}
      </FormLabel>
      <FormErrorMessage color="#cb2b2b" transform="translateY(-15px)">
        {meta.error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
