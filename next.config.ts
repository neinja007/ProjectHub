import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
