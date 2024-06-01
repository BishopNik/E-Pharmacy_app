/** @format */

import React from 'react';
import EllipsisText from 'react-ellipsis-text';
import {
	TableContainer,
	TableTitle,
	TableBody,
	TableTh,
	TableTd,
	TableTr,
	UserInfo,
	UserName,
	UserLogo,
} from './TableCustomers.styled';

function TableCustomers({ dataCustomers }) {
	return (
		<TableContainer>
			<TableTitle>Recent Customers</TableTitle>
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
						dataCustomers.map(item => (
							<TableTr>
								<TableTd>
									<UserInfo>
										<UserLogo src={item.image} alt='User logo' />
										<UserName>
											<EllipsisText text={item.name} length={16} />
										</UserName>
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
	);
}

export default TableCustomers;
