import { Flex, Box, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import ProfileSectionTitle from "./ProfileSectionTitle";
import Button from "../../commom/Button";
import Modal from "../../commom/Modal";
import RequestInvoiceForm from "./RequestInvoiceForm";

function ProfileRequestInvoice() {
  const headingSectionTitleContent = "REQUEST AN INVOICE";
  const subheadingSectionTitleContent =
    "We are happy to assist you with instructions for receiving your hotel bill.";

  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan0] = useMediaQuery("(min-width: 0px)");

  const headingProperties = {
    fontSize: ["xs", "xs", "sm"],
    letterSpacing: "0.1875rem",
    textAlign: ["center", "start"],
    width: "100%",
  };
  const subHeadingProperties = { textAlign: ["center", "start"] };

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      ref={(ref) => ref}
      bg="black"
      width="100%"
      color="white"
      justifyContent="center"
      padding={["100px 0px 100px 0px", "100px 0px 200px 0px"]}
    >
      <Modal
        modalProperties={modalProperties}
        ModalBodyContent={RequestInvoiceForm}
        isOpen={isOpen}
        modalContentProperties={modalContentProperties}
        onClose={onClose}
      ></Modal>
      <Box
        marginLeft={["10px", 0, 0]}
        height={["225px", "170px", "200px"]}
        width={["100%", "auto", "auto"]}
        border="1px solid white"
        padding={["10px"]}
      >
        <Flex
          justifyContent={"space-evenly"}
          height="100%"
          width={["100%", "660px", "880px"]}
          alignItems="center"
          padding={["25px 50px", "25px 50px", "40px 0"]}
          border="1px solid white"
          flexDir={["column", "row"]}
        >
          <ProfileSectionTitle
            headingSectionTitleContent={headingSectionTitleContent}
            subheadingSectionTitleContent={subheadingSectionTitleContent}
            headingProperties={headingProperties}
            subHeadingProperties={subHeadingProperties}
            width="300px"
          ></ProfileSectionTitle>
          <Button
            fontSize={["0.625rem", "0.625rem", "xs"]}
            onClick={onOpen}
            width="auto"
          >
            Request an invoice
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ProfileRequestInvoice;
