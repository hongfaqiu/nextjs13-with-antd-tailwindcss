/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
	transpilePackages: ['antd'],
	swcMinify: true,
	experimental: {
		// Required:
		appDir: true,
	},
};

module.exports = nextConfig;
