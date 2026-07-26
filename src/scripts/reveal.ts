function initReveal() {
	const root = document.documentElement
	root.classList.add('js-reveal')

	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
	const singles = document.querySelectorAll<HTMLElement>(
		'[data-reveal]:not(.reveal-stagger [data-reveal])',
	)
	const groups = document.querySelectorAll<HTMLElement>('.reveal-stagger')

	const reveal = (el: Element) => el.classList.add('is-revealed')

	const revealAll = () => {
		document
			.querySelectorAll<HTMLElement>('[data-reveal]')
			.forEach(reveal)
	}

	if (reduced || !('IntersectionObserver' in window)) {
		revealAll()
		return
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue

				const target = entry.target as HTMLElement

				if (target.classList.contains('reveal-stagger')) {
					target
						.querySelectorAll<HTMLElement>('[data-reveal]')
						.forEach(reveal)
				} else {
					reveal(target)
				}

				observer.unobserve(target)
			}
		},
		{
			rootMargin: '0px 0px -8% 0px',
			threshold: 0.12,
		},
	)

	singles.forEach((el) => observer.observe(el))
	groups.forEach((el) => observer.observe(el))
}

initReveal()
document.addEventListener('astro:page-load', initReveal)
