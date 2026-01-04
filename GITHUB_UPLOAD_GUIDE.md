# GitHub Pages'e Yükleme Rehberi

Bu rehber, oluşturduğumuz kişisel blog sitesini GitHub Pages'e nasıl yükleyeceğinizi adım adım göstermektedir.

## Dosya Yapısı

Aşağıdaki dosyalar oluşturuldu ve `C:\Users\nolto\.gemini\antigravity\scratch\mrzcn-blog\` klasöründe bulunmaktadır:

```
mrzcn-blog/
├── index.html              (Ana sayfa)
├── about.html              (Hakkımda)
├── blog.html               (Blog listesi)
├── contact.html            (İletişim)
├── css/
│   └── style.css          (Tüm stiller)
├── js/
│   └── main.js            (JavaScript)
└── blog/
    └── voip-teknolojisinin-gelecegi.html  (Örnek blog yazısı)
```

## GitHub'a Yükleme Adımları

### Yöntem 1: GitHub Web Arayüzü (Önerilen - Git Kurulumu Gerektirmez)

#### Adım 1: Repo Sayfasına Gidin
1. Tarayıcınızda https://github.com/mrzcn/mrzcn.github.io adresine gidin
2. Giriş yaptığınızdan emin olun

#### Adım 2: Ana Dizindeki Dosyaları Yükleyin
1. **"Add file"** butonuna tıklayın
2. **"Upload files"** seçeneğini seçin
3. Aşağıdaki dosyaları sürükleyip bırakın veya seçin:
   - `index.html`
   - `about.html`
   - `blog.html`
   - `contact.html`
4. Commit mesajı yazın: `Add main pages`
5. **"Commit changes"** butonuna tıklayın

#### Adım 3: CSS Klasörünü Oluşturun ve Yükleyin
1. Ana sayfada **"Add file"** > **"Create new file"** tıklayın
2. Dosya adı olarak `css/style.css` yazın (css/ otomatik klasör oluşturur)
3. `C:\Users\nolto\.gemini\antigravity\scratch\mrzcn-blog\css\style.css` dosyasını açın
4. İçeriği kopyalayıp GitHub'daki editöre yapıştırın
5. Commit mesajı: `Add CSS styles`
6. **"Commit changes"** tıklayın

#### Adım 4: JavaScript Klasörünü Oluşturun ve Yükleyin
1. **"Add file"** > **"Create new file"** tıklayın
2. Dosya adı: `js/main.js`
3. `C:\Users\nolto\.gemini\antigravity\scratch\mrzcn-blog\js\main.js` dosyasının içeriğini kopyalayıp yapıştırın
4. Commit mesajı: `Add JavaScript functionality`
5. **"Commit changes"** tıklayın

#### Adım 5: Blog Klasörünü Oluşturun ve Örnek Yazıyı Yükleyin
1. **"Add file"** > **"Create new file"** tıklayın
2. Dosya adı: `blog/voip-teknolojisinin-gelecegi.html`
3. `C:\Users\nolto\.gemini\antigravity\scratch\mrzcn-blog\blog\voip-teknolojisinin-gelecegi.html` dosyasının içeriğini kopyalayıp yapıştırın
4. Commit mesajı: `Add first blog post`
5. **"Commit changes"** tıklayın

### Yöntem 2: Toplu Yükleme (Daha Hızlı)

#### Adım 1: Tüm Dosyaları Hazırlayın
1. `C:\Users\nolto\.gemini\antigravity\scratch\mrzcn-blog\` klasöründeki tüm dosyaları seçin
2. Bir ZIP dosyası oluşturun (sağ tık > "Sıkıştırılmış klasöre gönder")

#### Adım 2: GitHub'a Yükleyin
1. https://github.com/mrzcn/mrzcn.github.io adresine gidin
2. **"Add file"** > **"Upload files"** tıklayın
3. ZIP dosyasını çıkartın ve içindeki dosyaları sürükleyip bırakın
   - **ÖNEMLİ:** Klasör yapısını koruyun (css/, js/, blog/ klasörleri olmalı)
4. Commit mesajı: `Initial website upload`
5. **"Commit changes"** tıklayın

## GitHub Pages Ayarları

1. Repo sayfasında **"Settings"** (Ayarlar) sekmesine gidin
2. Sol menüden **"Pages"** seçeneğini bulun
3. **"Source"** bölümünde:
   - Branch: `main` (veya `master`)
   - Folder: `/ (root)`
4. **"Save"** butonuna tıklayın
5. Birkaç dakika bekleyin (GitHub Pages'in yayınlanması 1-5 dakika sürebilir)

## Sitenizi Görüntüleyin

Site yayınlandıktan sonra şu adresten erişebilirsiniz:

**https://mrzcn.github.io**

## Doğrulama

Sitenin düzgün çalıştığını kontrol etmek için:

1. ✅ Ana sayfa yükleniyor mu?
2. ✅ Navigasyon linkleri çalışıyor mu?
3. ✅ Mobil görünüm düzgün mü? (Tarayıcı DevTools ile test edin)
4. ✅ Tüm sayfalar düzgün görünüyor mu?
5. ✅ Sosyal medya linkleri doğru mu?

## Gelecekte Güncelleme

Yeni blog yazısı eklemek için:

1. `blog/` klasöründe yeni bir HTML dosyası oluşturun
2. `voip-teknolojisinin-gelecegi.html` dosyasını şablon olarak kullanın
3. `blog.html` dosyasına yeni yazınızı ekleyin
4. GitHub'a yükleyin

## Sorun Giderme

### Site Görünmüyor
- GitHub Pages ayarlarını kontrol edin
- 5-10 dakika bekleyin
- Tarayıcı önbelleğini temizleyin (Ctrl+F5)

### CSS/JS Yüklenmiyor
- Dosya yollarının doğru olduğundan emin olun
- Klasör yapısının korunduğunu kontrol edin
- Tarayıcı konsolunda (F12) hata olup olmadığına bakın

### Mobilde Düzgün Görünmüyor
- `<meta name="viewport">` etiketinin olduğundan emin olun (zaten var)
- Responsive CSS'in yüklendiğini kontrol edin

## İletişim

Herhangi bir sorun yaşarsanız, bana ulaşabilirsiniz!

---

**Hazırlayan:** Antigravity AI Assistant  
**Tarih:** 4 Ocak 2026
