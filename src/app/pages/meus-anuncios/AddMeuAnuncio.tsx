import { useMutation } from "@apollo/client";
import { ArrowBackIcon, ArrowRightIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Text,
  Textarea,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CREATE_ANUNCIO_MUTATION,
  PUBLISH_ANUNCIO_MUTATION,
} from "../../../lib/anuncio";

interface anuncioProps {
  titulo: string;
  descricao: string;
  dataNascimento: string;
  vacinado: boolean;
  castrado: boolean;
  altCapa: string;
  capa: string;
}

export const AddMeuAnuncio = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [vacinado, setVacinado] = useState(false);
  const [castrado, setCastrado] = useState(false);
  const [capa, setCapa] = useState("");
  const [altImg, setAltImg] = useState("");

  const navigate = useNavigate();

  const toast = useToast();

  const [createAnuncio] = useMutation(CREATE_ANUNCIO_MUTATION);
  const [publishAnuncio] = useMutation(PUBLISH_ANUNCIO_MUTATION);

  const handleSelecImage = (fileList: FileList) => {
    const file = fileList[0];
    SetPreviousImage(file);
  };

  const SetPreviousImage = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const nameFile = file.name.split(".")[0];
      setCapa(reader.result as string);
      setAltImg(nameFile);
    };
  };

  const handlePublish = () => {
    if (
      titulo.length === 0 ||
      descricao.length === 0 ||
      dataNascimento.length === 0 ||
      capa.length === 0
    ) {
      toast({
        title: "Campo inválido.",
        description: "Um ou mais campos estão vazios ou inválidos!",
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const anuncio: anuncioProps = {
      titulo,
      descricao,
      dataNascimento,
      vacinado,
      castrado,
      altCapa: altImg,
      capa,
    };
    criarAnuncio(anuncio);
  };

  const criarAnuncio = (anuncio: anuncioProps) => {
    return;
    createAnuncio({
      variables: {
        tituloAnuncio: anuncio.titulo,
        descricaoAnuncio: anuncio.descricao,
        dataNascimento: anuncio.dataNascimento,
        base64Capa: anuncio.capa,
        altImgCapa: anuncio.altCapa,
        castrado: anuncio.castrado,
        vacinado: anuncio.vacinado,
      },
      onCompleted(data) {
        publishAnuncio({
          variables: {
            id: data.createAnuncio.id,
          },
        });
      },
    }).then((res) => {
      navigate("/meus-anuncios");
    });
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
        Adicionar
      </Text>
      <Flex flexDirection={"row"} gap={6}>
        <Flex width={"50%"} flexDirection={"column"}>
          <FormControl width={"100%"}>
            <FormLabel htmlFor="titulo">Título: </FormLabel>
            <Input
              id="titulo"
              type="text"
              value={titulo}
              maxLength={30}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </FormControl>
          <FormControl width={"100%"}>
            <FormLabel htmlFor="descricao">Descrição: </FormLabel>
            <Textarea
              id="descricao"
              value={descricao}
              rows={5}
              maxLength={300}
              size="sm"
              resize={"block"}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </FormControl>
          <Flex alignItems={"center"} gap={6}>
            <FormControl width={"200px"}>
              <FormLabel htmlFor="datanasc">Data nascimento: </FormLabel>
              <Input
                id="datanasc"
                type="date"
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </FormControl>
            <FormControl width={"200px"} height={"0px"}>
              <Checkbox
                isChecked={vacinado}
                onChange={() => setVacinado(!vacinado)}
              >
                <Text fontWeight={"600"}>Vacinado</Text>
              </Checkbox>
            </FormControl>
            <FormControl width={"200px"} height={"0px"}>
              <Checkbox
                isChecked={castrado}
                onChange={() => setCastrado(!castrado)}
              >
                <Text fontWeight={"600"}>Castrado</Text>
              </Checkbox>
            </FormControl>
          </Flex>
        </Flex>
        <Flex width={"50%"} flexDirection={"column"}>
          <FormControl width={"100%"}>
            <FormLabel htmlFor="capa">Capa: </FormLabel>
            <Box boxSize="sm">
              <Image
                boxSize={"380px"}
                objectFit="cover"
                objectPosition={"50% 100%"}
                borderRadius={"2xl"}
                src={`${capa}`}
                fallbackSrc="https://via.placeholder.com/380"
                alt={`${altImg}`}
              />
            </Box>
            <Input
              variant="flushed"
              id="capa"
              type="file"
              accept="image/*"
              multiple={false}
              onChange={(e) => handleSelecImage(e.target.files as FileList)}
            />
          </FormControl>
        </Flex>
      </Flex>
      <Flex
        width={"100%"}
        marginTop={"15px"}
        justifyContent={"flex-end"}
        gap={6}
      >
        <Tooltip hasArrow label="Voltar" bg="gray.300" color="black">
          <IconButton
            size={"lg"}
            colorScheme={"red"}
            aria-label="Voltar"
            icon={<ArrowBackIcon />}
            borderRadius={"50%"}
            onClick={() => navigate("/meus-anuncios")}
          />
        </Tooltip>
        <Tooltip hasArrow label="Publicar" bg="gray.300" color="black">
          <IconButton
            size={"lg"}
            colorScheme={"green"}
            aria-label="Salvar"
            icon={<ArrowRightIcon />}
            borderRadius={"50%"}
            onClick={handlePublish}
          />
        </Tooltip>
      </Flex>
    </Box>
  );
};
