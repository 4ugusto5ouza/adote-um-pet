import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
  cache: new InMemoryCache({addTypename: false}),
});

export const GET_TODOS_QUERY = gql`
  query {
    todos {
      id
      nome
      descricao
      status_todo
    }
  }
`;

export const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($nome: String!, $descricao: String!) {
    createTodo(
      data: { nome: $nome, descricao: $descricao, status_todo: undone }
    ) {
      id
    }
  }
`;

export const PUBLISH_TODO_MUTATION = gql`
  mutation PublishTodo($id: ID!) {
    publishTodo(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

export const UPDATE_TODO_MUTATION = gql`
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

export const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;
