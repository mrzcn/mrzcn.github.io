/**
 * Emre Özcan Personal Website - Main JavaScript
 * Handles Theme Toggling, Multi-language Support, and UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initAnimations();
});

// --- Theme Management ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const body = document.body;
    const themeIcon = themeToggle.querySelector('.icon');
    const themeText = themeToggle.querySelector('.text');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        updateThemeUI(true);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeUI(isDark);
    });

    function updateThemeUI(isDark) {
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        // Text will be updated by i18n if active, otherwise fallback:
        if (!window.currentLang || window.currentLang === 'tr') {
            themeText.textContent = isDark ? 'Gündüz Modu' : 'Gece Modu';
        } else {
            themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }
    }
}

// --- Language Management (i18n) ---
const translations = {
    tr: {
        'nav-home': 'Ana Sayfa',
        'nav-about': 'Yolculuğum',
        'nav-solutions': 'Çözümler & Markalar',
        'nav-media': 'Yazılar & Medya',
        'theme-dark': 'Gece Modu',
        'theme-light': 'Gündüz Modu',
        'greeting': 'Vizyoner Liderlik & Teknoloji',
        'intro-1': 'Bilişim ve telekomünikasyon sektörlerinde 20 yıla yaklaşan deneyimimle, teknolojik dönüşüme liderlik ediyorum.',
        'intro-2': '2016 yılında kurduğum <strong>Nolto Teknoloji</strong> ile bugün küresel markaların Türkiye temsilciliğini üstlenerek katma değerli çözümler sunuyoruz.',
        'expertise': 'Uzmanlık Alanları',
        'about-title': 'Profesyonel Yolculuğum',
        'about-intro-1': 'Sektördeki yolculuğum, teknolojinin iş dünyasını nasıl dönüştüreceğine dair bir merakla başladı.',
        'about-intro-2': 'Bugün, Nolto Teknoloji çatısı altında dünya devlerini Türkiye pazarı ile buluşturuyoruz.',
        'vision': 'Vizyonumuz',
        'vision-text': 'Sadece ürün dağıtımı değil, mühendislik ve destek gücümüzle markaları pazar lideri konumuna taşımak.',
        'brands': 'Temsil Edilen Markalar'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'My Journey',
        'nav-solutions': 'Solutions & Brands',
        'nav-media': 'Media & Posts',
        'theme-dark': 'Dark Mode',
        'theme-light': 'Light Mode',
        'greeting': 'Visionary Leadership & Tech',
        'intro-1': 'With nearly 20 years of experience in IT and telecommunications, I lead technological transformation.',
        'intro-2': 'Through <strong>Nolto Technology</strong>, founded in 2016, we provide value-added solutions as the Turkish representative of global brands.',
        'expertise': 'Area of Expertise',
        'about-title': 'Professional Journey',
        'about-intro-1': 'My journey in the industry began with a curiosity about how technology would transform the business world.',
        'about-intro-2': 'Today, we bring global giants to the Turkish market under the roof of Nolto Technology.',
        'vision': 'Our Vision',
        'vision-text': 'To move brands to market leadership with our engineering and support power, not just distribution.',
        'brands': 'Represented Brands'
    }
};

function initLanguage() {
    const langToggle = document.getElementById('lang-toggle');
    if (!langToggle) return;

    window.currentLang = localStorage.getItem('lang') || 'tr';
    updateLanguageUI();

    langToggle.addEventListener('click', () => {
        window.currentLang = window.currentLang === 'tr' ? 'en' : 'tr';
        localStorage.setItem('lang', window.currentLang);
        updateLanguageUI();
    });
}

function updateLanguageUI() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.text');
    langText.textContent = window.currentLang === 'tr' ? 'EN' : 'TR';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[window.currentLang][key]) {
            el.innerHTML = translations[window.currentLang][key];
        }
    });

    // Special case for theme toggle text
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const isDark = document.body.classList.contains('dark');
        const themeText = themeToggle.querySelector('.text');
        themeText.textContent = isDark ? translations[window.currentLang]['theme-light'] : translations[window.currentLang]['theme-dark'];
    }
}

// --- Micro-animations ---
function initAnimations() {
    // Reveal elements on scroll or load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.blog-card-modern, .contact-card-mini, .skills-compact span').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });
}
