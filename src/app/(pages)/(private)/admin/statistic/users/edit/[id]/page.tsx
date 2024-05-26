import { UserEditForm } from '@/features/EditUser';

import { Heading } from '@/shared/UI/Heading';
import { createMetadata } from '@/shared/config/seo/meta.config';

export const metadata = createMetadata({
	title: 'Редактирование юзера',
});

const UserEditPage = () => {
	return (
		<section>
			<Heading title="Редактирование юзера" className="text-gray-3 00 mb-8" variant="h1" />
			<UserEditForm />
		</section>
	);
};

export default UserEditPage;
