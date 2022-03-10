import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Character = ({ character }) => {
  return (
    <>
      {character && (
        <>
          <Link href="/">
            <a className={styles.GoBack}>Go Back</a>
          </Link>
          <div className={styles.containerCharacter}>
            <div className={styles.containerImg}>
              {character?.image !== undefined && (
                <Image
                  width={300}
                  height={200}
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
      )}
    </>
  );
};

export default Character;
