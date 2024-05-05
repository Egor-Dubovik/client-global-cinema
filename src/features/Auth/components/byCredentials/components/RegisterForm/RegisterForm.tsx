'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '@/entities/User';

import { Button } from '@/shared/UI/Button';
import { Input } from '@/shared/UI/Input';
import { getAuthUrl } from '@/shared/config/api.config';

import { AUTH_ERRORS } from '../../../../constants';
import { getEmailRules, getPasswordRules } from '../../../../helpers/rules';
import { FormLinkText } from '../../../FormLinkText';
import { IRegisterForm } from '../../type';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm<IRegisterForm>({ mode: 'onChange' });
	const { isLoading } = useAuth();

	const checkPasswordsValidation = (value: string) => {
		if (value === getValues('password')) return true;
		return AUTH_ERRORS.PASSWORD_CONFIRM;
	};

	const signup = (data: any) => {
		console.log('register', data);
	};

	const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
		signup(data);
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input {...register('email', getEmailRules())} placeholder="e-mail" error={errors.email} />
			<Input
				{...register('password', getPasswordRules())}
				type="password"
				placeholder="password"
				error={errors.password}
			/>
			<Input
				{...register('repeatPassword', {
					...getPasswordRules(),
					validate: checkPasswordsValidation,
				})}
				type="password"
				placeholder="confirm password"
				error={errors.repeatPassword}
			/>
			<Button type="submit" round isLoading={isLoading}>
				Sign up
			</Button>
			<FormLinkText text="Already signed up?" linkText="Login" href={getAuthUrl('login')} />
		</form>
	);
};
