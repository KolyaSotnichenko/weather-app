import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import citySlice from '../features/city/citySlice'
import { loadState } from './browser-storage'

export const store = configureStore({
  reducer: {
    city: citySlice
  },
  preloadedState: loadState()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
