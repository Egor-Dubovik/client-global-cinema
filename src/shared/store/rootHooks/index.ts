import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { TypeAppDispatch, TypeRootState } from '../index';

export const useAppDispatch = () => useDispatch<TypeAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
