// DOM elementlerini seçme
const $ = (id) => document.getElementById(id);

// Canvas için dalga çizimi
function drawWave() {
  const canvas = $('waveCanvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  // Canvas'ı temizle
  ctx.clearRect(0, 0, width, height);
  
  // Arka plan
  ctx.fillStyle = '#2d3748';
  ctx.fillRect(0, 0, width, height);
  
  // Grid çizgileri
  ctx.strokeStyle = '#4a5568';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 10; i++) {
    const x = (width / 10) * i;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    
    const y = (height / 5) * i;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  
  // Zaman çizelgesi
  const totalDuration = parseFloat($('totalDuration').value);
  ctx.fillStyle = '#e7eaf0';
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  for (let i = 0; i <= 10; i++) {
    const time = (i / 10) * totalDuration;
    const x = (width / 10) * i;
    ctx.fillText(`${time.toFixed(1)}s`, x, height - 5);
  }
  
  // 1. Bölüm - Düşük Ses (Mavi)
  const section1Start = parseFloat($('section1Start').value);
  const section1End = parseFloat($('section1End').value);
  const section1Freq = parseFloat($('section1Freq').value);
  const section1Volume = parseFloat($('section1Volume').value);
  const masterVolume = parseFloat($('masterVolume').value);
  
  if (section1End > section1Start) {
    ctx.strokeStyle = '#4fc3f7';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const startX = (section1Start / totalDuration) * width;
    const endX = (section1End / totalDuration) * width;
    
    for (let x = startX; x <= endX; x++) {
      const time = (x / width) * totalDuration;
      const freq = section1Freq;
      const waveType = $('waveType').value;
      
      let amplitude = getWaveform(waveType, freq, time);
      amplitude *= section1Volume * masterVolume;
      
      const y = height / 2 + amplitude * (height / 4);
      
      if (x === startX) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 1. Bölüm bilgisi - lokalizasyon ile
    ctx.fillStyle = '#4fc3f7';
    ctx.font = '12px monospace';
    ctx.textAlign = 'left';
    const section1Info = window.tf ? window.tf('canvas.section1Info', {
      start: section1Start,
      end: section1End,
      freq: section1Freq,
      vol: section1Volume
    }) : `1. Bölüm: ${section1Start}s-${section1End}s, ${section1Freq}Hz, Ses:${section1Volume}`;
    ctx.fillText(section1Info, 10, 20);
  }
  
  // 2. Bölüm - Yüksek Ses (Yeşil)
  const section2Start = parseFloat($('section2Start').value);
  const section2End = parseFloat($('section2End').value);
  const section2Freq = parseFloat($('section2Freq').value);
  const section2Volume = parseFloat($('section2Volume').value);
  
  if (section2End > section2Start) {
    ctx.strokeStyle = '#81c784';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const startX = (section2Start / totalDuration) * width;
    const endX = (section2End / totalDuration) * width;
    
    for (let x = startX; x <= endX; x++) {
      const time = (x / width) * totalDuration;
      const freq = section2Freq;
      const waveType = $('waveType').value;
      
      let amplitude = getWaveform(waveType, freq, time);
      amplitude *= section2Volume * masterVolume;
      
      const y = height / 2 + amplitude * (height / 4);
      
      if (x === startX) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 2. Bölüm bilgisi - lokalizasyon ile
    ctx.fillStyle = '#81c784';
    const section2Info = window.tf ? window.tf('canvas.section2Info', {
      start: section2Start,
      end: section2End,
      freq: section2Freq,
      vol: section2Volume
    }) : `2. Bölüm: ${section2Start}s-${section2End}s, ${section2Freq}Hz, Ses:${section2Volume}`;
    ctx.fillText(section2Info, 10, 35);
  }
  
  // Toplam süre bilgisi - lokalizasyon ile
  ctx.fillStyle = '#e7eaf0';
  const totalInfo = window.tf ? window.tf('canvas.totalInfo', {
    duration: totalDuration,
    volume: masterVolume
  }) : `Toplam Süre: ${totalDuration}s, Master Ses: ${masterVolume}`;
  ctx.fillText(totalInfo, 10, 50);
}

// Dalga formu hesaplama
function getWaveform(waveType, freq, time) {
  const wave = 2 * Math.PI * freq * time;
  
  switch (waveType) {
    case 'sine':
      return Math.sin(wave) * 0.8;
    case 'square':
      return Math.sign(Math.sin(wave)) * 0.8;
    case 'sawtooth':
      return (2 * (freq * time - Math.floor(freq * time + 0.5))) * 0.8;
    case 'triangle':
      return (2 * Math.abs(2 * (freq * time - Math.floor(freq * time + 0.5))) - 1) * 0.8;
    default:
      return Math.sin(wave) * 0.8;
  }
}

// Input değişikliklerinde dalga çiz
function setupEventListeners() {
  [
    'totalDuration', 'masterVolume', 'waveType',
    'section1Start', 'section1End', 'section1Freq', 'section1Volume',
    'section2Start', 'section2End', 'section2Freq', 'section2Volume'
  ].forEach(id => {
    $(id).addEventListener('input', drawWave);
  });
}

// Dil seçici için event listener
function setupLanguageSelector() {
  const langSelector = $('languageSelector');
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      if (window.setLanguage) {
        window.setLanguage(e.target.value);
      }
    });
  }
}

