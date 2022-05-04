import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {AxiosResponse} from "axios";
import {PostModel} from "../../model/post.model";

interface IState {
    posts: PostModel[]
    postWithoutFilter: PostModel[]
    count: number
    page: number
    loading: boolean
}


const initialState: IState = {
    posts: [],
    postWithoutFilter: [],
    count: 0,
    page: 1,
    loading: false
}


export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        postsFetch: (state, action: PayloadAction<AxiosResponse>) => {
           state.posts = action.payload.data
           state.postWithoutFilter = action.payload.data
           state.count = +action.payload.headers['x-total-count']
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setFilterPosts: (state, action: PayloadAction<PostModel[]>) => {
            state.posts = action.payload
        }
    }
})


export default postSlice.reducer