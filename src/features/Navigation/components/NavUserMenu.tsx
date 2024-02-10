import { userMenu } from '@/widgets/Navigation/constants/navMenu';

import { MenuGroup, MenuItem } from '@/shared/UI/Menu';

export const NavUserMenu = () => {
	return (
		<MenuGroup title={userMenu.title}>
			{userMenu.items.map((item) => (
				<MenuItem key={item.link} item={item} />
			))}
		</MenuGroup>
	);
};
