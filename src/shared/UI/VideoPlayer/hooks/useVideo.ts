import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { IVideoElement } from '@/shared/UI/VideoPlayer/types';

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null);

	const [isPlaying, setPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [videoTime, setVideoTime] = useState(0);
	const [progress, setProgress] = useState(0);

	const togglePlay = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play();
			setPlaying(true);
		} else {
			videoRef.current?.pause();
			setPlaying(false);
		}
	}, [isPlaying]);

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10;
	};

	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10;
	};

	const fullScreen = () => {
		const video = videoRef.current;
		if (!video) return;

		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.msRequestFullScreen) {
			video.msRequestFullScreen();
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen();
		}
	};

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const updateProgress = () => {
			setCurrentTime(video.currentTime);
			setProgress((video.currentTime / videoTime) * 100);
		};

		video.addEventListener('timeupdate', updateProgress);
		return () => {
			video.removeEventListener('timeupdate', updateProgress);
		};
	}, [videoTime]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowRight':
					forward();
					break;
				case 'ArrowLeft':
					revert();
					break;
				case ' ':
					event.preventDefault();
					togglePlay();
					break;
				case 'f':
					fullScreen();
					break;
				default:
					return;
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [togglePlay]);

	useEffect(() => {
		const videoDuration = videoRef.current?.duration;
		if (videoDuration) setVideoTime(videoDuration);
	}, [videoRef.current?.duration]);

	return useMemo(
		() => ({
			videoRef,
			actions: {
				fullScreen,
				revert,
				forward,
				togglePlay,
			},
			video: {
				isPlaying,
				currentTime,
				videoTime,
				progress,
			},
		}),
		[currentTime, isPlaying, videoTime, progress, togglePlay]
	);
};
