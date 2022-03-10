import { gql } from '@apollo/client';

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
