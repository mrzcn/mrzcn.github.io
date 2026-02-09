/**
 * Emre Özcan Personal Website - Main JavaScript
 * Handles Theme Toggling, Multi-language Support, and UI Interactions
 */

// Initial listener removed to avoid duplication with the one at the bottom.

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
        'intro-1': 'Dijital dünyada iz bırakmak isteyen işletmeler için teknoloji ve stratejiyi birleştiriyorum. 20 yıla yaklaşan deneyimimle, karmaşık IT süreçlerini sadeleştiriyor, telekomünikasyon altyapılarını modern iş ihtiyaçlarına uygun hale getiriyorum. Teknolojinin sadece bir araç değil, işletmeleri dönüştüren bir güç olduğuna inanıyorum.',
        'intro-2': '2016 yılında kurduğum <strong>Nolto Teknoloji</strong> ile, sadece bir hizmet sağlayıcı değil, işletmenizin büyüme yolculuğunda güvenilir bir "Teknoloji Yol Arkadaşı" olmayı hedefliyoruz. Global standartları yerel dinamiklerle harmanlayarak katma değer üretiyoruz.',
        'expertise-title': 'Uzmanlık Alanlarım',
        'exp-telecom': 'Telekomünikasyon Stratejileri',
        'exp-callcenter': 'Müşteri Deneyimi & Çağrı Merkezi',
        'exp-it': 'IT Altyapı & Güvenlik',

        // About Page
        'about-title': 'Kariyer Yolculuğum',
        'about-timeline-current': '2016 - Günümüz',
        'about-timeline-past': '2006 - 2016',
        'about-current-role': 'Nolto Teknoloji (Kurucu & Yönetici)',
        'about-past-role': 'Kurumsal Bilişim & Telekomünikasyon',
        'about-intro-1': 'Teknolojiye olan tutkum, sistemlerin nasıl çalıştığını anlama merakıyla başladı. Global teknoloji devlerinde edindiğim disiplin ve vizyon, karmaşık projeleri yönetme ve stratejik kararlar alma yetimi geliştirdi. Her satır kodda ve her kablo bağlantısında büyük resmi görmeyi öğrendim.',
        'about-intro-2': '2016 yılında, edindiğim bu kurumsal hafızayı girişimcilik ruhuyla birleştirmek için Nolto Teknoloji\'yi kurdum. Amacım, sadece teknoloji satmak değil, işletmelere doğru teknolojiyi doğru zamanda kullanma kültürü kazandırmaktı.',

        // Services Page
        'services-title': 'Hizmetlerim',
        'service-it-title': 'IT Danışmanlığı',
        'service-it-desc': 'İşletmenizin dijital omurgasını güçlendirin. Ağ güvenliğinden bulut entegrasyonuna, verimliliği artıran ve riskleri minimize eden uçtan uca IT stratejileri.',
        'service-telecom-title': 'Telekomünikasyon',
        'service-telecom-desc': 'Sınırları kaldıran iletişim çözümleri. VoIP, Bulut Santral ve Video Konferans sistemleriyle ekibinizi ve müşterilerinizi kesintisiz birbirine bağlayın.',
        'service-management-title': 'Yönetim Danışmanlığı',
        'service-management-desc': 'Değişimi yönetin, geleceği tasarlayın. Süreç optimizasyonu, çevik dönüşüm ve dijital liderlik konularında işletmenize özel stratejik rehberlik.',

        // Service Details
        'back-to-services': 'Hizmetlerime Dön',

        'service-it-detail-title': 'IT Danışmanlığı',
        'service-it-detail-desc': 'Teknoloji yatırımlarınızdan maksimum geri dönüş almanızı sağlıyoruz. Mevcut altyapınızın detaylı analiziyle (Audit) başlıyor, darboğazları tespit ediyor ve işletmenizin hedeflerine uygun, ölçeklenebilir bir IT yol haritası çiziyoruz. Siber güvenlik farkındalığı, veri yedekleme stratejileri ve felaket kurtarma senaryolarıyla iş sürekliliğinizi güvence altına alıyoruz. Karmaşık dijital dönüşüm süreçlerinde pusulanız oluyoruz.',

        'service-telecom-detail-title': 'Telekomünikasyon',
        'service-telecom-detail-desc': 'İletişim, modern iş dünyasının can damarıdır. Biz, ses ve görüntünün ötesine geçerek, iş akışlarınıza entegre olan akıllı iletişim ekosistemleri kuruyoruz. Coğrafi sınırları kaldıran VoIP çözümleri, müşteri deneyimini mükemmelleştiren Çağrı Merkezi kurguları ve hibrit çalışma modelini destekleyen Video Konferans odaları tasarlıyoruz. Maliyet avantajı ve operasyonel esneklik sağlayan altyapılarla rekabet gücünüzü artırıyoruz.',

        'service-management-detail-title': 'Yönetim Danışmanlığı',
        'service-management-detail-desc': 'Büyüme sancıları çeken veya verimliliğini artırmak isteyen işletmelere dışarıdan bir göz değil, içeriden bir ortak gibi yaklaşıyoruz. Organizasyonel körlüğü ortadan kaldırarak iş süreçlerinizi yalınlaştırıyor, karar alma mekanizmalarınızı veri odaklı hale getiriyoruz. Kurumsallaşma adımları, performans yönetimi ve dijital kültürün şirketinize adaptasyonu konularında, teorik değil, sahada test edilmiş pratik çözümler sunuyoruz.',

        // Nolto Page
        'nolto-title': 'Nolto: Tutkudan Doğan Bir Girişim',
        'nolto-text': 'Nolto Teknoloji, "Teknolojiyi İnsana Hizmet Eder Hale Getirme" vizyonuyla, 2016 yılında mütevazı bir ofiste filizlenen bir hayalin ürünüdür.',
        'nolto-p1': 'Kuruluşumuzdaki temel prensip, global teknoloji standartlarını Türkiye\'deki işletmelerin gerçek ihtiyaçlarına göre terzilemekti. "Kutuyu sat ve git" anlayışının ötesine geçerek, sorunu anlayan, çözüm üreten ve satış sonrasında da müşterisinin yanında duran bir mühendislik firması olmayı seçtik.',
        'nolto-p2': 'Dış yatırıma ihtiyaç duymadan, tamamen öz sermayemiz ve müşterilerimizin bize duyduğu güvenle büyüdük. Bu organik büyüme, bize bağımsız karar alma ve her zaman müşterimizin çıkarını koruma özgürlüğü verdi. Bugün, dünyanın önde gelen teknoloji üreticilerinin (Logitech, Yealink, Poly vb.) Türkiye\'deki yetkin iş ortağı konumundayız.',
        'nolto-p3': 'Nolto Teknoloji bugün, telekomünikasyon altyapılarından akıllı toplantı odalarına kadar geniş bir yelpazede hizmet sunan, teknik yetkinliği yüksek bir ekip haline geldi. Ancak değişmeyen tek şey, ilk günkü heyecanımız ve "İşinizi İşimiz Gibi Sahiplenme" sözümüzdür.',

        // Posts Page
        'posts-title': 'Yazılarım',
        'posts-intro': 'Bilgi paylaştıkça çoğalır, tecrübe aktarıldıkça değer kazanır. Sektörel öngörülerimi, teknolojik trend analizlerimi ve girişimcilik serüvenimden notları burada derliyorum.',
        'post-voip-title': 'VoIP Teknolojisinin Geleceği: Sesin Ötesinde',
        'post-voip-desc': 'İletişim altyapılarının evrimi, yapay zeka entegrasyonu ve 5G ile değişen iş yapış şekilleri üzerine derinlemesine bir analiz.',
        'post-voip-date': '4 Ocak 2026 • 5 dk okuma',
        'back-to-posts': 'Yazılarıma Dön',

        // VoIP Blog Post
        'voip-title': 'VoIP Teknolojisinin Geleceği',
        'voip-date': '4 Ocak 2026',
        'voip-readtime': '5 dakika okuma',
        'voip-h2-future': 'Gelecek Trendleri: Akıllı İletişim',
        'voip-h2-security': 'Siber Güvenlik ve Veri Gizliliği',
        'voip-h2-integration': 'Entegrasyon Çağı: Her Şey Birbiriyle Konuşuyor',
        'voip-h2-sme': 'KOBİ\'ler için Dijital Eşitlik',
        'voip-h2-conclusion': 'Sonuç: Geleceğe Hazırlanmak',
        'voip-p1': 'Voice over Internet Protocol (VoIP), artık sadece "internetten telefon görüşmesi" demek değil. İş dünyasının dijital sinir sistemi haline geldi. Geleneksel bakır kabloların yerini alan fiber optik ağlar üzerinde, ses artık sadece bir veri paketi. Ancak bu dönüşüm, maliyet avantajının çok ötesinde stratejik fırsatlar barındırıyor. 20 yıllık sektör gözlemimle, bu değişimin nereye evrildiğini analiz ediyorum.',
        'voip-p2': 'Yapay Zeka (AI), VoIP dünyasında devrim yaratıyor. Artık santraller sadece aramayı yönlendirmiyor; arayanın duygu durumunu analiz ediyor, konuşmayı anlık olarak metne döküyor ve hatta farklı diller arasında simultane çeviri yapıyor. Bu, bir çağrı merkezi için müşteri memnuniyetinde %40\'a varan artış demek.',
        'voip-p3': '5G teknolojisi, mobiliteyi yeniden tanımlıyor. Artık "ofis telefonu" kavramı cebimize, laptopumuza, hatta akıllı saatimize girdi. 5G\'nin düşük gecikme süresi (low latency) sayesinde, hareket halindeyken bile HD kalitesinde video konferans ve kesintisiz ses iletişimi mümkün. Uzaktan çalışma, geçici bir trend değil, kalıcı bir iş modeli.',
        'voip-p4': 'Her bağlantı bir risk de doğurur. VoIP sistemleri internete açık olduğu için siber saldırıların hedefi olabiliyor. Ancak modern şifreleme protokolleri (TLS/SRTP) ve SBC (Session Border Controller) teknolojileri ile güvenliği bankacılık seviyesine taşımak mümkün. Veri güvenliği artık bir IT detayı değil, bir yönetim kurulu gündemi.',
        'voip-p5': 'İzole sistemler çağı bitti. VoIP artık CRM\'inizle, Proje Yönetim aracınızla ve ERP sisteminizle konuşuyor. Bir müşteri aradığında, o müşterinin son siparişi, açık şikayet kaydı ve ödeme dengesi ekranınıza otomatik düşüyor. Microsoft Teams veya Zoom entegrasyonları ile telefon santrali ve video konferans tek bir uygulamada birleşiyor.',
        'voip-p6': 'Bulut teknolojisi, KOBİ\'lere Fortune 500 şirketlerinin kullandığı altyapıyı erişilebilir fiyatlarla sunuyor. Binlerce dolarlık donanım yatırımı yapmadan, aylık aboneliklerle profesyonel çağrı merkezi özelliklerine sahip olmak, küçük işletmelerin rekabet gücünü artırıyor. Bu, teknolojinin demokratikleşmesidir.',
        'voip-p7': 'Özetle; VoIP bir altyapı yatırımı değil, bir verimlilik yatırımıdır. Gelecek, sadece "ALO" diyenlerin değil, iletişimi veriye, veriyi de içgörüye dönüştürenlerin olacaktır. İşletmenizi bu geleceğe hazırlamak için doğru zaman şimdi.',
        'voip-quote': '"Teknoloji sadece bir araçtır. Asıl mesele, bu aracı kullanarak insanları birbirine nasıl daha iyi bağladığınızdır. VoIP, samimiyeti ve profesyonelliği dijital dünyada birleştirmenin en güçlü yoludur."',

        // Library Page
        'library-title': 'Kitaplığım',
        'library-intro': 'Zihnimi besleyen, bakış açımı değiştiren ve beni bugünkü ben yapan kitaplardan seçkiler. Okumak, en iyi mentorluktur.',
        'book1-title': 'Yalın Startup (The Lean Startup)',
        'book1-author': 'Eric Ries',
        'book1-desc': 'Belirsizlik ortamında nasıl sürdürülebilir bir iş modeli kurulur? Girişimcilikte deneme-yanılma maliyetini düşürmenin bilimsel yaklaşımı.',
        'book2-title': 'Hızlı ve Yavaş Düşünme',
        'book2-author': 'Daniel Kahneman',
        'book2-desc': 'Kararlarımızı yöneten iki sistem. Neden hata yaparız ve mantıksız kararlar alırız? Davranışsal iktisadın başyapıtı.',
        'book3-title': 'Sıfırdan Bire (Zero to One)',
        'book3-author': 'Peter Thiel',
        'book3-desc': 'Rekabet etmek yerine tekel oluşturmak. Geleceği inşa etmek için dikey ilerlemenin (teknoloji) önemi üzerine provokatif bir manifesto.',
        'book4-title': 'Etkili İnsanların 7 Alışkanlığı',
        'book4-author': 'Stephen R. Covey',
        'book4-desc': 'Kişisel liderlikten kişilerarası liderliğe geçiş. Karakter etiği ve prensip merkezli yaşam üzerine zamansız bir rehber.',
        'book5-title': 'Derin Çalışma (Deep Work)',
        'book5-author': 'Cal Newport',
        'book5-desc': 'Dikkat ekonomisinde odaklanma süper gücü. Sığ işlerden sıyrılıp, bilişsel sınırlarınızı zorlayarak değer üretmenin yolları.',
        'book6-title': 'Atomik Alışkanlıklar',
        'book6-author': 'James Clear',
        'book6-desc': '%1 iyileşmenin bileşik etkisi. Sistem odaklı bir yaklaşımla iyi alışkanlıklar edinme ve kötüleri bırakma sanatı.',
        'book7-title': 'İyi\'den Mükemmel\'e (Good to Great)',
        'book7-author': 'Jim Collins',
        'book7-desc': 'Neden bazı şirketler sıçrama yaparken diğerleri yapamaz? Disiplinli insanlar, disiplinli düşünce ve disiplinli eylem.',
        'book8-title': 'Sapiens: İnsan Türünün Kısa Tarihi',
        'book8-author': 'Yuval Noah Harari',
        'book8-desc': 'Biyolojiden tarihe, ekonomiden mutluluğa insanlığın serüveni. Bugünümüzü anlamak için geçmişe devasa bir bakış.',
        'book9-title': 'Rework: İşi Yeniden Keşfet',
        'book9-author': 'Jason Fried & DHH',
        'book9-desc': 'Büyümek zorunda değilsiniz. Toplantılar zehirlidir. Planlama tahmindir. İş dünyasının klişelerine meydan okuyan pratik öğütler.',
        'book10-title': 'Kıvılcım Anı (The Tipping Point)',
        'book10-author': 'Malcolm Gladwell',
        'book10-desc': 'Küçük değişimlerin büyük salgınlara dönüşmesi. Fikirler nasıl yayılır ve trendler nasıl oluşur?',

        // Contact Page
        'contact-title': 'İletişime Geçin',
        'contact-intro': 'Yeni bir proje, stratejik bir iş birliği veya sadece bir "Merhaba" için. Dijitalde değil, gerçek dünyada da bağ kurmaya inanıyorum.',
        'contact-email-title': 'E-posta',
        'contact-company-title': 'Kurumsal Web Sitesi',
        'contact-response-title': '📬 İletişim Politikam',
        'contact-response-desc': 'Gelen her mesajı bizzat okuyorum. Yoğunluğa bağlı olarak dönüş sürem 24-48 saati bulabilir. Anlayışınız için teşekkürler.',

        // 404 Page
        'error-title': 'Sayfa Kayboldu',
        'error-desc': 'Bazen dijital dünyada kaybolmak, yeni yollar keşfetmek için bir fırsattır. Ancak şu an aradığınız sayfa burada değil.',
        'error-back': 'Güvenli Limana (Ana Sayfa) Dön',
    },
    en: {
        // Navigation
        'nav-home': 'Real Emre Özcan',
        'nav-about': 'Career Journey',
        'nav-services': 'My Services',
        'nav-nolto': 'Nolto Technology',
        'nav-posts': 'Insights & Blog',
        'nav-library': 'Library',

        // Sidebar
        'social-title': 'Connect with Me',
        'theme-dark': 'Dark Mode',
        'theme-light': 'Light Mode',

        // Home Page
        'home-title': 'Real Emre Özcan',
        'home-disclaimer': '<strong>Important Notice:</strong> I am the real Emre Özcan. Please do not trust those who introduce themselves as Emre Özcan on the internet.',
        'intro-1': 'I bridge the gap between technology and strategy for businesses aiming to leave a mark in the digital world. With nearly 20 years of experience, I simplify complex IT processes and modernize telecommunication infrastructures to meet contemporary business needs. I believe technology is not just a tool, but a force that transforms businesses.',
        'intro-2': 'With <strong>Nolto Technology</strong>, which I founded in 2016, we aim to be not just a service provider, but a reliable "Technology Partner" in your business\'s growth journey. We generate value by blending global standards with local dynamics.',
        'expertise-title': 'Core Competencies',
        'exp-telecom': 'Telecom Strategies',
        'exp-callcenter': 'CX & Call Center',
        'exp-it': 'IT Infrastructure & Security',

        // About Page
        'about-title': 'My Career Journey',
        'about-timeline-current': '2016 - Present',
        'about-timeline-past': '2006 - 2016',
        'about-current-role': 'Nolto Technology (Founder)',
        'about-past-role': 'Corporate IT & Telecom Management',
        'about-intro-1': 'My passion for technology began with a curiosity to understand how systems work. The discipline and vision I gained at global tech giants honed my ability to manage complex projects and make strategic decisions. I learned to see the big picture in every line of code and every cable connection.',
        'about-intro-2': 'In 2016, I founded Nolto Technology to combine this corporate memory with an entrepreneurial spirit. My goal was not just to sell technology, but to instill a culture of using the right technology at the right time in businesses.',

        // Services Page
        'services-title': 'Services',
        'service-it-title': 'IT Consultancy',
        'service-it-desc': 'Strengthen your business\'s digital backbone. End-to-end IT strategies from network security to cloud integration that increase efficiency and minimize risks.',
        'service-telecom-title': 'Telecommunications',
        'service-telecom-desc': 'Communication solutions that remove borders. Connect your team and customers seamlessly with VoIP, Cloud PBX, and Video Conferencing systems.',
        'service-management-title': 'Management Consulting',
        'service-management-desc': 'Manage change, design the future. Strategic guidance tailored to your business on process optimization, agile transformation, and digital leadership.',

        // Service Details
        'back-to-services': 'Back to Services',

        'service-it-detail-title': 'IT Consultancy',
        'service-it-detail-desc': 'We ensure you get the maximum return on your technology investments. We start with a detailed Audit of your current infrastructure, identify bottlenecks, and draw a scalable IT roadmap suitable for your business goals. We secure your business continuity with cybersecurity awareness, data backup strategies, and disaster recovery scenarios. We become your compass in complex digital transformation processes.',

        'service-telecom-detail-title': 'Telecommunications',
        'service-telecom-detail-desc': 'Communication is the lifeline of the modern business world. Going beyond voice and video, we establish intelligent communication ecosystems integrated into your business flows. We design VoIP solutions that remove geographical borders, Call Center setups that perfect customer experience, and Video Conference rooms supporting the hybrid work model. We increase your competitiveness with infrastructures providing cost advantage and operational flexibility.',

        'service-management-detail-title': 'Management Consulting',
        'service-management-detail-desc': 'We approach businesses experiencing growing pains or wanting to increase efficiency not as an outsider, but as an insider partner. By eliminating organizational blindness, we lean your business processes and make your decision-making mechanisms data-driven. We offer practical solutions tested in the field, not just theory, on institutionalization steps, performance management, and adaptation of digital culture to your company.',

        // Nolto Page
        'nolto-title': 'Nolto: A Venture Born of Passion',
        'nolto-text': 'Nolto Technology is the product of a dream that sprouted in a humble office in 2016, with the vision of "Making Technology Serve People".',
        'nolto-p1': 'The fundamental principle at our inception was to tailor global technology standards to the real needs of businesses in Turkey. Going beyond the "sell the box and leave" mentality, we chose to be an engineering firm that understands the problem, produces solutions, and stands by its customers after the sale.',
        'nolto-p2': 'We grew without needing external investment, entirely with our own equity and the trust our customers placed in us. This organic growth gave us the freedom to make independent decisions and always protect our customers\' interests. Today, we are the competent business partner of the world\'s leading technology manufacturers (Logitech, Yealink, Poly, etc.) in Turkey.',
        'nolto-p3': 'Today, Nolto Technology has become a team with high technical competence, offering a wide range of services from telecommunication infrastructures to smart meeting rooms. However, the only thing that hasn\'t changed is our day-one excitement and our promise to "Own Your Business Like Our Own".',

        // Posts Page
        'posts-title': 'Insights',
        'posts-intro': 'Knowledge multiplies when shared, experience gains value when transferred. I compile my sectoral insights, technology trend analyses, and notes from my entrepreneurship adventure here.',
        'post-voip-title': 'The Future of VoIP: Beyond Voice',
        'post-voip-desc': 'An in-depth analysis on the evolution of communication infrastructures, AI integration, and business ways changing with 5G.',
        'post-voip-date': 'January 4, 2026 • 5 min read',
        'back-to-posts': 'Back to Posts',

        // VoIP Blog Post
        'voip-title': 'The Future of VoIP Technology',
        'voip-date': 'January 4, 2026',
        'voip-readtime': '5 min read',
        'voip-h2-future': 'Future Trends: Smart Communication',
        'voip-h2-security': 'Cybersecurity and Data Privacy',
        'voip-h2-integration': 'Integration Era: Everything Talks to Each Other',
        'voip-h2-sme': 'Digital Equality for SMEs',
        'voip-h2-conclusion': 'Conclusion: Preparing for the Future',
        'voip-p1': 'Voice over Internet Protocol (VoIP) no longer just means "phone calls over the internet". It has become the digital nervous system of the business world. On fiber optic networks replacing traditional copper wires, voice is now just a data packet. However, this transformation holds strategic opportunities far beyond cost advantage. I analyze where this change is evolving with my 20 years of industry observation.',
        'voip-p2': 'Artificial Intelligence (AI) is revolutionizing the VoIP world. PBXs no longer just route calls; they analyze the caller\'s mood, transcribe speech instantly, and even perform simultaneous translation between different languages. This means up to a 40% increase in customer satisfaction for a call center.',
        'voip-p3': '5G technology is redefining mobility. The concept of "office phone" has now entered our pockets, laptops, and even smartwatches. Thanks to 5G\'s low latency, HD quality video conferencing and uninterrupted voice communication are possible even while on the move. Remote work is not a temporary trend, but a permanent business model.',
        'voip-p4': 'Every connection also creates a risk. Since VoIP systems are open to the internet, they can be targets of cyber attacks. However, it is possible to raise security to banking levels with modern encryption protocols (TLS/SRTP) and SBC (Session Border Controller) technologies. Data security is no longer an IT detail, but a board agenda item.',
        'voip-p5': 'The era of isolated systems is over. VoIP now talks to your CRM, Project Management tool, and ERP system. When a customer calls, that customer\'s last order, open complaint record, and payment balance automatically fall onto your screen. With Microsoft Teams or Zoom integrations, the telephone PBX and video conferencing merge into a single application.',
        'voip-p6': 'Cloud technology offers the infrastructure used by Fortune 500 companies to SMEs at accessible prices. Accessing professional call center features with monthly subscriptions without making thousands of dollars of hardware investment increases the competitiveness of small businesses. This is the democratization of technology.',
        'voip-p7': 'In summary; VoIP is not an infrastructure investment, it is an efficiency investment. The future belongs not to those who just say "HELLO", but to those who transform communication into data, and data into insight. The right time to prepare your business for this future is now.',
        'voip-quote': '"Technology is just a tool. The real issue is how you use this tool to connect people better. VoIP is the most powerful way to combine sincerity and professionalism in the digital world."',

        // Library Page
        'library-title': 'Library',
        'library-intro': 'Selections of books that feed my mind, change my perspective, and made me who I am today. Reading is the best mentorship.',
        'book1-title': 'The Lean Startup',
        'book1-author': 'Eric Ries',
        'book1-desc': 'How to build a sustainable business model in an environment of uncertainty? The scientific approach to reducing trial-and-error costs in entrepreneurship.',
        'book2-title': 'Thinking, Fast and Slow',
        'book2-author': 'Daniel Kahneman',
        'book2-desc': 'The two systems that govern our decisions. Why do we make mistakes and irrational decisions? A masterpiece of behavioral economics.',
        'book3-title': 'Zero to One',
        'book3-author': 'Peter Thiel',
        'book3-desc': 'Creating a monopoly instead of competing. A provocative manifesto on the importance of vertical progress (technology) to build the future.',
        'book4-title': 'The 7 Habits of Highly Effective People',
        'book4-author': 'Stephen R. Covey',
        'book4-desc': 'Transition from personal leadership to interpersonal leadership. A timeless guide on character ethics and principle-centered living.',
        'book5-title': 'Deep Work',
        'book5-author': 'Cal Newport',
        'book5-desc': 'The superpower of focus in the attention economy. Ways to produce value by breaking away from shallow work and pushing your cognitive limits.',
        'book6-title': 'Atomic Habits',
        'book6-author': 'James Clear',
        'book6-desc': 'The compound effect of 1% improvement. The art of breaking bad habits and acquiring good ones with a system-oriented approach.',
        'book7-title': 'Good to Great',
        'book7-author': 'Jim Collins',
        'book7-desc': 'Why do some companies make the leap while others don\'t? Disciplined people, disciplined thought, and disciplined action.',
        'book8-title': 'Sapiens: A Brief History of Humankind',
        'book8-author': 'Yuval Noah Harari',
        'book8-desc': 'The adventure of humanity from biology to history, economy to happiness. A massive look at the past to understand our today.',
        'book9-title': 'Rework',
        'book9-author': 'Jason Fried & DHH',
        'book9-desc': 'You don\'t have to grow. Meetings are toxic. Planning is guessing. Practical advice challenging business clichés.',
        'book10-title': 'The Tipping Point',
        'book10-author': 'Malcolm Gladwell',
        'book10-desc': 'How small changes turn into big epidemics. How do ideas spread and trends form?',

        // Contact Page
        'contact-title': 'Get in Touch',
        'contact-intro': 'For a new project, a strategic partnership, or just a "Hello". I believe in connecting in the real world as well as digital.',
        'contact-email-title': 'Email',
        'contact-company-title': 'Corporate Website',
        'contact-response-title': '📬 Communication Policy',
        'contact-response-desc': 'I read every message personally. Depending on the workload, my response time may take 24-48 hours. Thank you for your understanding.',

        // 404 Page
        'error-title': 'Page Lost',
        'error-desc': 'Sometimes getting lost in the digital world is an opportunity to discover new paths. However, the page you are looking for is not here right now.',
        'error-back': 'Return to Safe Harbor (Homepage)',
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

// --- Mobile Menu ---
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document immediately
        const isActive = sidebar.classList.toggle('mobile-active');
        toggleBtn.setAttribute('aria-expanded', isActive);

        const icon = toggleBtn.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
            lucide.createIcons();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('mobile-active') &&
            !sidebar.contains(e.target) &&
            !toggleBtn.contains(e.target)) {

            sidebar.classList.remove('mobile-active');
            toggleBtn.setAttribute('aria-expanded', 'false');

            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        }
    });

    // Close menu when a link is clicked
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('mobile-active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    setSidebarActive();
    initMobileMenu();
    initAnimations();
    initParticles();
    initTilt();
});

