(function () {
    const body = document.body;
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentYear = document.getElementById('current-year');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    if (navToggle && mainNav) {
        const closeNav = function () {
            body.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        navToggle.addEventListener('click', function () {
            const isOpen = body.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', closeNav);
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 860) {
                closeNav();
            }
        });
    }

    const revealTargets = document.querySelectorAll(
        '.hero-copy, .hero-visual, .platform-copy, .platform-visual, ' +
        '.services-section .service-card, .showcase-section .showcase-grid figure, ' +
        '.cases-section .cases-grid article, .metrics-section .metrics-grid article, .contact-copy, .contact-form, .footer-brand, .footer-links'
    );

    if (revealTargets.length > 0) {
        body.classList.add('anim-ready');

        revealTargets.forEach(function (element, index) {
            element.classList.add('reveal');
            element.style.setProperty('--reveal-delay', String((index % 4) * 70) + 'ms');
        });

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            revealTargets.forEach(function (element) {
                element.classList.add('reveal-visible');
            });
        } else {
            const revealObserver = new IntersectionObserver(
                function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('reveal-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: '0px 0px -8% 0px'
                }
            );

            revealTargets.forEach(function (element) {
                revealObserver.observe(element);
            });
        }
    }

    const trustStrip = document.querySelector('.trust-strip');
    const trustLogos = document.querySelectorAll('.trust-logos img');

    if (trustStrip && trustLogos.length > 0) {
        trustStrip.classList.add('logo-fade-ready');
        const logoStartDelayMs = 90;

        trustLogos.forEach(function (logo, index) {
            logo.style.setProperty('--logo-delay', String(logoStartDelayMs + index * 75) + 'ms');
        });

        const runLogoFade = function () {
            trustStrip.classList.remove('logo-fade-active');
            // Force a reflow so the animation can restart on each entry.
            void trustStrip.offsetHeight;
            trustStrip.classList.add('logo-fade-active');
        };

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            trustStrip.classList.add('logo-fade-active');
        } else {
            const logoObserver = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            runLogoFade();
                            return;
                        }

                        trustStrip.classList.remove('logo-fade-active');
                    });
                },
                {
                    threshold: 0.45,
                    rootMargin: '0px 0px -12% 0px'
                }
            );

            logoObserver.observe(trustStrip);
        }
    }

    const serviceSection = document.querySelector('.services-section');
    const serviceCards = document.querySelectorAll('.services-section .service-card');

    if (serviceSection && serviceCards.length > 0) {
        serviceSection.classList.add('block-fade-ready');
        const serviceStartDelayMs = 90;

        serviceCards.forEach(function (card, index) {
            card.style.setProperty('--block-delay', String(serviceStartDelayMs + index * 80) + 'ms');
        });

        const runServiceFade = function () {
            serviceSection.classList.remove('block-fade-active');
            // Force a reflow so the animation can replay on each entry.
            void serviceSection.offsetHeight;
            serviceSection.classList.add('block-fade-active');
        };

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            serviceSection.classList.add('block-fade-active');
        } else {
            const serviceObserver = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            runServiceFade();
                            return;
                        }

                        serviceSection.classList.remove('block-fade-active');
                    });
                },
                {
                    threshold: 0.28,
                    rootMargin: '0px 0px -10% 0px'
                }
            );

            serviceObserver.observe(serviceSection);
        }
    }

    const casesSection = document.querySelector('.cases-section');
    const caseCards = document.querySelectorAll('.cases-section .cases-grid article');

    if (casesSection && caseCards.length > 0) {
        casesSection.classList.add('block-fade-ready');
        const casesStartDelayMs = 90;

        caseCards.forEach(function (card, index) {
            card.style.setProperty('--block-delay', String(casesStartDelayMs + index * 95) + 'ms');
        });

        const runCasesFade = function () {
            casesSection.classList.remove('block-fade-active');
            // Force a reflow so the animation can replay on each entry.
            void casesSection.offsetHeight;
            casesSection.classList.add('block-fade-active');
        };

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            casesSection.classList.add('block-fade-active');
        } else {
            const casesObserver = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            runCasesFade();
                            return;
                        }

                        casesSection.classList.remove('block-fade-active');
                    });
                },
                {
                    threshold: 0.3,
                    rootMargin: '0px 0px -10% 0px'
                }
            );

            casesObserver.observe(casesSection);
        }
    }

    const methodSection = document.querySelector('.method-section');
    const dominoItems = document.querySelectorAll('.method-section .method-grid article');

    if (methodSection && dominoItems.length > 0) {
        methodSection.classList.add('domino-ready');
        const dominoStartDelayMs = 150;

        dominoItems.forEach(function (item, index) {
            item.style.setProperty('--domino-delay', String(dominoStartDelayMs + index * 130) + 'ms');
        });

        const runDominoAnimation = function () {
            methodSection.classList.remove('domino-active');
            // Force a reflow so the same animation can replay on re-entry.
            void methodSection.offsetHeight;
            methodSection.classList.add('domino-active');
        };

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            methodSection.classList.add('domino-active');
        } else {
            const dominoObserver = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            runDominoAnimation();
                            return;
                        }

                        methodSection.classList.remove('domino-active');
                    });
                },
                {
                    threshold: 0.34,
                    rootMargin: '0px 0px -10% 0px'
                }
            );

            dominoObserver.observe(methodSection);
        }
    }

    const metricsSection = document.querySelector('.metrics-section');
    const counters = document.querySelectorAll('.counter');

    if (metricsSection && counters.length > 0) {
        const setCounterToFinalValue = function (counter) {
            const target = Number(counter.dataset.target || 0);
            const suffix = counter.dataset.suffix || '';
            counter.classList.remove('is-typing');
            counter.textContent = String(target) + suffix;
        };

        const setCounterToStartValue = function (counter) {
            const suffix = counter.dataset.suffix || '';
            counter.classList.remove('is-typing');
            counter.textContent = suffix === '/7' ? '' : '0' + suffix;
        };

        let metricsAnimationCycle = 0;

        const animateCountUp = function (counter, startDelayMs, cycleId) {
            const target = Number(counter.dataset.target || 0);
            const suffix = counter.dataset.suffix || '';
            const duration = 1220;
            const startTime = performance.now() + startDelayMs;

            const step = function (timestamp) {
                if (cycleId !== metricsAnimationCycle) {
                    return;
                }

                if (timestamp < startTime) {
                    window.requestAnimationFrame(step);
                    return;
                }

                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(target * eased);
                counter.textContent = String(value) + suffix;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                    return;
                }

                counter.textContent = String(target) + suffix;
            };

            window.requestAnimationFrame(step);
        };

        const animateTypewriterCounter = function (counter, startDelayMs, cycleId) {
            const target = Number(counter.dataset.target || 0);
            const suffix = counter.dataset.suffix || '';
            const finalText = String(target) + suffix;
            const duration = 640;
            const startTime = performance.now() + startDelayMs;

            const step = function (timestamp) {
                if (cycleId !== metricsAnimationCycle) {
                    counter.classList.remove('is-typing');
                    return;
                }

                if (timestamp < startTime) {
                    counter.classList.add('is-typing');
                    window.requestAnimationFrame(step);
                    return;
                }

                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const charCount = Math.max(1, Math.ceil(finalText.length * progress));
                counter.textContent = finalText.slice(0, charCount);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                    return;
                }

                counter.textContent = finalText;
                counter.classList.remove('is-typing');
            };

            window.requestAnimationFrame(step);
        };

        const runMetricsAnimations = function () {
            metricsAnimationCycle += 1;
            const cycleId = metricsAnimationCycle;
            const startDelayMs = 90;
            const stepDelayMs = 110;

            counters.forEach(setCounterToStartValue);

            counters.forEach(function (counter, index) {
                const delay = startDelayMs + index * stepDelayMs;
                const suffix = counter.dataset.suffix || '';

                if (suffix === '/7') {
                    animateTypewriterCounter(counter, delay, cycleId);
                    return;
                }

                animateCountUp(counter, delay, cycleId);
            });
        };

        const resetMetricsAnimations = function () {
            metricsAnimationCycle += 1;
            counters.forEach(setCounterToStartValue);
        };

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            counters.forEach(setCounterToFinalValue);
            return;
        }

        resetMetricsAnimations();

        const metricsObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        runMetricsAnimations();
                        return;
                    }

                    resetMetricsAnimations();
                });
            },
            {
                threshold: 0.5,
                rootMargin: '0px 0px -12% 0px'
            }
        );

        metricsObserver.observe(metricsSection);
    }
})();
