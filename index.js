document.addEventListener('DOMContentLoaded', () => {

    // Controle do Menu Hambúrguer Móvel
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

    // Redirecionamento ao clicar nos cards de seleção na Home
    const selectorCards = document.querySelectorAll('.selector-card');
    
    selectorCards.forEach(card => {
        card.addEventListener('click', () => {
            const destination = card.getAttribute('data-href');
            if (destination) {
                window.location.href = destination;
            }
        });
    });

    // Animação moderna de entrada ao rolar (Intersection Observer)
    const fadeElements = document.querySelectorAll('.hero-tag, .hero-title, .hero-subtitle, .selector-card, h1, h2, h3, p');
    
    // Configura estado inicial das animações por JS
    fadeElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = el.classList.contains('selector-card')
            ? 'translateY(30px)' 
            : 'translateY(20px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    // Observer para animar apenas quando entrar na tela
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);    

    fadeElements.forEach(el => observer.observe(el));
});
