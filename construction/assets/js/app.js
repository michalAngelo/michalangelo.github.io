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

	const quoteBox = document.querySelector('.quote-box');

	if (quoteBox) {
		const quoteText = quoteBox.querySelector('.quote-text');
		const quoteAuthor = quoteBox.querySelector('.quote-author');
		const quotesUrl = quoteBox.dataset.quotesUrl;
		const quotesLang = quoteBox.dataset.quotesLang || 'en';

		fetch(quotesUrl)
			.then(response => response.ok ? response.json() : Promise.reject(response))
			.then(quotes => {
				const localizedQuotes = quotes[quotesLang] || quotes.en || [];

				if (!localizedQuotes.length) {
					return;
				}

				const randomQuote = localizedQuotes[Math.floor(Math.random() * localizedQuotes.length)];
				quoteText.textContent = randomQuote.quote;
				quoteAuthor.textContent = randomQuote.author;
				quoteBox.hidden = false;
			})
			.catch(() => {
				quoteBox.hidden = true;
			});
	}

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
