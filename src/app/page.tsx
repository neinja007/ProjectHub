'use client';

import English from '@/components/English';
import German from '@/components/German';
import Project from '@/components/Project';
import SearchBar from '@/components/SearchBar';
import { projects } from '@/data/projects';
import { Language } from '@/types';
import { useState } from 'react';

export default function Home() {
	const [searchQuery, setSearchQuery] = useState('');
	const [language, setLanguage] = useState<Language>('english');
	const [viewMode, setViewMode] = useState<'compact' | 'expanded'>('compact');

	return (
		<div className='flex flex-col items-center min-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<h1 className='text-6xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent tracking-tight'>
				Neinja&apos;s Project Hub
			</h1>
			<div className='w-full max-w-md'>
				<div className='flex flex-col gap-4'>
					<div className='flex gap-4 items-center'>
						<SearchBar value={searchQuery} onChange={setSearchQuery} />
						<div className='flex gap-2'>
							<button
								onClick={() => setLanguage('german')}
								aria-label='German'
								className={`transition-all border rounded-sm overflow-hidden w-12 h-auto ${
									language === 'german' ? '' : 'opacity-50'
								}`}
							>
								<German />
							</button>
							<button
								onClick={() => setLanguage('english')}
								aria-label='English'
								className={`transition-all border rounded-sm overflow-hidden w-12 h-auto ${
									language === 'english' ? '' : 'opacity-50'
								}`}
							>
								<English />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='grid w-full max-w-4xl'>
				<div className='flex justify-end gap-4 mb-3'>
					<button
						onClick={() => setViewMode('compact')}
						className={`px-4 py-2 rounded-lg border ${
							viewMode === 'compact' ? 'bg-[#333] border-[#555]' : 'bg-[#1a1a1a] border-[#333] hover:border-[#555]'
						} transition-colors`}
					>
						{language === 'german' ? 'Kompakt' : 'Compact'}
					</button>
					<button
						onClick={() => setViewMode('expanded')}
						className={`px-4 py-2 rounded-lg border ${
							viewMode === 'expanded' ? 'bg-[#333] border-[#555]' : 'bg-[#1a1a1a] border-[#333] hover:border-[#555]'
						} transition-colors`}
					>
						{language === 'german' ? 'Erweitert' : 'Expanded'}
					</button>
				</div>
				{projects
					.filter(
						(project) =>
							project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
							project.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
							project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
							(project.link && project.link.toLowerCase().includes(searchQuery.toLowerCase())) ||
							(project.github && project.github.toLowerCase().includes(searchQuery.toLowerCase()))
					)
					.sort((a, b) => {
						const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
						return priorityOrder[a.priority] - priorityOrder[b.priority];
					})
					.map((project) => (
						<Project key={project.title} project={project} language={language} viewMode={viewMode} />
					))}
			</div>
		</div>
	);
}
