import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Character {
    name: String!
    status: String!
    species: String!
    image: String!
    episode: [String]!
    id: ID!
  }

  type Query {
    characterCount: Int!
    hasNextPage(page: Int!): String
    allCharacter(page: Int!): [Character]
    findCharacter(name: String!): [Character]
    characterById(id: ID!): Character
  }
`;
