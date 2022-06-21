import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opv5550ujl01xl4efpeao3/master',
  cache: new InMemoryCache(),
});
