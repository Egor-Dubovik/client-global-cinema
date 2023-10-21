import * as MaterialIcons from 'react-icons/md';

import { TypeMaterialIcon } from '../types/icon.type';

const MaterialIcon = ({ name }: { name: TypeMaterialIcon }) => {
	const IconComponent = MaterialIcons[name];
	return <>{IconComponent ? <IconComponent /> : <MaterialIcons.MdDragIndicator />}</>;
};

export default MaterialIcon;
