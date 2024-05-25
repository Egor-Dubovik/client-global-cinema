'use client';

import * as MaterialIcons from 'react-icons/md';

import { useRenderClient } from '@/shared/hooks/useRenderClient';

import { TypeMaterialIcon } from '../types/icon.type';

const MaterialIcon = ({ name }: { name: TypeMaterialIcon }) => {
	const { isRenderClient } = useRenderClient();
	const IconComponent = MaterialIcons[name];

	if (!isRenderClient) return null;

	return <>{IconComponent ? <IconComponent /> : <MaterialIcons.MdDragIndicator />}</>;
};

export default MaterialIcon;
