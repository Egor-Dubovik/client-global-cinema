'use client';

import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';

import { useGenreEdit } from '@/features/EditGenre/hooks/useGenreEdit';

import { IGenreEditInput } from '@/entities/Genre';

import { Button } from '@/shared/UI/Button';
import { Skeleton } from '@/shared/UI/Skeleton';
import { TextEditor } from '@/shared/UI/TextEditor';
import { Input } from '@/shared/UI/form-elements/Input';
import { SlugInputField } from '@/shared/UI/form-elements/SlugInputField/SlugInputField';
import { INIT_VALUE } from '@/shared/constants/numbers';

import styles from './GenreEditForm.module.scss';

export const GenreEditForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({ mode: 'onChange' });
	const { onSubmit, isLoading } = useGenreEdit(setValue);

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
						<Input
							className={styles.field}
							{...register('icon', { required: 'Требуется иконка' })}
							placeholder="Иконка"
							error={errors.icon}
						/>
					</div>
					<Controller
						control={control}
						name="description"
						defaultValue={''}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<TextEditor value={value} onChange={onChange} error={error} placeholder="Описание" />
						)}
						rules={{
							validate: {
								required: (value) =>
									(value && stripHtml(value).result.length > INIT_VALUE) || 'Требуется описание',
							},
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
