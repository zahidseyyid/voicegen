export const en = {
  // Page title
  pageTitle: "Simple Sound Wave Generator",
  
  // Basic settings
  basicSettings: "🎛️ Basic Settings",
  totalDuration: "Total Duration (seconds)",
  totalDurationHint: "Total length of the audio file",
  masterVolume: "Master Volume Level",
  masterVolumeHint: "Overall volume level multiplier",
  waveType: "Wave Type",
  waveTypeHint: "Different wave types give different sound characteristics",
  
  // Wave types
  waveTypes: {
    sine: "Sine Wave (smooth sound)",
    square: "Square Wave (digital sound)",
    sawtooth: "Sawtooth Wave (metallic sound)",
    triangle: "Triangle Wave (smooth but sharp)"
  },
  
  // Section 1
  section1: "🔊 Section 1 - Low Sound",
  startTime: "Start Time (seconds)",
  startTimeHint: "When this section should start",
  endTime: "End Time (seconds)",
  endTimeHint: "When this section should end",
  frequency: "Frequency (Hz)",
  frequencyHint: "Low frequency for low sound (200 Hz = deep sound)",
  volume: "Volume Level (0..1)",
  volumeHint: "Low volume level (0.2 = very low)",
  
  // Section 2
  section2: "🔊 Section 2 - High Sound",
  section2FrequencyHint: "High frequency for high sound (800 Hz = high pitch)",
  section2VolumeHint: "High volume level (0.8 = high)",
  
  // Effect settings
  effectSettings: "🎵 Effect Settings",
  smoothTransition: "Smooth Transition (ms)",
  smoothTransitionHint: "Smooth transition time between sections",
  fileName: "File Name",
  fileNameHint: "Name of the WAV file to download",
  
  // Wave preview
  wavePreview: "📊 Wave Preview",
  wavePreviewHint: "How the two sections will look - blue: section 1, green: section 2",
  
  // Buttons
  generateAudio: "🎵 Generate Audio and Download",
  preview: "▶️ Preview",
  stop: "⏹️ Stop",
  
  // Status messages
  status: {
    generating: "Generating audio...",
    success: "✅ Two-section audio file successfully created and downloaded!",
    previewPlaying: "🎵 Two-section preview playing",
    previewComplete: "✅ Preview complete",
    stopped: "⏹️ Audio stopped",
    error: "❌ Error:",
    previewError: "❌ Preview error:"
  },
  
  // Error messages
  errors: {
    durationRange: "Total duration must be between 1-60 seconds.",
    sectionTime: "Each section's end time must be after start time.",
    frequencyRange: "Frequency must be between 20-20000 Hz."
  },
  
  // Canvas information
  canvas: {
    section1Info: "Section 1: {start}s-{end}s, {freq}Hz, Vol:{vol}",
    section2Info: "Section 2: {start}s-{end}s, {freq}Hz, Vol:{vol}",
    totalInfo: "Total Duration: {duration}s, Master Vol: {volume}"
  },
  
  // Language selection
  language: "Language",
  turkish: "Türkçe",
  english: "English"
}; 