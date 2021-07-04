import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { Logout } from '~/components/auth/login/login';
import { getCookie } from '~/utils/cookie';

let clientSingleton;

/**
 *
 * @link https://www.apollographql.com/docs/react/api/core/ApolloClient/
 */
export default function apolloClient(): ApolloClient<NormalizedCacheObject> {
  if (!clientSingleton) {
    const httpLink = createHttpLink({
      uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}graphql`,
    });

    const authLink = setContext((_, { headers }) => {
      const token = getCookie('flexcavoToken');
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    const networkErrorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          if (err?.extensions?.exception.status === 401) {
            Logout();
          }
        }
      }
      if (networkError) console.log(networkError);
    });

    clientSingleton = new ApolloClient({
      link: ApolloLink.from([networkErrorLink, authLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }

  return clientSingleton;
}
