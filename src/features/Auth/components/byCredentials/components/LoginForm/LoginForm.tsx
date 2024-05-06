'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '@/entities/User';

import { Button } from '@/shared/UI/Button';
import { Input } from '@/shared/UI/Input';
import { getAuthUrl } from '@/shared/config/api.config';
import { useActions } from '@/shared/hooks/useActions';

import { getEmailRules, getPasswordRules } from '../../../../helpers/rules';
import { FormLinkText } from '../../../FormLinkText';
import { ILoginForm } from '../../type';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ILoginForm>({ mode: 'onChange' });
	const { login } = useActions();
	const { isLoading } = useAuth();

	const onSubmit: SubmitHandler<ILoginForm> = (data) => {
		login(data);
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
			<Button type="submit" round isLoading={isLoading}>
				Login
			</Button>
			<FormLinkText
				text="Don’t have an account yet?"
				linkText="Sign Up"
				href={getAuthUrl('register')}
			/>
		</form>
	);
};
