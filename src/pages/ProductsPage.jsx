/** @format */

import React, { useState, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { deleteProductById, toastError } from 'helpers';
import { useGetProducts } from 'hooks';
import { Loader, MiniLoader } from 'components/Loader';
import Filter from 'components/Filter';
import { ProductModal } from 'components/Modal';
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
	ContainerAddButton,
	ButtonAdd,
	RoundAdd,
	TextAdd,
	IconAdd,
	ButtonContainer,
	ButtonAction,
	IconAction,
} from 'components/styled.components/ProductsPage.styled';

function DataPage() {
	const perPage = 5;
	const [isDeleting, setIsDeleting] = useState(false);
	const [countPage, setCountPage] = useState(0);
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [searchName, setSearchName] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [reverse, setReverse] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [editProduct, setEditProduct] = useState(null);

	const {
		data: { data, totalPage } = {},
		isLoading,
		refetch,
	} = useGetProducts({
		sortBy,
		reverse,
		searchName,
		page,
		perPage,
	});

	const queryClient = useQueryClient();

	const mutation = useMutation(id => deleteProductById(id), {
		onSuccess: () => {
			queryClient.invalidateQueries('products');
			setIsDeleting(false);
		},
		onMutate: () => {
			setIsDeleting(true);
		},
	});

	const handlerClose = () => {
		setEditProduct(null);
		setIsOpen(false);
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

	const handlerAction = async (name, product) => {
		switch (name) {
			case 'edit':
				setEditProduct(product);
				setIsOpen(true);
				break;
			case 'delete':
				await mutation.mutateAsync(product._id);
				break;

			default:
				break;
		}
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
				<ContainerAddButton>
					<ButtonAdd type='button' onClick={() => setIsOpen(true)}>
						<RoundAdd>
							<IconAdd name='add' />
						</RoundAdd>
						<TextAdd>Add a new product</TextAdd>
					</ButtonAdd>
					<ProductModal
						isOpen={isOpen}
						onRequestClose={handlerClose}
						productEdit={editProduct}
					/>
				</ContainerAddButton>
			</ContainerAction>
			<TableContainer>
				<TableTitle>All products</TableTitle>
				<TableBody>
					<thead>
						<TableTr>
							<TableTh
								type={'name'}
								onClick={() => handleChangeSortingBy('name')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Product Info
							</TableTh>
							<TableTh
								type={'category'}
								onClick={() => handleChangeSortingBy('category')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Category
							</TableTh>
							<TableTh
								type={'stock'}
								onClick={() => handleChangeSortingBy('stock')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Stock
							</TableTh>
							<TableTh
								type={'suppliers'}
								onClick={() => handleChangeSortingBy('suppliers')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Suppliers
							</TableTh>
							<TableTh
								type={'price'}
								onClick={() => handleChangeSortingBy('price')}
								$reverse={reverse}
								$sortBy={sortBy}
							>
								Price
							</TableTh>
							<TableTh type={'action'}>Action</TableTh>
						</TableTr>
					</thead>
					<tbody>
						{data &&
							data?.map(({ name, category, stock, suppliers, price, _id }) => (
								<TableTr key={_id}>
									<TableTd>{name}</TableTd>
									<TableTd>{category}</TableTd>
									<TableTd>{stock}</TableTd>
									<TableTd>{suppliers}</TableTd>
									<TableTd>{price.toFixed(2)}</TableTd>
									<TableTd>
										<ButtonContainer>
											<ButtonAction
												type='button'
												name='edit'
												onClick={() =>
													handlerAction('edit', {
														name,
														category,
														stock,
														suppliers,
														price,
														_id,
													})
												}
											>
												<IconAction name='edit' />
											</ButtonAction>
											<ButtonAction
												type='button'
												name='delete'
												onClick={() => handlerAction('delete', { _id })}
											>
												<IconAction name='delete' />
											</ButtonAction>
										</ButtonContainer>
									</TableTd>
								</TableTr>
							))}
					</tbody>
				</TableBody>
			</TableContainer>
			<Pagination totalPages={countPage} currentPage={page} onPageChange={handlePageChange} />
			{isLoading && <Loader />}
			{isDeleting && <MiniLoader />}
		</Container>
	);
}

export default DataPage;
