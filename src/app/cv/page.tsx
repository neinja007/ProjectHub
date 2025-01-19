import Link from 'next/link';

const Page = () => {
	return (
		<div>
			Redirecting to{' '}
			<Link href='/CV.pdf' className='text-blue-500'>
				CV.pdf
			</Link>
			...
		</div>
	);
};

export default Page;
