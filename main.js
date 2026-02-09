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
        // Navigation
        'nav-home': 'Gerçek Emre Özcan',
        'nav-about': 'Kariyer Yolculuğum',
        'nav-nolto': 'Nolto Teknoloji',
        'nav-services': 'Hizmetlerim',
        'nav-posts': 'Yazılarım',
        'nav-library': 'Kitaplığım',

        // Sidebar
        'social-title': 'Sosyal Medya Hesaplarım',
        'theme-dark': 'Gece Modu',
        'theme-light': 'Gündüz Modu',

        // Home Page
        'home-title': 'Gerçek Emre Özcan',
        'home-disclaimer': '<strong>Önemli Duyuru:</strong> Gerçek Emre Özcan benim. Lütfen kendisini internette Emre Özcan olarak tanıtanlara itibar etmeyin.',
        'intro-1': 'Bilişim ve telekomünikasyon sektörlerinde 20 yıla yaklaşan bir deneyime sahibim. Bu süre zarfında teknolojinin dönüştürücü gücüne tanıklık etme ve bu sürece katkı sağlama fırsatım oldu. Evli ve bir çocuk babasıyım, iyi derecede İngilizce biliyorum.',
        'intro-2': '2016 yılında, edindiğim tecrübeleri kurumsal bir çatı altında birleştirmek amacıyla <strong>Nolto Teknoloji</strong>\'yi kurdum. Bugün ekibimle birlikte sektörde değer katan çalışmalar yapmaya gayret ediyoruz.',
        'expertise-title': 'Çalışma Alanlarım',
        'exp-telecom': 'Telekomünikasyon',
        'exp-callcenter': 'Çağrı Merkezi Çözümleri',
        'exp-it': 'Bilişim Sistemleri',

        // About Page
        'about-title': 'Kariyer Yolculuğum',
        'about-timeline-current': '2016 - Günümüz',
        'about-timeline-past': '2006 - 2016',
        'about-current-role': 'Nolto Teknoloji (Kurucu)',
        'about-past-role': 'Bilişim & Telekomünikasyon Yöneticiliği',
        'about-intro-1': 'Sektördeki yolculuğuma, teknolojinin temellerini öğrenmeye duyduğum merakla başladım. Çeşitli global firmalarda görev alarak vizyonumu geliştirdim.',
        'about-intro-2': '2016 yılında, bu birikimlerimi kendi değerlerimle harmanlayarak Nolto Teknoloji\'yi hayata geçirdim.',

        // Services Page
        'services-title': 'Hizmetlerim',
        'service-it-title': 'IT Danışmanlığı',
        'service-it-desc': 'Kurumsal IT altyapıları, ağ sistemleri ve siber güvenlik konularında stratejik danışmanlık hizmetleri, BT süreçlerinin modernizasyonu ve dijital dönüşüm desteği.',
        'service-telecom-title': 'Telekomünikasyon Eğitimi',
        'service-telecom-desc': 'VoIP teknolojileri, IP Santral sistemleri (Yeastar, 3CX vb.) ve Tümleşik İletişim çözümleri üzerine bayi ve teknik personel için kapsamlı eğitim programları.',
        'service-callcenter-title': 'Çağrı Merkezi Çözümleri',
        'service-callcenter-desc': 'Küçük ve orta ölçekli işletmeler için uygun maliyetli, profesyonel çağrı merkezi altyapı kurulumu ve yönetimi.',
        'service-video-title': 'Video Konferans Sistemleri',
        'service-video-desc': 'Kurumsal video konferans altyapıları, toplantı odası çözümleri ve uzaktan çalışma platformları kurulumu.',
        'service-security-title': 'Siber Güvenlik Danışmanlığı',
        'service-security-desc': 'Güvenlik açığı analizi, penetrasyon testleri ve kurumsal siber güvenlik politikalarının oluşturulması.',
        'service-cloud-title': 'Bulut Geçiş Danışmanlığı',
        'service-cloud-desc': 'Mevcut sistemlerin bulut ortamına taşınması, hibrit altyapı tasarımı ve bulut maliyet optimizasyonu.',

        // Nolto Page
        'nolto-title': 'Nolto: Bir Girişim Hikayesi',
        'nolto-text': '2016 yılında, bilişim sektöründeki tecrübelerimi dürüst ve mühendislik odaklı bir yaklaşımla birleştirmek amacıyla Nolto Teknoloji\'yi kurdum.',
        'nolto-p1': 'Nolto\'yu kurarken en büyük motivasyonum, global teknoloji standartlarını yerel pazarın ihtiyaçlarıyla doğru bir şekilde buluşturmaktı. Dış yatırıma ihtiyaç duymadan, tamamen emeğimizle ve sektördeki dostlarımızın güveniyle bu yola çıktık.',
        'nolto-p2': 'Sadece bir distribütör olmanın ötesinde, teknik destek ve mühendislik gücümüzle markalarımıza değer katmaya odaklandık. Bu şeffaf yaklaşım, zamanla dünyanın önde gelen teknoloji üreticileriyle güçlü iş birlikleri kurmamıza vesile oldu.',
        'nolto-p3': 'Bugün Nolto Teknoloji, telekomünikasyon ve iletişim altyapıları konusunda mütevazı ama sağlam adımlarla ilerleyen bir ekip haline geldi. Bizim için en büyük başarı, iş ortaklarımızın duyduğu güvendir.',

        // Posts Page
        'posts-title': 'Yazılarım',
        'posts-intro': 'Tecrübe paylaştıkça çoğalır. Bilişim ve telekomünikasyon dünyasındaki küçük gözlemlerimi ve öğrendiklerimi burada bir araya getirmeye çalışıyorum.',
        'post-voip-title': 'VoIP Teknolojisinin Geleceği',
        'post-voip-desc': 'Teknolojinin evrimi ve sesli iletişimin geleceği üzerine bir inceleme.',
        'post-voip-date': '4 Ocak 2026 • 5 dk okuma',
        'back-to-posts': 'Yazılarıma Dön',

        // VoIP Blog Post
        'voip-title': 'VoIP Teknolojisinin Geleceği',
        'voip-date': '4 Ocak 2026',
        'voip-readtime': '5 dakika okuma',
        'voip-h2-future': 'Gelecek Trendleri',
        'voip-h2-security': 'Güvenlik ve Uyumluluk',
        'voip-h2-integration': 'Entegrasyon ve Tümleşik İletişim',
        'voip-h2-sme': 'KOBİ\'ler için Fırsatlar',
        'voip-h2-conclusion': 'Sonuç',

        // Library Page
        'library-title': 'Kitaplığım',
        'library-intro': 'Ufkumu açan, iş yapış şeklimi etkileyen ve gelişimime katkı sağlayan kitaplardan bir seçkiyi aşağıda paylaşıyorum.',
        'book1-title': 'Yalın Startup (The Lean Startup)',
        'book1-author': 'Eric Ries',
        'book1-desc': 'Girişimcilik ve ürün geliştirme süreçlerinde israfı önlemek ve hız kazanmak üzerine başucu kitabım.',
        'book2-title': 'Hızlı ve Yavaş Düşünme',
        'book2-author': 'Daniel Kahneman',
        'book2-desc': 'İnsan beyninin karar verme mekanizmalarını ve bilişsel hatalarımızı derinlemesine anlamamı sağladı.',
        'book3-title': 'Sıfırdan Bire (Zero to One)',
        'book3-author': 'Peter Thiel',
        'book3-desc': 'Yeni şeyler yaratmak ve tekel inşa etmenin önemine dair vizyoner bir bakış açısı sunuyor.',
        'book4-title': 'Etkili İnsanların 7 Alışkanlığı',
        'book4-author': 'Stephen R. Covey',
        'book4-desc': 'Sadece iş dünyasında değil, hayatta da karakter gelişimi ve disiplin üzerine klasik bir rehber.',
        'book5-title': 'Derin Çalışma (Deep Work)',
        'book5-author': 'Cal Newport',
        'book5-desc': 'Dikkat dağıtıcı dünyada odaklanarak çalışmanın ve değerli iş üretmenin kurallarını öğreten kitap.',
        'book6-title': 'Atomik Alışkanlıklar',
        'book6-author': 'James Clear',
        'book6-desc': 'Küçük değişikliklerin nasıl büyük sonuçlar yaratabileceğini gösteren pratik bir alışkanlık rehberi.',
        'book7-title': 'İyi\'den Mükemmel\'e (Good to Great)',
        'book7-author': 'Jim Collins',
        'book7-desc': 'Şirketlerin sıradanlıktan mükemmelliğe nasıl geçtiğini araştıran kapsamlı bir yönetim klasiği.',
        'book8-title': 'Sapiens: İnsan Türünün Kısa Tarihi',
        'book8-author': 'Yuval Noah Harari',
        'book8-desc': 'İnsanlık tarihine farklı bir perspektiften bakarak iş dünyasındaki büyük resmi görmeme yardımcı oldu.',
        'book9-title': 'Rework: İşi Yeniden Keşfet',
        'book9-author': 'Jason Fried & DHH',
        'book9-desc': 'Geleneksel iş yapma biçimlerini sorgulayan, pratik ve yenilikçi yaklaşımlar sunan bir manifesto.',
        'book10-title': 'Bağlantılar (The Tipping Point)',
        'book10-author': 'Malcolm Gladwell',
        'book10-desc': 'Fikirlerin, ürünlerin ve davranışların nasıl viral hale geldiğini anlatan etkileyici bir analiz.',

        // Contact Page
        'contact-title': 'İletişim',
        'contact-intro': 'Projeleriniz, iş birliği fırsatları veya sorularınız için benimle iletişime geçebilirsiniz.',
        'contact-email-title': 'E-posta',
        'contact-company-title': 'Şirket Web Sitesi',
        'contact-response-title': '📬 Yanıt Süresi',
        'contact-response-desc': 'E-postalara genellikle 24-48 saat içinde yanıt vermeye çalışıyorum. Acil konular için LinkedIn veya Telegram üzerinden ulaşabilirsiniz.',

        // 404 Page
        'error-title': 'Sayfa Bulunamadı',
        'error-desc': 'Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Ana sayfaya dönerek devam edebilirsiniz.',
        'error-back': 'Ana Sayfaya Dön',
    },
    en: {
        // Navigation
        'nav-home': 'Real Emre Özcan',
        'nav-about': 'My Career Journey',
        'nav-services': 'My Services',
        'nav-nolto': 'Nolto Technology',
        'nav-posts': 'My Posts',
        'nav-library': 'My Library',

        // Sidebar
        'social-title': 'My Social Media',
        'theme-dark': 'Dark Mode',
        'theme-light': 'Light Mode',

        // Home Page
        'home-title': 'Real Emre Özcan',
        'home-disclaimer': '<strong>Important Notice:</strong> I am the real Emre Özcan. Please do not trust those who introduce themselves as Emre Özcan on the internet.',
        'intro-1': 'I have nearly 20 years of experience in IT and telecommunications. During this time, I have had the chance to witness and contribute to the transformative power of technology. I am married, a father of one, and I can communicate at professional and social levels in English.',
        'intro-2': 'In 2016, I founded <strong>Nolto Technology</strong> to bring my experiences together under a corporate roof. Today, along with my team, we strive to add value to the industry.',
        'expertise-title': 'Focus Areas',
        'exp-telecom': 'Telecommunications',
        'exp-callcenter': 'Call Center Solutions',
        'exp-it': 'IT Systems',

        // About Page
        'about-title': 'My Career Journey',
        'about-timeline-current': '2016 - Present',
        'about-timeline-past': '2006 - 2016',
        'about-current-role': 'Nolto Technology (Founder)',
        'about-past-role': 'IT & Telecommunications Management',
        'about-intro-1': 'I started my journey with a curiosity for learning the foundations of technology. I grew my vision by working in various global companies.',
        'about-intro-2': 'In 2016, I brought these experiences to life by founding Nolto Technology, blending them with my own values.',

        // Services Page
        'services-title': 'My Services',
        'service-it-title': 'IT Consultancy',
        'service-it-desc': 'Strategic consultancy services on corporate IT infrastructures, network systems and cyber security, IT process modernization and digital transformation support.',
        'service-telecom-title': 'Telecommunication Training',
        'service-telecom-desc': 'Comprehensive training programs for resellers and technical staff on VoIP technologies, IP PBX systems (Yeastar, 3CX etc.) and Unified Communication solutions.',
        'service-callcenter-title': 'Call Center Solutions',
        'service-callcenter-desc': 'Cost-effective, professional call center infrastructure setup and management for small and medium-sized businesses.',
        'service-video-title': 'Video Conferencing Systems',
        'service-video-desc': 'Corporate video conferencing infrastructures, meeting room solutions and remote work platform setup.',
        'service-security-title': 'Cyber Security Consultancy',
        'service-security-desc': 'Vulnerability analysis, penetration testing and creation of corporate cyber security policies.',
        'service-cloud-title': 'Cloud Migration Consultancy',
        'service-cloud-desc': 'Migration of existing systems to cloud environment, hybrid infrastructure design and cloud cost optimization.',

        // Nolto Page
        'nolto-title': 'Nolto: An Entrepreneurial Story',
        'nolto-text': 'In 2016, I founded Nolto Technology to combine my experiences in the IT sector with an honest and engineering-focused approach.',
        'nolto-p1': 'My biggest motivation in founding Nolto was to properly match global technology standards with local market needs. We set out on this journey without external investment, entirely with our own efforts and the trust of our colleagues in the industry.',
        'nolto-p2': 'Beyond being just a distributor, we focused on adding value to our brands with our technical support and engineering capabilities. This transparent approach eventually led us to establish strong partnerships with the world\'s leading technology manufacturers.',
        'nolto-p3': 'Today, Nolto Technology has become a team that progresses with humble but solid steps in telecommunications and communication infrastructures. For us, the greatest success is the trust of our business partners.',

        // Posts Page
        'posts-title': 'My Posts',
        'posts-intro': 'Experience multiplies when shared. I try to bring together my small observations and learnings from the world of IT and telecommunications here.',
        'post-voip-title': 'The Future of VoIP Technology',
        'post-voip-desc': 'An examination of the evolution of technology and the future of voice communication.',
        'post-voip-date': 'January 4, 2026 • 5 min read',
        'back-to-posts': 'Back to Posts',

        // VoIP Blog Post
        'voip-title': 'The Future of VoIP Technology',
        'voip-date': 'January 4, 2026',
        'voip-readtime': '5 min read',
        'voip-h2-future': 'Future Trends',
        'voip-h2-security': 'Security and Compliance',
        'voip-h2-integration': 'Integration and Unified Communications',
        'voip-h2-sme': 'Opportunities for SMEs',
        'voip-h2-conclusion': 'Conclusion',

        // Library Page
        'library-title': 'My Library',
        'library-intro': 'Here is a selection of books that have broadened my horizons, influenced the way I work, and contributed to my development.',
        'book1-title': 'The Lean Startup',
        'book1-author': 'Eric Ries',
        'book1-desc': 'My go-to book on preventing waste and gaining speed in entrepreneurship and product development processes.',
        'book2-title': 'Thinking, Fast and Slow',
        'book2-author': 'Daniel Kahneman',
        'book2-desc': 'It helped me deeply understand the decision-making mechanisms of the human brain and our cognitive biases.',
        'book3-title': 'Zero to One',
        'book3-author': 'Peter Thiel',
        'book3-desc': 'Offers a visionary perspective on the importance of creating new things and building monopolies.',
        'book4-title': 'The 7 Habits of Highly Effective People',
        'book4-author': 'Stephen R. Covey',
        'book4-desc': 'A classic guide on character development and discipline, not only in business but also in life.',
        'book5-title': 'Deep Work',
        'book5-author': 'Cal Newport',
        'book5-desc': 'A book that teaches the rules of focused work and producing valuable output in a distracted world.',
        'book6-title': 'Atomic Habits',
        'book6-author': 'James Clear',
        'book6-desc': 'A practical habit guide showing how small changes can create big results.',
        'book7-title': 'Good to Great',
        'book7-author': 'Jim Collins',
        'book7-desc': 'A comprehensive management classic that researches how companies go from mediocrity to excellence.',
        'book8-title': 'Sapiens: A Brief History of Humankind',
        'book8-author': 'Yuval Noah Harari',
        'book8-desc': 'Helped me see the big picture in business by looking at human history from a different perspective.',
        'book9-title': 'Rework',
        'book9-author': 'Jason Fried & DHH',
        'book9-desc': 'A manifesto that questions traditional ways of doing business and offers practical, innovative approaches.',
        'book10-title': 'The Tipping Point',
        'book10-author': 'Malcolm Gladwell',
        'book10-desc': 'An impressive analysis of how ideas, products and behaviors go viral.',

        // Contact Page
        'contact-title': 'Contact',
        'contact-intro': 'You can contact me for your projects, collaboration opportunities or questions.',
        'contact-email-title': 'Email',
        'contact-company-title': 'Company Website',
        'contact-response-title': '📬 Response Time',
        'contact-response-desc': 'I usually try to respond to emails within 24-48 hours. For urgent matters, you can reach me via LinkedIn or Telegram.',

        // 404 Page
        'error-title': 'Page Not Found',
        'error-desc': 'The page you are looking for may have been moved, deleted, or never existed. You can continue by returning to the homepage.',
        'error-back': 'Back to Homepage',
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
