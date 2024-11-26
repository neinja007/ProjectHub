import { Project } from '@/types';

export const projects: Project[] = [
	{
		title: 'WebDebate',
		description: {
			german:
				'Eine Online-Plattform, die das Diskutieren und Debattieren verbessern soll. Die WebApp wurde entwickelt, um die manipulative und unordentliche Natur der traditionellen Debatten über Politik oder andere Themen zu bekämpfen. Enthält ein Argumentations-Training mit der KI.',
			english:
				'An online platform intended to improve debates and discussions. It was created to counteract the manipulative and messy nature of traditional debates over politics or other topics. Includes argumentation practice with AI.'
		},
		tags: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'NextJS',
			'ShadCN',
			'PostgreSQL',
			'Prisma',
			'Clerk',
			'OpenAI',
			'Zod',
			'React Query',
			'Lucide Icons'
		],
		link: 'https://web-debate.com',
		language: ['english'],
		status: 'UNDER DEVELOPMENT',
		priority: 'HIGH'
	},
	{
		title: 'FlashNavigator',
		description: {
			german:
				'Der FlashNavigator ermöglicht es Ihnen, schnell zu Ihren Lieblingsseiten zu navigieren. Ihre Daten werden von uns niemals geteilt oder gespeichert. Springen Sie durch das Internet in Rekordzeit.',
			english:
				'The FlashNavigator allows you to quickly navigate to your favourite pages. Your data is never shared or saved by us. Jump through the web in record time.'
		},
		tags: ['NextJS', 'TailwindCSS', 'React', 'Clerk', 'TypeScript', 'DayJS', 'Lucide Icons'],
		link: 'https://flash.navigator.vercel.app',
		github: 'https://github.com/neinja007/FlashNavigator',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'MEDIUM'
	},
	{
		title: 'LateinX',
		description: {
			german:
				'Eine App, um lateinische Deklinationen, Konjugationen und Komparationen zu lernen. Kommt mit einem Autopilot-Trainer und einer Übersicht der Ergebnisse.',
			english:
				'An app to learn Latin declensions, conjugations and comparisons. Comes with an autopilot trainer and an overview of the results.'
		},
		tags: ['NextJS', 'React', 'TailwindCSS', 'TypeScript'],
		link: 'https://lateinx.vercel.app',
		language: ['german'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Lateininator v3',
		description: {
			german:
				'Der Lateininator wurde entwickelt, um schnell und übersichtlich die lateinische Sprache zu erlernen. Es gibt Vokabeltrainer, Deklinationstrainer, Konjugationstrainer und mehr. Das Wörterbuch enthält derzeit ungefähr 1000 lateinische Wörter mit all ihren Formen.',
			english:
				'The Lateininator was created to quickly and easily learn Latin. There are vocabulary trainers, declension trainers, conjugation trainers and more. The dictionary contains about 1000 Latin words and all their forms.'
		},
		tags: [
			'NextJS',
			'TailwindCSS',
			'React',
			'React Query',
			'Stripe',
			'Zod',
			'Lucide Icons',
			'DayJS',
			'Clerk',
			'Prisma',
			'PostgreSQL',
			'TypeScript'
		],
		link: 'https://lateininator.com',
		language: ['german'],
		status: 'ACTIVE',
		priority: 'HIGH'
	},
	{
		title: 'Simulatory',
		description: {
			german:
				'Das Wort "Simulatory" ist eine Mischung aus Simulation und Labor, und das ist genau das, was dieses Projekt ist. Simulations (z.B. Conway\'s Game of Life) sind enthalten und können direkt verändert werden.',
			english:
				'The word "Simulatory" is a mixture of Simulation and Laboratory, and that is exactly what this project is for. Simulations (e.g. Conway\'s Game of Life) are included and can be modified directly.'
		},
		tags: ['NextJS', 'TailwindCSS', 'React', 'ShadCN', 'TypeScript'],
		link: 'https://simulatory.vercel.app',
		github: 'https://github.com/neinja007/Simulatory',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Planinator',
		description: {
			german:
				'Der Planinator wurde für eine Schule erstellt, um Sportturniere zu planen. Die Spielstände können von außenstehenden live mitverfolgt werden.',
			english:
				'The Planinator was created for a school to plan sports tournaments. The game progress can be followed live by others.'
		},
		tags: ['NextJS', 'TailwindCSS', 'React', 'TypeScript'],
		link: 'https://planinator.at',
		language: ['german'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'TimeTurkey',
		description: {
			german:
				'Der TimeTurkey ist ein Produktivitäts-Tool, um tägliche Aktivitäten zu vermerken und Ziele für diese zu setzen. Eine Statistik der vergangenen Tage ist ebenfalls enthalten.',
			english:
				'The TimeTurkey is a productivity tool to record daily activities and set goals for them. An overview of the past days is also included.'
		},
		tags: ['NextJS', 'TailwindCSS', 'Clerk', 'DayJS', 'Heroicons', 'Prisma', 'PostgreSQL', 'TypeScript'],
		link: 'https://time-turkey.vercel.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Lateininator v2',
		description: {
			german: 'Eine ältere Version des Lateininator. Es enthält weniger Wörter und weniger Tools.',
			english: 'An older version of the Lateininator. It includes less words and not as many tools.'
		},
		tags: ['JavaScript', 'HTML', 'Bootstrap 5'],
		link: 'https://lateininator.web.app',
		language: ['german'],
		status: 'NO LONGER MAINTAINED',
		priority: 'LOW'
	},
	{
		title: 'Coin Addict',
		description: {
			german: 'Ein Spiel, in welchem du mit Bällen versuchen musst, Münzen zu sammeln.',
			english: 'A game where you have to collect coins with balls.'
		},
		tags: ['JavaScript', 'HTML', 'P5Js'],
		link: 'https://coin-addict.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Masters of the Ground (MOT-Ground)',
		description: {
			german:
				'Ein zwei Spieler Spiel in dem es darum geht, den anderen durch Schläge, Anläufe, oder mit Hämmern zu besiegen.',
			english: 'A two player game in which you have to defeat the other player by hitting, running or hammering.'
		},
		tags: ['JavaScript', 'HTML', 'P5Js'],
		link: 'https://mot-ground.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Goons Tower Defense',
		description: {
			german:
				'Ein Spiel in dem es darum geht, die Goons zu besiegen, die versuchen, an deinen Verteidigungen vorbeizukommen.',
			english: 'A game in which you have to defeat the goons, who are trying to get past your defenses.'
		},
		tags: ['JavaScript', 'HTML', 'P5Js'],
		link: 'https://goons-td.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'HIGH'
	},
	{
		title: 'Pi Verse',
		description: {
			german: 'Eine Website zum erlernen der Nachkommastellen von Pi.',
			english: 'A website to learn the decimal places of Pi.'
		},
		tags: ['JavaScript', 'HTML'],
		link: 'https://pi-verse.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Simple Game Hub',
		description: {
			german:
				'Eine Website, auf der du einfache Spiele findest, die du spielen kannst. Es gibt vier Gewinnt, TicTacToe und mehr.',
			english: 'A website where you can find simple games to play. There are four in a row, TicTacToe and more.'
		},
		tags: ['JavaScript', 'HTML'],
		link: 'https://simplegamehub.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Pocket Escape',
		description: {
			german: 'Ein Spiel in dem du versuchst, durch Labyrinthe mit Portalen und verschlossenen Türen zu kommen.',
			english: 'A game in which you have to navigate through mazes with portals and locked doors.'
		},
		tags: ['JavaScript', 'HTML', 'P5Js'],
		link: 'https://pocket-escape.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'MEDIUM'
	},
	{
		title: 'Ice Cream Tycoon',
		description: {
			german:
				'Hier kannst du deinen eigenen Eisladen eröffnen und Eis an Menschen verkaufen. Durch Marketing auf dem Mond werden alle Eis kaufen wollen.',
			english:
				'Here you can open your own ice cream shop and sell ice cream to people. With marketing on the moon, everyone will want to buy ice cream.'
		},
		tags: ['JavaScript', 'HTML'],
		link: 'https://icecreamtycoon.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Fitinator / Gyminator',
		description: {
			german:
				'Eine Website zum Erstellen von Calisthenics-Challenges. Funktioniert für Einzelpersonen und Gruppen von bis zu vier Spielern.',
			english: 'A website to create Calisthenics challenges. Works for single players and groups of up to four players.'
		},
		tags: ['JavaScript', 'HTML', 'Bootstrap 5'],
		link: 'https://fiti-nator.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Screen Saver Pro',
		description: {
			german: 'Ein wirklich toller Bildschirmschoner mit Bällen.',
			english: 'A really cool screensaver with balls.'
		},
		tags: ['JavaScript', 'HTML', 'P5Js'],
		link: 'https://screen-saver-pro.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'LOW'
	},
	{
		title: 'Dominator',
		description: {
			german:
				'Hier musst du mit deinen Quadraten versuchen, die ganze Map einzunehmen. Du kannst gegen den Computer auf verschiedenen Schwierigkeitsgraden spielen.',
			english:
				'Here you have to try to take over the whole map with your squares. You can play against the computer on different difficulty levels.'
		},
		tags: ['JavaScript', 'HTML', 'P5Js'],
		link: 'https://domi-nator.web.app',
		language: ['english'],
		status: 'ACTIVE',
		priority: 'MEDIUM'
	}
];
