import { gql, useMutation, useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";
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
  const { data } = useQuery<{ todos: TodoProps[] }>(GET_TODOS_QUERY);

  const todos = data?.todos;
  console.log(todos);

  return <Flex height={"100%"}>Home</Flex>;
};
