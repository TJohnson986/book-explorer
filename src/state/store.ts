import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { favoriteBooksSlice } from './favoriteBooksSlice';
import { apiSlice } from '../services/getBooks';
import { listenerMiddleware } from './listenerMiddleware';

const createEnhancers = (getDefaultEnhancers: GetDefaultEnhancers<any>) => {
  if (__DEV__) {
    const reactotron = require('../../ReactotronConfig').default;
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  } else {
    return getDefaultEnhancers();
  }
};

export const store = configureStore({
  reducer: {
    favoriteBooks: favoriteBooksSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  enhancers: createEnhancers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
