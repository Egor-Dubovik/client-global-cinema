'use client';

import dynamic from 'next/dynamic';

const DynamicAuthPlayer = dynamic(
	() => import('@/shared/UI/VideoPlayer').then((module) => module.AuthVideoPlayer),
	{ ssr: false }
);

interface IProps {
	videoSrc: string;
}

export const VideoClientWrapper = ({ videoSrc }: IProps) => {
	return <DynamicAuthPlayer className="mb-10" videoSrc={videoSrc} />;
};
