'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

interface ResumeCardProps {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	target?: string;
	badges?: readonly string[];
	period: string;
	description?: string;
}
export const ResumeCard = ({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	target,
	badges,
	period,
	description,
}: ResumeCardProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<Link
			href={href || '#'}
			target={target}
			className='block cursor-pointer'
			onClick={handleClick}
		>
			<Card className='flex'>
				<div className='flex-none'>
					<Avatar className='border size-12 m-auto bg-muted-background dark:bg-foreground'>
						<AvatarImage
							src={logoUrl}
							alt={altText}
							className='object-contain'
						/>
						<AvatarFallback>{altText[0]}</AvatarFallback>
					</Avatar>
				</div>
				<div className='flex-grow ml-4 items-center flex-col group'>
					<CardHeader>
						<div className='flex items-center justify-between gap-x-2 text-base'>
							<h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'>
								{title}
								{badges && (
									<span className='inline-flex gap-x-1'>
										{badges.map((badge, index) => (
											<Badge
												variant='secondary'
												className='align-middle text-xs'
												key={index}
											>
												{badge}
											</Badge>
										))}
									</span>
								)}
							</h3>
							<div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
								{period}
							</div>
						</div>
						{subtitle && <div className='font-sans text-xs'>{subtitle}</div>}
					</CardHeader>

					<div className='mt-2 text-xs sm:text-sm text-gray-200'>
						{description}
					</div>
				</div>
			</Card>
		</Link>
	);
};
