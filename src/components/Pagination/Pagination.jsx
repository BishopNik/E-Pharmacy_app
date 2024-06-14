/** @format */

import React from 'react';
import { ButtonContainer, ButtonBox, Button } from './Pagination.styled';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	const getPages = () => {
		let pages = [];
		if (totalPages <= 5) {
			pages = Array.from({ length: totalPages }, (_, i) => i + 1);
		} else {
			if (currentPage <= 3) {
				pages = [1, 2, 3, 4, 5];
			} else if (currentPage >= totalPages - 2) {
				pages = [
					totalPages - 4,
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages,
				];
			} else {
				pages = [
					currentPage - 2,
					currentPage - 1,
					currentPage,
					currentPage + 1,
					currentPage + 2,
				];
			}
		}
		return pages;
	};

	const pages = getPages();

	const handlePageChange = page => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<ButtonContainer>
			{pages.map(page => (
				<ButtonBox key={page}>
					<Button
						onClick={() => handlePageChange(page)}
						disabled={currentPage === page}
					/>
				</ButtonBox>
			))}
		</ButtonContainer>
	);
};

export default Pagination;
