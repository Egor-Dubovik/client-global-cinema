/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		MODE: process.env.NEXT_PUBLIC_MODE,
		SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
	},
	sassOptions: {
		prependData: `@import "./src/app/styles/base/variables.scss";`,
		prependData: `@import "./src/app/styles/mixins/styles.scss";`,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
