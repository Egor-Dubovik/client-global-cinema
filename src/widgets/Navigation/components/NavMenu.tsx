import { NavGenresMenu, NavMainMenu, NavUserMenu } from '@/features/Navigation';

import { Menu } from '@/shared/UI/Menu';

const NavMenu = () => {
	return (
		<Menu>
			<NavMainMenu />
			<NavGenresMenu />
			<NavUserMenu />
		</Menu>
	);
};

export default NavMenu;
