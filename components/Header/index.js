import Link from 'next/link';
import Head from 'next/head';
import InputSearch from '../inputSearch';
import styles from './styles.module.css';
const Header = ({ title }) => {
  return (
    <>
      <header>
        <Head>
          <title>
            {title ? `${title} - Rick and Morty` : 'Rick and Morty'}
          </title>
          <meta
            name="description"
            content="Pagina de prueba utilizando la api de rick and morty con un servicio de graphql y nextjs"
          />
        </Head>
        <div className={styles.headerConatainer}>
          <Link href="/" passHref>
            <a className={styles.title}>
              <h1>Rick and Morty</h1>
            </a>
          </Link>
          <InputSearch />
        </div>
      </header>
    </>
  );
};

export default Header;
