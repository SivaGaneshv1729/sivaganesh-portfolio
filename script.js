// Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');

        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add animation on scroll for standard elements
        // Standard Fade Up Observer (for hero text, section titles, etc)
        const stdObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    stdObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.section-title, .hero-content h1').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            stdObserver.observe(el);
        });

        // Hero role typing animation
        const heroRole = document.querySelector('.hero-role');
        const heroRoleText = heroRole?.querySelector('.hero-role-text');
        const heroRoleSizer = heroRole?.querySelector('.hero-role-sizer');

        if (heroRole && heroRoleText) {
            const roles = (heroRole.dataset.typingRoles || heroRoleText.textContent)
                .split('|')
                .map(role => role.trim())
                .filter(Boolean);
            const typingSpeed = 90;
            const deletingSpeed = 55;
            const pauseBeforeDelete = 1400;
            const pauseBeforeRetype = 450;
            let roleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let activeRole = roles[roleIndex] || heroRoleText.textContent.trim();

            const longestRole = roles.reduce((longest, role) => {
                return role.length > longest.length ? role : longest;
            }, activeRole);

            if (heroRoleSizer) {
                heroRoleSizer.textContent = heroRole.dataset.typingLongest?.trim() || longestRole;
            }

            heroRole.setAttribute('aria-label', activeRole);
            heroRoleText.textContent = '';
            heroRoleText.classList.add('is-typing');

            function typeHeroRole() {
                if (!isDeleting) {
                    charIndex += 1;
                    heroRoleText.textContent = activeRole.slice(0, charIndex);

                    if (charIndex === activeRole.length) {
                        isDeleting = true;
                        window.setTimeout(typeHeroRole, pauseBeforeDelete);
                        return;
                    }

                    window.setTimeout(typeHeroRole, typingSpeed);
                    return;
                }

                charIndex -= 1;
                heroRoleText.textContent = activeRole.slice(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    activeRole = roles[roleIndex];
                    heroRole.setAttribute('aria-label', activeRole);
                    window.setTimeout(typeHeroRole, pauseBeforeRetype);
                    return;
                }

                window.setTimeout(typeHeroRole, deletingSpeed);
            }

            window.setTimeout(typeHeroRole, 350);
        }

        // Locked Scroll-Jack Layout Logic
        const projectsScrollJack = document.querySelector('.projects-scroll-jack');
        const visualTrack = document.getElementById('projectVisualTrack');
        const visualItems = document.querySelectorAll('.project-visual-item');
        const contentItems = document.querySelectorAll('.project-content');
        const projectScrollLine = document.getElementById('projectScrollLine');
        const projectScrollDot = document.getElementById('projectScrollDot');
        
        let jackMaxScroll = 0;
        let trackMaxTranslate = 0;

        function initProjectScroll() {
            if (!projectsScrollJack || !visualTrack || !visualItems.length) return;
            
            // 1. Calculate dynamic padding to center the first and last images
            const containerHeight = visualTrack.parentElement.clientHeight;
            const itemHeight = visualItems[0].clientHeight;
            const centerPadding = Math.max(0, (containerHeight - itemHeight) / 2);
            visualTrack.style.paddingTop = `${centerPadding}px`;
            visualTrack.style.paddingBottom = `${centerPadding}px`;

            // 2. Calculate exact track scrolling distance
            const trackHeight = visualTrack.scrollHeight;
            trackMaxTranslate = Math.max(0, trackHeight - containerHeight);

            // 3. Set the artificial container height to match the exact 1-to-1 pixel scroll distance
            // Height = Real viewport height + the distance the track needs to linearly slide
            const newHeight = window.innerHeight + trackMaxTranslate;
            projectsScrollJack.style.height = `${newHeight}px`;
            
            jackMaxScroll = trackMaxTranslate; // 1:1 ratio
        }

        window.addEventListener('resize', initProjectScroll);
        // Initialize after fonts/images load
        window.addEventListener('load', initProjectScroll);
        // Call immediately just in case
        initProjectScroll();

        window.addEventListener('scroll', () => {
            if (!projectsScrollJack || !visualTrack || jackMaxScroll <= 0) return;
            
            const jackRect = projectsScrollJack.getBoundingClientRect();
            
            // Progress 0 to 1 based entirely on the top edge intersecting and pulling out of the window
            // Since height = Window + Translate, scrolling the container from top to bottom covers exact distance
            let scrollProgress = -jackRect.top / jackMaxScroll;
            scrollProgress = Math.max(0, Math.min(scrollProgress, 1)); // Strict clamp
            
            // 1. Update Tracker
            const progressPercent = scrollProgress * 100;
            if (projectScrollLine && projectScrollDot) {
                projectScrollLine.style.height = progressPercent + '%';
                projectScrollDot.style.top = progressPercent + '%';
            }
            
            // 2. Translate Right Visuals Column Upward
            visualTrack.style.transform = `translateY(-${scrollProgress * trackMaxTranslate}px)`;

            // 3. Dynamically Swap Text 
            const totalItems = visualItems.length;
            const thresholdStep = 1 / totalItems;
            let activeIndex = 0;
            
            for (let i = 0; i < totalItems; i++) {
                if (scrollProgress >= i * thresholdStep) {
                    activeIndex = i;
                }
            }

            visualItems.forEach((v, i) => {
                if (i === activeIndex) v.classList.add('is-active');
                else v.classList.remove('is-active');
            });

            contentItems.forEach((c, i) => {
                if (i === activeIndex) c.classList.add('is-active');
                else c.classList.remove('is-active');
            });
        });

        // Timeline Animation Observer
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-show');
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.timeline-box').forEach(el => {
            timelineObserver.observe(el);
        });

        // About section image carousel
        const aboutCarousel = document.querySelector('.about-carousel-visual');
        if (aboutCarousel) {
            const aboutCards = aboutCarousel.querySelectorAll('.about-carousel-card');
            let aboutCurrentIndex = 0;
            let aboutIsAnimating = false;

            function updateAboutCarousel(newIndex) {
                if (aboutIsAnimating || !aboutCards.length) return;
                aboutIsAnimating = true;
                aboutCurrentIndex = (newIndex + aboutCards.length) % aboutCards.length;

                aboutCards.forEach((card, i) => {
                    const offset = (i - aboutCurrentIndex + aboutCards.length) % aboutCards.length;

                    card.classList.remove('center', 'up-1', 'up-2', 'down-1', 'down-2', 'hidden');

                    if (offset === 0) {
                        card.classList.add('center');
                    } else if (offset === 1) {
                        card.classList.add('down-1');
                    } else if (offset === 2) {
                        card.classList.add('down-2');
                    } else if (offset === aboutCards.length - 1) {
                        card.classList.add('up-1');
                    } else if (offset === aboutCards.length - 2) {
                        card.classList.add('up-2');
                    } else {
                        card.classList.add('hidden');
                    }
                });

                window.setTimeout(() => {
                    aboutIsAnimating = false;
                }, 800);
            }

            updateAboutCarousel(0);
            window.setInterval(() => {
                updateAboutCarousel(aboutCurrentIndex + 1);
            }, 2400);
        }

        // Active navigation highlight
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            });

            // We moved the timeline to horizontal scrolling. Let's keep other active nav intact.
        });

        // Journey Timeline -- Scroll-jacked feature removed. Static layout implemented in CSS.
        
        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        // Check for saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            
            if (body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                localStorage.setItem('theme', 'dark');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        });
