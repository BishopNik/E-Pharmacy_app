/** @format */

import React, { useRef, useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useQueryClient, useMutation } from 'react-query';
import ModalWindow from '../Modal';
import { productSchema, categories, addProduct, editProductById } from 'helpers';
import { MiniLoader } from 'components/Loader';
import {
	MainContainer,
	ModalTitle,
	FormFieldsContainer,
	FieldContainer,
	FieldStyled,
	CloseButton,
	IconClose,
	ButtonContainer,
	AddButton,
	CancelButton,
	ErrorMsg,
	CategoryListContainer,
	CategoryList,
	CategoryItem,
	IconMenuCategory,
} from './Product.styled';

function ProductModal({ isOpen, onRequestClose, productEdit }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isShowList, setIsShowList] = useState(false);
	const [category, setCategory] = useState('');
	const cancelAddProduct = useRef(null);

	const queryClient = useQueryClient();

	const mutation = useMutation(
		productEdit
			? values => editProductById(values, productEdit._id)
			: values => addProduct(values),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('products');
				setIsLoading(false);
			},
			onMutate: () => {
				setIsLoading(true);
			},
		}
	);

	const handlerShowList = () => {
		setIsShowList(!isShowList);
	};

	const handleCategorySelect = (category, setFieldValue) => {
		setCategory(category);
		setFieldValue('category', category);
	};

	const handleFormSubmit = async values => {
		const newProduct = await mutation.mutateAsync(values);
		if (newProduct) handlerClose();
	};

	const handleCancel = () => {
		if (cancelAddProduct.current) {
			cancelAddProduct.current.resetForm();
		}
		handlerClose();
	};

	const handlerClose = () => {
		setCategory('');
		setIsShowList(false);
		onRequestClose();
	};

	useEffect(() => {
		if (productEdit) {
			setCategory(productEdit.category);
		}
	}, [productEdit]);

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={handlerClose}>
			<MainContainer>
				<CloseButton type='button' onClick={handlerClose}>
					<IconClose name='close' />
				</CloseButton>
				<ModalTitle>{!!productEdit ? 'Edit' : 'Add a new'} product</ModalTitle>
				<Formik
					initialValues={{
						name: productEdit?.name || '',
						category: productEdit?.category || '',
						stock: productEdit?.stock || '',
						suppliers: productEdit?.suppliers || '',
						price: productEdit?.price || '',
					}}
					validationSchema={productSchema}
					onSubmit={handleFormSubmit}
					innerRef={cancelAddProduct}
				>
					{({ setFieldValue, errors, touched, isSubmitting }) => (
						<Form autoComplete='off'>
							<FormFieldsContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.name && touched.name}
										type='text'
										name='name'
										placeholder='Product Info'
										autoFocus
									/>
									<ErrorMsg name='name' component='span' />
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.category && touched.category}
										onClick={handlerShowList}
										value={category}
										type='text'
										name='category'
										placeholder='Category'
									/>
									<IconMenuCategory name='menu' $isOpen={isShowList} />
									{!isShowList && <ErrorMsg name='category' component='span' />}
									{isShowList && (
										<CategoryListContainer>
											<CategoryList>
												{categories.map(cat => (
													<CategoryItem
														key={cat}
														onClick={() =>
															handleCategorySelect(cat, setFieldValue)
														}
													>
														{cat}
													</CategoryItem>
												))}
											</CategoryList>
										</CategoryListContainer>
									)}
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.stock && touched.stock}
										type='number'
										name='stock'
										placeholder='Stock'
									/>
									<ErrorMsg name='stock' component='span' />
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.suppliers && touched.suppliers}
										type='text'
										name='suppliers'
										placeholder='Suppliers'
									/>
									<ErrorMsg name='suppliers' component='span' />
								</FieldContainer>
								<FieldContainer>
									<FieldStyled
										$statusError={!errors.price && touched.price}
										type='number'
										name='price'
										placeholder='Price'
									/>
									<ErrorMsg name='price' component='span' />
								</FieldContainer>
							</FormFieldsContainer>

							<ButtonContainer>
								<AddButton type='submit' disabled={isSubmitting}>
									{!!productEdit ? 'Save' : 'Add'}
								</AddButton>
								<CancelButton
									type='reset'
									onClick={handleCancel}
									disabled={isSubmitting}
								>
									Cancel
								</CancelButton>
							</ButtonContainer>
						</Form>
					)}
				</Formik>
			</MainContainer>
			{isLoading && <MiniLoader />}
		</ModalWindow>
	);
}

export default ProductModal;
