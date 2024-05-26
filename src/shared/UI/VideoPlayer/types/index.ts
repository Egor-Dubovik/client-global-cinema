export interface IVideoPlayer {
	videoSrc: string;
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullScreen?: () => void;
	mozRequestFullScreen?: () => void;
	webkitRequestFullScreen?: () => void;
}
