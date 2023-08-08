import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todos/todosSlice'
// the current Redux application state lives in an object called the store
export default configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer
    },
})