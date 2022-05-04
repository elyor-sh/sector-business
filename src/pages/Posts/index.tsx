import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchPostsService} from "../../services/post.service";
import {PostQueryModel} from "../../model/post.model";
import {Loading} from "../../components/Loading";
import {postSlice} from "../../store/reducers/post.reducer";

const Posts = () => {

    const {posts, count, page, loading} = useAppSelector(state => state.postReducer)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const handleCloseLoading = () => {
        dispatch(postSlice.actions.setLoading(false))
    }

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
            {
                loading
                    ?
                    <Loading
                        open={loading}
                        handleClose={handleCloseLoading}
                    />
                    :
                    <pre>{JSON.stringify(posts, null, 2)}</pre>
            }
        </>
    );
};

export {Posts};