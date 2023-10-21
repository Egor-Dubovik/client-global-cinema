import axios from 'axios';

import { API_URL } from '@/shared/config/api.config';

const $api = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
});

export default $api;
