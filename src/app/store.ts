import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {recipeApi} from '../services/recipeApi'
import {setupListeners} from '@reduxjs/toolkit/dist/query'
export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath] : recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(recipeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)