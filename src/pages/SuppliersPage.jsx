/** @format */

import React, { useState, useEffect } from 'react';
import { useGetSuppliers } from 'hooks';
import { format } from 'date-fns';
import { toastError, handleChangeSortingBy } from 'helpers';
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
	NameContainer,
	AddressContainer,
	CompanyContainer,
	DateContainer,
	AmountContainer,
	StatusContainer,
	IconSort,
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
		setPage(1);
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

	useEffect(() => {
		refetch();
	}, [page, sortBy, reverse, searchName, refetch]);

	useEffect(() => {
		if (totalPage) setCountPage(totalPage);
	}, [data, totalPage]);

	useEffect(() => {
		if (data && data.length === 0 && !isLoading) toastError('Nothing found.');
	}, [data, isLoading]);

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
								onClick={() =>
									handleChangeSortingBy(
										'name',
										sortBy,
										setSortBy,
										reverse,
										setReverse,
										setPage
									)
								}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								<IconSort
									name='menu'
									$isRevers={reverse === 0}
									$sortBy={sortBy === 'name'}
								/>
								Supplier Info
							</TableTh>
							<TableTh
								type={'address'}
								onClick={() =>
									handleChangeSortingBy(
										'address',
										sortBy,
										setSortBy,
										reverse,
										setReverse,
										setPage
									)
								}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								<IconSort
									name='menu'
									$isRevers={reverse === 0}
									$sortBy={sortBy === 'address'}
								/>
								Address
							</TableTh>
							<TableTh
								type={'company'}
								onClick={() =>
									handleChangeSortingBy(
										'company',
										sortBy,
										setSortBy,
										reverse,
										setReverse,
										setPage
									)
								}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								<IconSort
									name='menu'
									$isRevers={reverse === 0}
									$sortBy={sortBy === 'company'}
								/>
								Company
							</TableTh>
							<TableTh
								type={'date'}
								onClick={() =>
									handleChangeSortingBy(
										'date',
										sortBy,
										setSortBy,
										reverse,
										setReverse,
										setPage
									)
								}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								<IconSort
									name='menu'
									$isRevers={reverse === 0}
									$sortBy={sortBy === 'date'}
								/>
								Delivery date
							</TableTh>
							<TableTh
								type={'amount'}
								onClick={() =>
									handleChangeSortingBy(
										'amount',
										sortBy,
										setSortBy,
										reverse,
										setReverse,
										setPage
									)
								}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								<IconSort
									name='menu'
									$isRevers={reverse === 0}
									$sortBy={sortBy === 'amount'}
								/>
								Amount
							</TableTh>
							<TableTh
								type={'status'}
								onClick={() =>
									handleChangeSortingBy(
										'status',
										sortBy,
										setSortBy,
										reverse,
										setReverse,
										setPage
									)
								}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								<IconSort
									name='menu'
									$isRevers={reverse === 0}
									$sortBy={sortBy === 'status'}
								/>
								Status
							</TableTh>
							<TableTh type={'action'}>Action</TableTh>
						</TableTr>
					</thead>
					<tbody>
						{data &&
							data?.map(({ address, amount, company, date, name, status, _id }) => (
								<TableTr key={_id}>
									<TableTd>
										<NameContainer>{name}</NameContainer>
									</TableTd>
									<TableTd>
										<AddressContainer>{address}</AddressContainer>
									</TableTd>
									<TableTd>
										<CompanyContainer>{company}</CompanyContainer>
									</TableTd>
									<TableTd>
										<DateContainer>{formatDate(date)}</DateContainer>
									</TableTd>
									<TableTd>
										<AmountContainer>{amount.toFixed(2)}</AmountContainer>
									</TableTd>
									<TableTd>
										<StatusContainer>
											<Status type={status}>{status}</Status>
										</StatusContainer>
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
