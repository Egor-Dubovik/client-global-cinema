import { useForm } from 'react-hook-form';

import { useProfile } from '@/features/EditProfile/hooks/useProfile';

import { Button } from '@/shared/UI/Button';
import { Skeleton } from '@/shared/UI/Skeleton';
import { Input } from '@/shared/UI/form-elements/Input';
import { getEmailRules } from '@/shared/helpers/formRules/userRules';

import { IProfileInput } from '../../types';

import styles from './ProfileForm.module.scss';

export const ProfileForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IProfileInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useProfile(setValue);

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
					</div>

					<Button className={styles.button}>обновить</Button>
				</>
			) : (
				<Skeleton />
			)}
		</form>
	);
};
