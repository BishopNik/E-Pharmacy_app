/** @format */

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
	ContainerAction,
	ContainerFilter,
	ContainerAddButton,
	InputFilter,
	ButtonFilter,
	IconFilter,
	ButtonAdd,
	RoundAdd,
	TextAdd,
	IconAdd,
	SupplierButtonAdd,
} from 'components/styled.components/DataPage.styled';
import { ProductModal, SupplierModal } from 'components/Modal';

function DataPage() {
	const location = useLocation();
	const page = location.pathname;
	const [valueFilter, setValueFilter] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const dataCustomers = [{ name: 'Izya', email: 'test@test.ua', spent: 4567 }];

	const buttonAdd = () => {
		switch (page) {
			case '/products':
				return (
					<ContainerAddButton>
						<ButtonAdd type='button' onClick={() => setIsOpen(true)}>
							<RoundAdd>
								<IconAdd name='add' />
							</RoundAdd>
							<TextAdd>Add a new product</TextAdd>
						</ButtonAdd>
						<ProductModal isOpen={isOpen} onRequestClose={handlerClose} />
					</ContainerAddButton>
				);

			case '/suppliers':
				return (
					<>
						<SupplierButtonAdd type='button' onClick={() => setIsOpen(true)}>
							Add a new suppliers
						</SupplierButtonAdd>
						<SupplierModal isOpen={isOpen} onRequestClose={handlerClose} />
					</>
				);

			default:
				return null;
		}
	};

	const handlerFilter = () => {
		setValueFilter('');
	};

	const handlerClose = () => {
		setIsOpen(false);
	};

	return (
		<Container>
			<ContainerAction>
				<ContainerFilter>
					<InputFilter
						type='text'
						placeholder='User Name'
						value={valueFilter}
						onChange={({ target: { value } }) => setValueFilter(value)}
					/>
					<ButtonFilter type='button' onClick={handlerFilter}>
						<IconFilter name='filter' />
						<span>Filter</span>
					</ButtonFilter>
				</ContainerFilter>

				{buttonAdd()}
			</ContainerAction>
			<TableContainer>
				<TableTitle>All products</TableTitle>
				<TableBody>
					<thead>
						<TableTr>
							<TableTh>Name</TableTh>
							<TableTh>Email</TableTh>
							<TableTh>Spent</TableTh>
						</TableTr>
					</thead>
					<tbody>
						{dataCustomers &&
							dataCustomers.map((item, idx) => (
								<TableTr key={idx}>
									<TableTd>
										<UserInfo>
											{/* <UserLogo src={item.image} alt='User logo' /> */}
											<UserName>{item.name}</UserName>
										</UserInfo>
									</TableTd>
									<TableTd>{item.email}</TableTd>
									<TableTd>
										{item.spent.toLocaleString('en-US', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</TableTd>
								</TableTr>
							))}
					</tbody>
				</TableBody>
			</TableContainer>
		</Container>
	);
}

export default DataPage;
