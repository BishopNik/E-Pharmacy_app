/** @format */

import React, { useState, useEffect } from 'react';
import { useGetCustomers } from 'hooks';
import { format } from 'date-fns';
import { toastError, handleChangeSortingBy } from 'helpers';
import { Loader } from 'components/Loader';
import Filter from 'components/Filter';
import Pagination from 'components/Pagination';
import {
	Container,
	TableContainer,
	TableTitle,
	TableBody,
	TableTr,
	TableTh,
	TableTd,
	EmailContainer,
	UserInfo,
	UserName,
	UserLogo,
	AddressContainer,
	PhoneContainer,
	IconSort,
} from 'components/styled.components/CustomersPage.styled';

function DataPage() {
	const perPage = 5;
	const [countPage, setCountPage] = useState(0);
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [searchName, setSearchName] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [reverse, setReverse] = useState(0);

	const {
		data: { data, totalPage } = {},
		isLoading,
		refetch,
	} = useGetCustomers({
		sortBy,
		reverse,
		searchName,
		page,
		perPage,
	});

	const formatDate = dateString => {
		const date = new Date(dateString);
		return format(date, 'MMM dd, yyyy');
	};

	const handlerFilter = e => {
		e.preventDefault();
		if (!e.target.searchName.value.trim()) return;
		setSearchName(e.target.searchName.value.trim());
		setPage(1);
	};

	const clearFilter = () => {
		if (searchName) setPage(1);
		setSearchValue('');
		setSearchName('');
	};

	const handleChange = ({ target: { value } }) => {
		setSearchValue(value.trim());
	};

	const handlePageChange = newPage => {
		setPage(newPage);
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
			<Filter
				name={'Product Name'}
				handlerFilter={handlerFilter}
				handleChange={handleChange}
				clearFilter={clearFilter}
				searchValue={searchValue}
			/>
			<TableContainer>
				<TableTitle>All customers</TableTitle>
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
								User Info
							</TableTh>
							<TableTh
								type={'email'}
								onClick={() =>
									handleChangeSortingBy(
										'email',
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
									$sortBy={sortBy === 'email'}
								/>
								Email
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
								type={'phone'}
								onClick={() =>
									handleChangeSortingBy(
										'phone',
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
									$sortBy={sortBy === 'phone'}
								/>
								Phone
							</TableTh>
							<TableTh
								type={'register_date'}
								onClick={() =>
									handleChangeSortingBy(
										'register_date',
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
									$sortBy={sortBy === 'register_date'}
								/>
								Register date
							</TableTh>
						</TableTr>
					</thead>
					<tbody>
						{data &&
							data?.map(
								({ name, image, address, email, phone, register_date, _id }) => (
									<TableTr key={_id}>
										<TableTd>
											<UserInfo>
												<UserLogo src={image} alt='User logo' />
												<UserName>{name}</UserName>
											</UserInfo>
										</TableTd>
										<TableTd>
											<EmailContainer>{email}</EmailContainer>
										</TableTd>
										<TableTd>
											<AddressContainer>{address}</AddressContainer>
										</TableTd>
										<TableTd>
											<PhoneContainer>{phone}</PhoneContainer>
										</TableTd>
										<TableTd>{formatDate(register_date)}</TableTd>
									</TableTr>
								)
							)}
					</tbody>
				</TableBody>
			</TableContainer>
			<Pagination totalPages={countPage} currentPage={page} onPageChange={handlePageChange} />
			{isLoading && <Loader />}
		</Container>
	);
}

export default DataPage;
