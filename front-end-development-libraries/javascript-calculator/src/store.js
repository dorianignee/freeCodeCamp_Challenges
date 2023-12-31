import { configureStore } from '@reduxjs/toolkit'
import calcReducer from './calculatorSlice.ts'

export default configureStore({
  reducer: {
    calc: calcReducer
  },
})