import { useEffect } from 'react';

export const useEventListener = (
	target: EventTarget | null,
	type: string,
	listener: EventListenerOrEventListenerObject,
	options?: AddEventListenerOptions
) => {
	let currentTarget = target as EventTarget;

	if (typeof window !== 'undefined' && !target) {
		currentTarget = document;
	}

	useEffect(() => {
		currentTarget.addEventListener(type, listener, options);
		return () => {
			currentTarget.removeEventListener(type, listener, options);
		};
	}, [currentTarget, type, listener, options]);
};
