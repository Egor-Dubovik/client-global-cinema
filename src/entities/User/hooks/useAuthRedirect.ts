import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@/entities/User/hooks/useAuth';

export const useAuthRedirect = () => {
	const router = useRouter();
	const pathname = usePathname();
	const { user } = useAuth();

	const redirect = '/'; //pathname ||

	useEffect(() => {
		if (user) router.push(redirect);
	}, [user, redirect, router]);
};
