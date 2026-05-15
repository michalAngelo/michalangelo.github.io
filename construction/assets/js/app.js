document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('has-js');

	const applyStagger = (selector, baseDelay, step) => {
		document.querySelectorAll(selector).forEach((element, index) => {
			element.style.setProperty('--reveal-delay', `${baseDelay + index * step}ms`);
		});
	};

	applyStagger('.reveal-group-about', 320, 70);
	applyStagger('.reveal-group-skills', 620, 38);
	applyStagger('.reveal-group-metrics', 980, 110);

	window.requestAnimationFrame(() => {
		window.requestAnimationFrame(() => {
			document.body.classList.add('is-ready');
		});
	});

	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.4
	};
	const sections = document.querySelectorAll('main section');
	const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');

	const activateLink = id => {
		navLinks.forEach(link => {
			const isActive = link.getAttribute('href') === `#${id}`;
			link.classList.toggle('active', isActive);
		});
	};

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				activateLink(entry.target.id);
			}
		});
	}, observerOptions);

	sections.forEach(section => observer.observe(section));
});
