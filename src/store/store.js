import { configureStore } from '@reduxjs/toolkit'
import productReducer from './cartSlice.js'

export const store = configureStore({
  reducer: {
   products: productReducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Isse check band ho jayega
    }),
})

