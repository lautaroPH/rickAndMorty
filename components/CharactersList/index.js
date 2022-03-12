import CharacterCard from '../CharacterCard';
import LoaderSkeletonCard from '../loaderSkeletonCard';
import styles from './styles.module.css';

const CharactersList = ({
  characters,
  noMoreCharacters = true,
  loading = false,
}) => {
  return (
    <>
      <div className={styles.characterContainer}>
        {characters &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        {loading && <LoaderSkeletonCard />}
      </div>
      {!noMoreCharacters && (
        <p className={styles.noMoreCharacters}>No hay mas personajes</p>
      )}
    </>
  );
};

export default CharactersList;
