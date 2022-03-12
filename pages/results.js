import CharactersList from '../components/CharactersList';
import Header from '../components/Header';
import { SEARCH_CHARACTERS } from '../schemasGraphql/searchCharacters';
import { clientApollo } from '../utils/clientApollo';
import styles from '../components/CharactersList/styles.module.css';

export default function Result({ data, loading, name }) {
  return (
    <>
      <Header title={name} />
      <div className={styles.containerResults}>
        <h2 className={styles.title}>Search results by: {name}</h2>
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
      props: { data, loading, name },
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
