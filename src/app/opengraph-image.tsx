import { DATA } from '@/data/resume';
import { ImageResponse } from 'next/og';

export const alt = DATA.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					padding: '0 96px',
					background: '#09090b',
					color: '#fafafa',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: 120,
						height: 120,
						borderRadius: 9999,
						background: '#27272a',
						fontSize: 48,
						fontWeight: 600,
						marginBottom: 48,
					}}
				>
					{DATA.initials}
				</div>
				<div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
					{DATA.name}
				</div>
				<div style={{ fontSize: 40, color: '#a1a1aa', marginTop: 16 }}>
					{DATA.description}
				</div>
				<div style={{ fontSize: 28, color: '#71717a', marginTop: 48 }}>
					{new URL(DATA.url).host}
				</div>
			</div>
		),
		size
	);
}
