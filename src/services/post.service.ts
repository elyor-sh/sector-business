import {PostQueryModel} from "../model/post.model";
import {Dispatch} from "@reduxjs/toolkit";
import {apiGetPosts} from "../api";
import {postSlice} from "../store/reducers/post.reducer";

export const fetchPostsService = (params?: PostQueryModel) => async (dispatch: Dispatch) => {
    try {

        const response = await apiGetPosts(params)

        dispatch(postSlice.actions.postsFetch(response))

        return Promise.resolve(response)

    }catch (e){
        return Promise.reject(e)
    }
}