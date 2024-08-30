import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Cart, Product } from '@/app/Contract'
import { count } from 'console'


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
    updateList : (state , actions) => {
      state.list.push({ product : actions.payload , count : 0 })
    },
    addToCart : (state , actions) => {
      // if(state.list.length != 0){
        state.list.map(product => {
          if(product.product?.name == actions.payload.name) {
            console.log('yes')
            product.count++;
            console.log(product.count)
          }
      })
    }
  }
})

export const { addToCart ,updateList } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type

export const selectList = (state: RootState) => state.cart.list

export default cartSlice.reducer