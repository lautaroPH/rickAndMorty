import { gql } from '@apollo/client';

export const ALL_CHARACTER = gql`
  query getAllCharacter($page: Int!) {
    allCharacter(page: $page) {
      id
      name
      episode
      image
      species
    }
    hasNextPage(page: $page)
  }
`;
