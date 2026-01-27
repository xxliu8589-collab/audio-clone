import { Settings } from '../types/fish-audio';

class ApiKeyManager {
  private static readonly STORAGE_KEY = 'fish_audio_settings';

  static getSettings(): Settings {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (error) {
          console.error('Failed to parse settings:', error);
        }
      }
    }

    return {
      apiKey: '',
      defaultFormat: 'mp3',
      defaultQuality: 'medium',
      language: 'en',
      theme: 'light',
    };
  }

  static saveSettings(settings: Partial<Settings>): Settings {
    const current = this.getSettings();
    const updated = { ...current, ...settings };

    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
    }

    return updated;
  }

  static getApiKey(): string {
    const settings = this.getSettings();
    return settings.apiKey;
  }

  static setApiKey(apiKey: string): Settings {
    return this.saveSettings({ apiKey });
  }

  static getDefaultFormat(): 'mp3' | 'wav' {
    const settings = this.getSettings();
    return settings.defaultFormat;
  }

  static setDefaultFormat(format: 'mp3' | 'wav'): Settings {
    return this.saveSettings({ defaultFormat: format });
  }

  static getDefaultQuality(): 'high' | 'medium' | 'low' {
    const settings = this.getSettings();
    return settings.defaultQuality;
  }

  static setDefaultQuality(quality: 'high' | 'medium' | 'low'): Settings {
    return this.saveSettings({ defaultQuality: quality });
  }

  static getLanguage(): string {
    const settings = this.getSettings();
    return settings.language;
  }

  static setLanguage(language: string): Settings {
    return this.saveSettings({ language });
  }

  static getTheme(): 'light' | 'dark' {
    const settings = this.getSettings();
    return settings.theme;
  }

  static setTheme(theme: 'light' | 'dark'): Settings {
    return this.saveSettings({ theme });
  }
}

export { ApiKeyManager };
