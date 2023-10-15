import * as MaterialIcons from 'react-icons/md';

import { TypeMaterialIcon } from '@/shared/types/icon.types';

const MaterialIcon = ({ name }: { name: TypeMaterialIcon }) => {
	const IconComponent = MaterialIcons[name];
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};

export default MaterialIcon;
