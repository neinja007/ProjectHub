import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/CV',
				destination: '/CV.pdf',
				permanent: true
			}
		];
	}
};

export default nextConfig;
