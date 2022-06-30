import Button from "../commom/Button";
import { Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

function FooterCheckRates() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/check-rates" && (
        <Flex
          bottom="0"
          bg="white"
          justifyContent="center"
          alignItems="center"
          zIndex={99}
          height="72px"
          width="100%"
          position="fixed"
        >
          <Button
            _active={{}}
            _hover={{}}
            onClick={() => navigate("../check-rates")}
            height="41px"
            fontSize="0.9375rem"
            width="95%"
          >
            Check Rates
          </Button>
        </Flex>
      )}
    </>
  );
}

export default FooterCheckRates;
