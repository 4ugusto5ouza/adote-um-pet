import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import {
  DELETE_ANUNCIO_MUTATION,
  GET_ANUNCIOS_QUERY,
} from "../../../lib/anuncio";

interface anuncioProps {
  id: string;
  tituloAnuncio: string;
  altImgCapa: string;
  base64Capa: string;
}

export const DeleteMeuAnuncio = ({
  isOpen,
  onOpen,
  onClose,
  anuncio,
  anuncios,
  setAnuncio,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  anuncio: anuncioProps;
  anuncios: anuncioProps[];
  setAnuncio: (anuncio: anuncioProps[]) => void;
}) => {
  const [deleteAnuncio] = useMutation(DELETE_ANUNCIO_MUTATION);

  const handleConfirmDelete = () => {
    if (anuncio.id) {
      deleteAnuncio({
        variables: {
          id: anuncio.id,
        },
      }).then(() => {
        debugger;
        const oldAnuncios = anuncios.filter((x) => x.id !== anuncio.id);
        setAnuncio(oldAnuncios);
      });
    }
    setAnuncio([]);
    onClose();
  };

  return (
    <Box
      width={"90%"}
      height={"100%"}
      marginX={"auto"}
      padding={"10px"}
      position={"relative"}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deletar anúncio?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
              {anuncio && (
                <GridItem
                  w="100%"
                  h="100%"
                  bgColor={"#fdfdfd"}
                  key={anuncio.id}
                >
                  <Flex
                    border={"1px solid #bababa"}
                    borderRadius={"xl"}
                    w={"100%"}
                    h={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={"10px"}
                    direction={"column"}
                  >
                    <Text>{anuncio.tituloAnuncio}</Text>
                    <Image
                      boxSize="80%"
                      borderRadius={"xl"}
                      objectFit="cover"
                      src={`${anuncio.base64Capa}`}
                      alt={`${anuncio.altImgCapa}`}
                      marginTop={"5px"}
                    />
                  </Flex>
                </GridItem>
              )}
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Voltar
            </Button>
            <Button colorScheme="red" onClick={handleConfirmDelete}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
