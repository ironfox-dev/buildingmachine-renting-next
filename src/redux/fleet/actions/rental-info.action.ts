import { storeInfo, removeInfo } from '../slices/rental-info.slice';
import queryAction from '../../store/actions/query.action';
import productRentalInfoQuery from '../queries/rental-info.query.graphql';

export const queryRentalInfoById = ({ id }) => (dispatch) => {
  if (id) {
    dispatch(
      queryAction({
        query: productRentalInfoQuery,
        id,
        onSuccess: storeInfo.type,
      })
    );
  } else {
    dispatch({ type: removeInfo.type });
  }
};
