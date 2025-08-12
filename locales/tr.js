export const tr = {
  // Sayfa başlığı
  pageTitle: "Basit Ses Dalgası Oluşturucu",
  
  // Temel ayarlar
  basicSettings: "🎛️ Temel Ayarlar",
  totalDuration: "Toplam Süre (saniye)",
  totalDurationHint: "Ses dosyasının toplam uzunluğu",
  masterVolume: "Master Ses Seviyesi",
  masterVolumeHint: "Genel ses seviyesi çarpanı",
  waveType: "Dalga Tipi",
  waveTypeHint: "Farklı dalga tipleri farklı ses karakterleri verir",
  
  // Dalga tipleri
  waveTypes: {
    sine: "Sinus Dalgası (yumuşak ses)",
    square: "Kare Dalga (dijital ses)",
    sawtooth: "Testere Dalgası (metalik ses)",
    triangle: "Üçgen Dalga (yumuşak ama keskin)"
  },
  
  // 1. Bölüm
  section1: "🔊 1. Bölüm - Düşük Ses",
  startTime: "Başlangıç Zamanı (saniye)",
  startTimeHint: "Bu bölümün ne zaman başlayacağı",
  endTime: "Bitiş Zamanı (saniye)",
  endTimeHint: "Bu bölümün ne zaman biteceği",
  frequency: "Frekans (Hz)",
  frequencyHint: "Düşük ses için düşük frekans (200 Hz = kalın ses)",
  volume: "Ses Seviyesi (0..1)",
  volumeHint: "Düşük ses seviyesi (0.2 = çok düşük)",
  
  // 2. Bölüm
  section2: "🔊 2. Bölüm - Yüksek Ses",
  section2FrequencyHint: "Yüksek ses için yüksek frekans (800 Hz = tiz ses)",
  section2VolumeHint: "Yüksek ses seviyesi (0.8 = yüksek)",
  
  // Efekt ayarları
  effectSettings: "🎵 Efekt Ayarları",
  smoothTransition: "Yumuşak Geçiş (ms)",
  smoothTransitionHint: "Bölümler arası yumuşak geçiş süresi",
  fileName: "Dosya Adı",
  fileNameHint: "İndirilecek ses dosyasının adı",
  fileFormat: "Dosya Formatı",
  fileFormatHint: "İndirilecek ses dosyasının formatı",
  
  // Dosya formatları
  fileFormats: {
    wav: "WAV (Yüksek kalite, büyük boyut)",
    mp3: "MP3 (Orta kalite, küçük boyut)"
  },
  
  // Dalga önizleme
  wavePreview: "📊 Dalga Önizlemesi",
  wavePreviewHint: "İki bölümün nasıl görüneceği - mavi: 1. bölüm, yeşil: 2. bölüm",
  
  // Butonlar
  generateAudio: "🎵 Ses Oluştur ve İndir",
  preview: "▶️ Önizle",
  stop: "⏹️ Durdur",
  
  // Status mesajları
  status: {
    generating: "Ses oluşturuluyor...",
    success: "✅ Ses dosyası başarıyla oluşturuldu ve indirildi!",
    previewPlaying: "🎵 İki bölümlü önizleme oynatılıyor",
    previewComplete: "✅ Önizleme tamamlandı",
    stopped: "⏹️ Ses durduruldu",
    error: "❌ Hata:",
    previewError: "❌ Önizleme hatası:"
  },
  
  // Hata mesajları
  errors: {
    durationRange: "Toplam süre 1-60 saniye arasında olmalıdır.",
    sectionTime: "Her bölümün bitiş zamanı başlangıçtan sonra olmalıdır.",
    frequencyRange: "Frekans 20-20000 Hz arasında olmalıdır."
  },
  
  // Canvas bilgileri
  canvas: {
    section1Info: "1. Bölüm: {start}s-{end}s, {freq}Hz, Ses:{vol}",
    section2Info: "2. Bölüm: {start}s-{end}s, {freq}Hz, Ses:{vol}",
    totalInfo: "Toplam Süre: {duration}s, Master Ses: {volume}"
  },
  
  // Dil seçimi
  language: "Dil",
  turkish: "Türkçe",
  english: "English"
}; 