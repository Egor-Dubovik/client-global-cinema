'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/shared/UI/Button';

export default function NotFound() {
	const router = useRouter();

	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Button onClick={() => router.back()}>go back</Button>
		</div>
	);
}
