import ReactSelect, { MultiValue, SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';

import { ErrorMessage } from '@/shared/UI/ErrorMessage';
import { INIT_VALUE } from '@/shared/constants/numbers';

import { IOption, ISelect } from '../../types';

import styles from './Select.module.scss';

const animationComponents = makeAnimated();

export const Select = ({ field, options, placeholder, error, isLoading, isMultiple }: ISelect) => {
	const onChange = (newValue: MultiValue<string | IOption> | SingleValue<string | IOption>) => {
		field.onChange(
			isMultiple ? (newValue as IOption[]).map((item) => item.value) : (newValue as IOption).value
		);
	};

	const getValue = () => {
		if (field.value) {
			return isMultiple
				? options.filter((option) => field.value.indexOf(option.value) >= INIT_VALUE)
				: options.find((option) => option.value === field.value);
		} else {
			return isMultiple ? [] : '';
		}
	};

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix={'custom-select'}
					options={options}
					value={getValue()}
					isMulti={isMultiple}
					onChange={onChange}
					components={animationComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <ErrorMessage className={styles.error} message={error.message as string} />}
		</div>
	);
};
