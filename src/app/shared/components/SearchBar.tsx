import { Button, FormControl, Input, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <Stack direction={"row"}>
      <FormControl w={"100%"} maxW={"400px"}>
        <Input
          size={"sm"}
          type={"text"}
          placeholder={"Pesquisar"}
          borderRadius={"4px"}
        />
      </FormControl>
      <Button rightIcon={<SearchIcon w={"25px"} paddingRight={"8px"} />} size={"sm"} paddingX={"5px"}></Button>
    </Stack>
  );
};
