/**
 * Emre Özcan Personal Website - Main JavaScript
 * Handles Theme Toggling, Multi-language Support, and UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initAnimations();
    setSidebarActive();
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
        'nav-home': 'Gerçek Emre Özcan',
        'nav-about': 'Kariyer Yolculuğum',
        'nav-nolto': 'Nolto Teknoloji',
        'nav-services': 'Hizmetlerim',
        'social-title': 'Sosyal Medya Hesaplarım',
        'services-title': 'Hizmetlerim',
        'service-it-title': 'IT Danışmanlığı',
        'service-it-desc': 'Kurumsal IT altyapıları, ağ sistemleri ve siber güvenlik konularında stratejik danışmanlık hizmetleri, BT süreçlerinin modernizasyonu ve dijital dönüşüm desteği.',
        'service-telecom-title': 'Telekomünikasyon Eğitimi',
        'service-telecom-desc': 'VoIP teknolojileri, IP Santral sistemleri (Yeastar, 3CX vb.) ve Tümleşik İletişim çözümleri üzerine bayi ve teknik personel için kapsamlı eğitim programları.',
    },
    en: {
        'nav-home': 'Real Emre Özcan',
        'nav-about': 'My Career Journey',
        'nav-services': 'My Services',
        'nav-nolto': 'Nolto Technology',
        'nav-posts': 'My Posts',

        'nav-library': 'My Library',
        'social-title': 'My Social Media',
        'theme-dark': 'Dark Mode',
        'theme-light': 'Light Mode',
        'services-title': 'My Services',
        'service-it-title': 'IT Consultancy',
        'service-it-desc': 'Strategic consultancy services on corporate IT infrastructures, network systems and cyber security, IT process modernization and digital transformation support.',
        'service-telecom-title': 'Telecommunication Training',
        'service-telecom-desc': 'Comprehensive training programs for resellers and technical staff on VoIP technologies, IP PBX systems (Yeastar, 3CX etc.) and Unified Communication solutions.',
        'greeting': 'Hi, I am Emre Özcan',
        'intro-1': 'I have nearly 20 years of experience in IT and telecommunications. During this time, I have had the chance to witness and contribute to the transformative power of technology. I am married, a father of one, and I can communicate at professional and social levels in English.',
        'intro-2': 'In 2016, I founded <strong>Nolto Technology</strong> to bring my experiences together under a corporate roof. Today, along with my team, we strive to add value to the industry.',
        'expertise-title': 'Focus Areas',
        'exp-telecom': 'Telecommunications',
        'exp-callcenter': 'Call Center Solutions',
        'exp-it': 'IT Systems',
        'about-title': 'My Career',
        'about-intro-1': 'I started my journey with a curiosity for learning the foundations of technology. I grew my vision by working in various global companies.',
        'about-intro-2': 'In 2016, I brought these experiences to life by founding Nolto Technology, blending them with my own values.',
        'nolto-title': 'Nolto: An Entrepreneurial Story',
        'nolto-text': 'My goal in founding Nolto Technology was to fill the gaps in the industry with an honest and engineering-oriented approach.',
    }
};

// --- Sidebar Active States ---
function setSidebarActive() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

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
