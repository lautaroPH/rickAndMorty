import { gql } from 'apollo-server-micro';

export const CHARACTER = gql`
  query getCharacetById($id: ID!) {
    characterById(id: $id) {
      id
      name
      episode
      image
      species
    }
  }
`;
