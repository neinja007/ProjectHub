import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'external-content.duckduckgo.com'
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/CV',
				destination: '/CV-EN.pdf',
				permanent: true
			},
			{
				source: '/CV-en',
				destination: '/CV-EN.pdf',
				permanent: true
			},
			{
				source: '/CV-de',
				destination: '/CV-DE.pdf',
				permanent: true
			}
		];
	}
};

export default nextConfig;
