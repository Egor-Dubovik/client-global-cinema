'use client';

import { useRouter } from 'next/navigation';

import { ProfileForm } from '@/features/EditProfile';

import { useAuth } from '@/entities/User';

import { Heading } from '@/shared/UI/Heading';

export default function ProfilePge() {
	const router = useRouter();
	const { user } = useAuth();

	if (!user) {
		router.replace('/auth/login');
		return null;
	}

	return (
		<section>
			<Heading title="Профиль" variant="h1" />
			<ProfileForm />
		</section>
	);
}
