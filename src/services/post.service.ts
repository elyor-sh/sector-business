import {PostQueryModel} from "../model/post.model";
import {Dispatch} from "@reduxjs/toolkit";
import {apiGetPosts} from "../api";
import {postSlice} from "../store/reducers/post.reducer";

export const fetchPostsService = (params?: PostQueryModel) => async (dispatch: Dispatch) => {
    try {

        dispatch(postSlice.actions.setLoading(true))

        const response = await apiGetPosts(params)

        dispatch(postSlice.actions.postsFetch(response))

        dispatch(postSlice.actions.setLoading(false))

        return Promise.resolve(response)

    }catch (e){
        dispatch(postSlice.actions.setLoading(false))
        return Promise.reject(e)
    }
}