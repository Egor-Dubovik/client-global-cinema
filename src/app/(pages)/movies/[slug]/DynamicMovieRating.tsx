'use client';

import dynamic from 'next/dynamic';

export const DynamicMovieRating = dynamic(
	() => import('@/features/RateMovie').then((module) => module.MovieRating),
	{ ssr: false }
);
