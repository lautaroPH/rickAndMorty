import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const CharacterCard = ({ id, name, episode, image, species }) => {
  const signo = '>';
  return (
    <Link href={`/character/${id}`} passHref>
      <a className={styles.aContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.imgContainer}>
            <Image
              width={177}
              height={177}
              layout="responsive"
              priority={id < 4}
              src={image}
              alt={`Imagen de: ${name}`}
              className={styles.imgCharacter}
            />
          </div>
          <div className={styles.titleContainer}>
            <h2>{name}</h2>
            <p className={styles.titleContainerP}>{signo}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CharacterCard;