// --- 3D Tilt Animation ---
function initTilt() {
    // Select service cards, post cards, and book cards
    const cards = document.querySelectorAll('.service-card, .post-card, .book-grid > div');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Reduced sensitivity for a more subtle, premium feel
            const rotateY = ((x - centerX) / centerX) * 5;
            const rotateX = ((y - centerY) / centerY) * -5;

            // Fast transition for responsive movement
            card.style.transition = 'transform 0.05s ease-out, box-shadow 0.05s ease-out';
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale3d(1.02, 1.02, 1.02)
            `;

            // Subtle dynamic shadow
            card.style.boxShadow = `
                ${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.1), 
                0 10px 20px rgba(0,0,0,0.05)
            `;

            // Shine Effect (Glare)
            if (!card.querySelector('.shine-overlay')) {
                const shine = document.createElement('div');
                shine.className = 'shine-overlay';
                shine.style.position = 'absolute';
                shine.style.top = '0';
                shine.style.left = '0';
                shine.style.width = '100%';
                shine.style.height = '100%';
                // Linear gradient sweep
                shine.style.background = 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 40%, transparent 60%)';
                shine.style.pointerEvents = 'none';
                shine.style.mixBlendMode = 'overlay'; // Better blending
                shine.style.opacity = '0';
                shine.style.zIndex = '10';
                shine.style.transition = 'opacity 0.3s';

                // Ensure card can contain absolute children properly
                if (getComputedStyle(card).position === 'static') {
                    card.style.position = 'relative';
                }
                card.style.overflow = 'hidden'; // Clip shine

                card.appendChild(shine);
            }

            const shine = card.querySelector('.shine-overlay');
            if (shine) {
                // Move shine position based on X coordinate
                const shinePos = (x / rect.width) * 100;
                shine.style.background = `linear-gradient(105deg, transparent ${shinePos - 20}%, rgba(255,255,255,0.3) ${shinePos}%, transparent ${shinePos + 20}%)`;
                shine.style.opacity = '1';
            }
        });

        card.addEventListener('mouseleave', () => {
            // Smooth reset
            card.style.transition = 'transform 0.5s ease-out, box-shadow 0.5s ease-out';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.boxShadow = ''; // Revert to CSS default

            const shine = card.querySelector('.shine-overlay');
            if (shine) shine.style.opacity = '0';
        });
    });
}

// --- Particle Network Animation ---
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'tech-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Configuration
    const particleCount = window.innerWidth < 768 ? 40 : 80; // Fewer particles on mobile
    const connectionDistance = 120;
    const mouseDistance = 150;

    let mouse = { x: null, y: null };

    // Resize handling
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', () => {
        resize();
        initParticleArray();
    });
    resize();

    // Mouse handling
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Boundary check
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse interaction
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 3; // Push strength
                    const directionY = forceDirectionY * force * 3;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }

        draw(color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticleArray() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    initParticleArray();

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Determine colors based on theme
        const isDark = document.body.classList.contains('dark');
        const particleColor = isDark ? 'rgba(56, 189, 248, 0.5)' : 'rgba(37, 99, 235, 0.5)'; // Cyan vs Blue
        const lineColor = isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(37, 99, 235, 0.15)';

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(particleColor);

            // Draw connections
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}
