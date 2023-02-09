import { createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'

const initialState: UserSchema = {
    authData: {} as User
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
