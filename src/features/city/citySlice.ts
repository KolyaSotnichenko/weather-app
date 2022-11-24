import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICity {
  [x: string]: string
  title: string
}

interface IState {
  [index: string]: string
}

const initialState = new Array<IState>()

export const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<ICity>) => {
      const city = {
        id: new Date().getTime().toString(),
        title: action.payload.title
      }

      state.push(city)
    },
    removeCity: (state, action: PayloadAction<ICity>) => {
      return state.filter((item) => item.id !== action.payload.id)
    }
  }
})

// this is for dispatch
export const { addCity, removeCity } = citySlice.actions

// this is for configureStore
export default citySlice.reducer
