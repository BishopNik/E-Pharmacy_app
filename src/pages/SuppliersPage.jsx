/** @format */

import React, { useState, useEffect } from 'react';
import { useGetSuppliers } from 'hooks';
import { format } from 'date-fns';
import { Loader } from 'components/Loader';
import Filter from 'components/Filter';
import { SupplierModal } from 'components/Modal';
import Pagination from 'components/Pagination';
import {
	Container,
	TableContainer,
	TableTitle,
	TableBody,
	TableTr,
	TableTh,
	TableTd,
	ContainerAction,
	SupplierButtonAdd,
	SupplierButtonEdit,
	IconEdit,
	Status,
} from 'components/styled.components/SuppliersPage.styled';

function DataPage() {
	const perPage = 5;
	const [countPage, setCountPage] = useState(0);
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [searchName, setSearchName] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [reverse, setReverse] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [editSupplier, setEditSupplier] = useState(null);

	const {
		data: { data, totalPage } = {},
		isLoading,
		refetch,
	} = useGetSuppliers({
		sortBy,
		reverse,
		searchName,
		page,
		perPage,
	});

	const handlerClose = () => {
		setIsOpen(false);
		setEditSupplier(null);
	};

	const formatDate = dateString => {
		const date = new Date(dateString);
		return format(date, 'MMMM dd, yyyy');
	};

	const handlerFilter = e => {
		e.preventDefault();
		setSearchName(e.target.searchName.value);
		setPage(1);
	};

	const clearFilter = () => {
		setSearchValue('');
		setSearchName('');
	};

	const handleChange = ({ target: { value } }) => {
		setSearchValue(value);
	};

	const handlePageChange = newPage => {
		setPage(newPage);
	};

	const handleEditSupplier = sup => {
		setIsOpen(true);
		setEditSupplier(sup);
	};

	const handleChangeSortingBy = value => {
		setSortBy(value);
		reverse ? setReverse(0) : setReverse(1);
		setPage(1);
	};

	useEffect(() => {
		refetch();
	}, [page, sortBy, reverse, searchName, refetch]);

	useEffect(() => {
		if (totalPage) setCountPage(totalPage);
	}, [data, totalPage]);

	return (
		<Container>
			<ContainerAction>
				<Filter
					name={'Product Name'}
					handlerFilter={handlerFilter}
					handleChange={handleChange}
					clearFilter={clearFilter}
					searchValue={searchValue}
				/>
				<>
					<SupplierButtonAdd type='button' onClick={() => setIsOpen(true)}>
						Add a new suppliers
					</SupplierButtonAdd>
					<SupplierModal
						isOpen={isOpen}
						onRequestClose={handlerClose}
						supplierEdit={editSupplier}
					/>
				</>
			</ContainerAction>
			<TableContainer>
				<TableTitle>All suppliers</TableTitle>
				<TableBody>
					<thead>
						<TableTr>
							<TableTh
								type={'name'}
								onClick={() => handleChangeSortingBy('name')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Supplier Info
							</TableTh>
							<TableTh
								type={'address'}
								onClick={() => handleChangeSortingBy('address')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Address
							</TableTh>
							<TableTh
								type={'company'}
								onClick={() => handleChangeSortingBy('company')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Company
							</TableTh>
							<TableTh
								type={'date'}
								onClick={() => handleChangeSortingBy('date')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Delivery date
							</TableTh>
							<TableTh
								type={'amount'}
								onClick={() => handleChangeSortingBy('amount')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Amount
							</TableTh>
							<TableTh
								type={'status'}
								onClick={() => handleChangeSortingBy('status')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Status
							</TableTh>
							<TableTh type={'action'}>Action</TableTh>
						</TableTr>
					</thead>
					<tbody>
						{data &&
							data.map(({ address, amount, company, date, name, status, _id }) => (
								<TableTr key={_id}>
									<TableTd>{name}</TableTd>
									<TableTd>{address}</TableTd>
									<TableTd>{company}</TableTd>
									<TableTd>{formatDate(date)}</TableTd>
									<TableTd>{amount.toFixed(2)}</TableTd>
									<TableTd>
										<Status type={status}>{status}</Status>
									</TableTd>
									<TableTd>
										<SupplierButtonEdit
											type='button'
											onClick={() =>
												handleEditSupplier({
													address,
													amount,
													company,
													date,
													name,
													status,
													_id,
												})
											}
										>
											<IconEdit name='edit' />
											<span>Edit</span>
										</SupplierButtonEdit>
									</TableTd>
								</TableTr>
							))}
					</tbody>
				</TableBody>
			</TableContainer>
			<Pagination totalPages={countPage} currentPage={page} onPageChange={handlePageChange} />
			{isLoading && <Loader />}
		</Container>
	);
}

export default DataPage;
