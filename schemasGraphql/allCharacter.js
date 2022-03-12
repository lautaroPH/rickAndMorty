import { gql } from 'apollo-server-micro';

export const ALL_CHARACTER = gql`
  query getAllCharacter($page: Int!) {
    allCharacter(page: $page) {
      id
      name
      image
    }
    hasNextPage(page: $page)
  }
`;
