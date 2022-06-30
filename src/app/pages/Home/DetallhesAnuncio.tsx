import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface DetalhesAnuncioProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const DetallhesAnuncio = ({
  isOpen,
  onOpen,
  onClose,
}: DetalhesAnuncioProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"xl"}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Título do anúncio</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Voltar
          </Button>
          <Button variant="ghost">Tenho interesse</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
