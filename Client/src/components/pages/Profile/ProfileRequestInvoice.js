import { Flex, Box } from "@chakra-ui/react";
import ProfileSectionTitle from "./ProfileSectionTitle";
import Button from '../../commom/Button';

function ProfileRequestInvoice() {
  const headingSectionTitleContent = "REQUEST AN INVOICE";
  const subheadingSectionTitleContent =
    "We are happy to assist you with instructions for receiving your hotel bill.";

    const headingProperties = {fontSize:"sm", letterSpacing: "0.1875rem"}




  return (
    <Flex bg="black" width="100%" color="white" justifyContent="center" padding="100px 0px 200px 0px" id="invoice">
      <Box border="1px solid white" padding="10px">
       <Flex justifyContent="space-evenly" height="170px" width="880px" padding="40px 0" border="1px solid white">
      <ProfileSectionTitle
        headingSectionTitleContent={headingSectionTitleContent}
        subheadingSectionTitleContent={subheadingSectionTitleContent}
        headingProperties={headingProperties}
        width="300px"
      ></ProfileSectionTitle>
       <Button width="auto">Request an invoice</Button>
      </Flex> 
      </Box>
    </Flex>
  );
}

export default ProfileRequestInvoice;
