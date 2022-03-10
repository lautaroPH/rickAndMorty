import { gql } from '@apollo/client';

export const CHARACTERCOUNT = gql`
  query {
    characterCount
  }
`;
