import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const CharacterCard = ({ id, name, episode, image, species }) => {
  return (
    <Link href={`/character/${id}`} passHref>
      <a className={styles.aContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.imgContainer}>
            <Image
              width={300}
              height={200}
              layout="responsive"
              priority={id < 4}
              src={image}
              alt={`Imagen de: ${name}`}
              className={styles.imgCharacter}
            />
          </div>
          <h2>
            {name} - {species}
          </h2>
          <h4>Episodes that appeared: {episode.length}</h4>
        </div>
      </a>
    </Link>
  );
};

export default CharacterCard;
