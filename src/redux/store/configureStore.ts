import reducer from './reducer';
import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default function configureAppStore(): EnhancedStore {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false, // We need to disable this check because we dispatch non-serializble query objects
      }),
    ],
  });
}
