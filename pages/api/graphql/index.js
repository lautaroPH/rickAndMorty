import Cors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDef';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const cors = Cors();

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
