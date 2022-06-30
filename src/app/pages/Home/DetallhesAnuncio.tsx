import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaFacebookSquare,
  FaPhoneSquareAlt,
  FaRegNewspaper,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ChatIcon } from "@chakra-ui/icons";

export const DetallhesAnuncio = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const handleClickVoltar = () => {
    onClose();
    navigate("/");
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"4xl"}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Título do anúncio</ModalHeader>
          {/* <ModalCloseButton size={"sm"}/> */}
          <ModalBody>
            <Flex direction={"row"} h={"500px"}>
              <VStack margin={"15px"} width={"45%"}>
                Id:{Id}
                <Image
                  boxSize="90%"
                  maxW={"400px"}
                  borderRadius={"15px"}
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <Text textAlign={"justify"}>
                  Minha descrição Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Aliquam et pretium lectus. Suspendisse
                  varius, ex ac tempor semper, ipsum dolor tristique magna, vel
                  lacinia massa mi quis velit. Vestibulum ac velit sit amet
                  sapien rutrum pharetra.
                </Text>
                <Flex direction={"row"} gap={6} alignItems={"flex-end"} justifyContent={"flex-end"} width={"100%"}>
                  <Icon
                    as={FaPhoneSquareAlt}
                    color={"gray"}
                    w={"25px"}
                    h={"25px"}
                  />
                  <Icon as={MdEmail} w={"25px"} color={"gray"} h={"25px"} />
                  <Icon
                    as={FaFacebookSquare}
                    color={"gray"}
                    w={"25px"}
                    h={"25px"}
                  />
                </Flex>
              </VStack>
              <Spacer />
              <VStack
                margin={"15px"}
                width={"45%"}
                border={"1px"}
                padding={"10px"}
              >
                <Box>
                  <Text>Publicado por Suzane Vieira</Text>
                  <Flex direction={"row"} marginTop={"18px"}>
                    <Avatar
                      name="Suzane Vieira"
                      size={"md"}
                      marginRight={"20px"}
                    />
                    <Flex direction={"column"}>
                      <Text fontSize={"16px"}>Conta verificada</Text>
                      <Flex direction={"row"} gap={5}>
                        <Icon
                          as={FaPhoneSquareAlt}
                          color={"gray"}
                          w={"25px"}
                          h={"25px"}
                        />
                        <Icon
                          as={MdEmail}
                          w={"25px"}
                          color={"gray"}
                          h={"25px"}
                        />
                        <Icon
                          as={FaFacebookSquare}
                          color={"gray"}
                          w={"25px"}
                          h={"25px"}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex direction={"row"} gap={6} marginTop={"80%"}>
                    <Button leftIcon={<FaRegNewspaper />} size={"sm"}>
                      Todos os anúncios
                    </Button>

                    <Button leftIcon={<ChatIcon />} size={"sm"}>
                      Chat
                    </Button>
                  </Flex>
                </Box>
              </VStack>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleClickVoltar()}
            >
              Voltar
            </Button>
            <Button variant="ghost">Tenho interesse</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
