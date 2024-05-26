'use client';

import dynamic from 'next/dynamic';

export const DynamicAuthPlayer = dynamic(
	() => import('@/shared/UI/VideoPlayer').then((module) => module.AuthVideoPlayer),
	{ ssr: false }
);
