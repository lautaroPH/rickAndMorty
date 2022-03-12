import CharacterScreen from '../../components/Character';
import { CHARACTERCOUNT } from '../../schemasGraphql/characterCount';
import { CHARACTER } from '../../schemasGraphql/charactetById';
import { clientApollo } from '../../utils/clientApollo';
import Header from '../../components/Header';

export default function Character({ data }) {
  return (
    <>
      <Header title={data?.characterById.name} />
      <main>
        <CharacterScreen character={data?.characterById} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await clientApollo.query({
    query: CHARACTERCOUNT,
  });

  const allCharacters = data.characterCount.toString();

  return {
    paths: [{ params: { id: allCharacters } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const { data } = await clientApollo.query({
    query: CHARACTER,
    variables: { id },
  });

  if (!data.characterById) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
