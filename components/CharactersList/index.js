import CharacterCard from '../CharacterCard';
import styles from './styles.module.css';

const CharactersList = ({ characters, noMoreCharacters, loading }) => {
  return (
    <>
      <div className={styles.characterContainer}>
        {characters &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              episode={character.episode}
              image={character.image}
              species={character.species}
            />
          ))}
      </div>
      {loading && <p>Cargando</p>}
      {!noMoreCharacters && (
        <p className={styles.noMoreCharacters}>No hay mas personajes</p>
      )}
    </>
  );
};

export default CharactersList;
