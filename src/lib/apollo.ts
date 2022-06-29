import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  },
  cache: new InMemoryCache(),
});
