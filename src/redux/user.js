import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const signinUser = createAsyncThunk(
    'users/signin',
    async (userObj) => {
      const res = await axios.post('http://localhost:7000/users/signin', userObj)
      return res.data
    }
)


export const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: {}, },
  reducers: {
      setUser(state, action){
        state.currentUser = action.payload
      },
  },
  extraReducers: {
    [signinUser.pending]: (state) => {
        state.status = "loading"
    },
    [signinUser.fulfilled]: (state, { payload }) => {
    state.currentUser = payload.result
    state.status = "success"
    },
    [signinUser.rejected]: (state) => {
    state.status = "failed"
    },
  }
  
})

export const { setUser } = userSlice.actions

export default userSlice.reducer