import CharactersList from '../components/CharactersList';
import Header from '../components/Header';
import { SEARCH_CHARACTERS } from '../schemasGraphql/searchCharacters';
import { clientApollo } from '../utils/clientApollo';
import { useRouter } from 'next/router';
import styles from '../components/CharactersList/styles.module.css';

export default function Result({ data, loading }) {
  const router = useRouter();
  const query = router.query.character;
  return (
    <>
      <Header title={query} />

      <div className={styles.containerResults}>
        <h2 className={styles.title}>Search results by: {query}</h2>
        {data?.findCharacter ? (
          <CharactersList characters={data?.findCharacter} loading={loading} />
        ) : (
          <h4>No search results</h4>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const name = context.query.character;

  if (name) {
    const { data, loading } = await clientApollo.query({
      query: SEARCH_CHARACTERS,
      variables: { name },
    });

    return {
      props: { data, loading },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
}
