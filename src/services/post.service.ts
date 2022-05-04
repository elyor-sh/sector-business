import {PostQueryModel} from "../model/post.model";
import {Dispatch} from "@reduxjs/toolkit";
import {apiGetPosts} from "../api";
import {postSlice} from "../store/reducers/post.reducer";

export const fetchPosts = (params?: PostQueryModel) => async (dispatch: Dispatch) => {
    try {

        const response = await apiGetPosts(params)

        dispatch(postSlice.actions.postsFetch(response))

    }catch (e){
        return Promise.reject(e)
    }
}