/** @format */

import { toastError } from './toastwindow';

export const handleApiError = (error, operation) => {
	const errorMessage = error?.response?.data?.message || 'Unknown error';
	const errorStatus = error?.response?.status;

	toastError(`Error ${operation}:`, errorMessage);

	const customError = new Error(errorMessage);
	customError.status = errorStatus;
	throw customError;
};
