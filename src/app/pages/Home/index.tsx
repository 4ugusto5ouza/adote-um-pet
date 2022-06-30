import { gql, useMutation, useQuery } from "@apollo/client";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const GET_TODOS_QUERY = gql`
  query {
    todos {
      id
      nome
      descricao
      status_todo
    }
  }
`;

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($nome: String!, $descricao: String!) {
    createTodo(
      data: { nome: $nome, descricao: $descricao, status_todo: undone }
    ) {
      id
    }
  }
`;

const PUBLISH_TODO_MUTATION = gql`
  mutation PublishTodo($id: ID!) {
    publishTodo(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

const UPDATE_TODO_MUTATION = gql`
  mutation UpdateTodo(
    $id: ID!
    $nome: String!
    $descricao: String!
    $status_todo: StatusTodo!
  ) {
    updateTodo(
      data: { nome: $nome, descricao: $descricao, status_todo: $status_todo }
      where: { id: $id }
    ) {
      id
    }
  }
`;

const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;

type TodoProps = {
  id: string;
  nome: string;
  descricao: string;
  status_todo: "done" | "undone";
};

export const Home = () => {

  // const { data } = useQuery<{ todos: TodoProps[] }>(GET_TODOS_QUERY);
  // const todos = data?.todos;
  // console.log(todos);

  return (
    <Box
      width={"90%"}
      height={"100%"}
      marginX={"auto"}
      padding={"10px"}
    >
      <Text fontSize={"24px"} fontWeight={"600"} marginBottom={"15px"}>Publicações recentes</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" bgColor={"#fdfdfd"}>
          <Flex
            border={"1px solid #bababa"}
            borderRadius={"15px"}
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
              borderRadius={"15px"}
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              marginTop={"5px"}
            />
            <Flex direction={"row"} marginTop={"10px"} gap={6}>
              <IconButton size={"md"} colorScheme={"blue"} aria-label="Ver mais" icon={<AddIcon/>} borderRadius={"50%"} />            
              <Button size={"sm"}>D</Button>
              <Button size={"sm"}>C</Button>
              <Button size={"sm"}>F</Button>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
