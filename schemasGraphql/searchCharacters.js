import { gql } from 'apollo-server-micro';

export const SEARCH_CHARACTERS = gql`
  query searchCharacter($name: String!) {
    findCharacter(name: $name) {
      id
      name
      image
    }
  }
`;
