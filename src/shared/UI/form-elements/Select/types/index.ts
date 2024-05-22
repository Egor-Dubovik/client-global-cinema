/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControllerRenderProps, FieldError } from 'react-hook-form';
import { Options } from 'react-select';

export interface IOption {
	value: string;
	label: string;
}

export interface ISelect {
	options: Options<IOption>;
	isMultiple?: boolean;
	field: ControllerRenderProps<any, any>;
	placeholder: string;
	error?: FieldError;
	isLoading?: boolean;
}
