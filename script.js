document.addEventListener('DOMContentLoaded', function() {
    // Cargar el contenido desde content.json
    fetch('content.json')
        .then(response => response.json())
        .then(content => {
            // Cargar el contenido en la página
            loadContent(content);
        })
        .catch(error => {
            console.error('Error al cargar el contenido:', error);
        });
    
    // Función para cargar el contenido en la página
    function loadContent(content) {
        // Actualizar el título de la página
        document.title = content.meta.title;
        document.documentElement.lang = content.meta.language;
        
        // Cargar la navegación
        const navLinks = document.getElementById('nav-links');
        navLinks.innerHTML = '';
        content.header.navigation.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            navLinks.appendChild(li);
        });
        
        // Cargar el botón CTA del header
        const headerCta = document.getElementById('header-cta');
        headerCta.href = content.header.cta.href;
        headerCta.textContent = content.header.cta.text;
        
        // Cargar la sección hero
        document.getElementById('hero-title').textContent = content.hero.title;
        document.getElementById('hero-subtitle').textContent = content.hero.subtitle;
        
        const heroButtons = document.getElementById('hero-buttons');
        heroButtons.innerHTML = '';
        content.hero.buttons.forEach(button => {
            const a = document.createElement('a');
            a.href = button.href;
            a.className = `btn btn-${button.type}`;
            a.textContent = button.text;
            heroButtons.appendChild(a);
        });
        
        const heroImage = document.getElementById('hero-image');
        heroImage.src = content.hero.image;
        heroImage.alt = content.hero.imageAlt;
        
        // Cargar la sección de características
        document.getElementById('features-title').textContent = content.features.title;
        document.getElementById('features-subtitle').textContent = content.features.subtitle;
        
        const featuresGrid = document.getElementById('features-grid');
        featuresGrid.innerHTML = '';
        content.features.items.forEach(item => {
            const featureCard = document.createElement('div');
            featureCard.className = 'feature-card';
            
            const featureIcon = document.createElement('div');
            featureIcon.className = 'feature-icon';
            const icon = document.createElement('i');
            icon.className = item.icon;
            featureIcon.appendChild(icon);
            
            const title = document.createElement('h3');
            title.textContent = item.title;
            
            const description = document.createElement('p');
            description.textContent = item.description;
            
            featureCard.appendChild(featureIcon);
            featureCard.appendChild(title);
            featureCard.appendChild(description);
            
            featuresGrid.appendChild(featureCard);
        });
        
        // Cargar la sección de cómo funciona
        document.getElementById('how-it-works-title').textContent = content.howItWorks.title;
        document.getElementById('how-it-works-subtitle').textContent = content.howItWorks.subtitle;
        
        const stepsContainer = document.getElementById('how-it-works-steps');
        stepsContainer.innerHTML = '';
        content.howItWorks.steps.forEach(step => {
            const stepElement = document.createElement('div');
            stepElement.className = 'step';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = step.number;
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepTitle = document.createElement('h3');
            stepTitle.textContent = step.title;
            
            const stepDescription = document.createElement('p');
            stepDescription.textContent = step.description;
            
            stepContent.appendChild(stepTitle);
            stepContent.appendChild(stepDescription);
            
            stepElement.appendChild(stepNumber);
            stepElement.appendChild(stepContent);
            
            stepsContainer.appendChild(stepElement);
        });
        
        // Cargar la sección de testimonios
        document.getElementById('testimonials-title').textContent = content.testimonials.title;
        document.getElementById('testimonials-subtitle').textContent = content.testimonials.subtitle;
        
        const testimonialsSlider = document.getElementById('testimonials-slider');
        testimonialsSlider.innerHTML = '';
        content.testimonials.items.forEach(item => {
            const testimonial = document.createElement('div');
            testimonial.className = 'testimonial';
            
            const testimonialContent = document.createElement('div');
            testimonialContent.className = 'testimonial-content';
            const quote = document.createElement('p');
            quote.textContent = item.quote;
            testimonialContent.appendChild(quote);
            
            const testimonialAuthor = document.createElement('div');
            testimonialAuthor.className = 'testimonial-author';
            
            const authorImg = document.createElement('img');
            authorImg.src = item.image;
            authorImg.alt = 'Testimonio';
            
            const authorInfo = document.createElement('div');
            authorInfo.className = 'author-info';
            
            const authorName = document.createElement('h4');
            authorName.textContent = item.author;
            
            const authorPosition = document.createElement('p');
            authorPosition.textContent = item.position;
            
            authorInfo.appendChild(authorName);
            authorInfo.appendChild(authorPosition);
            
            testimonialAuthor.appendChild(authorImg);
            testimonialAuthor.appendChild(authorInfo);
            
            testimonial.appendChild(testimonialContent);
            testimonial.appendChild(testimonialAuthor);
            
            testimonialsSlider.appendChild(testimonial);
        });
        
        // Cargar la sección de precios
        document.getElementById('pricing-title').textContent = content.pricing.title;
        document.getElementById('pricing-subtitle').textContent = content.pricing.subtitle;
        
        const pricingCards = document.getElementById('pricing-cards');
        pricingCards.innerHTML = '';
        content.pricing.plans.forEach(plan => {
            const pricingCard = document.createElement('div');
            pricingCard.className = 'pricing-card';
            if (plan.featured) {
                pricingCard.classList.add('featured');
            }
            
            const pricingHeader = document.createElement('div');
            pricingHeader.className = 'pricing-header';
            
            const planName = document.createElement('h3');
            planName.textContent = plan.name;
            
            const price = document.createElement('div');
            price.className = 'price';
            
            const amount = document.createElement('span');
            amount.className = 'amount';
            amount.textContent = plan.price;
            
            const period = document.createElement('span');
            period.className = 'period';
            period.textContent = plan.period;
            
            price.appendChild(amount);
            price.appendChild(period);
            
            pricingHeader.appendChild(planName);
            pricingHeader.appendChild(price);
            
            const pricingFeatures = document.createElement('div');
            pricingFeatures.className = 'pricing-features';
            
            const featuresList = document.createElement('ul');
            plan.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.textContent = feature;
                featuresList.appendChild(featureItem);
            });
            
            pricingFeatures.appendChild(featuresList);
            
            const pricingFooter = document.createElement('div');
            pricingFooter.className = 'pricing-footer';
            
            const ctaButton = document.createElement('a');
            ctaButton.href = plan.cta.href;
            ctaButton.className = `btn btn-${plan.cta.type}`;
            ctaButton.textContent = plan.cta.text;
            
            pricingFooter.appendChild(ctaButton);
            
            pricingCard.appendChild(pricingHeader);
            pricingCard.appendChild(pricingFeatures);
            pricingCard.appendChild(pricingFooter);
            
            pricingCards.appendChild(pricingCard);
        });
        
        // Cargar la sección CTA
        document.getElementById('cta-title').textContent = content.cta.title;
        document.getElementById('cta-subtitle').textContent = content.cta.subtitle;
        
        const ctaButton = document.getElementById('cta-button');
        ctaButton.href = content.cta.button.href;
        ctaButton.textContent = content.cta.button.text;
        
        // Cargar la sección de contacto
        document.getElementById('contact-title').textContent = content.contact.title;
        document.getElementById('contact-subtitle').textContent = content.contact.subtitle;
        
        const contactForm = document.getElementById('contact-form');
        contactForm.innerHTML = '';
        
        content.contact.form.fields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = field.id === 'message' ? 'form-group full-width' : 'form-group';
            
            const label = document.createElement('label');
            label.htmlFor = field.id;
            label.textContent = field.label;
            
            let input;
            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.rows = 5;
            } else {
                input = document.createElement('input');
                input.type = field.type;
            }
            
            input.id = field.id;
            input.name = field.id;
            if (field.required) {
                input.required = true;
            }
            
            formGroup.appendChild(label);
            formGroup.appendChild(input);
            
            contactForm.appendChild(formGroup);
        });
        
        const submitGroup = document.createElement('div');
        submitGroup.className = 'form-group full-width';
        
        const submitButton = document.createElement('button');
        submitButton.type = content.contact.form.button.type;
        submitButton.className = 'btn btn-primary';
        submitButton.textContent = content.contact.form.button.text;
        
        submitGroup.appendChild(submitButton);
        contactForm.appendChild(submitGroup);
        
        // Cargar la información de contacto
        const contactInfo = document.getElementById('contact-info');
        
        // Eliminar todos los elementos excepto el último (social-media)
        while (contactInfo.children.length > 1) {
            contactInfo.removeChild(contactInfo.firstChild);
        }
        
        // Insertar los nuevos elementos de información antes del social-media
        content.contact.info.forEach(item => {
            const infoItem = document.createElement('div');
            infoItem.className = 'info-item';
            
            const infoIcon = document.createElement('div');
            infoIcon.className = 'info-icon';
            
            const icon = document.createElement('i');
            icon.className = item.icon;
            infoIcon.appendChild(icon);
            
            const infoContent = document.createElement('div');
            infoContent.className = 'info-content';
            
            const infoTitle = document.createElement('h4');
            infoTitle.textContent = item.title;
            
            const infoText = document.createElement('p');
            infoText.textContent = item.content;
            
            infoContent.appendChild(infoTitle);
            infoContent.appendChild(infoText);
            
            infoItem.appendChild(infoIcon);
            infoItem.appendChild(infoContent);
            
            // Insertar antes del último elemento (social-media)
            contactInfo.insertBefore(infoItem, contactInfo.lastChild);
        });
        
        // Cargar las redes sociales
        document.getElementById('social-title').textContent = content.contact.social.title;
        
        const socialIcons = document.getElementById('social-icons');
        socialIcons.innerHTML = '';
        
        content.contact.social.platforms.forEach(platform => {
            const socialLink = document.createElement('a');
            socialLink.href = platform.url;
            socialLink.target = '_blank';
            
            const icon = document.createElement('i');
            icon.className = platform.icon;
            
            socialLink.appendChild(icon);
            socialIcons.appendChild(socialLink);
        });
        
        // Cargar el footer
        document.getElementById('footer-tagline').textContent = content.footer.tagline;
        
        const footerLinks = document.getElementById('footer-links');
        footerLinks.innerHTML = '';
        
        content.footer.columns.forEach(column => {
            const footerColumn = document.createElement('div');
            footerColumn.className = 'footer-column';
            
            const columnTitle = document.createElement('h4');
            columnTitle.textContent = column.title;
            
            const columnLinks = document.createElement('ul');
            
            column.links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                li.appendChild(a);
                columnLinks.appendChild(li);
            });
            
            footerColumn.appendChild(columnTitle);
            footerColumn.appendChild(columnLinks);
            
            footerLinks.appendChild(footerColumn);
        });
        
        document.getElementById('footer-copyright').innerHTML = content.footer.copyright;
        
        const footerLegal = document.getElementById('footer-legal');
        footerLegal.innerHTML = '';
        
        content.footer.legal.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            footerLegal.appendChild(a);
        });
    }
    
    // Navegación suave al hacer clic en los enlaces del menú
