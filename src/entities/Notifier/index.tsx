'use client';

import { useEffect } from 'react';
import { toastType, toastr } from 'react-redux-toastr';

interface IProps {
	type: toastType;
	title: string;
	description?: string;
}

export const Notifier = ({ type, title, description }: IProps) => {
	useEffect(() => {
		toastr[type](title, description || '');
	}, []);

	return null;
};
