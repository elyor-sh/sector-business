import React, {useState} from 'react';
import {styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {postSlice} from "../../store/reducers/post.reducer";

const Wrapper = styled('div')(() => ({
    maxWidth: '631px',
    width: '100%',
    background: '#5A5C66',
    height: '52px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}))

const Input = styled('input')(() => ({
    background: 'transparent',
    width: '90%',
    height: '100%',
    outline: 'none',
    border: 'none',
    color: '#B3B7BF',
    padding: '0 26px',
    fontSize: '14px',
    '&::placeholder': {
        color: '#B3B7BF',
    }
}))

const Button = styled('button')(() => ({
    width: '10%',
    height: '100%',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center'
}))

const Form = () => {

    const {posts, postWithoutFilter} = useAppSelector(state => state.postReducer)

    const dispatch = useAppDispatch()

    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

        if(!e.target.value.trim()){
            dispatch(postSlice.actions.setFilterPosts(postWithoutFilter))
        }
    }

    const handleSearch = () => {
        const filteredPosts = posts.filter(post => post.body.includes(value) || post.title.includes(value))
        dispatch(postSlice.actions.setFilterPosts(filteredPosts))
    }

    return (
        <Wrapper>
            <Input
                placeholder="Поиск"
                value={value}
                onChange={handleChange}
            />
            <Button onClick={handleSearch}>
                <SearchIcon sx={{color: '#fff'}}/>
            </Button>
        </Wrapper>
    );
};

export  {Form};