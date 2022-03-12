import { useLazyQuery } from '@apollo/client';
import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import Header from '../components/Header';
import useNearScreen from '../hooks/useNearScreen';
import { ALL_CHARACTER } from '../schemasGraphql/allCharacter';
import { clientApollo } from '../utils/clientApollo';

export default function Home({ data }) {
  const [getCharacter, result] = useLazyQuery(ALL_CHARACTER);
  const [characters, setCharacters] = useState(data.allCharacter);
  const [hasNextPage, sethasNextPage] = useState(data.hasNextPage);
  const [page, setPage] = useState(2);

  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: !data.allCharacter ? null : externalRef,
    once: false,
  });

  useEffect(() => {
    if (isNearScreen) {
      getCharacter({ variables: { page } });
    }
  }, [page, getCharacter, isNearScreen]);

  useEffect(() => {
    if (
      result?.data?.allCharacter &&
      result?.data?.hasNextPage !== hasNextPage &&
      hasNextPage
    ) {
      setCharacters((character) =>
        [...character, result?.data?.allCharacter].flat(4)
      );
      setPage(page + 1);
      sethasNextPage(result?.data?.hasNextPage);
    }
  }, [result, hasNextPage, page]);

  return (
    <>
      <Header />
      <CharactersList
        characters={characters}
        noMoreCharacters={hasNextPage}
        loading={result?.loading}
      />
      <div id="visor" ref={externalRef}></div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await clientApollo.query({
    query: ALL_CHARACTER,
    variables: { page: 1 },
  });

  return {
    props: {
      data,
    },
  };
}
