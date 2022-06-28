import { BellIcon, ChatIcon, DragHandleIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <>
      <Button variant={"link"} p={2} size={"sm"}>
        <DragHandleIcon w={5} h={5} marginRight={2} /> Meus Anúncios
      </Button>
      <Button variant={"link"} p={2} size={"sm"}>
        <ChatIcon w={5} h={5} marginRight={2} />
        Chat
      </Button>
      <Button variant={"link"} p={2} size={"sm"}>
        <BellIcon w={6} h={6} /> Notificações
      </Button>
    </>
  );
};
