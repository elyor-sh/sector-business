import React from 'react';
import {Outlet} from 'react-router-dom'
import {styled} from "@mui/material";

const Wrapper = styled('div')(() => ({
    maxWidth: '1077px',
    width: '100%',
    margin: '0 auto',
    padding: '23px 0px'
}))

const Layout = () => {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
};

export {Layout};