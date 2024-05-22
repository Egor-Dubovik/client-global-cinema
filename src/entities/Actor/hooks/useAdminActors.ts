'use client';

import { useQuery } from 'react-query';

import { IActor } from '@/entities/Actor';
import { ActorService } from '@/entities/Actor/api';

import { IOptions } from '@/shared/UI/form-elements/Select';
import { toastrError } from '@/shared/utils/error/toastrError';

export const useAdminActors = () => {
	const queryData = useQuery({
		queryKey: 'list of actors',
		queryFn: async () => {
			const response = await ActorService.getActors();
			if ('error' in response) toastrError(response, 'Получение актёров');
			return response as IActor[];
		},
		select: (actors) => {
			return actors.map((actor): IOptions => ({ label: actor.name, value: actor._id }));
		},
	});

	return queryData;
};
