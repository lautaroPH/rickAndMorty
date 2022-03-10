import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const clientApollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://rick-and-morty.app.vercel/api/graphql',
  }),
});
