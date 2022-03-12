import '../global.css';
import { ApolloProvider } from '@apollo/client';
import { clientApollo } from '../utils/clientApollo';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={clientApollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
