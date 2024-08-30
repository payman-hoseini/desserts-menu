import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'


// Define a type for the slice state
export interface CounterState {
  
}

// Define the initial state using that type
const initialState: CounterState = {
  
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  }
})

export const {  } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer