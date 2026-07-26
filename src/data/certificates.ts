export interface CertificateItem {
	id: string
	src: string
	width: number
	height: number
	alt: string
	title: string
}

export const certificates: CertificateItem[] = [
	{
		id: 'bgmu',
		src: '/images/certificates/bgmu.svg',
		width: 800,
		height: 1100,
		alt: 'Диплом БГМУ, 2022',
		title: 'БГМУ — 2022',
	},
	{
		id: 'gestalt-1',
		src: '/images/certificates/gestalt-1.svg',
		width: 1100,
		height: 800,
		alt: 'Сертификат: 1 ступень гештальт-терапии, 2023',
		title: '1 ступень гештальт-терапии — 2023',
	},
	{
		id: 'psychiatry',
		src: '/images/certificates/psychiatry.svg',
		width: 850,
		height: 1200,
		alt: 'Сертификат: врач-психиатр детский, 2023–2025',
		title: 'Врач-психиатр детский — 2023–2025',
	},
	{
		id: 'clinical-gestalt',
		src: '/images/certificates/clinical-gestalt.svg',
		width: 1000,
		height: 750,
		alt: 'Сертификат: клинические аспекты в практике гештальт-терапевта, 2025',
		title: 'Клинические аспекты гештальт-терапии — 2025',
	},
	{
		id: 'psychotherapist',
		src: '/images/certificates/psychotherapist.svg',
		width: 820,
		height: 1150,
		alt: 'Сертификат: врач-психотерапевт, 2025',
		title: 'Врач-психотерапевт — 2025',
	},
	{
		id: 'gestalt-2',
		src: '/images/certificates/gestalt-2.svg',
		width: 1050,
		height: 780,
		alt: 'Сертификат: 2 ступень гештальт-терапии, 2026',
		title: '2 ступень гештальт-терапии — 2026',
	},
	{
		id: 'psychologist',
		src: '/images/certificates/psychologist.svg',
		width: 900,
		height: 1200,
		alt: 'Диплом: психолог, преподаватель психологии, 2026',
		title: 'Психолог. Преподаватель психологии — 2026',
	},
	{
		id: 'jung',
		src: '/images/certificates/jung.svg',
		width: 1120,
		height: 820,
		alt: 'Сертификат: аналитическая психотерапия и психология К.Г. Юнга, 2028',
		title: 'Аналитическая психотерапия К.Г. Юнга — 2028',
	},
]
