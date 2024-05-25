'use client';

import dynamic from 'next/dynamic';
import { MouseEvent } from 'react';

import { useAuth } from '@/entities/User';

import { getAuthUrl } from '@/shared/config/api.config';
import { useActions } from '@/shared/hooks/useActions';

const DynamicMenuItem = dynamic(
	() => import('@/shared/UI/Menu').then((module) => module.MenuItem),
	{ ssr: false }
);
const DynamicMenuGroup = dynamic(
	() => import('@/shared/UI/Menu').then((module) => module.MenuGroup),
	{ ssr: false }
);

export const NavUserMenu = () => {
	const { user } = useAuth();
	const { logout } = useActions();

	const handleLogout = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		logout();
	};

	return (
		<DynamicMenuGroup title={'Общие'}>
			{user ? (
				<>
					<DynamicMenuItem item={{ icon: 'MdSettings', link: '/profile', title: 'Профиль' }} />
					{user.isAdmin && (
						<DynamicMenuItem
							item={{ icon: 'MdOutlineLock', link: '/admin/statistic', title: 'Админ панель' }}
						/>
					)}
					<DynamicMenuItem
						onClick={handleLogout}
						item={{ icon: 'MdLogout', link: getAuthUrl('login'), title: 'Выйти' }}
					/>
				</>
			) : (
				<DynamicMenuItem item={{ icon: 'MdLogin', link: getAuthUrl('login'), title: 'Войти' }} />
			)}
		</DynamicMenuGroup>
	);
};
