import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import LoadingLogoSpinner from "./LoadingLogoSpinner";

function LoadingModal(props) {
  const { onClose } = useDisclosure();
  return (
    <React.Fragment>
      {props.isLoading && (
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay bg="whiteAlpha.800" />
          <ModalContent
            marginTop="120px"
            bgColor="transparent"
            boxShadow="none"
          >
            <LoadingLogoSpinner />
          </ModalContent>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default LoadingModal;
