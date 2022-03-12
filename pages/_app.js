import '../global.css';
import { ApolloProvider } from '@apollo/client';
import { clientApollo } from '../utils/clientApollo';
import { Head } from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={clientApollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
