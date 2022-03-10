// import Character from '../../components/Character';
// import { CHARACTERCOUNT } from '../../schemasGraphql/characterCount';
// import { CHARACTER } from '../../schemasGraphql/charactetById';
// import { clientApollo } from '../../utils/clientApollo';

// export default function OneCharacter({ data }) {
//   return (
//     <main>
//       <Character character={data?.characterById} />
//     </main>
//   );
// }

// export async function getStaticPaths() {
//   const { data } = await clientApollo.query({
//     query: CHARACTERCOUNT,
//   });

//   const allCharacters = data.characterCount.toString();

//   return {
//     paths: [{ params: { id: allCharacters } }],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { id } = params;

//   const { data } = await clientApollo.query({
//     query: CHARACTER,
//     variables: { id },
//   });

//   if (!data.characterById) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/',
//       },
//     };
//   }

//   return {
//     props: {
//       data,
//     },
//   };
// }
