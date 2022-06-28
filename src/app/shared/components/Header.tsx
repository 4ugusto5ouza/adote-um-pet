import { Avatar, Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { NavBar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <Box w={"100%"} boxShadow={"base"} h={"52px"}>
      <HStack
        h={"100%"}
        marginX={"40px"}
        margin={"auto"}
        direction={"row"}
        w={"90%"}
        alignItems={"center"}
      >
        <Text fontSize={"16px"} fontWeight={"600"} marginRight={"10px"}>
          Adote1Pet
        </Text>
        <SearchBar />
        <Spacer />
        <NavBar />
        <Avatar name="Samuel Souza" size={"sm"} />
        <Text fontSize={"12px"}>Samuel Souza</Text>
        <Button colorScheme={"orange"} size={"sm"} borderRadius={"20px"}>
          Anunciar
        </Button>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      </HStack>
    </Box>
  );
};
