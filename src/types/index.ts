export type Language = 'german' | 'english';

export type Tag =
	| 'React'
	| 'TypeScript'
	| 'TailwindCSS'
	| 'NextJS'
	| 'HTML'
	| 'ShadCN'
	| 'PostgreSQL'
	| 'Prisma'
	| 'Clerk'
	| 'OpenAI'
	| 'Zod'
	| 'React Query'
	| 'Lucide Icons'
	| 'DayJS'
	| 'Stripe'
	| 'Heroicons'
	| 'JavaScript'
	| 'Bootstrap 5'
	| 'P5Js';

export type Project = {
	title: string;
	description: { [L in Language]: string };
	tags: Tag[];
	link?: string;
	github?: string;
	language: Language[];
	status?: 'ACTIVE' | 'NO LONGER MAINTAINED' | 'UNDER DEVELOPMENT';
	priority: 'HIGH' | 'MEDIUM' | 'LOW';
};
