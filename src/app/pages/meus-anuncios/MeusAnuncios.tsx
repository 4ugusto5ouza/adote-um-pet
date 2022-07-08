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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const MeusAnuncios = () => {
  const navigate = useNavigate();

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
      <Flex
        width={"100%"}
        marginTop={"15px"}
        justifyContent={"flex-end"}
        gap={6}
      >
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
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
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
            <Text>Meu título</Text>
            <Image
              boxSize="80%"
              borderRadius={"2xl"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
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
                />
              </Tooltip>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
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
            <Text>Meu título</Text>
            <Image
              boxSize="80%"
              borderRadius={"xl"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
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
                />
              </Tooltip>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
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
            <Text>Meu título</Text>
            <Image
              boxSize="80%"
              borderRadius={"xl"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
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
                  onClick={() => navigate(`/editar/meu-anuncio/${1}`)}
                />
              </Tooltip>
              <Tooltip hasArrow label="Deletar" bg="gray.300" color="black">
                <IconButton
                  size={"sm"}
                  colorScheme={"red"}
                  aria-label="Deletar"
                  icon={<DeleteIcon />}
                  borderRadius={"50%"}
                  onClick={() => navigate(`/deletar/meu-anuncio/${1}`)}
                />
              </Tooltip>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
