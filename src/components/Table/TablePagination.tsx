import React, {FC} from 'react';
import {Pagination, styled} from "@mui/material";

const Wrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: '16px'
}))

const ButtonStyled = styled('button')(() => ({
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '24px',
    fontWeight: 500,
    color: '#474955',
    cursor: 'pointer',
    lineHeight: '137.69%',
    '&:disabled': {
        cursor: 'normal',
        opacity: 0.5
}
}))

const StyledPagination = styled(Pagination)(() => ({
    '& button': {
        fontWeight: 700,
        fontSize: '18px',
        color: '#474955'
    },
    '& button.Mui-selected': {
        color: '#7EBC3C',
        background: 'transparent'
    }
}))

interface TablePaginationProps {
    handleChangePage: (event: unknown, newPage: number) => void
    page: number
    count: number
    rowsPerPage: number
}

const TablePagination:FC<TablePaginationProps> = ({handleChangePage, page, count, rowsPerPage}) => {

    const handlePrev = (e: unknown) => {
        if(page - 1 >= 1){
            handleChangePage(e, page - 1)
        }
    }

    const handleNext = (e: unknown) => {
        if(page * rowsPerPage < count){
            handleChangePage(e, page + 1)
        }
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        handleChangePage(event, value)
    };

    return (
        <Wrapper>
            <ButtonStyled onClick={handlePrev} disabled={page - 1 === 0}>
                Назад
            </ButtonStyled>
            <StyledPagination
                count={Math.floor(count / rowsPerPage)}
                page={page}
                onChange={handleChange}
            />
            <ButtonStyled onClick={handleNext} disabled={page * rowsPerPage >= count}>
                Далее
            </ButtonStyled>
        </Wrapper>
    );
};

export { TablePagination};