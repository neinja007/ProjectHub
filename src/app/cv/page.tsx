import Link from 'next/link';

const Page = () => {
	return (
		<div>
			Redirecting to{' '}
			<Link href='/CV-EN.pdf' className='text-blue-500'>
				CV-EN.pdf
			</Link>
			...
		</div>
	);
};

export default Page;
