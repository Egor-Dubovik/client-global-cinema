'use client';

import { Controller, useForm } from 'react-hook-form';

import { useMovieEdit } from '@/features/EditMovie/hooks/useMovieEdit';

import { UploadInputField } from '@/entities/File';
import { IMovieEditInput } from '@/entities/Movie';

import { Button } from '@/shared/UI/Button';
import { Skeleton } from '@/shared/UI/Skeleton';
import { Input } from '@/shared/UI/form-elements/Input';
import { SlugInputField } from '@/shared/UI/form-elements/SlugInputField/SlugInputField';
import { INIT_VALUE } from '@/shared/constants/numbers';

import styles from './MovieEditForm.module.scss';

export const MovieEditForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IMovieEditInput>({ mode: 'onChange' });
	const { onSubmit, isLoading } = useMovieEdit(setValue);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{!isLoading ? (
				<>
					<div className={styles.fields}>
						<Input
							className={styles.field}
							{...register('title', { required: 'Требуется заголовок' })}
							placeholder="заголовок"
							error={errors.title}
						/>

						<div className={styles.field}>
							<SlugInputField
								register={register}
								error={errors.slug}
								generate={() => setValue('slug', getValues('title'))}
							/>
						</div>

						<Input
							className={styles.field}
							{...register('parameters.country', { required: 'Требуется страна' })}
							placeholder="страна"
							error={errors.parameters?.country}
						/>

						<Input
							className={styles.field}
							{...register('parameters.duration', {
								required: 'Требуется продолжительность фильма',
							})}
							placeholder="продолжительность"
							error={errors.parameters?.duration}
						/>

						<Input
							className={styles.field}
							{...register('parameters.year', {
								required: 'Требуется год выпуска',
							})}
							placeholder="год"
							error={errors.parameters?.year}
						/>

						<div></div>
					</div>
					<Controller
						control={control}
						name="poster"
						defaultValue={''}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadInputField
								value={Array.isArray(value) ? value[INIT_VALUE] : value}
								onChange={onChange}
								error={error}
								placeholder="Постер"
								folder="movies/posters"
							/>
						)}
						rules={{
							required: 'Требуется постер',
						}}
					/>
					<Controller
						control={control}
						name="bigPoster"
						defaultValue={''}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadInputField
								value={Array.isArray(value) ? value[INIT_VALUE] : value}
								onChange={onChange}
								error={error}
								placeholder="Большой постер"
								folder="movies/posters"
							/>
						)}
						rules={{
							required: 'Требуется большой постер',
						}}
					/>
					<Controller
						control={control}
						name="videoUrl"
						defaultValue={''}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadInputField
								value={Array.isArray(value) ? value[INIT_VALUE] : value}
								onChange={onChange}
								error={error}
								placeholder="Видео"
								folder="movies/trailers"
								isNoImage
							/>
						)}
						rules={{
							required: 'Требуется видео',
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