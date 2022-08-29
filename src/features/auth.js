import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: false,
  },
  reducers: {
    log: (state) => {
    
      state.value =true
    },
    lout: (state) => {
      state.value =false
    },
    
  },
})


export const { log,lout } = counterSlice.actions

export default counterSlice.reducer