'use client';

import { Controller, useForm } from 'react-hook-form';

import { useActorEdit } from '@/features/EditActor/hooks/useActorEdit';

import { IActorEditInput } from '@/entities/Actor';
import { UploadInputField } from '@/entities/File';

import { Button } from '@/shared/UI/Button';
import { Skeleton } from '@/shared/UI/Skeleton';
import { Input } from '@/shared/UI/form-elements/Input';
import { SlugInputField } from '@/shared/UI/form-elements/SlugInputField/SlugInputField';
import { INIT_VALUE } from '@/shared/constants/numbers';

import styles from './ActorEditForm.module.scss';

export const ActorEditForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IActorEditInput>({ mode: 'onChange' });
	const { onSubmit, isLoading } = useActorEdit(setValue);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{!isLoading ? (
				<>
					<div className={styles.fields}>
						<Input
							className={styles.field}
							{...register('name', { required: 'Требуется имя' })}
							placeholder="Имя"
							error={errors.name}
						/>

						<div className={styles.field}>
							<SlugInputField
								register={register}
								error={errors.slug}
								generate={() => setValue('slug', getValues('name'))}
							/>
						</div>
					</div>
					<Controller
						control={control}
						name="photo"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadInputField
								value={Array.isArray(value) ? value[INIT_VALUE] : value}
								onChange={onChange}
								error={error}
								placeholder="Фото"
								folder="actors"
							/>
						)}
						rules={{
							required: 'Требуется фотография',
						}}
					/>
					<Button className={styles.button}>обновить</Button>
				</>
			) : (
				<Skeleton count={3} />
			)}
		</form>
	);
};
