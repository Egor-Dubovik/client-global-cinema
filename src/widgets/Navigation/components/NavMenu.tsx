import { GenresMenuGroup } from '@/widgets/Navigation/components/GenresMenuGroup';
import { MainMenuGroup } from '@/widgets/Navigation/components/MainMenuGroup';
import { UserMenuGroup } from '@/widgets/Navigation/components/UserMenuGroup';

import { Menu } from '@/shared/UI/Menu';

const NavMenu = () => {
	return (
		<Menu>
			<MainMenuGroup />
			<GenresMenuGroup />
			<UserMenuGroup />
		</Menu>
	);
};

export default NavMenu;
