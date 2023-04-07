import { useQuery } from "@apollo/client";
import { AddIcon } from "@chakra-ui/icons";
import { ImBlocked } from "react-icons/im";
import { FaShareAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GET_ANUNCIOS_QUERY } from "../../../lib/anuncio";
import { useEffect, useState } from "react";

interface anuncioProps {
  id: string;
  tituloAnuncio: string;
  altImgCapa: string;
  base64Capa: string;
}

export const Home = () => {
  const [anuncios, setAnuncios] = useState([] as anuncioProps[]);
  const { data } = useQuery<{ anuncios: anuncioProps[] }>(GET_ANUNCIOS_QUERY);

  useEffect(() => {
    debugger;
    const newAnuncios = data?.anuncios as anuncioProps[];
    if (newAnuncios) {
      setAnuncios(newAnuncios);
    }
  }, [data]);

  const navigate = useNavigate();

  return (
    <Box width={"90%"} height={"100%"} marginX={"auto"} padding={"10px"}>
      <Text fontSize={"24px"} fontWeight={"600"} marginBottom={"15px"}>
        Publicações recentes
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {anuncios.length > 0 &&
          anuncios.map((anuncio) => (
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
                  <Tooltip
                    hasArrow
                    label="Ver mais"
                    bg="gray.300"
                    color="black"
                  >
                    <IconButton
                      size={"md"}
                      colorScheme={"blue"}
                      aria-label="Ver mais"
                      icon={<AddIcon />}
                      borderRadius={"50%"}
                      onClick={() => navigate(`/detalhes/${anuncio.id}`)}
                    />
                  </Tooltip>
                  <Tooltip
                    hasArrow
                    label="Denunciar"
                    bg="gray.300"
                    color="black"
                  >
                    <IconButton
                      size={"xl"}
                      variant={"link"}
                      colorScheme={"dark"}
                      aria-label="Denunciar"
                      icon={<ImBlocked />}
                      borderRadius={"50%"}
                    />
                  </Tooltip>
                  <Tooltip
                    hasArrow
                    label="Compartilhar"
                    bg="gray.300"
                    color="black"
                  >
                    <IconButton
                      size={"xl"}
                      variant={"link"}
                      colorScheme={"dark"}
                      aria-label="Compartilhar"
                      icon={<FaShareAlt />}
                      borderRadius={"50%"}
                    />
                  </Tooltip>
                  <Tooltip
                    hasArrow
                    label="Favoritar"
                    bg="gray.300"
                    color="black"
                  >
                    <IconButton
                      size={"xl"}
                      variant={"link"}
                      colorScheme={"dark"}
                      aria-label="Favoritar"
                      icon={<MdFavorite />}
                      borderRadius={"50%"}
                    />
                  </Tooltip>
                </Flex>
              </Flex>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
