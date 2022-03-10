import axios from 'axios';

const getData = async (page = 0) => {
  return await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
};

export const resolvers = {
  Query: {
    characterCount: async () => {
      const rickAndMortyData = await getData();

      return rickAndMortyData.data.info.count;
    },
    hasNextPage: async (root, args) => {
      const { page } = args;

      try {
        const rickAndMortyData = await getData(page);
        const nextPage = rickAndMortyData.data.info.next;

        return nextPage;
      } catch (error) {
        return null;
      }
    },
    allCharacter: async (root, args) => {
      const { page } = args;

      try {
        const rickAndMortyData = await getData(page);

        const dataResults = rickAndMortyData.data.results;
        const nextPage = rickAndMortyData.data.info.next;

        return dataResults;
      } catch (error) {
        return null;
      }
    },
    findCharacter: async (root, args) => {
      const { name } = args;
      try {
        const rickAndMortyData = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${name}`
        );
        return rickAndMortyData.data.results;
      } catch (error) {
        return null;
      }
    },
    characterById: async (root, args) => {
      const { id } = args;
      try {
        const rickAndMortyData = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        return rickAndMortyData.data;
      } catch (error) {
        return null;
      }
    },
  },
};
