import { ActorService } from '@/entities/Actor/api';
import { mapActorsToGalleryItems } from '@/entities/Actor/mappers/mapActorsToGalleryItems';
import { IActor } from '@/entities/Actor/model/types';

import { Gallery, IGalleryItem } from '@/shared/UI/Gallery';
import { INIT_VALUE } from '@/shared/constants/numbers';
import { WithErrorBoundary } from '@/shared/hocs/WithErrorBoundary';

export const ActorsGallery = async () => {
	const actors: IGalleryItem[] = mapActorsToGalleryItems(
		((await ActorService.getActors()) as IActor[]).slice(INIT_VALUE, 7)
	);

	return (
		<WithErrorBoundary data={actors}>
			{actors.length > INIT_VALUE && <Gallery items={actors} variant="vertical" />}
		</WithErrorBoundary>
	);
};
