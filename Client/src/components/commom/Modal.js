import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import Button from "./Button";

function Modal(props) {
  const {
    isOpen,
    onClose,
    modalTitle,
    ModalBodyContent,
    modalContentProperties,
    modalProperties,
    footer,
  } = props;

  return (
    <>
      <ChakraModal
        preserveScrollBarGap
        blockScrollOnMount
        {...modalProperties}
        borderRadius={0}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent {...modalContentProperties}>
          {modalTitle && <ModalHeader>{modalTitle}</ModalHeader>}
          <ModalCloseButton _focus={{ boxShadow: "none" }} />
          <ModalBody>{ModalBodyContent && <ModalBodyContent />}</ModalBody>

          {footer && (
            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </ChakraModal>
    </>
  );
}

export default Modal;
