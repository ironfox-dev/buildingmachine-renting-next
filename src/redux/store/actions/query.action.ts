import { apiResponseFailure } from '../api';
import apolloClient from '~/utils/apollo-client';
import { QueryOptions } from '@apollo/client';

const queryAction = ({ query, onSuccess, id = null, onStart = null, onError = null, variables = null }) => async (
  dispatch
) => {
  if (onStart) {
    dispatch({ type: onStart });
  }

  function handleError(error) {
    console.log(error); // Keep this until we have a proper error handler
    dispatch(apiResponseFailure(error));

    if (onError) {
      dispatch({ type: onError, payload: error });
    }
  }

  try {
    // TODO (later on) how to do lazy loading, fetchPagination (queryResult.data.fetchMore)

    if (id) {
      if (variables) {
        variables.id = id;
      } else {
        variables = { id };
      }
    }

    const options = <QueryOptions>{
      query,
      variables,
    };

    const { data, error } = await apolloClient().query(options);

    if (error) {
      handleError(error);
      return;
    }

    if (onSuccess) {
      dispatch({ type: onSuccess, payload: data });
    }
  } catch (error) {
    handleError(error);
  }
};

export default queryAction;
