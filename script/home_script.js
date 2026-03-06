(function () {
    const body = document.body;
    const brandLink = document.querySelector('.brand');
    const navShell = document.querySelector('.nav-shell');
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const navCta = document.querySelector('.nav-cta');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langToggle = document.querySelector('.lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const langCode = document.querySelector('.lang-code');
    const langOptions = document.querySelectorAll('.lang-option');
    const metaDescription = document.querySelector('meta[name="description"]');
    const currentYear = document.getElementById('current-year');
    const footerLinks = document.querySelectorAll('.footer-links a');
    const copyrightText = document.getElementById('copyright-text');
    const trustStrip = document.querySelector('.trust-strip');
    const showcaseSectionEl = document.querySelector('.showcase-section');
    const metricsSectionLabelEl = document.querySelector('.metrics-section');
    const heroBadgesContainer = document.querySelector('.hero-badges');
    const brandImage = document.querySelector('.brand img');
    const brandWordmark = document.querySelector('.brand-wordmark');
    const heroImage = document.querySelector('.hero-visual img');
    const platformImage = document.querySelector('.platform-visual img');
    const serviceIcons = document.querySelectorAll('.services-grid .service-card img');
    const showcaseImages = document.querySelectorAll('.showcase-grid img');
    const footerLogo = document.querySelector('.footer-brand img');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const globalAnimationDelayMs = 140;
    const storageKey = 'oktanet-language';

    const setText = function (element, text) {
        if (element && typeof text === 'string') {
            element.textContent = text;
        }
    };

    const setTextList = function (elements, texts) {
        if (!elements || !texts) {
            return;
        }

        elements.forEach(function (element, index) {
            if (typeof texts[index] === 'string') {
                element.textContent = texts[index];
            }
        });
    };

    const setAltList = function (elements, texts) {
        if (!elements || !texts) {
            return;
        }

        elements.forEach(function (element, index) {
            if (typeof texts[index] === 'string') {
                element.alt = texts[index];
            }
        });
    };

    const translations = {
        es: {
            htmlLang: 'es',
            title: 'Oktanet | Automatización y Auditoría de Redes',
            metaDescription: 'Oktanet ayuda a equipos de TI a automatizar, auditar y mantener redes empresariales con dashboards detallados y operación centralizada.',
            brandAria: 'Ir al inicio',
            navAria: 'Principal',
            navToggleOpen: 'Abrir menú',
            navToggleClose: 'Cerrar menú',
            navLinks: ['Plataforma', 'Servicios', 'Metodología', 'Casos de uso', 'Quiénes somos', 'Contacto'],
            navCta: 'Solicitar Demo',
            langToggleAria: 'Cambiar idioma',
            langCode: 'ES',
            brandLogoAlt: 'Logo de Oktanet',
            langOptionLabels: {
                es: 'Español',
                en: 'English'
            },
            trustAria: 'Tecnologías compatibles',
            showcaseAria: 'Paneles de ejemplo',
            metricsAria: 'Impacto operativo',
            metricsEyebrow: 'Impacto medible',
            metricsTitle: 'Resultados operativos que se reflejan desde las primeras iteraciones.',
            metricsIntro: 'Métricas observadas en proyectos de automatización, auditoría y control continuo multi-vendor.',
            heroEyebrow: 'Operación de red para equipos modernos',
            heroTitle: 'Automatiza, audita y optimiza toda tu infraestructura desde un solo panel.',
            heroBody: 'Oktanet centraliza visibilidad de inventario, cumplimiento de configuración, cambios de software y topología para que tu equipo pase de operar en modo reactivo a trabajar con control continuo.',
            heroActions: ['Hablar con ventas', 'Conocer Oktavia'],
            heroBadgesAria: 'Puntos clave de la plataforma',
            heroBadges: ['Multi-vendor listo', 'Auditoría continua', 'Automatización guiada'],
            heroPoints: [
                'Dashboards de auditoría por sitio, equipo y fabricante.',
                'Cumplimiento técnico y operativo con evidencia exportable.',
                'Flujos de mantenimiento y cambios con menos intervención manual.'
            ],
            trustLabel: 'Compatible con infraestructura multi-vendor:',
            platformEyebrow: 'Producto principal',
            platformTitle: 'Oktavia: visibilidad técnica profunda para redes empresariales.',
            platformBody: 'Oktavia es la plataforma de automatización de Oktanet para equipos de networking que necesitan operar con precisión. Integra auditorías periódicas, validación de estándares, descubrimiento de topología y monitoreo de cambios en una sola consola.',
            platformChips: [
                'Auditoría de red',
                'Cumplimiento de configuración',
                'Control de versiones',
                'Descubrimiento L2/L3',
                'Reportes ejecutivos',
                'Inventario inteligente'
            ],
            servicesEyebrow: 'Qué resolvemos',
            servicesTitle: 'Servicios para configurar, mantener y evolucionar tu red.',
            serviceTitles: [
                'Observabilidad de red',
                'Compliance técnico',
                'Automatización operativa',
                'Inventario técnico continuo',
                'Topología y trazabilidad',
                'Soporte especializado'
            ],
            serviceBodies: [
                'Unifica inventario, estado operativo y dependencia entre nodos para decisiones rápidas ante incidentes y cambios.',
                'Detecta configuraciones fuera de estándar, diferencias entre sedes y desviaciones frente a plantillas aprobadas.',
                'Ejecuta tareas repetitivas de forma controlada para reducir errores humanos en respaldos, cambios y validaciones.',
                'Consolida firmware, módulos, interfaces y estado por dispositivo para planificación de ciclos y capacidad.',
                'Relaciona cambios de configuración con impacto en rutas y servicios críticos para análisis de causa raíz.',
                'Acompañamiento de ingeniería en español para despliegues, operación continua y estrategias de madurez de red.'
            ],
            showcaseTitle: 'Paneles que convierten datos en acciones.',
            showcaseIntro: 'Visualiza cumplimiento, inventario y topología con contexto técnico para acelerar análisis y priorización.',
            showcaseCaptions: [
                'Gobierno de configuración por dominio, sitio y criticidad.',
                'Inventario consolidado de hardware y software en tiempo real.',
                'Topología dinámica para identificar riesgos y puntos de falla.'
            ],
            methodEyebrow: 'Cómo trabajamos',
            methodTitle: 'Metodología de implementación enfocada en resultados operativos.',
            methodTitles: ['Diagnóstico', 'Diseño', 'Despliegue', 'Optimización'],
            methodBodies: [
                'Evaluamos arquitectura, prácticas de operación y puntos de fricción para definir alcance técnico realista.',
                'Construimos políticas, plantillas y tableros alineados con estándares internos y objetivos del negocio.',
                'Integración gradual en entornos productivos, priorizando equipos críticos y minimizando riesgo operacional.',
                'Iteramos automatizaciones, reportes y controles con métricas periódicas de mejora continua.'
            ],
            casesEyebrow: 'Casos de uso',
            casesTitle: 'Aplicaciones comunes por tipo de organización.',
            caseTitles: ['Corporativos multi-sede', 'Operadores y carriers', 'Sectores regulados'],
            caseBodies: [
                'Estandariza configuración y cumplimiento en decenas de oficinas con visibilidad centralizada por región.',
                'Reduce tiempos de diagnóstico con topología detallada y correlación de cambios en equipos de borde y core.',
                'Genera evidencia de auditoría técnica para cumplimiento interno y revisiones de seguridad externa.'
            ],
            metricsBodies: [
                'menos tiempo invertido en revisiones manuales de configuración.',
                'más visibilidad sobre cambios y desvíos críticos en la red.',
                'reducción de tareas repetitivas mediante automatización guiada.',
                'capacidad de auditoría continua para operaciones de alta disponibilidad.'
            ],
            aboutEyebrow: 'Quiénes somos',
            aboutTitle: 'Ingeniería de redes y software para operar infraestructura con control continuo.',
            aboutParagraphs: [
                'Oktanet nace para simplificar la gestión de redes heterogéneas a través de una consola inteligente que unifica automatización, visualización y control operativo. En un entorno donde las infraestructuras empresariales crecen en complejidad, con múltiples fabricantes, arquitecturas híbridas y operaciones cada vez más críticas para el negocio, los equipos de tecnología necesitan nuevas formas de operar sus redes con mayor velocidad, visibilidad y confiabilidad.',
                'Somos un equipo de ingenieros especializados en redes, automatización y desarrollo de software, enfocados en resolver los desafíos reales que enfrentan las organizaciones modernas. En Oktanet desarrollamos tecnología que transforma la forma en que las empresas operan su infraestructura, pasando de procesos manuales y fragmentados a operaciones inteligentes basadas en automatización, telemetría y flujos de trabajo programables.'
            ],
            aboutCardTitles: [
                'Consola inteligente unificada',
                'Ingeniería orientada a resultados',
                'Operación programable basada en datos'
            ],
            aboutCardBodies: [
                'Integramos automatización, visualización y control operativo en una sola experiencia SaaS para redes multi-vendor.',
                'Combinamos experiencia en networking, automatización y software para resolver problemas técnicos de alto impacto.',
                'Pasamos de tareas manuales a flujos inteligentes con telemetría continua y decisiones operativas más confiables.'
            ],
            contactEyebrow: 'Conversemos',
            contactTitle: 'Diseña una operación de red más predecible con Oktanet.',
            contactBody: 'Cuéntanos tu contexto técnico y objetivos. Nuestro equipo prepara una sesión de descubrimiento para definir alcance, tiempos y arquitectura recomendada.',
            contactBullets: ['Enfoque multi-vendor', 'Atención en español'],
            officeTitle: 'Oficina principal',
            officeLines: ['Torre de Oficinas, Downtown Reforma', 'Ciudad de México', 'contacto@oktanet.com'],
            formLabels: ['Nombre completo', 'Correo electrónico', 'Empresa', '¿Qué deseas resolver?'],
            submitButton: 'Enviar solicitud',
            footerTagline: 'Automatización y auditoría de redes empresariales.',
            copyright: 'Todos los derechos reservados.',
            heroImageAlt: 'Dashboard principal de monitoreo y auditoría de red',
            platformImageAlt: 'Vista de cumplimiento de configuración en Oktavia',
            serviceIconAlts: [
                'Icono de visibilidad de red',
                'Icono de configuración',
                'Icono de automatización',
                'Icono de inventario',
                'Icono de topología',
                'Icono de soporte'
            ],
            showcaseImageAlts: [
                'Dashboard de cumplimiento general',
                'Dashboard de inventario',
                'Dashboard de topología'
            ],
            footerLogoAlt: 'Símbolo de Oktanet'
        },
        en: {
            htmlLang: 'en',
            title: 'Oktanet | Network Automation and Auditing',
            metaDescription: 'Oktanet helps IT teams automate, audit, and maintain enterprise networks with detailed dashboards and centralized operations.',
            brandAria: 'Back to top',
            navAria: 'Main',
            navToggleOpen: 'Open menu',
            navToggleClose: 'Close menu',
            navLinks: ['Platform', 'Services', 'Methodology', 'Use Cases', 'About us', 'Contact'],
            navCta: 'Request Demo',
            langToggleAria: 'Change language',
            langCode: 'EN',
            brandLogoAlt: 'Oktanet logo',
            langOptionLabels: {
                es: 'Spanish',
                en: 'English'
            },
            trustAria: 'Compatible technologies',
            showcaseAria: 'Sample dashboards',
            metricsAria: 'Operational impact',
            metricsEyebrow: 'Measurable impact',
            metricsTitle: 'Operational outcomes visible from the first implementation cycles.',
            metricsIntro: 'Metrics observed across multi-vendor automation, auditing, and continuous-control projects.',
            heroEyebrow: 'Network operations for modern teams',
            heroTitle: 'Automate, audit, and optimize your entire infrastructure from one dashboard.',
            heroBody: 'Oktanet centralizes inventory visibility, configuration compliance, software changes, and topology so your team can move from reactive operations to continuous control.',
            heroActions: ['Talk to Sales', 'Explore Oktavia'],
            heroBadgesAria: 'Platform highlights',
            heroBadges: ['Multi-vendor ready', 'Continuous auditing', 'Guided automation'],
            heroPoints: [
                'Audit dashboards by site, device, and vendor.',
                'Technical and operational compliance with exportable evidence.',
                'Maintenance and change workflows with less manual effort.'
            ],
            trustLabel: 'Compatible with multi-vendor infrastructure:',
            platformEyebrow: 'Core Product',
            platformTitle: 'Oktavia: deep technical visibility for enterprise networks.',
            platformBody: 'Oktavia is Oktanet\'s automation platform for networking teams that need precision operations. It integrates periodic audits, standards validation, topology discovery, and change monitoring in a single console.',
            platformChips: [
                'Network auditing',
                'Configuration compliance',
                'Version control',
                'L2/L3 discovery',
                'Executive reports',
                'Smart inventory'
            ],
            servicesEyebrow: 'What we solve',
            servicesTitle: 'Services to configure, maintain, and evolve your network.',
            serviceTitles: [
                'Network observability',
                'Technical compliance',
                'Operational automation',
                'Continuous technical inventory',
                'Topology and traceability',
                'Specialized support'
            ],
            serviceBodies: [
                'Unify inventory, operational status, and node dependencies for faster decisions during incidents and changes.',
                'Detect out-of-standard configurations, differences across sites, and deviations from approved templates.',
                'Run repetitive tasks in a controlled way to reduce human errors in backups, changes, and validations.',
                'Consolidate firmware, modules, interfaces, and per-device status for lifecycle and capacity planning.',
                'Correlate configuration changes with route and critical service impact for root-cause analysis.',
                'Engineering support in Spanish for deployments, continuous operations, and network maturity strategies.'
            ],
            showcaseTitle: 'Dashboards that turn data into action.',
            showcaseIntro: 'Visualize compliance, inventory, and topology with technical context to accelerate analysis and prioritization.',
            showcaseCaptions: [
                'Configuration governance by domain, site, and criticality.',
                'Consolidated hardware and software inventory in real time.',
                'Dynamic topology to identify risks and failure points.'
            ],
            methodEyebrow: 'How we work',
            methodTitle: 'Implementation methodology focused on operational outcomes.',
            methodTitles: ['Assessment', 'Design', 'Deployment', 'Optimization'],
            methodBodies: [
                'We evaluate architecture, operating practices, and friction points to define a realistic technical scope.',
                'We build policies, templates, and dashboards aligned with internal standards and business goals.',
                'Gradual integration in production environments, prioritizing critical devices and minimizing operational risk.',
                'We iterate automations, reports, and controls with periodic continuous-improvement metrics.'
            ],
            casesEyebrow: 'Use Cases',
            casesTitle: 'Common applications by organization type.',
            caseTitles: ['Multi-site enterprises', 'Operators and carriers', 'Regulated sectors'],
            caseBodies: [
                'Standardize configuration and compliance across dozens of offices with centralized regional visibility.',
                'Reduce diagnosis time with detailed topology and change correlation in edge and core devices.',
                'Generate technical audit evidence for internal compliance and external security reviews.'
            ],
            metricsBodies: [
                'less time spent on manual configuration reviews.',
                'more visibility into network changes and critical deviations.',
                'reduction of repetitive tasks through guided automation.',
                'continuous auditing capability for high-availability operations.'
            ],
            aboutEyebrow: 'About us',
            aboutTitle: 'Network and software engineering to run infrastructure with continuous control.',
            aboutParagraphs: [
                'Oktanet was created to simplify heterogeneous network management through an intelligent console that unifies automation, visualization, and operational control. In an environment where enterprise infrastructures grow in complexity, with multiple vendors, hybrid architectures, and operations increasingly critical to the business, technology teams need new ways to run their networks with greater speed, visibility, and reliability.',
                'We are a team of engineers specialized in networking, automation, and software development, focused on solving the real challenges faced by modern organizations. At Oktanet, we build technology that transforms how companies operate their infrastructure, moving from manual and fragmented processes to intelligent operations based on automation, telemetry, and programmable workflows.'
            ],
            aboutCardTitles: [
                'Unified intelligent console',
                'Results-driven engineering',
                'Data-driven programmable operations'
            ],
            aboutCardBodies: [
                'We combine automation, visualization, and operational control in a single SaaS experience for multi-vendor networks.',
                'We bring together networking, automation, and software expertise to solve high-impact technical problems.',
                'We replace manual tasks with intelligent flows powered by continuous telemetry and more reliable operational decisions.'
            ],
            contactEyebrow: 'Let\'s talk',
            contactTitle: 'Build more predictable network operations with Oktanet.',
            contactBody: 'Tell us your technical context and goals. Our team will prepare a discovery session to define scope, timeline, and recommended architecture.',
            contactBullets: ['Multi-vendor approach', 'Spanish-speaking support'],
            officeTitle: 'Head Office',
            officeLines: ['Office Tower, Downtown Reforma', 'Mexico City', 'contacto@oktanet.com'],
            formLabels: ['Full name', 'Email', 'Company', 'What do you need to solve?'],
            submitButton: 'Send Request',
            footerTagline: 'Automation and auditing for enterprise networks.',
            copyright: 'All rights reserved.',
            heroImageAlt: 'Main dashboard for network monitoring and auditing',
            platformImageAlt: 'Configuration compliance view in Oktavia',
            serviceIconAlts: [
                'Network visibility icon',
                'Configuration icon',
                'Automation icon',
                'Inventory icon',
                'Topology icon',
                'Support icon'
            ],
            showcaseImageAlts: [
                'General compliance dashboard',
                'Inventory dashboard',
                'Topology dashboard'
            ],
            footerLogoAlt: 'Oktanet symbol'
        }
    };

    const updateNavToggleLabel = function (languageKey) {
        if (!navToggle) {
            return;
        }

        const copy = translations[languageKey] || translations.es;
        const isOpen = body.classList.contains('nav-open');
        navToggle.setAttribute('aria-label', isOpen ? copy.navToggleClose : copy.navToggleOpen);
    };

    const updateBrandWordmarkVisibility = function () {
        if (!navShell || !brandWordmark) {
            return;
        }

        // Keep the wordmark on mobile menu layout; collapse it only on desktop before overlap.
        if (window.innerWidth <= 860) {
            navShell.classList.remove('nav-compact-brand');
            return;
        }

        navShell.classList.remove('nav-compact-brand');

        if (navShell.scrollWidth > navShell.clientWidth + 10) {
            navShell.classList.add('nav-compact-brand');
        }
    };

    const applyLanguage = function (languageKey) {
        const selectedKey = translations[languageKey] ? languageKey : 'es';
        const copy = translations[selectedKey];

        document.documentElement.lang = copy.htmlLang;
        document.title = copy.title;

        if (metaDescription) {
            metaDescription.setAttribute('content', copy.metaDescription);
        }

        if (brandLink) {
            brandLink.setAttribute('aria-label', copy.brandAria);
        }

        if (mainNav) {
            mainNav.setAttribute('aria-label', copy.navAria);
        }

        if (trustStrip) {
            trustStrip.setAttribute('aria-label', copy.trustAria);
        }

        if (showcaseSectionEl) {
            showcaseSectionEl.setAttribute('aria-label', copy.showcaseAria);
        }

        if (metricsSectionLabelEl) {
            metricsSectionLabelEl.setAttribute('aria-label', copy.metricsAria);
        }

        if (langToggle) {
            langToggle.setAttribute('aria-label', copy.langToggleAria);
        }

        setText(langCode, copy.langCode);
        setTextList(navLinks, copy.navLinks);
        setText(navCta, copy.navCta);
        setTextList(footerLinks, copy.navLinks);

        setText(document.querySelector('.hero-copy .eyebrow'), copy.heroEyebrow);
        setText(document.querySelector('.hero-copy h1'), copy.heroTitle);
        setText(document.querySelector('.hero-copy > p:not(.eyebrow)'), copy.heroBody);
        setTextList(document.querySelectorAll('.hero-actions a'), copy.heroActions);
        if (heroBadgesContainer) {
            heroBadgesContainer.setAttribute('aria-label', copy.heroBadgesAria);
        }
        setTextList(document.querySelectorAll('.hero-badges span'), copy.heroBadges);
        setTextList(document.querySelectorAll('.hero-points li'), copy.heroPoints);

        setText(document.querySelector('.trust-grid > p'), copy.trustLabel);

        setText(document.querySelector('.platform-copy .eyebrow'), copy.platformEyebrow);
        setText(document.querySelector('.platform-copy h2'), copy.platformTitle);
        setText(document.querySelector('.platform-copy > p:not(.eyebrow)'), copy.platformBody);
        setTextList(document.querySelectorAll('.chip-list span'), copy.platformChips);

        setText(document.querySelector('.services-section .eyebrow'), copy.servicesEyebrow);
        setText(document.querySelector('.services-section h2'), copy.servicesTitle);
        setTextList(document.querySelectorAll('.services-grid .service-card h3'), copy.serviceTitles);
        setTextList(document.querySelectorAll('.services-grid .service-card p'), copy.serviceBodies);

        setText(document.querySelector('.showcase-section h2'), copy.showcaseTitle);
        setText(document.querySelector('.showcase-section .section-intro'), copy.showcaseIntro);
        setTextList(document.querySelectorAll('.showcase-grid figcaption'), copy.showcaseCaptions);

        setText(document.querySelector('.method-section .eyebrow'), copy.methodEyebrow);
        setText(document.querySelector('.method-section h2'), copy.methodTitle);
        setTextList(document.querySelectorAll('.method-grid h3'), copy.methodTitles);
        setTextList(document.querySelectorAll('.method-grid p'), copy.methodBodies);

        setText(document.querySelector('.cases-section .eyebrow'), copy.casesEyebrow);
        setText(document.querySelector('.cases-section h2'), copy.casesTitle);
        setTextList(document.querySelectorAll('.cases-grid h3'), copy.caseTitles);
        setTextList(document.querySelectorAll('.cases-grid p'), copy.caseBodies);

        setText(document.querySelector('.metrics-copy .eyebrow'), copy.metricsEyebrow);
        setText(document.querySelector('.metrics-copy h2'), copy.metricsTitle);
        setText(document.querySelector('.metrics-copy .section-intro'), copy.metricsIntro);
        setTextList(document.querySelectorAll('.metrics-grid article p'), copy.metricsBodies);

        setText(document.querySelector('.about-section .eyebrow'), copy.aboutEyebrow);
        setText(document.querySelector('.about-section h2'), copy.aboutTitle);
        setTextList(document.querySelectorAll('.about-copy .about-text'), copy.aboutParagraphs);
        setTextList(document.querySelectorAll('.about-card h3'), copy.aboutCardTitles);
        setTextList(document.querySelectorAll('.about-card p'), copy.aboutCardBodies);

        setText(document.querySelector('.contact-copy .eyebrow'), copy.contactEyebrow);
        setText(document.querySelector('.contact-copy h2'), copy.contactTitle);
        setText(document.querySelector('.contact-copy > p'), copy.contactBody);
        setTextList(document.querySelectorAll('.contact-copy ul li'), copy.contactBullets);
        setText(document.querySelector('.office-card h3'), copy.officeTitle);
        setTextList(document.querySelectorAll('.office-card p'), copy.officeLines);
        setTextList(document.querySelectorAll('.contact-form label'), copy.formLabels);
        setText(document.querySelector('.contact-form button'), copy.submitButton);

        setText(document.querySelector('.footer-brand p'), copy.footerTagline);
        setText(copyrightText, copy.copyright);

        if (brandImage) {
            brandImage.alt = copy.brandLogoAlt;
        }

        if (heroImage) {
            heroImage.alt = copy.heroImageAlt;
        }

        if (platformImage) {
            platformImage.alt = copy.platformImageAlt;
        }

        setAltList(serviceIcons, copy.serviceIconAlts);
        setAltList(showcaseImages, copy.showcaseImageAlts);

        if (footerLogo) {
            footerLogo.alt = copy.footerLogoAlt;
        }

        langOptions.forEach(function (option) {
            const optionLang = option.dataset.lang;
            option.textContent = copy.langOptionLabels[optionLang] || option.textContent;
            option.setAttribute('aria-checked', String(optionLang === selectedKey));
        });

        updateNavToggleLabel(selectedKey);
        requestAnimationFrame(updateBrandWordmarkVisibility);

        try {
            window.localStorage.setItem(storageKey, selectedKey);
        } catch (_error) {
            // Ignore storage errors in private mode or restricted contexts.
        }
    };

    const closeLanguageMenu = function () {
        if (!langMenu || !langToggle) {
            return;
        }

        langMenu.hidden = true;
        langToggle.setAttribute('aria-expanded', 'false');

        if (languageDropdown) {
            languageDropdown.classList.remove('is-open');
        }
    };

    const openLanguageMenu = function () {
        if (!langMenu || !langToggle) {
            return;
        }

        langMenu.hidden = false;
        langToggle.setAttribute('aria-expanded', 'true');

        if (languageDropdown) {
            languageDropdown.classList.add('is-open');
        }
    };

    if (langToggle && langMenu && languageDropdown) {
        langToggle.addEventListener('click', function (event) {
            event.stopPropagation();

            if (langMenu.hidden) {
                openLanguageMenu();
                return;
            }

            closeLanguageMenu();
        });

        langOptions.forEach(function (option) {
            option.addEventListener('click', function () {
                const selectedLanguage = option.dataset.lang;
                applyLanguage(selectedLanguage);
                closeLanguageMenu();
            });
        });

        document.addEventListener('click', function (event) {
            if (!languageDropdown.contains(event.target)) {
                closeLanguageMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeLanguageMenu();
            }
        });
    }

    let initialLanguage = 'es';

    try {
        const savedLanguage = window.localStorage.getItem(storageKey);

        if (savedLanguage === 'es' || savedLanguage === 'en') {
            initialLanguage = savedLanguage;
        }
    } catch (_error) {
        initialLanguage = 'es';
    }

    applyLanguage(initialLanguage);
    requestAnimationFrame(updateBrandWordmarkVisibility);

    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    if (navToggle && mainNav) {
        const closeNav = function () {
            body.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
            updateNavToggleLabel(document.documentElement.lang);
            closeLanguageMenu();
        };

        navToggle.addEventListener('click', function () {
            const isOpen = body.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            updateNavToggleLabel(document.documentElement.lang);
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', closeNav);
        });

        if (brandLink) {
            brandLink.addEventListener('click', closeNav);
        }

        window.addEventListener('resize', function () {
            if (window.innerWidth > 860) {
                closeNav();
            }

            updateBrandWordmarkVisibility();
        });
    }

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () {
            updateBrandWordmarkVisibility();
        });
    }

    const revealTargets = document.querySelectorAll(
        '.hero-copy, .hero-visual, .platform-copy, .platform-visual, .about-copy, ' +
        '.services-section .service-card, .showcase-section .showcase-grid figure, ' +
        '.cases-section .cases-grid article, .metrics-copy, .metrics-section .metrics-grid article, .contact-copy, .contact-form, .footer-brand, .footer-links'
    );

    if (revealTargets.length > 0) {
        body.classList.add('anim-ready');

        revealTargets.forEach(function (element, index) {
            element.classList.add('reveal');
            element.style.setProperty('--reveal-delay', String(globalAnimationDelayMs + (index % 4) * 70) + 'ms');
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

    const setupReplayObserver = function (section, enterRatio, onEnter, onFullyExit) {
        const startRatio = Math.min(0.95, Math.max(0.01, enterRatio));
        let hasEntered = false;

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.target !== section) {
                        return;
                    }

                    const ratio = entry.intersectionRatio;

                    if (!hasEntered && ratio >= startRatio) {
                        hasEntered = true;
                        onEnter();
                        return;
                    }

                    // Reset only when the whole section is fully out of view.
                    if (hasEntered && ratio === 0) {
                        hasEntered = false;
                        onFullyExit();
                    }
                });
            },
            {
                threshold: [0, startRatio]
            }
        );

        observer.observe(section);
    };

    const serviceSection = document.querySelector('.services-section');
    const serviceCards = document.querySelectorAll('.services-section .service-card');

    if (serviceSection && serviceCards.length > 0) {
        serviceSection.classList.add('block-fade-ready');
        const serviceStartDelayMs = 90 + globalAnimationDelayMs;

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
            setupReplayObserver(serviceSection, 0.18, runServiceFade, function () {
                serviceSection.classList.remove('block-fade-active');
            });
        }
    }

    const casesSection = document.querySelector('.cases-section');
    const caseCards = document.querySelectorAll('.cases-section .cases-grid article');

    if (casesSection && caseCards.length > 0) {
        casesSection.classList.add('block-fade-ready');
        const casesStartDelayMs = 90 + globalAnimationDelayMs;

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
            setupReplayObserver(casesSection, 0.2, runCasesFade, function () {
                casesSection.classList.remove('block-fade-active');
            });
        }
    }

    const methodSection = document.querySelector('.method-section');
    const dominoItems = document.querySelectorAll('.method-section .method-grid article');

    if (methodSection && dominoItems.length > 0) {
        methodSection.classList.add('domino-ready');
        const dominoStartDelayMs = 150 + globalAnimationDelayMs;

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
            setupReplayObserver(methodSection, 0.2, runDominoAnimation, function () {
                methodSection.classList.remove('domino-active');
            });
        }
    }

    const aboutSection = document.querySelector('.about-section');
    const aboutCards = document.querySelectorAll('.about-pillars .about-card');

    if (aboutSection && aboutCards.length > 0) {
        aboutSection.classList.add('about-float-ready');
        const aboutStartDelayMs = 140 + globalAnimationDelayMs;

        aboutCards.forEach(function (card, index) {
            card.style.setProperty('--about-delay', String(aboutStartDelayMs + index * 130) + 'ms');
        });

        const runAboutFloat = function () {
            aboutSection.classList.remove('about-float-active');
            // Force a reflow so the animation replays on each re-entry.
            void aboutSection.offsetHeight;
            aboutSection.classList.add('about-float-active');
        };

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            aboutSection.classList.add('about-float-active');
        } else {
            setupReplayObserver(aboutSection, 0.2, runAboutFloat, function () {
                aboutSection.classList.remove('about-float-active');
            });
        }
    }

    const metricsSection = document.querySelector('.metrics-section');
    const counters = document.querySelectorAll('.counter');

    if (metricsSection && counters.length > 0) {
        const setMetricRingProgress = function (counter, value) {
            const card = counter.closest('.metric-card');

            if (!card || !card.classList.contains('metric-percent')) {
                return;
            }

            const safeValue = Math.max(0, Math.min(100, Number(value) || 0));
            card.style.setProperty('--ring-progress', String(safeValue));
        };

        const setCounterToFinalValue = function (counter) {
            const target = Number(counter.dataset.target || 0);
            const suffix = counter.dataset.suffix || '';
            counter.classList.remove('is-typing');
            counter.textContent = String(target) + suffix;
            setMetricRingProgress(counter, target);
        };

        const setCounterToStartValue = function (counter) {
            const suffix = counter.dataset.suffix || '';
            counter.classList.remove('is-typing');
            counter.textContent = suffix === '/7' ? '' : '0' + suffix;
            setMetricRingProgress(counter, 0);
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
                setMetricRingProgress(counter, value);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                    return;
                }

                counter.textContent = String(target) + suffix;
                setMetricRingProgress(counter, target);
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
            const startDelayMs = 90 + globalAnimationDelayMs;
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
        setupReplayObserver(metricsSection, 0.2, runMetricsAnimations, resetMetricsAnimations);
    }
})();
