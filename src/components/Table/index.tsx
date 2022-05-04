import React, {FC} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {IHeadCells, IOrder, IRowCells} from "./types";
import {TableHeader} from "./TableHeader";
import {getComparator, stableSort} from "./helpers";
import {drawCell} from "./drawCell";
import {TablePagination} from "./TablePagination";

interface TableCustomProps {
    page: number
    setPage: (page: number) => void
    rowsPerPage: number
    count: number
    data: any
    headCells: IHeadCells[]
    rowCells: IRowCells[]
}

const TableCustom: FC<TableCustomProps> = ({data, headCells, rowCells, page, setPage, rowsPerPage, count}) => {

    const [order, setOrder] = React.useState<IOrder>('asc');
    const [orderBy, setOrderBy] = React.useState<string | number>(headCells[0].label);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: string | number,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };


    return (
        <>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2, borderRadius: '0px'}}>
                    <TableContainer>
                        <Table>
                            <TableHeader
                                headCells={headCells}
                                onRequestSort={handleRequestSort}
                                order={order}
                                orderBy={orderBy}
                            />
                            <TableBody>
                                {stableSort(data, getComparator(order, orderBy))
                                    .map((row, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={row.id}
                                            >
                                                {
                                                    rowCells.map((cell) => (
                                                        <TableCell
                                                            key={cell.contentKey}
                                                            align={cell.align ? cell.align : 'left'}
                                                        >
                                                            {drawCell(row, cell)}
                                                        </TableCell>
                                                    ))
                                                }
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <TablePagination
                handleChangePage = {handleChangePage}
                page={page}
                count={count}
                rowsPerPage={rowsPerPage}
            />
        </>
    );
};

export {TableCustom};