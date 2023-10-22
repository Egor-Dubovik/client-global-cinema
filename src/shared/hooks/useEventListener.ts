import { useEffect } from 'react';

export const useEventListener = (
	target: EventTarget,
	type: string,
	listener: EventListenerOrEventListenerObject,
	options?: AddEventListenerOptions
) => {
	useEffect(() => {
		target.addEventListener(type, listener, options);
		return () => {
			target.removeEventListener(type, listener, options);
		};
	}, [target, type, listener, options]);
};
