import { VStack, Input } from "@chakra-ui/react";
import Text from "../commom/Text";
import { useContext } from "react";
import { CheckRatesContext } from "./CheckRatesContextProvider";

function PromotionInput({ variant }) {
  const { promotionCode, setFormValues } = useContext(CheckRatesContext);

  return (
    <VStack
      width={variant === "page" ? "100%" : "130px"}
      alignItems="flex-start"
      spacing={"5px"}
    >
      <Text letterSpacing="2px" fontSize="0.625rem" fontWeight="700">
        PROMO
      </Text>

      <Input
        borderRadius={0}
        width={variant === "page" ? "100%" : "130px"}
        _focus={{}}
        bg="#f0f0f0"
        size="md"
        value={promotionCode}
        onChange={(e) => {
          return setFormValues((prevValue) => {
            return { ...prevValue, promotionCode: e.target.value };
          });
        }}
        paddingLeft="10px"
        marginBottom="50px"
        transition="opacity 4s ease"
        minHeight="40px"
        placeholder="Promo Code"
        _placeholder={{ color: "black" }}
        border="1px solid rgb(216, 216, 216)"
        fontStyle="italic"
        fontFamily="Monotype Garamond,garamond,serif"
      />
    </VStack>
  );
}

export default PromotionInput;
