import { apiResponseFailure } from '../api';
import apolloClient from '~/utils/apollo-client';
import { MutationOptions } from '@apollo/client';

const mutateAction = ({ mutation, onSuccess, id = null, onStart = null, onError = null, variables = null }) => async (
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
    if (id) {
      if (variables) {
        variables.id = id;
      } else {
        variables = { id };
      }
    }

    const options = <MutationOptions>{
      mutation,
      variables,
    };

    const { data, errors } = await apolloClient().mutate(options);

    if (errors) {
      handleError(errors);
      return;
    }

    if (onSuccess) {
      dispatch({ type: onSuccess, payload: data });
    }
  } catch (error) {
    handleError(error);
  }
};

export default mutateAction;