const navLinks = document.querySelectorAll('.main-nav a, .hero-buttons a, .cta a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Cambiar estilo del header al hacer scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '0.75rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Animación de los elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .step, .testimonial, .pricing-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar los elementos con opacidad 0
    const elementsToAnimate = document.querySelectorAll('.feature-card, .step, .testimonial, .pricing-card');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar la animación al cargar la página y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Validación del formulario de contacto
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validar nombre
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Por favor, ingresa tu nombre');
                isValid = false;
            } else {
                removeError(nameInput);
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, 'Por favor, ingresa un email válido');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            // Validar mensaje
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Por favor, ingresa tu mensaje');
                isValid = false;
            } else {
                removeError(messageInput);
            }
            
            // Si el formulario es válido, mostrar mensaje de éxito
            if (isValid) {
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
                successMessage.style.backgroundColor = '#d4edda';
                successMessage.style.color = '#155724';
                successMessage.style.padding = '1rem';
                successMessage.style.borderRadius = '8px';
                successMessage.style.marginBottom = '1rem';
                
                contactForm.prepend(successMessage);
                contactForm.reset();
                
                // Eliminar el mensaje después de 5 segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Funciones para mostrar y eliminar errores en el formulario
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.color = '#dc3545';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.style.borderColor = '#dc3545';
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        input.style.borderColor = '';
    }
    
    // Testimonios deslizables en dispositivos móviles
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    
    if (testimonialsSlider && window.innerWidth <= 768) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialsSlider.style.cursor = 'grabbing';
            startX = e.pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });
        
        testimonialsSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialsSlider.style.cursor = 'grab';
        });
        
        testimonialsSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialsSlider.style.cursor = 'grab';
        });
        
        testimonialsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
    }
// Mobile menu functionality
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-label', 'Toggle menu');
    
    const hamburger = document.createElement('span');
    hamburger.className = 'hamburger';
    mobileMenuToggle.appendChild(hamburger);
    
    const headerContainer = document.querySelector('.header .container');
    headerContainer.appendChild(mobileMenuToggle);
    
    const mainNav = document.querySelector('.main-nav');
    const mobileNavLinks = document.querySelectorAll('.main-nav a');
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mainNav.classList.contains('active') &&
            !e.target.closest('.main-nav') &&
            !e.target.closest('.mobile-menu-toggle')) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Add mobile CTA button
    const mobileCta = document.createElement('a');
    mobileCta.href = content.header.cta.href;
    mobileCta.className = `btn btn-primary mobile-cta`;
    mobileCta.textContent = content.header.cta.text;
    mainNav.appendChild(mobileCta);
});