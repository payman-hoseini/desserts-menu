import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Cart } from '@/app/Contract'
import { list } from 'postcss'


// Define a type for the slice state

// Define the initial state using that type
const initialState : Cart = {
  list : [],
  total : 0,
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
        state.list.map(product => {
          if(product.product?.name == actions.payload.name) {
            product.count++;
            state.total++;
            // console.log(product.count)
          }
      })
    },
    removeFromCart : (state , actions) => {
      state.list.map(product => {
        if(product.product?.name == actions.payload.name) {
          product.count--;
          state.total--;
        }
    })
    },
    cancelProduct : (state , actions) =>{
      state.list.map(product => {
        if ( product.product.name == actions.payload.product.name){
          state.total-=product.count;
          product.count = 0;
        }
      })
      console.log(actions.payload)
    },
    emptyCart : (state) => {
      state.list.map(product => {
        product.count = 0
      })
      state.total = 0;
    }
  }
})

export const { addToCart ,updateList , removeFromCart ,cancelProduct , emptyCart  } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type

export const selectList = (state: RootState) => state.cart.list
export const selectTotal = (state: RootState) => state.cart.total


export default cartSlice.reducer