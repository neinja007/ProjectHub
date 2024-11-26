type SearchBarProps = {
	value: string;
	onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
	return (
		<div className='relative w-full'>
			<svg
				className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
				/>
			</svg>
			<input
				autoFocus
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder='Search awesome projects...'
				className='w-full pl-10 pr-4 py-2 text-foreground bg-[#1a1a1a] border border-[#333] rounded-lg focus:outline-none focus:border-[#555]'
			/>
		</div>
	);
};

export default SearchBar;
