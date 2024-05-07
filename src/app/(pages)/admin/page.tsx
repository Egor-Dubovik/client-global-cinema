'use client';

import { useRouter } from 'next/navigation';

import { useAuth } from '@/entities/User';

const AdminPanel = () => {
	const router = useRouter();
	const { user } = useAuth();

	if (!user?.isAdmin) {
		router.replace('/');
		return null;
	}

	return <section>AdminPanel</section>;
};

export default AdminPanel;
