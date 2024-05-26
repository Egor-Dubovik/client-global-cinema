'use client';

import { MouseEvent } from 'react';
import { Controller, ControllerRenderProps, useForm } from 'react-hook-form';

import { useUserEdit } from '@/features/EditUser/hooks/useUserEdit';

import { IUserEditInput } from '@/entities/User';

import { Button } from '@/shared/UI/Button';
import { Skeleton } from '@/shared/UI/Skeleton';
import { Input } from '@/shared/UI/form-elements/Input';
import { getEmailRules } from '@/shared/helpers/formRules/userRules';

import styles from './UserEditForm.module.scss';

export const UserEditForm = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IUserEditInput>({ mode: 'onChange' });
	const { onSubmit, isLoading } = useUserEdit(setValue);

	const switchAdminRights = (
		event: MouseEvent<HTMLButtonElement>,
		field: ControllerRenderProps<IUserEditInput, 'isAdmin'>
	) => {
		event.preventDefault();
		field.onChange(!field.value);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{!isLoading ? (
				<>
					<div className={styles.fields}>
						<Input
							className={styles.field}
							{...register('email', getEmailRules())}
							placeholder="Email"
							error={errors.email}
						/>
						<Input
							className={styles.field}
							{...register('password')}
							placeholder="Пароль"
							error={errors.password}
						/>
						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									className={styles.adminSwitcher}
									onClick={(e) => switchAdminRights(e, field)}
								>
									{field.value ? 'Сделать пользователем' : 'Сделать админом'}
								</button>
							)}
						/>
					</div>
					<Button className={styles.button}>обновить</Button>
				</>
			) : (
				<Skeleton />
			)}
		</form>
	);
};
