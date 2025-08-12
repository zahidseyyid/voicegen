import { tr } from './tr.js';
import { en } from './en.js';

// Desteklenen diller
export const supportedLanguages = {
  tr: 'Türkçe',
  en: 'English'
};

// Varsayılan dil
export const defaultLanguage = 'tr';

// Dil dosyaları
export const locales = { tr, en };

// Mevcut dil
let currentLanguage = defaultLanguage;

// Dil değiştirme fonksiyonu
export function setLanguage(lang) {
  if (locales[lang]) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateUILanguage();
  }
}

// Mevcut dili al
export function getCurrentLanguage() {
  return currentLanguage;
}

// Dil dosyasından metin al
export function t(key) {
  const keys = key.split('.');
  let value = locales[currentLanguage];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // Fallback to Turkish if key not found
      value = locales.tr;
      for (const tk of keys) {
        if (value && value[tk] !== undefined) {
          value = value[tk];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }
  
  return value || key;
}

// Metin formatla (placeholder değiştirme)
export function tf(key, params = {}) {
  let text = t(key);
  
  Object.keys(params).forEach(param => {
    text = text.replace(`{${param}}`, params[param]);
  });
  
  return text;
}

// Tarayıcı dilini algıla
function detectBrowserLanguage() {
  const browserLang = navigator.language.split('-')[0];
  return supportedLanguages[browserLang] ? browserLang : defaultLanguage;
}

// Dil ayarlarını yükle
function loadLanguageSettings() {
  const savedLang = localStorage.getItem('preferredLanguage');
  const browserLang = detectBrowserLanguage();
  
  if (savedLang && locales[savedLang]) {
    currentLanguage = savedLang;
  } else if (browserLang) {
    currentLanguage = browserLang;
  }
  
  // Dil seçiciyi güncelle
  updateLanguageSelector();
}

// Dil seçiciyi güncelle
function updateLanguageSelector() {
  const langSelector = document.getElementById('languageSelector');
  if (langSelector) {
    langSelector.value = currentLanguage;
  }
}

// UI dilini güncelle
function updateUILanguage() {
  // Sayfa başlığı
  document.title = t('pageTitle');
  
  // Ana başlık
  const mainTitle = document.querySelector('h1');
  if (mainTitle) mainTitle.textContent = t('pageTitle');
  
  // Dil seçiciyi güncelle
  updateLanguageSelector();
  
  // Tüm metinleri güncelle
  updateAllTexts();
}

// Tüm metinleri güncelle
function updateAllTexts() {
  // Temel ayarlar
  updateElementText('basicSettings', 'basicSettings');
  updateElementText('totalDurationLabel', 'totalDuration');
  updateElementText('totalDurationHint', 'totalDurationHint');
  updateElementText('masterVolumeLabel', 'masterVolume');
  updateElementText('masterVolumeHint', 'masterVolumeHint');
  updateElementText('waveTypeLabel', 'waveType');
  updateElementText('waveTypeHint', 'waveTypeHint');
  
  // Dalga tipleri
  updateWaveTypeOptions();
  
  // 1. Bölüm
  updateElementText('section1Title', 'section1');
  updateElementText('section1StartLabel', 'startTime');
  updateElementText('section1StartHint', 'startTimeHint');
  updateElementText('section1EndLabel', 'endTime');
  updateElementText('section1EndHint', 'endTimeHint');
  updateElementText('section1FreqLabel', 'frequency');
  updateElementText('section1FreqHint', 'frequencyHint');
  updateElementText('section1VolumeLabel', 'volume');
  updateElementText('section1VolumeHint', 'volumeHint');
  
  // 2. Bölüm
  updateElementText('section2Title', 'section2');
  updateElementText('section2StartLabel', 'startTime');
  updateElementText('section2StartHint', 'startTimeHint');
  updateElementText('section2EndLabel', 'endTime');
  updateElementText('section2EndHint', 'endTimeHint');
  updateElementText('section2FreqLabel', 'frequency');
  updateElementText('section2FreqHint', 'section2FrequencyHint');
  updateElementText('section2VolumeLabel', 'volume');
  updateElementText('section2VolumeHint', 'section2VolumeHint');
  
  // Efekt ayarları
  updateElementText('effectSettingsTitle', 'effectSettings');
  updateElementText('fadeTimeLabel', 'smoothTransition');
  updateElementText('fadeTimeHint', 'smoothTransitionHint');
  updateElementText('fileNameLabel', 'fileName');
  updateElementText('fileNameHint', 'fileNameHint');
  
  // Dalga önizleme
  updateElementText('wavePreviewTitle', 'wavePreview');
  updateElementText('wavePreviewHint', 'wavePreviewHint');
  
  // Butonlar
  updateElementText('btnGenerate', 'generateAudio');
  updateElementText('btnPreview', 'preview');
  updateElementText('btnStop', 'stop');
  
  // Canvas'ı yeniden çiz
  if (window.drawWave) {
    window.drawWave();
  }
}

// Element metnini güncelle
function updateElementText(elementId, textKey) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = t(textKey);
  }
}

// Dalga tipi seçeneklerini güncelle
function updateWaveTypeOptions() {
  const waveTypeSelect = document.getElementById('waveType');
  if (waveTypeSelect) {
    const currentValue = waveTypeSelect.value;
    waveTypeSelect.innerHTML = '';
    
    Object.keys(t('waveTypes')).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = t(`waveTypes.${key}`);
      if (key === currentValue) {
        option.selected = true;
      }
      waveTypeSelect.appendChild(option);
    });
  }
}

// Başlangıç
document.addEventListener('DOMContentLoaded', () => {
  loadLanguageSettings();
  updateUILanguage();
});

// Global olarak erişilebilir yap
window.setLanguage = setLanguage;
window.t = t;
window.tf = tf;
window.getCurrentLanguage = getCurrentLanguage; 