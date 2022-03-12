import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const CharacterScreen = ({ character }) => {
  return (
    <>
      {character ? (
        <>
          <div className={styles.containerCharacter}>
            <div className={styles.containerImg}>
              {character?.image !== undefined && (
                <Image
                  width={600}
                  height={600}
                  layout="responsive"
                  src={character?.image}
                  priority={true}
                  alt={`Imagen de: ${character?.name}`}
                  className={styles.img}
                />
              )}
            </div>
            <h2 className={styles.title}>
              {character?.name} - {character?.species}
            </h2>
            <h4 className={styles.episodes}>
              Episodes that appeared: {character?.episode?.length}
            </h4>
          </div>
        </>
      ) : (
        character === undefined && <h2>Redirecting to home screen</h2>
      )}
    </>
  );
};

export default CharacterScreen;
