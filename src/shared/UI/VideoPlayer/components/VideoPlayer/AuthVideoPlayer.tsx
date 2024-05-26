'use client';

import { useAuth } from '@/entities/User';

import { IVideoPlayer } from '../../types';
import { AuthPlayerPlaceholder } from '../AuthPlayerPlaceholder/AuthPlayerPlaceholder';

import { VideoPlayer } from './VideoPlayer';

interface IProps extends IVideoPlayer {
	className?: string;
}

export const AuthVideoPlayer = ({ videoSrc, className }: IProps) => {
	const { user } = useAuth();

	if (!user) return <AuthPlayerPlaceholder className={className} />;
	return <VideoPlayer className={className} videoSrc={videoSrc} />;
};
