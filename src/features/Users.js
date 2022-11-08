import { createSlice } from "@reduxjs/toolkit"
import { UsersData } from "../FakeData"

export const userSlice = createSlice({
    name: "users",
    initialState: {value: UsersData},
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter(user => user.id !== action.payload.id)
        },

        updateUser: (state, action) => {
            console.log(action.payload.newUsername)
            state.value = state.value.map(user => {
                if (user.id === action.payload.id) {
                    return {...user, username: action.payload.newUsername}
                }
                return user
            })
        }
    }
})

export const { addUser, deleteUser, updateUser } = userSlice.actions
export default userSlice.reducer

//redux
//action
//reducer
//dispatch