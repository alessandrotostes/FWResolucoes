document.addEventListener('DOMContentLoaded', () => {

    // Google Ads Conversion Tracking — dispara para todos os links do WhatsApp
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href*="wa.me"]');
        if (!link) return;
        e.preventDefault();
        const waUrl = link.getAttribute('href');
        if (typeof gtag_report_conversion === 'function') {
            gtag_report_conversion(waUrl);
        } else {
            // Fallback caso a função ainda não tenha carregado
            window.open(waUrl, '_blank');
        }
    });

    // Intercepta cliques nos links para efeito de fade-out
    const internalLinks = document.querySelectorAll('a[href]');
    internalLinks.forEach(link => {
        const href = link.getAttribute('href');
        const target = link.getAttribute('target');
        if (href && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('https://wa.me') && target !== '_blank') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.classList.remove('loaded');
                setTimeout(() => {
                    window.location.href = href;
                }, 80);
            });
        }
    });

    // Sombra no header ao rolar a página
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-sm');
        } else {
            header.classList.remove('shadow-sm');
        }
    });

    // Toggle do menu mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar ao clicar em algum link interno
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de hover nos itens bento
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-4px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Animação fluida de entrada ao rolar (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .bento-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);    

    revealElements.forEach(el => observer.observe(el));
});
