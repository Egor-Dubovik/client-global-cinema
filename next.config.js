/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		MODE: process.env.REACT_APP_MODE,
		SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	sassOptions: {
		prependData: `@import "./src/app/styles/base/variables.scss";`,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.REACT_APP_SERVER_URL}/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.REACT_APP_SERVER_URL}/uploads/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
