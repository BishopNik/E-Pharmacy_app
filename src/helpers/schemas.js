/** @format */

import * as Yup from 'yup';
// import { startOfToday } from 'date-fns';

const emailRegex = RegExp(/^[A-Z|a-z0-9!#$%&._%+-/=?^]+@[A-Z|a-z0-9.-]+\.[A-Z|a-z]{2,4}$/);
const passwordRegex = RegExp(/^[A-Z|a-z0-9!#$%&._%+-/=?^]{0,100}$/);

export const categories = ['Medicine', 'Heart', 'Head', 'Hand', 'Leg', 'Dental Care', 'Skin Care'];
export const statusList = ['Active', 'Deactive'];

export const loginSchema = Yup.object().shape({
	email: Yup.string()
		.matches(emailRegex, 'Invalid email')
		.email('Invalid email address')
		.required('This is a required field'),
	password: Yup.string()
		.min(6, 'Too Short!')
		.matches(passwordRegex, 'Invalid password')
		.required('This is a required field'),
});

export const productSchema = Yup.object().shape({
	name: Yup.string().min(2, 'Too Short!').required('This is a required field'),
	category: Yup.string()
		.oneOf(categories, 'Invalid category')
		.required('This is a required field'),
	stock: Yup.number().moreThan(0, 'Must be greater than 0').required('This is a required field'),
	suppliers: Yup.string().min(2, 'Too Short!').required('This is a required field'),
	price: Yup.number().moreThan(0, 'Must be greater than 0').required('This is a required field'),
});

export const supplierSchema = Yup.object().shape({
	name: Yup.string().min(2, 'Too Short!').required('This is a required field'),
	address: Yup.string().required('This is a required field'),
	company: Yup.string().min(2, 'Too Short!').required('This is a required field'),
	date: Yup.date()
		// .min(startOfToday(), 'Date cannot be in the past')
		.required('This is a required field'),
	amount: Yup.number()

		.moreThan(0, 'Must be greater than 0')
		.required('This is a required field'),
	status: Yup.string().oneOf(statusList, 'Invalid status').required('This is a required field'),
});
