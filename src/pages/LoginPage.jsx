/** @format */

import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Loader } from 'components/Loader';
import {
	Main,
	Header,
	TitleHeader,
	MainTitle,
	MainTitleExt,
	MainContainer,
	TitleContainer,
	MainImg,
	InputBox,
	InputContainer,
	InputField,
	ButtonSubmit,
	ErrorMess,
	ButtonViewPassword,
	IconViewPassword,
	IconDecor,
} from 'components/styled.components/LoginPage.styled';
import { useMainContext } from 'hooks';
import { login, loginSchema } from 'helpers';
import logo from 'img/Logo/logo.png';
import logo2x from 'img/Logo/logo@2x.png';
import tabletka from 'img/Tabletka/tabletka.png';
import tabletka2x from 'img/Tabletka/tabletka@2x.png';

function LoginPage() {
	const { isLoading, setIsLoading, setUserData } = useMainContext();
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async data => {
		setIsLoading(true);
		const user = await login(data);
		user && setUserData(user);
		setIsLoading(false);
	};

	return isLoading ? (
		<Loader />
	) : (
		<Main>
			<Header>
				<img
					srcSet={`${logo} 1x, ${logo2x} 2x`}
					src={logo}
					alt='Logo'
					loading='lazy'
					width='44'
				/>
				<TitleHeader>E-Pharmacy</TitleHeader>
			</Header>
			<MainContainer>
				<TitleContainer>
					<MainImg
						srcSet={`${tabletka} 1x, ${tabletka2x} 2x`}
						src={tabletka}
						alt='tabletka'
						loading='lazy'
					/>
					<MainTitle>
						Your medication, delivered Say goodbye to all{' '}
						<MainTitleExt>your healthcare</MainTitleExt> worries with us
					</MainTitle>
				</TitleContainer>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={async values => {
						await handleSubmit(values);
					}}
					validationSchema={loginSchema}
				>
					{({ isSubmitting, errors, touched }) => (
						<Form autoComplete='off'>
							<InputBox>
								<InputContainer>
									<InputField
										error={
											errors?.email &&
											touched.email &&
											(errors?.email && touched.email).toString()
										}
										touched={touched.email && touched?.email.toString()}
										name='email'
										type='email'
										placeholder='Email address'
									/>
									<ErrorMess name='email' component='span' />
								</InputContainer>
								<InputContainer>
									<InputField
										error={
											errors?.password &&
											touched.password &&
											(errors?.password && touched.password).toString()
										}
										touched={touched.password && touched.password.toString()}
										name='password'
										type={showPassword ? 'text' : 'password'}
										placeholder={'Password'}
									/>
									<ButtonViewPassword
										type='button'
										onClick={togglePasswordVisibility}
									>
										{showPassword ? (
											<IconViewPassword name='hide' />
										) : (
											<IconViewPassword name='show' />
										)}
									</ButtonViewPassword>

									<ErrorMess name='password' component='span' />
								</InputContainer>
							</InputBox>

							<ButtonSubmit type='submit' disabled={isSubmitting}>
								Log in
							</ButtonSubmit>
						</Form>
					)}
				</Formik>
			</MainContainer>
			<IconDecor name='decor' />
		</Main>
	);
}

export default LoginPage;
