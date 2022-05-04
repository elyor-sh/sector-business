import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/post.reducer";


const rootReducer = combineReducers({
    postReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']