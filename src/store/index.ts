import {configureStore, createSlice}from '@reduxjs/toolkit';
import { useSelector,TypedUseSelectorHook } from 'react-redux';

const todosSlice = createSlice({
    name: 'todo',
    initialState: ['faser café', 'Estudar Redux','estudar engles'],
    reducers:{
        add:(state, action) =>{
            state.push(action.payload.newTodo)
        },
    },
})

export const store = configureStore({
    reducer:{
        todo: todosSlice.reducer,
    }
})

export const {add} = todosSlice.actions

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector 