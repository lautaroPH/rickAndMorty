import Head from 'next/head';
import styles from './styles.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Rick and Morty</h1>
      </div>
    </>
  );
};

export default Header;
