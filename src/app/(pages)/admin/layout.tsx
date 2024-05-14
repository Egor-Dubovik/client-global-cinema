'use client';

import { useRouter } from 'next/navigation';

import { AdminNavigation } from '@/entities/Admin';
import { useAuth } from '@/entities/User';

export default function Layout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const { user } = useAuth();

	if (!user?.isAdmin) {
		router.replace('/');
		return null;
	}

	return (
		<div>
			<AdminNavigation />
			{children}
		</div>
	);
}
