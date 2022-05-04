import React, {FC} from 'react';
import {Box, styled, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import {visuallyHidden} from "@mui/utils";
import {IHeadCells, IOrder} from "./types";

interface TableHeaderProps {
    headCells: IHeadCells[]
    onRequestSort: (event: React.MouseEvent<unknown>, property: string | number) => void;
    order: IOrder;
    orderBy: string | number;
}

const StyledTableRow = styled(TableRow)(() => ({
    background: '#474955'
}))

const StyledTableCell = styled(TableCell)(() => ({
    color: '#fff',
    '&:hover, &:hover span,  & span.Mui-active, &:hover svg, & span.Mui-active svg.MuiTableSortLabel-icon': {
        color: '#fff',
    }
}))

const TableHeader:FC<TableHeaderProps> = (props) => {
    const { order, orderBy, onRequestSort, headCells } =
        props;


    const createSortHandler =  (property: string | number) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <StyledTableRow>
                {headCells.map((headCell) => {
                    return (
                        <StyledTableCell
                            key={headCell.label}
                            align={headCell.align ? headCell.align : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.label ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </StyledTableCell>
                    )
                })}
            </StyledTableRow>
        </TableHead>
    );
};

export  {TableHeader};