import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Cart, Product } from '@/app/Contract'


// Define a type for the slice state

// Define the initial state using that type
const initialState : Cart = {
  list : []
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateCart : (state , actions) => {
        state.list.map(product => {
          if(product.product.name == actions.payload.name) {
            console.log('yes')
            return product.count++;
          }
          else{
            console.log('no')
            return state.list.push(actions.payload)
          }
        })
        // console.log(state.list.length)
    }
  }
})

export const { updateCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer