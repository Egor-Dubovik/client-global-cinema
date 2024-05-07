import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

import { useAuth } from '@/entities/User';

import { TypeComponentAuthFields } from '@/shared/types/auth.type';

interface IProps extends TypeComponentAuthFields {
	children: React.ReactNode;
}

const CheckRoleProvider = ({ Component: { isOnlyAdmin, isOnlyUser }, children }: IProps) => {
	const { user } = useAuth();
	const router = useRouter();

	const Children = () => <>{children}</>;

	if (user?.isAdmin) return <Children />;

	if (isOnlyAdmin) {
		router.replace('/404');
		return null;
	}

	const isUser = user && !user.isAdmin;
	if (isUser && isOnlyUser) return <Children />;

	router.replace('/auth');
	return null;
};

export default CheckRoleProvider;
