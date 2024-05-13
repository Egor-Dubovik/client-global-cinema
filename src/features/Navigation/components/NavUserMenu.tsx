'use client';

import { MouseEvent } from 'react';

import { useAuth } from '@/entities/User';

import { MenuGroup, MenuItem } from '@/shared/UI/Menu';
import { getAuthUrl } from '@/shared/config/api.config';
import { useActions } from '@/shared/hooks/useActions';

export const NavUserMenu = () => {
	const { user } = useAuth();
	const { logout } = useActions();

	const handleLogout = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		logout();
	};

	return (
		<MenuGroup title={'General'}>
			{user ? (
				<>
					<MenuItem item={{ icon: 'MdSettings', link: '/profile', title: 'Профиль' }} />
					{user.isAdmin && (
						<MenuItem
							item={{ icon: 'MdOutlineLock', link: '/admin/statistic', title: 'Админ панель' }}
						/>
					)}
					<MenuItem
						onClick={handleLogout}
						item={{ icon: 'MdLogout', link: getAuthUrl('login'), title: 'Выйти' }}
					/>
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: getAuthUrl('login'), title: 'Войти' }} />
			)}
		</MenuGroup>
	);
};
