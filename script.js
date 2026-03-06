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

        // Journey Timeline -- Scroll-jacked belt (80%-wide centered track)
        (function() {
            const sectionOuter = document.getElementById('journey-section');
            const belt         = document.getElementById('journeyBelt');
            const progressFill = document.getElementById('journeyProgress');
            const dot          = document.getElementById('journeyDot');
            const nodes        = Array.from(document.querySelectorAll('.journey-node'));

            if (!sectionOuter || !belt || nodes.length === 0) return;

            // Must match CSS: width:280px per node, padding:0 1rem (16px each side)
            const NODE_W   = 280;
            const NODE_PAD = 32;  // 16px x 2 sides
            const SPACING  = NODE_W + NODE_PAD;
            const N        = nodes.length;

            let updateFn = null;

            function setup() {
                const vW = window.innerWidth;
                const vH = window.innerHeight;

                // Track is 80% wide, centered: left at 10%, right at 90%
                const tL = vW * 0.10;
                const tR = vW * 0.90;
                const tW = tR - tL;

                const scrollH = vH * 2 + SPACING * N;
                sectionOuter.style.height = scrollH + 'px';

                // Start: node-0 center aligns with tR (enters from right edge)
                // End:   last-node center aligns with tL (exits at left edge)
                const startX = tR - NODE_W / 2;
                const endX   = tL - ((N - 1) * SPACING + NODE_W / 2);

                return function update() {
                    const rect     = sectionOuter.getBoundingClientRect();
                    const scrolled = -rect.top;
                    const scrollMax = scrollH - vH;
                    if (scrolled < 0 || scrolled > scrollMax) return;

                    const pct  = scrolled / scrollMax;
                    const currX = startX + pct * (endX - startX);

                    belt.style.transform = 'translateY(-50%) translateX(' + currX + 'px)';

                    const fade = NODE_W * 0.4;

                    let closestIdx  = 0;
                    let closestDist = Infinity;

                    nodes.forEach(function(node, i) {
                        const centerBelt   = i * SPACING + NODE_W / 2;
                        const centerScreen = centerBelt + currX;
                        const dist = Math.abs(centerScreen - vW / 2);
                        if (dist < closestDist) { closestDist = dist; closestIdx = i; }

                        if (centerScreen < tL - fade) {
                            node.classList.remove('node-visible');
                            node.classList.add('node-exited');
                        } else if (centerScreen > tR + fade) {
                            node.classList.remove('node-visible');
                            node.classList.remove('node-exited');
                        } else {
                            node.classList.add('node-visible');
                            node.classList.remove('node-exited');
                        }
                    });

                    const snapCenter = closestIdx * SPACING + NODE_W / 2 + currX;
                    const dotInTrack = Math.max(0, Math.min(snapCenter - tL, tW));
                    dot.style.left = dotInTrack + 'px';
                    progressFill.style.width = dotInTrack + 'px';
                };
            }

            updateFn = setup();
            window.addEventListener('scroll', function() { requestAnimationFrame(updateFn); }, { passive: true });
            window.addEventListener('resize', function() { updateFn = setup(); updateFn(); });
            window.addEventListener('load', function() { updateFn = setup(); updateFn(); });
            updateFn();
        })();
        
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