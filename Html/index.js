document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // Smooth scroll (o HTML scroll-behavior: smooth já faz isso, mas o JS dá mais controle se necessário)
    // O script abaixo está comentado porque o CSS 'scroll-behavior: smooth;' já cuida disso de forma mais simples.
    // Se precisar de offsets ou lógicas mais complexas, pode descomentar e adaptar.
    /*
    const navLinksForScroll = document.querySelectorAll('header nav ul li a[href^="#"]');
    navLinksForScroll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Calcula o offset do header se ele for fixo
                const headerOffset = document.querySelector('header').offsetHeight || 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    */

    // Destaque para link ativo na navegação ao rolar (opcional)
    const sections = document.querySelectorAll('main section[id]');
    const navLi = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight || 70; // Altura do header

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 5; // Adiciona um pequeno buffer
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === current) {
                a.classList.add('active');
            }
        });
         // Caso especial para o topo da página (seção hero)
        if (pageYOffset < (document.getElementById('fundamentos')?.offsetTop - headerHeight - 5 || window.innerHeight)) {
            navLi.forEach(a => a.classList.remove('active'));
            const homeLink = document.querySelector('header nav ul li a[href="#inicio"]');
            if (homeLink) homeLink.classList.add('active');
             if (current === '' && pageYOffset < 200) { // Se nenhuma seção estiver "ativa" e estivermos no topo
                const inicioLink = document.querySelector('header nav ul li a[href="#inicio"]');
                if (inicioLink) inicioLink.classList.add('active');
            }
        }
    });


});