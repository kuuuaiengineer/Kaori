import { FormData } from '../types';

const API_URL = import.meta.env.VITE_DIFY_API_URL;
const API_KEY = import.meta.env.VITE_DIFY_API_KEY;

export async function submitToDify(formData: FormData): Promise<string> {
  if (!API_URL || !API_KEY || API_KEY === 'your-api-key-here') {
    throw new Error('Dify APIの設定が必要です。.envファイルを確認してください。');
  }

  const payload = {
    inputs: {
      category: formData.category,
      mood: formData.mood,
      mood_free: formData.mood_free,
      scene: formData.scene,
      scene_free: formData.scene_free,
      preference: formData.preference,
      preference_free: formData.preference_free,
    },
    response_mode: 'blocking',
    user: 'user-' + Date.now(),
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API呼び出しに失敗しました: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  return data.data?.outputs?.text || data.data?.outputs?.result || JSON.stringify(data.data, null, 2);
}
