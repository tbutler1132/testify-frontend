import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { testifyApi } from './services/testify'

export default configureStore({
  reducer: {
    auth: authReducer,
    // userReducer,
    [testifyApi.reducerPath]: testifyApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(testifyApi.middleware)
  
})