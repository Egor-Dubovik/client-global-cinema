'use client';

import cn from 'classnames';
import { useQuery } from 'react-query';

import { Skeleton } from '@/shared/UI/Skeleton';

import { AdminService } from '../../api';

import styles from './UsersCounter.module.scss';

interface IProps {
	className?: string;
}

export const UsersCounter = ({ className }: IProps) => {
	const { data: response, isLoading } = useQuery('count users', () => AdminService.getCountUsers());

	return !isLoading ? (
		<li className={cn(className, styles.countUsers)}>
			<div>
				<span className={styles.number}>{response?.data}</span>
				<p className={styles.description}>users</p>
			</div>
		</li>
	) : (
		<Skeleton height={340} width={360} />
	);
};
