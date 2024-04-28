import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@/entities/User/hooks/useAuth';

export const useAuthRedirect = () => {
	const router = useRouter();
	const params = useParams();
	const { user } = useAuth();

	const redirect = String(params.redirect) || '/';

	useEffect(() => {
		if (user) router.push(redirect);
	}, [user, redirect, router]);
};
