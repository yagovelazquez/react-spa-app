import { VStack, Flex, useMediaQuery } from "@chakra-ui/react";
import Select from "./Select";
import Button from "./Button";
import Text from "./Text";
import { useQuery } from "react-query";
import { getGeneralCall } from "../../Lib/fetchServer";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import { Box } from "@chakra-ui/react";

function SelectImage(props) {
    const {url, placeHolder, imageUrl, title, buttonLabel,queryKey} = props
  let navigate = useNavigate();

  const { data } = useQuery([queryKey], () =>
    getGeneralCall(url)
  );

  const viewPropertyHandler = () => {
    navigate("../page-under-construction");
  };

  const placeHolderData = [];

  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')


  const Input = (() => <Flex
        
  gap={["20px","0"]}
  padding="40px"
  width={["100%","700px"]}
  bg="white"
  paddingBottom="0px"

  flexDir={["column", "row"]}
>
  <Select
    placeHolder={placeHolder}
    propertyName="property"
    selectOptions={data || placeHolderData}
  ></Select>

  <Button
    onClick={viewPropertyHandler}
    fontSize="0.65rem"
    invertColor={true}
    minWidth={["100%", "200px"]}
  >
    {buttonLabel}
  </Button>
</Flex>)


  return (
    <>
   <Box
      bgImage={`linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,0.5)), url(${imageUrl})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="570px"
      width="100%"

    >
      <AnimatedPage>
        <VStack      

      justifyContent={"flex-end"}
      spacing="40px"
      height="570px"
      width="100%">
      
      <Text
        color="White"
        fontSize={["1.75rem","2rem","2.75rem"]}
        fontWeight="100"
        textAlign="center"
        maxWidth={["400px","500px"]}
        marginBottom={["100px", "0"]}
      >
        {title}
      </Text>

     {isLargerThan700 && <Input></Input>}

     </VStack>

      </AnimatedPage>
    </Box>

  {!isLargerThan700 &&   <Input></Input>}

 </>)
}

export default SelectImage;
