import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchPostsService} from "../../services/post.service";
import {PostQueryModel} from "../../model/post.model";

const Posts = () => {

    const {posts, count, page} = useAppSelector(state => state.postReducer)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    useEffect(() => {

        const params: PostQueryModel = {
            _page: page,
            _limit: 10
        };

        (async () => {
            await dispatch(fetchPostsService(params))
        })();

        navigate(`?page=${page}`)
    }, [page])

    return (
        <>
            {JSON.stringify(posts, null, 2)}
        </>
    );
};

export { Posts };