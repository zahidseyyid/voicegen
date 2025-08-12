# 🎵 Basit Ses Dalgası Oluşturucu

Bu proje, kullanıcıların kolayca ses dalgaları oluşturup WAV formatında indirmelerini sağlayan web uygulamasıdır.

## ✨ Özellikler

- **Basit ve Kullanıcı Dostu Arayüz**: Teknik bilgi gerektirmeden ses oluşturma
- **Gerçek Zamanlı Önizleme**: Canvas ile dalga görünümü
- **Çoklu Dalga Tipleri**: Sinus, Kare, Testere, Üçgen dalgalar
- **İki Bölümlü Ses**: Farklı zamanlarda farklı ses karakterleri
- **Fade Efektleri**: Yumuşak başlangıç ve bitiş
- **WAV İndirme**: Yüksek kaliteli ses dosyası oluşturma
- **🌍 Çoklu Dil Desteği**: Türkçe ve İngilizce

## 🚀 Kurulum

1. Projeyi bilgisayarınıza indirin
2. `index.html` dosyasını web tarayıcınızda açın
3. Herhangi bir ek kurulum gerekmez!

## 📁 Dosya Yapısı

```
sound_creater/
├── index.html              # Ana HTML dosyası
├── styles.css              # CSS stilleri
├── script.js               # JavaScript kodu
├── locales/                # Dil dosyaları
│   ├── tr.js              # Türkçe çeviriler
│   ├── en.js              # İngilizce çeviriler
│   └── index.js           # Dil yöneticisi
└── README.md               # Bu dosya
```

## 🌍 Dil Desteği

### Desteklenen Diller
- **🇹🇷 Türkçe** (varsayılan)
- **🇺🇸 English**

### Dil Değiştirme
- Sağ üst köşedeki dil seçiciden istediğiniz dili seçin
- Dil tercihiniz tarayıcıda kaydedilir
- Tarayıcı dili otomatik algılanır

## 🎛️ Kullanım

### Temel Ayarlar
- **Toplam Süre**: 1-60 saniye arası
- **Master Ses Seviyesi**: 0.1-1.0 arası (genel ses çarpanı)
- **Dalga Tipi**: Farklı ses karakterleri için

### 1. Bölüm - Düşük Ses
- **Başlangıç/Bitiş Zamanı**: Bölümün ne zaman çalacağı
- **Frekans**: 20-20000 Hz arası (düşük = kalın ses)
- **Ses Seviyesi**: 0.1-1.0 arası (düşük = az ses)

### 2. Bölüm - Yüksek Ses
- **Başlangıç/Bitiş Zamanı**: Bölümün ne zaman çalacağı
- **Frekans**: 20-20000 Hz arası (yüksek = tiz ses)
- **Ses Seviyesi**: 0.1-1.0 arası (yüksek = çok ses)

### Efekt Ayarları
- **Yumuşak Geçiş**: Bölümler arası yumuşak geçiş süresi
- **Dosya Adı**: İndirilecek WAV dosyasının adı

## 🎯 Örnek Kullanım

### Senaryo: İki Bölümlü Ses
1. **0-3 saniye**: Çok düşük ses (200 Hz, ses seviyesi 0.2)
2. **3-8 saniye**: Yüksek ses (800 Hz, ses seviyesi 0.8)
3. **Toplam**: 8 saniye uzunluğunda WAV dosyası

### Ayarlar:
- **Toplam Süre**: 8 saniye
- **1. Bölüm**: 0-3s, 200 Hz, Ses: 0.2
- **2. Bölüm**: 3-8s, 800 Hz, Ses: 0.8
- **Yumuşak Geçiş**: 100 ms

## 🔧 Teknik Detaylar

- **Web Audio API** kullanılarak geliştirildi
- **Canvas API** ile gerçek zamanlı dalga görselleştirme
- **OfflineAudioContext** ile yüksek kaliteli ses oluşturma
- **WAV formatı** desteği
- **ES6 Modules** ile modüler yapı
- **LocalStorage** ile dil tercihi kaydetme

## 🌐 Tarayıcı Desteği

- Chrome 66+
- Firefox 60+
- Safari 14+
- Edge 79+

## 📝 Lisans

Bu proje açık kaynak kodludur ve eğitim amaçlı geliştirilmiştir.

## 🤝 Katkıda Bulunma

### Yeni Dil Ekleme
1. `locales/` klasöründe yeni dil dosyası oluşturun (örn: `fr.js`)
2. `locales/index.js` dosyasına yeni dili ekleyin
3. Tüm metinleri çevirin
4. Pull request gönderin

### Genel Katkı
1. Projeyi fork edin
2. Yeni özellik dalı oluşturun
3. Değişikliklerinizi commit edin
4. Pull request gönderin

## 📞 İletişim

Herhangi bir sorun veya öneri için issue açabilirsiniz.

---

**Not**: Bu uygulama tamamen tarayıcıda çalışır, internet bağlantısı gerektirmez. 