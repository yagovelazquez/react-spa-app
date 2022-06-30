import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import React from "react";
import LoadingLogoSpinner from "./LoadingLogoSpinner";

function LoadingModal(props) {
  return (
    <Modal preserveScrollBarGap blockScrollOnMount isOpen={props.isLoading}>
      <ModalOverlay bg="whiteAlpha.800" />
      <ModalContent marginTop="120px" bgColor="transparent" boxShadow="none">
        <LoadingLogoSpinner />
      </ModalContent>
    </Modal>
  );
}

export default LoadingModal;
