import { BellIcon, ChatIcon, DragHandleIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Flex direction={"row"} gap={8}>
      <Button
        variant={"link"}
        p={2}
        size={"sm"}
        onClick={() => navigate("/meus-anuncios")}
      >
        <DragHandleIcon w={5} h={5} marginRight={2} /> Meus Anúncios
      </Button>
      <Button
        variant={"link"}
        p={2}
        size={"sm"}
        onClick={() => navigate("/chat")}
      >
        <ChatIcon w={5} h={5} marginRight={2} />
        Chat
      </Button>
      <Button
        variant={"link"}
        p={2}
        size={"sm"}
        onClick={() => navigate("/notificacao")}
      >
        <BellIcon w={6} h={6} /> Notificações
      </Button>
    </Flex>
  );
};
