export type Category = 'aroma' | 'incense' | 'both';

export interface FormData {
  category: Category | null;
  mood: string[];
  mood_free: string;
  scene: string[];
  scene_free: string;
  preference: string[];
  preference_free: string;
}

export type Screen = 'top' | 'question' | 'result';
