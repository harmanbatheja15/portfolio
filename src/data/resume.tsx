import { Icons } from '@/components/icons';
import { FileTextIcon } from 'lucide-react';

export const DATA = {
	name: 'Harman Batheja',
	initials: 'HB',
	url: 'https://harmanbatheja.tech',
	location: 'Patiala, Punjab, India',
	locationLink: '',
	description: 'Full Stack Web Developer',
	summary:
		'Full Stack Developer proficient in React, Node.js, and React Native, with hands-on experience building web and mobile applications. Seeking internship/full-time opportunities to further deepen my real-world software development skills.',
	skills: [
		'HTML',
		'CSS',
		'Tailwind CSS',
		'JavaScript',
		'Typescript',
		'React',
		'React Native',
		'Next.js',
		'TanStack Query',
		'Node.js',
		'Express',
		'Django',
		'Postgres',
		'MongoDB',
		'Prisma ORM',
		'Drizzle',
		'Recoil',
		'Zustand',
		'Git',
		'AWS',
	],
	navbar: [
		{
			href: 'https://drive.google.com/file/d/1-JIEB6GpK-UMcl_PVwc070jDAf_tyf_4/view',
			icon: FileTextIcon,
			label: 'Resume',
		},
	],
	contact: {
		email: 'harmanbatheja15@gmail.com',
		tel: '+918146800208',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/harmanbatheja15',
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://linkedin.com/in/harmanbatheja15',
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: 'X',
				url: 'https://x.com/harmanbatheja15',
				icon: Icons.x,

				navbar: true,
			},
			email: {
				name: 'Send Email',
				url: '#',
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: 'EthosX (YC S22)',
			href: 'https://ethosx.finance/',
			badges: [],
			location: 'Remote',
			title: 'Full Stack Developer Intern',
			logoUrl:
				'https://media.licdn.com/dms/image/v2/D4D0BAQGz_UyvjUWnog/company-logo_200_200/company-logo_200_200/0/1727457455242/ethosx_logo?e=2147483647&v=beta&t=l3K_Cu6AtbLbdBXxSMWr4Jpt1lUp8agOHwuh_Qp2PRU',
			start: 'June 2025',
			end: 'Present',
			description: 'Contributed to Operps, a DeFi trading platform, working on both frontend and backend. Implemented new features, optimized APIs, and improved UI/UX for a smoother trading experience.',
		},
		{
			company: 'Kana Labs',
			href: 'https://kanalabs.io',
			badges: [],
			location: 'Remote',
			title: 'Frontend Developer Intern',
			logoUrl:
				'https://app.kanalabs.io/_next/static/media/Small-logo.1b003dc5.svg',
			start: 'July 2024',
			end: 'Sep 2024',
			description:
				'Developed 10+ Landing Pages and frontend features using React and Next.js, ensuring smooth and responsive user experiences. Managed application state with Zustand to ensure efficient and predictable data flow across the app.',
		},
	],

	education: [
		{
			school: 'Thapar Institute of Engineering and Technology',
			href: 'https://www.thapar.edu/',
			degree: 'B.Eng. in AI ML',
			logoUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FGD2_H-AD1RqGQnIqngM6Mcv0CA4UjH1fg&s',
			target: '_blank',
			start: '2025',
			end: '2028',
		},
		{
			school: 'Thapar Polytechnic College',
			href: 'https://www.thapar.edu/',
			degree: 'Diploma in Computer Science',
			logoUrl:
				'https://www.studyjankari.com/images/logo/ebe74b43800136aaca1f1de5daa49eb1.png',
			target: '_blank',
			start: '2022',
			end: '2025',
		},
	],

	projects: [
		{
			title: 'Course Selling Platform',
			href: 'https://github.com/harmanbatheja15/course-selling-app',
			dates: '',
			active: true,
			description: `Created a platform allowing instructors to register and launch personalized website to sell their courses. Instructors can upload videos, set pricing, and manage content, while students can browse and purchase courses directly from each instructor's site.`,
			technologies: [
				'React',
				'Typescript',
				'Node.js',
				'Express',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'S3 Bucket',
				'Razorpay',
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/harmanbatheja15/course-selling-app',
					icon: <Icons.github className='size-3' />,
				},
			],
			image: '/course-selling.png',
			video: '',
		},
		{
			title: 'Alumni Association Website',
			href: 'https://github.com/harmanbatheja15/AlumniAssociation',
			dates: '',
			active: true,
			description:
				'Built a role-based website for students, alumni, and faculty, allowing students to create profiles, explore job opportunities, and access news and events. The platform offers a personalized experience for each user type.',
			technologies: [
				'React',
				'Node.js',
				'Express',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/harmanbatheja15/AlumniAssociation',
					icon: <Icons.github className='size-3' />,
				},
			],
			image: '/alumni-association.png',
			video: '',
		},
		{
			title: `India's Got Latent Mobile App`,
			href: 'https://github.com/harmanbatheja15/indias-got-latent',
			dates: '',
			active: true,
			description:
				'Developed a mobile app using React Native for Samay Raina, allowing users to watch his videos and purchase memberships.',
			technologies: ['React Native', 'NativeWind'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/harmanbatheja15/indias-got-latent',
					icon: <Icons.github className='size-3' />,
				},
			],
			image: '/latent-app.png',
			video: '',
		},
		{
			title: 'Ice Staking Frontend',
			href: 'https://ice-staking-frontend.vercel.app/',
			dates: '',
			active: true,
			description:
				'Designed, developed and sold animated UI components for developers.',
			technologies: ['React', 'TailwindCSS'],
			links: [
				{
					type: 'Website',
					href: 'https://ice-staking-frontend.vercel.app/',
					icon: <Icons.globe className='size-3' />,
				},
				{
					type: 'Source',
					href: 'https://github.com/harmanbatheja15/ice-staking-frontend',
					icon: <Icons.github className='size-3' />,
				},
			],
			image: '/ice-staking.png',
			video: '',
		},
		{
			title: 'Kanalabs: Landing Page',
			href: 'https://landing-page-gamma-five-76.vercel.app/',
			dates: '',
			active: true,
			description:
				'Developed the main landing page for a Kana Labs, focusing on clean design, user engagement, and smooth navigation. Ensured responsive design for optimal viewing across devices and worked closely with the team to align the page with brand goals and users expectations.',
			technologies: ['React', 'TailwindCSS'],
			links: [
				{
					type: 'Website',
					href: 'https://landing-page-gamma-five-76.vercel.app/',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: '/landing-page.png',
			video: '',
		},
		{
			title: 'Kanalabs: Redefining Perpetual Trading',
			href: 'https://kanalabs-landing-page.vercel.app/',
			dates: '',
			active: true,
			description:
				'Created a dedicated landing page for Perpetual Trading for Kana Labs, highlighting key features and benefits.',
			technologies: ['React', 'TailwindCSS'],
			links: [
				{
					type: 'Website',
					href: 'https://kanalabs-landing-page.vercel.app/',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: '/perpetual-trading.png',
			video: '',
		},
	],
} as const;
