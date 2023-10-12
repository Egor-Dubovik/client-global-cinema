/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		MODE: process.env.REACT_APP_MODE,
		SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
};

module.exports = nextConfig;
