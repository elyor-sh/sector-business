import { createSlice } from "@reduxjs/toolkit"
import {PostModel} from "../../model/post.model";

interface IState {
    posts: PostModel[]
    count: number
    page: number
}


const initialState: IState = {
    posts: [],
    count: 0,
    page: 0
}


export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        postsFetch: (state, action) => {
           state.posts = action.payload.data
           state.count = action.payload.headers['x-total-count']
        },
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})


export default postSlice.reducer