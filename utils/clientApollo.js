import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const clientApollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rick-and-morty-theta-three.vercel.app/api/graphql',
  }),
});
