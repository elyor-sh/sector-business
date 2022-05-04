import React, {FC} from 'react';
import {Backdrop, CircularProgress} from "@mui/material";

interface LoadingProps {
    open: boolean
    handleClose: () => void
}

const Loading:FC<LoadingProps> = ({open, handleClose}) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export {Loading};