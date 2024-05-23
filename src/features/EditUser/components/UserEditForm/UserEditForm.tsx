'use client';

import { useForm } from 'react-hook-form';

import { useUserEdit } from '@/features/EditUser/hooks/useUserEdit';

import { IUserEditInput } from '@/entities/User';

import { Button } from '@/shared/UI/Button';
import { Skeleton } from '@/shared/UI/Skeleton';
import { Input } from '@/shared/UI/form-elements/Input';

import styles from './UserEditForm.module.scss';

export const UserEditForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IUserEditInput>({ mode: 'onChange' });
	const { onSubmit, isLoading } = useUserEdit(setValue);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{!isLoading ? (
				<>
					<div className={styles.fields}>
						<Input
							className={styles.field}
							{...register('email', { required: 'Требуется почта' })}
							placeholder="Email"
							error={errors.email}
						/>
						<Input
							className={styles.field}
							{...register('password')}
							placeholder="Пароль"
							error={errors.password}
						/>
					</div>
					<Button className={styles.button}>обновить</Button>
				</>
			) : (
				<Skeleton count={3} />
			)}
		</form>
	);
};
