'use client';

import { useRouter } from 'next/navigation';

import { useAuth } from '@/entities/User';

const Profile = () => {
	const router = useRouter();
	const { user } = useAuth();

	if (!user) {
		router.replace('/auth/login');
		return null;
	}

	return <section>Profile</section>;
};

export default Profile;
