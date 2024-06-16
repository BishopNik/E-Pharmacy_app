/** @format */

import React from 'react';
import {
	TableContainer,
	TableTitle,
	TableBody,
	TableTh,
	TableTd,
	TableTr,
	UserInfo,
	UserName,
	UserEmail,
	UserLogo,
} from './TableCustomers.styled';

function TableCustomers({ dataCustomers }) {
	return (
		<TableContainer>
			<TableTitle>Recent Customers</TableTitle>
			<TableBody>
				<thead>
					<TableTr>
						<TableTh type={'name'}>Name</TableTh>
						<TableTh type={'email'}>Email</TableTh>
						<TableTh type={'spent'}>Spent</TableTh>
					</TableTr>
				</thead>
				<tbody>
					{dataCustomers &&
						dataCustomers?.map(({ image, name, email, spent, _id }) => (
							<TableTr key={_id}>
								<TableTd type={'name'}>
									<UserInfo>
										<UserLogo src={image} alt='User logo' />
										<UserName>{name}</UserName>
									</UserInfo>
								</TableTd>
								<TableTd>
									<UserEmail>{email}</UserEmail>
								</TableTd>
								<TableTd>
									{spent.toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</TableTd>
							</TableTr>
						))}
				</tbody>
			</TableBody>
		</TableContainer>
	);
}

export default TableCustomers;
