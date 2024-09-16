import {configureStore} from "@reduxjs/toolkit"
import { firstReducer } from "./reducer.js"


const store = configureStore({
    reducer:{
        first: firstReducer,
    }
})


export default store