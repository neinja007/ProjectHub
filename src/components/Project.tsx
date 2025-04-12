import { Tag, Project as ProjectType, Language } from '@/types';
import Link from 'next/link';
import German from './German';
import English from './English';

const mapTagToColor: Record<Tag, string> = {
	React: 'bg-sky-400 text-black',
	TypeScript: 'bg-blue-600 text-white',
	TailwindCSS: 'bg-sky-400 text-white',
	NextJS: 'bg-black text-white',
	HTML: 'bg-orange-600 text-white',
	ShadCN: 'bg-slate-900 text-white',
	PostgreSQL: 'bg-blue-800 text-white',
	Prisma: 'bg-pink-400 text-black',
	Clerk: 'bg-blue-800 text-white',
	OpenAI: 'bg-green-700 text-white',
	Zod: 'bg-sky-800 text-white',
	'React Query': 'bg-gray-800 text-white',
	'Lucide Icons': 'bg-purple-800 text-white',
	DayJS: 'bg-orange-500 text-black',
	Stripe: 'bg-purple-600 text-white',
	Heroicons: 'bg-black text-white',
	JavaScript: 'bg-yellow-300 text-black',
	'Bootstrap 5': 'bg-purple-800 text-white',
	P5Js: 'bg-red-500 text-white'
};

type ProjectProps = {
	project: ProjectType;
	language: Language;
	viewMode: 'compact' | 'expanded';
};

const Project = ({ project, language, viewMode }: ProjectProps) => {
	if (viewMode === 'expanded') {
		return (
			<div className='grid gap-6 w-full max-w-4xl mb-5'>
				<div className='bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-[#555] transition-colors'>
					<h2 className='text-2xl font-semibold mb-3 flex justify-between'>
						<div className='flex items-center gap-2'>
							<div className='border mr-2 rounded-md overflow-hidden w-auto h-auto'>
								{project.language.includes('german') && <German />}
								{project.language.includes('english') && <English />}
							</div>
							<span>{project.title}</span>
							{project.status && (
								<span
									className={`text-sm font-normal px-2 py-0.5 rounded-full ml-2 ${
										project.status === 'ACTIVE'
											? 'bg-green-500/20 text-green-500'
											: project.status === 'UNDER DEVELOPMENT'
											? 'bg-yellow-500/20 text-yellow-500'
											: 'bg-red-500/20 text-red-500'
									}`}
								>
									{project.status}
								</span>
							)}
						</div>
						{!!project.link && (
							<Link href={project.link} className='text-base italic font-serif text-blue-500 underline'>
								{project.link.replace('https://', '')}
							</Link>
						)}
					</h2>
					<p className='text-[#999] mb-4'>
						{project.description[language]}
						{!!project.github && (
							<Link
								href={project.github}
								className='float-end flex items-center gap-2 text-sky-500 mt-3 text-base font-serif hover:text-sky-400'
							>
								<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
									<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
								</svg>
								{project.github.replace('https://', '')}
							</Link>
						)}
					</p>
					<div className='flex flex-wrap gap-2'>
						{project.tags.map((tag) => (
							<span key={tag} className={`px-3 py-1 text-sm bg-[#333] rounded-full ${mapTagToColor[tag as Tag]}`}>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='flex mb-1 items-center justify-between p-2 px-3 border border-[#333] rounded-lg'>
				<div className='flex items-center gap-2'>
					<div className='flex gap-1'>
						{project.language.includes('german') && (
							<div className='border rounded-md overflow-hidden w-6 h-auto'>
								<German />
							</div>
						)}
						{project.language.includes('english') && (
							<div className='border rounded-md overflow-hidden w-6 h-auto'>
								<English />
							</div>
						)}
					</div>
					<span>{project.title}</span>
					{project.status && (
						<span
							className={`text-sm font-normal px-2 py-0.5 rounded-full ml-2 ${
								project.status === 'ACTIVE'
									? 'bg-green-500/20 text-green-500'
									: project.status === 'UNDER DEVELOPMENT'
									? 'bg-yellow-500/20 text-yellow-500'
									: 'bg-red-500/20 text-red-500'
							}`}
						>
							{project.status}
						</span>
					)}
				</div>
				{project.link && (
					<Link href={project.link} className='text-base italic font-serif text-blue-500 underline'>
						{project.link.replace('https://', '')}
					</Link>
				)}
			</div>
		);
	}
};

export default Project;
