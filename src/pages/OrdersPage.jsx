/** @format */

import React, { useEffect, useState } from 'react';
import { useGetOrders } from 'hooks';
import { format } from 'date-fns';
import { toastError } from 'helpers';
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
	UserInfo,
	UserName,
	UserLogo,
	UserAddress,
	UserDate,
	Status,
} from 'components/styled.components/OrdersPage.styled';

function OrdersPage() {
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
	} = useGetOrders({
		sortBy,
		reverse,
		searchName,
		page,
		perPage,
	});

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

	useEffect(() => {
		if (data && data.length === 0 && !isLoading) toastError('Nothing found.');
	}, [data, isLoading]);

	return (
		<Container>
			<Filter
				name={'User Name'}
				handlerFilter={handlerFilter}
				handleChange={handleChange}
				clearFilter={clearFilter}
				searchValue={searchValue}
			/>
			<TableContainer>
				<TableTitle>All orders</TableTitle>
				<TableBody>
					<thead>
						<TableTr>
							<TableTh
								type={'name'}
								onClick={() => handleChangeSortingBy('name')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								User Info
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
								type={'products'}
								onClick={() => handleChangeSortingBy('products')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Products
							</TableTh>
							<TableTh
								type={'order_date'}
								onClick={() => handleChangeSortingBy('order_date')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Order date
							</TableTh>
							<TableTh
								type={'price'}
								onClick={() => handleChangeSortingBy('price')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Price
							</TableTh>
							<TableTh
								type={'status'}
								onClick={() => handleChangeSortingBy('status')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Status
							</TableTh>
						</TableTr>
					</thead>
					<tbody>
						{data &&
							data?.map(
								({
									photo,
									name,
									address,
									products,
									order_date,
									price,
									status,
									_id,
								}) => (
									<TableTr key={_id}>
										<TableTd>
											<UserInfo>
												<UserLogo src={photo} alt='User logo' />
												<UserName>{name}</UserName>
											</UserInfo>
										</TableTd>
										<TableTd>
											<UserAddress>{address}</UserAddress>
										</TableTd>
										<TableTd>{products}</TableTd>
										<TableTd>
											<UserDate>{formatDate(order_date)}</UserDate>
										</TableTd>
										<TableTd>
											{price.toLocaleString('en-US', {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</TableTd>
										<TableTd>
											<Status type={status}>{status}</Status>
										</TableTd>
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

export default OrdersPage;
