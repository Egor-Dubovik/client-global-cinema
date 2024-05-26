import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@/entities/User';

import { useActions } from '@/shared/hooks/useActions';

// import { getLocalStore } from '@/shared/utils/storage/getLocalStore';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const { user } = useAuth();
	const { logout, checkAuth } = useActions();

	useEffect(() => {
		if (Cookies.get('accessToken')) checkAuth();
	}, []);

	useEffect(() => {
		if (!Cookies.get('refreshToken') && user) logout();
	}, [pathname]);

	return <>{children}</>;
};

export default AuthProvider;
