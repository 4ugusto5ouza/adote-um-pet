import { useQuery } from "@apollo/client";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_ANUNCIOS_QUERY } from "../../../lib/anuncio";
import { DeleteMeuAnuncio } from "./DeleteMeuAnuncio";

interface anuncioProps {
  id: string;
  tituloAnuncio: string;
  altImgCapa: string;
  base64Capa: string;
}

export const MeusAnuncios = () => {
  const [anuncioDel, setAnuncioDel] = useState<anuncioProps>(
    {} as anuncioProps
  );

  const [anuncios, setAnuncios] = useState<anuncioProps[]>([]);

  const { data } = useQuery<{ anuncios: anuncioProps[] }>(GET_ANUNCIOS_QUERY);

  useEffect(() => {
    const response = data?.anuncios as anuncioProps[];
    setAnuncios(response);
  }, [data,anuncios]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleDelete = (anuncio: anuncioProps): void => {
    if (anuncio.id === undefined) return;

    setAnuncioDel(anuncio);
    onOpen();
  };

  return (
    <Box
      width={"90%"}
      height={"100%"}
      marginX={"auto"}
      padding={"10px"}
      position={"relative"}
    >
      <Text fontSize={"24px"} fontWeight={"600"} marginBottom={"15px"}>
        Meus anúncios
      </Text>
      <Flex width={"100%"} margin={"-15px"} justifyContent={"flex-end"} gap={6}>
        <Tooltip hasArrow label="Adicionar" bg="gray.300" color="black">
          <IconButton
            size={"lg"}
            colorScheme={"blue"}
            aria-label="Adicionar"
            icon={<AddIcon />}
            borderRadius={"50%"}
            onClick={() => navigate(`/adicionar/meu-anuncio`)}
          />
        </Tooltip>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {anuncios &&
          anuncios?.map((anuncio) => (
            <GridItem w="100%" h="100%" bgColor={"#fdfdfd"} key={anuncio.id}>
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
                <Flex direction={"row"} marginTop={"10px"} gap={6}>
                  <Tooltip hasArrow label="Editar" bg="gray.300" color="black">
                    <IconButton
                      size={"sm"}
                      colorScheme={"orange"}
                      aria-label="Editar"
                      icon={<EditIcon />}
                      borderRadius={"50%"}
                      onClick={() => navigate(`/detalhes/${1}`)}
                    />
                  </Tooltip>
                  <Tooltip hasArrow label="Deletar" bg="gray.300" color="black">
                    <IconButton
                      size={"sm"}
                      colorScheme={"red"}
                      aria-label="Deletar"
                      icon={<DeleteIcon />}
                      borderRadius={"50%"}
                      onClick={() => handleDelete(anuncio)}
                    />
                  </Tooltip>
                </Flex>
              </Flex>
            </GridItem>
          ))}
      </Grid>
      <DeleteMeuAnuncio
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        anuncio={anuncioDel}
        anuncios={anuncios}
        setAnuncio={setAnuncios}
      />
    </Box>
  );
};
