import { createAction } from '@reduxjs/toolkit';

interface ApiResponseSuccess {
  data;
}

interface ApiResponseFailure {
  error: Error;
}

// export const apiQuery = createAction<ApiRequest>('api/query');
// export const apiMutation = createAction<ApiMutation>('api/mutation');
export const apiResponseSuccess = createAction<ApiResponseSuccess>('api/responseSuccess');
export const apiResponseFailure = createAction<ApiResponseFailure>('api/responseFailed');
