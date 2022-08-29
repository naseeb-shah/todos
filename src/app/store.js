import { configureStore } from '@reduxjs/toolkit'
import Auth from '../features/auth'

export default configureStore({
  reducer: {
    Auth:Auth ,
  },
})