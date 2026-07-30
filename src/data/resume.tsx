import { Icons } from '@/components/icons';
import { FileTextIcon } from 'lucide-react';

export const DATA = {
	name: 'Harman Batheja',
	initials: 'HB',
	url: 'https://harmanbatheja.tech',
	location: 'Patiala, Punjab, India',
	locationLink: '',
	description: 'Full Stack & Mobile App Developer',
	summary:
		// 'Full Stack Developer proficient in React, Node.js, and React Native, with hands-on experience building web and mobile applications. Seeking full-time opportunities to further deepen my real-world software development skills.',
		'Full Stack Engineer with 2+ years of experience building production web and mobile applications using TypeScript, React, Next.js, Node.js, PostgreSQL, and React Native. Experienced in developing end-to-end product features, scalable backend services, REST APIs, and modern frontend applications. Passionate about Web3, DeFi, and building reliable software in fast-paced startup environments.',

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
		'Solana',
		'Wallet Integration',
		'DeFi',
		'Django',
		'Postgres',
		'MongoDB',
		'Prisma ORM',
		'Drizzle',
		'Recoil',
		'Zustand',
		'Git',
		'AWS',
		'Claude',
	],
	navbar: [
		{
			href: 'https://drive.google.com/file/d/1FJAiuB258vhU6QlRAb_A4A-Cxep5Vrbr/view',
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
			company: 'Interstate',
			href: 'https://interstate.so/',
			badges: [],
			location: 'Remote',
			title: 'Full Stack Developer',
			logoUrl:
				'https://cdn.prod.website-files.com/689ad3276bc428c70432ae22/689ad3276bc428c70432ae83_logo.png',
			start: 'Oct 2025',
			end: 'Present',
			description: '',
			point1:
				'Building a production-grade memecoin trading platform on Solana.',
			point2:
				'Developing full-stack features using React, TypeScript, Node.js, and PostgreSQL.',
			point3:
				'Implementing turnkey wallet authentication, transaction signing, backend APIs, and real-time trading workflows.',
			point4:
				'Designing scalable application architecture focused on performance and reliability.',
		},
		{
			company: 'Fliq by EthosX (YC S22)',
			href: 'https://ethosx.finance/',
			badges: [],
			location: 'Remote',
			title: 'Full Stack Developer',
			logoUrl:
				'https://media.licdn.com/dms/image/v2/D4D0BAQGz_UyvjUWnog/company-logo_200_200/company-logo_200_200/0/1727457455242/ethosx_logo?e=2147483647&v=beta&t=l3K_Cu6AtbLbdBXxSMWr4Jpt1lUp8agOHwuh_Qp2PRU',
			start: 'Apr 2025',
			end: 'Nov 2025',
			description: '',
			point1:
				'Built full-stack features for Fliq, a creator-driven prediction markets platform on Aptos.',
			point2:
				'Developed frontend interfaces and backend APIs for Operps, a DeFi trading platform',
			point3:
				'Collaborated with product and engineering teams to deliver production-ready features.',
		},
		{
			company: '100xDevs',
			href: 'https://100xdevs.com/',
			badges: [],
			location: 'Remote',
			title: 'Full Stack Developer',
			logoUrl:
				'https://yt3.googleusercontent.com/COevS00sZDbVXOwMeI4JspPSfvjQTxsnC1LSTSsfI15N0P2ziQph2j4j4tNIb38BTmvPR5oB=s900-c-k-c0x00ffffff-no-rj',
			start: 'Oct 2024',
			end: 'March 2025',
			description: '',
			point1:
				'Built product features for a mobile learning platform serving thousands of students.',
			point2:
				'Revamped the 100xDevs website, improving responsiveness and user experience.',
			point3:
				'Worked across frontend and backend to ship production-ready features.',
		},
		{
			company: 'Xyra Labs',
			href: 'https://www.xyralabs.io/',
			badges: [],
			location: 'Remote',
			title: 'Frontend Developer Intern',
			logoUrl:
				'https://media.licdn.com/dms/image/v2/D560BAQFy13gXcvBqeg/company-logo_200_200/B56ZoWH8I2KEAI-/0/1761307772470/xyralabs_logo?e=2147483647&v=beta&t=ylHMfWJni_ludXLTUL9or_X-LIK6hvJfM2hnr37L6CQ',
			start: 'July 2024',
			end: 'Sep 2024',
			description: '',
			point1:
				'Developed responsive user interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.',
			point2:
				'Optimized frontend performance and resolved production issues to improve application stability.',
			point3:
				'Integrated REST APIs and collaborated closely with backend engineers to deliver new features.',
		},
		{
			company: 'Cambridge Innovation Labs',
			href: 'https://cambridgeinnovationlabs.com',
			badges: [],
			location: 'Remote',
			title: 'Full Stack Developer Intern',
			logoUrl: 'https://cambridgeinnovationlabs.com/logo.png',
			start: 'Jan 2024',
			end: 'June 2024',
			description: '',
			point1:
				'Developed frontend and backend features for Platonia, an Innovate UK-supported learning platform.',
			point2:
				'Built scalable application features and collaborated in a remote engineering team to deliver production functionality',
			point3: '',
		},
	],

	education: [
		{
			school: 'Asra College of Engineering and Technology',
			href: 'https://www.asracollege.edu.in/top-engineering-colleges-in-punjab-india/',
			degree: 'B.E. in Computer Science',
			logoUrl:
				'https://www.asracollege.edu.in/wp-content/uploads/2018/03/Capture.jpg',
			target: '_blank',
			start: '2025',
			end: '2028',
		},
		{
			school: 'Thapar Polytechnic College',
			href: 'http://www.tpc.ac.in/',
			degree: 'Diploma in Computer Science',
			logoUrl: 'http://tpc.ac.in/images/logo.png',
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
