import CharacterScreen from '../../components/Character';
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
  return {
    paths: [{ params: { id: '1' } }],
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
