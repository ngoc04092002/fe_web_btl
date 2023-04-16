/* eslint-disable max-lines */
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import React, { useCallback, useEffect, useState } from 'react';

import EnhancedTableHead from './EnhancedTableHead/EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar/EnhancedTableToolbar';
import styles from './table.module.scss';

import Loading from '@/components/Loading';
import { deleteIds } from '@/infrastructure/dashboardActions';
import { getToast } from '@/utils/CustomToast';

const cx = classNames.bind(styles);

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(
	order,
	orderBy,
	// eslint-disable-next-line no-unused-vars
) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'id';
const DEFAULT_ROWS_PER_PAGE = 5;

const TableDash = ({ rows, headCells, title, pathDelete, pathGet }) => {
	const queryClient = useQueryClient();
	const [order, setOrder] = useState(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = useState(DEFAULT_ORDER_BY);
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [visibleRows, setVisibleRows] = useState([]);
	const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
	const [paddingHeight, setPaddingHeight] = useState(0);

	useEffect(() => {
		let rowsOnMount = stableSort(rows, getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY));
		rowsOnMount = rowsOnMount.slice(
			0 * DEFAULT_ROWS_PER_PAGE,
			0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
		);

		setVisibleRows(rowsOnMount);
	}, [rows]);

	const handleRequestSort = useCallback(
		(event, newOrderBy) => {
			const isAsc = orderBy === newOrderBy && order === 'asc';
			const toggledOrder = isAsc ? 'desc' : 'asc';
			setOrder(toggledOrder);
			setOrderBy(newOrderBy);

			const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
			const updatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

			setVisibleRows(updatedRows);
		},
		[order, orderBy, page, rows, rowsPerPage],
	);

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.id) || [];
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, id) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};

	const handleChangePage = useCallback(
		(event, newPage) => {
			setPage(newPage);

			const sortedRows = stableSort(rows, getComparator(order, orderBy));
			const updatedRows = sortedRows.slice(
				newPage * rowsPerPage,
				newPage * rowsPerPage + rowsPerPage,
			);
			setVisibleRows(updatedRows);

			// Avoid a layout jump when reaching the last page with empty rows.
			const numEmptyRows = newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

			const newPaddingHeight = 53 * numEmptyRows;
			setPaddingHeight(newPaddingHeight);
		},
		[order, orderBy, rows, rowsPerPage],
	);

	const handleChangeRowsPerPage = useCallback(
		(event) => {
			const updatedRowsPerPage = parseInt(event.target.value, 10);
			setRowsPerPage(updatedRowsPerPage);

			setPage(0);

			const sortedRows = stableSort(rows, getComparator(order, orderBy));
			const updatedRows = sortedRows.slice(
				0 * updatedRowsPerPage,
				0 * updatedRowsPerPage + updatedRowsPerPage,
			);
			setVisibleRows(updatedRows);

			// There is no layout jump to handle on the first page.
			setPaddingHeight(0);
		},
		[order, orderBy, rows],
	);
	const { mutate, isLoading } = useMutation({
		mutationFn: (Data) => {
			const res = deleteIds(pathDelete, Data);
			return res;
		},
	});
	const handleDeleteData = useCallback(() => {
		mutate(selected, {
			onError: (res) => {
				getToast('', 'network bad');
			},
			onSuccess: (res) => {
				if (res.data) {
					getToast('Xóa thành công!', 'success');
					queryClient.invalidateQueries({ queryKey: [pathGet] });
					setSelected([]);
				} else {
					getToast('Đã có lỗi!', 'error');
				}
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected, pathDelete]);

	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<Box
			sx={{ width: '100%' }}
			className={cx('table_dash-container')}
		>
			<Paper sx={{ width: '100%', mb: 2 }}>
				{isLoading ? (
					<Loading />
				) : (
					<EnhancedTableToolbar
						numSelected={selected.length}
						title={title}
						handleDeleteData={handleDeleteData}
					/>
				)}
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby='tableTitle'
						size={'medium'}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
							headCells={headCells}
						/>
						<TableBody>
							{visibleRows
								? visibleRows.map((row, index) => {
										const isItemSelected = isSelected(row.id);
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												onClick={(event) => handleClick(event, row.id)}
												role='checkbox'
												aria-checked={isItemSelected}
												tabIndex={-1}
												key={row.id}
												selected={isItemSelected}
												sx={{ cursor: 'pointer' }}
											>
												<TableCell padding='checkbox'>
													<Checkbox
														color='primary'
														checked={isItemSelected}
														inputProps={{
															'aria-labelledby': labelId,
														}}
													/>
												</TableCell>
												<TableCell
													component='th'
													id={labelId}
													scope='row'
													padding='none'
												>
													{row.id}
												</TableCell>
												{row?.feedback && <TableCell align='right'>{row?.feedback}</TableCell>}
												{row?.type && <TableCell align='right'>{row?.type}</TableCell>}
												{row?.email && <TableCell align='right'>{row?.email}</TableCell>}
											</TableRow>
										);
								  })
								: null}
							{paddingHeight > 0 && (
								<TableRow
									style={{
										height: paddingHeight,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component='div'
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
};

export default TableDash;
