import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './features/books-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
export const store = () => {
  return configureStore({
    reducer: {
        bookReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;