import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchPostsService} from "../../services/post.service";
import {PostQueryModel} from "../../model/post.model";
import {Loading} from "../../components/Loading";
import {postSlice} from "../../store/reducers/post.reducer";
import {TableCustom} from "../../components/Table";

const Posts = () => {

    const {posts, count, page, loading} = useAppSelector(state => state.postReducer)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const setPage = (p: number) => {
        dispatch(postSlice.actions.setPage(p))
    }

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



    if(loading){
        return (
            <Loading
                open={loading}
                handleClose={handleCloseLoading}
            />
        )
    }

    return (
        <>
            <TableCustom
                page={page}
                setPage={(p) => setPage(p)}
                rowsPerPage={10}
                count={count}
                data={posts}
                headCells={[
                    {label: 'ID', id: 'id', align: 'left'},
                    {label: 'Заголовок', id: 'title', align: 'left'},
                    {label: 'Описание', id: 'body', align: 'left'},
                ]}
                rowCells={[
                    {type: 'text', align: 'left', contentKey: 'id'},
                    {type: 'text', align: 'left', contentKey: 'title'},
                    {type: 'text', align: 'left', contentKey: 'body'},
                ]}
            />

        </>
    );
};

export {Posts};