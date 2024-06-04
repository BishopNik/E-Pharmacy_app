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
						dataCustomers.map(({ image, name, email, spent }, idx) => (
							<TableTr key={idx}>
								<TableTd>
									<UserInfo>
										<UserLogo src={image} alt='User logo' />
										<UserName>
											<EllipsisText text={name} length={16} />
										</UserName>
									</UserInfo>
								</TableTd>
								<TableTd>{email}</TableTd>
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
