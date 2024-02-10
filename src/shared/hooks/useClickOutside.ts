import { useRef } from 'react';

import { useEventListener } from '@/shared/hooks/useEventListener';

type ElementType = HTMLElement | null;

const useClickOutside = <T extends ElementType>(callback: () => void) => {
	const ref = useRef<T>(null);

	const handleClickOutside: EventListener = (event: Event) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			callback();
		}
	};

	useEventListener(null, 'mousedown', handleClickOutside);
	return ref;
};

export default useClickOutside;
