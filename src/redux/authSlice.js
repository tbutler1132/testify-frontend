import { createSlice } from '@reduxjs/toolkit'
import { testifyApi } from './services/testify'


export const authSlice = createSlice({
    name: 'user',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials(state, action){
          state.user = action.payload.result 
          state.token = action.payload.token
        },
    },
    extraReducers: (builder) => {
      builder
        .addMatcher(
          testifyApi.endpoints.uploadMedia.matchFulfilled,
          (state, { payload }) => {
            console.log(payload)
            state.user = payload
          }
        )
        .addMatcher(
          testifyApi.endpoints.createTest.matchFulfilled,
          (state, { payload }) => {
            state.user.tests.push(payload)
          }
        )
        .addMatcher(
          testifyApi.endpoints.deleteTest.matchFulfilled,
          (state, { payload }) => {
            state.user.tests = payload
          }
        )
    },
  })

  export const { setCredentials } = authSlice.actions

  export default authSlice.reducer