'use client';

import cn from 'classnames';

import MaterialIcon from '@/shared/UI/MaterialIcon';
import { useVideo } from '@/shared/UI/VideoPlayer/hooks/useVideo';
import { IVideoPlayer } from '@/shared/UI/VideoPlayer/types';

import styles from './VideoPlayer.module.scss';

interface IProps extends IVideoPlayer {
	className?: string;
}

export const VideoPlayer = ({ videoSrc, className }: IProps) => {
	const { videoRef, video, actions } = useVideo();

	return (
		<div className={cn(styles.wrapper, className)}>
			<video ref={videoRef} className={styles.video} src={`${videoSrc}#t=10`} preload="metadata" />

			<div className={styles.progressBarContainer}>
				<div className={styles.progressBar} style={{ width: `${video.progress}%` }} />
			</div>

			<div className={styles.controls}>
				<div>
					<button onClick={actions.revert}>
						<MaterialIcon name="MdHistory" />
					</button>

					<button className={styles.playBtn} onClick={actions.togglePlay}>
						<MaterialIcon name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'} />
					</button>

					<button onClick={actions.forward}>
						<MaterialIcon name="MdUpdate" />
					</button>

					<div className={styles.timeControls}>
						<p className={styles.controlsTime}>
							{Math.floor(video.currentTime / 60) +
								':' +
								('0' + Math.floor(video.currentTime % 60)).slice(-2)}
						</p>
						<p> / </p>
						<p className={styles.controlsTime}>
							{Math.floor(video.videoTime / 60) +
								':' +
								('0' + Math.floor(video.videoTime % 60)).slice(-2)}
						</p>
					</div>
				</div>

				<div>
					<button onClick={actions.fullScreen}>
						<MaterialIcon name="MdFullscreen" />
					</button>
				</div>
			</div>
		</div>
	);
};
