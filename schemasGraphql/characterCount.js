import { gql } from 'apollo-server-micro';

export const CHARACTERCOUNT = gql`
  query {
    characterCount
  }
`;