// Status gösterme fonksiyonları - lokalizasyon ile
function showStatus(message, type = 'info') {
  const status = $('status');
  
  // Eğer message bir key ise, çevir
  let displayMessage = message;
  if (window.t && typeof message === 'string' && message.includes('.')) {
    displayMessage = window.t(message);
  }
  
  status.textContent = displayMessage;
  status.className = `status ${type}`;
  status.style.display = 'block';
}

function hideStatus() {
  $('status').style.display = 'none';
}

// Audio context ve node'ları
let audioContext = null;
let audioNodes = [];

// Ses durdurma
function stopAudio() {
  audioNodes.forEach(node => {
    if (node.stop) node.stop();
    if (node.disconnect) node.disconnect();
  });
  audioNodes = [];
  
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}

// Ses oluşturma fonksiyonu
async function generateAudio() {
  const totalDuration = parseFloat($('totalDuration').value);
  const masterVolume = parseFloat($('masterVolume').value);
  const waveType = $('waveType').value;
  const fadeTime = parseFloat($('fadeTime').value) / 1000;
  
  // 1. Bölüm
  const section1Start = parseFloat($('section1Start').value);
  const section1End = parseFloat($('section1End').value);
  const section1Freq = parseFloat($('section1Freq').value);
  const section1Volume = parseFloat($('section1Volume').value);
  
  // 2. Bölüm
  const section2Start = parseFloat($('section2Start').value);
  const section2End = parseFloat($('section2End').value);
  const section2Freq = parseFloat($('section2Freq').value);
  const section2Volume = parseFloat($('section2Volume').value);
  
  // Validation - lokalizasyon ile
  if (totalDuration < 1 || totalDuration > 60) {
    showStatus('errors.durationRange', 'error');
    return;
  }
  
  if (section1End <= section1Start || section2End <= section2Start) {
    showStatus('errors.sectionTime', 'error');
    return;
  }
  
  if (section1Freq < 20 || section1Freq > 20000 || section2Freq < 20 || section2Freq > 20000) {
    showStatus('errors.frequencyRange', 'error');
    return;
  }

  showStatus('status.generating', 'info');
  
  try {
    const sampleRate = 44100;
    const length = Math.ceil(totalDuration * sampleRate);
    const offlineCtx = new OfflineAudioContext(1, length, sampleRate);
    
    // Master gain
    const masterGain = new GainNode(offlineCtx, { gain: masterVolume });
    masterGain.connect(offlineCtx.destination);
    
    // 1. Bölüm
    if (section1End > section1Start) {
      const osc1 = new OscillatorNode(offlineCtx, { type: waveType });
      const gain1 = new GainNode(offlineCtx, { gain: 0 });
      
      osc1.connect(gain1);
      gain1.connect(masterGain);
      
      osc1.frequency.setValueAtTime(section1Freq, section1Start);
      
      // Fade in/out
      gain1.gain.setValueAtTime(0, section1Start);
      gain1.gain.linearRampToValueAtTime(section1Volume, section1Start + fadeTime);
      gain1.gain.setValueAtTime(section1Volume, section1End - fadeTime);
      gain1.gain.linearRampToValueAtTime(0, section1End);
      
      osc1.start(section1Start);
      osc1.stop(section1End);
    }
    
    // 2. Bölüm
    if (section2End > section2Start) {
      const osc2 = new OscillatorNode(offlineCtx, { type: waveType });
      const gain2 = new GainNode(offlineCtx, { gain: 0 });
      
      osc2.connect(gain2);
      gain2.connect(masterGain);
      
      osc2.frequency.setValueAtTime(section2Freq, section2Start);
      
      // Fade in/out
      gain2.gain.setValueAtTime(0, section2Start);
      gain2.gain.linearRampToValueAtTime(section2Volume, section2Start + fadeTime);
      gain2.gain.setValueAtTime(section2Volume, section2End - fadeTime);
      gain2.gain.linearRampToValueAtTime(0, section2End);
      
      osc2.start(section2Start);
      osc2.stop(section2End);
    }
    
    const buffer = await offlineCtx.startRendering();
    const wav = audioBufferToWav(buffer);
    
    // İndirme
    const fileName = ($('fileName').value || 'iki_bolumlu_ses').replace(/[^\w\-]+/g, '_');
    const url = URL.createObjectURL(wav);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.wav`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    
    showStatus('status.success', 'success');
    setTimeout(hideStatus, 3000);
    
  } catch (error) {
    showStatus(`status.error ${error.message}`, 'error');
  }
}

// Önizleme
async function previewAudio() {
  const totalDuration = parseFloat($('totalDuration').value);
  const masterVolume = parseFloat($('masterVolume').value);
  const waveType = $('waveType').value;
  const fadeTime = parseFloat($('fadeTime').value) / 1000;
  
  // 1. Bölüm
  const section1Start = parseFloat($('section1Start').value);
  const section1End = parseFloat($('section1End').value);
  const section1Freq = parseFloat($('section1Freq').value);
  const section1Volume = parseFloat($('section1Volume').value);
  
  // 2. Bölüm
  const section2Start = parseFloat($('section2Start').value);
  const section2End = parseFloat($('section2End').value);
  const section2Freq = parseFloat($('section2Freq').value);
  const section2Volume = parseFloat($('section2Volume').value);
  
  stopAudio();
  
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const masterGain = new GainNode(audioContext, { gain: masterVolume });
    masterGain.connect(audioContext.destination);
    
    const now = audioContext.currentTime;
    
    // 1. Bölüm
    if (section1End > section1Start) {
      const osc1 = new OscillatorNode(audioContext, { type: waveType });
      const gain1 = new GainNode(audioContext, { gain: 0 });
      
      osc1.connect(gain1);
      gain1.connect(masterGain);
      
      audioNodes.push(osc1, gain1);
      
      const t1Start = now + section1Start;
      const t1End = now + section1End;
      
      osc1.frequency.setValueAtTime(section1Freq, t1Start);
      
      gain1.gain.setValueAtTime(0, t1Start);
      gain1.gain.linearRampToValueAtTime(section1Volume, t1Start + fadeTime);
      gain1.gain.setValueAtTime(section1Volume, t1End - fadeTime);
      gain1.gain.linearRampToValueAtTime(0, t1End);
      
      osc1.start(t1Start);
      osc1.stop(t1End + 0.05);
    }
    
    // 2. Bölüm
    if (section2End > section2Start) {
      const osc2 = new OscillatorNode(audioContext, { type: waveType });
      const gain2 = new GainNode(audioContext, { gain: 0 });
      
      osc2.connect(gain2);
      gain2.connect(masterGain);
      
      audioNodes.push(osc2, gain2);
      
      const t2Start = now + section2Start;
      const t2End = now + section2End;
      
      osc2.frequency.setValueAtTime(section2Freq, t2Start);
      
      gain2.gain.setValueAtTime(0, t2Start);
      gain2.gain.linearRampToValueAtTime(section2Volume, t2Start + fadeTime);
      gain2.gain.setValueAtTime(section2Volume, t2End - fadeTime);
      gain2.gain.linearRampToValueAtTime(0, t2End);
      
      osc2.start(t2Start);
      osc2.stop(t2End + 0.05);
    }
    
    // Lokalizasyon ile status mesajı
    const previewMessage = window.tf ? window.tf('status.previewPlaying', { duration: totalDuration }) : `🎵 İki bölümlü önizleme oynatılıyor (${totalDuration} saniye)`;
    showStatus(previewMessage, 'info');
    
    setTimeout(() => {
      showStatus('status.previewComplete', 'success');
      setTimeout(hideStatus, 2000);
    }, totalDuration * 1000);
    
  } catch (error) {
    showStatus(`status.previewError ${error.message}`, 'error');
  }
}

// WAV dönüştürme fonksiyonu
function audioBufferToWav(buffer) {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const out = new ArrayBuffer(length);
  const view = new DataView(out);

  // WAV header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + buffer.length * numOfChan * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numOfChan, true);
  view.setUint32(24, buffer.sampleRate, true);
  view.setUint32(28, buffer.sampleRate * numOfChan * 2, true);
  view.setUint16(32, numOfChan * 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, buffer.length * numOfChan * 2, true);

  let offset = 44;
  const channels = [];
  for (let c = 0; c < numOfChan; c++) channels.push(buffer.getChannelData(c));
  for (let i = 0; i < buffer.length; i++) {
    for (let c = 0; c < numOfChan; c++) {
      let sample = channels[c][i];
      sample = Math.max(-1, Math.min(1, sample));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
      offset += 2;
    }
  }
  return new Blob([view], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

// Event listeners
function setupButtons() {
  $('btnGenerate').addEventListener('click', generateAudio);
  $('btnPreview').addEventListener('click', previewAudio);
  $('btnStop').addEventListener('click', () => {
    stopAudio();
    showStatus('status.stopped', 'info');
    setTimeout(hideStatus, 2000);
  });
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
function init() {
  setupEventListeners();
  setupButtons();
  setupLanguageSelector();
  
  // Lokalizasyon yüklendikten sonra dalga çiz
  setTimeout(() => {
    drawWave();
  }, 100);
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', init);

// Global olarak erişilebilir yap
window.drawWave = drawWave; 