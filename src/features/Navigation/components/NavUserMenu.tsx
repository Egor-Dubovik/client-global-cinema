'use client';

import { MouseEvent, useEffect } from 'react';

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
					<MenuItem item={{ icon: 'MdSettings', link: '/profile', title: 'Profile' }} />
					{user.isAdmin && (
						<MenuItem item={{ icon: 'MdOutlineLock', link: '/admin', title: 'Admin panel' }} />
					)}
					<MenuItem onClick={handleLogout} item={{ icon: 'MdLogout', link: '', title: 'Logout' }} />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: getAuthUrl('login'), title: 'Login' }} />
			)}
		</MenuGroup>
	);
};
