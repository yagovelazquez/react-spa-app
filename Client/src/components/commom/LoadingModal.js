import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import LoadingLogoSpinner from "./LoadingLogoSpinner";



function LoadingModal(props) {
  const {  onClose } = useDisclosure();
  return (
    <>
 
 

      {props.isLoading &&  <ModalChakra isOpen={true} onClose={onClose}>
        <ModalOverlay bg="whiteAlpha.800" />
        <ModalContent marginTop="120px" bgColor="transparent" boxShadow="none">
         <LoadingLogoSpinner />
        </ModalContent>
      </ModalChakra>}
    </>
  );
}

export default LoadingModal;
