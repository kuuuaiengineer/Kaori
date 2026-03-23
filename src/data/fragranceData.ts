/**
 * 香りごとの画像URL（Pexels）と色味のマッピング
 * 各香りに整合した画像を使用（ローズマリー→ローズマリー等）
 */
export interface FragranceItem {
  imageUrl: string;
  color: string;       // アクセント（左ボーダー等）Tailwind
  colorLight: string;  // カード背景 Tailwind（フォールバック）
  colorLightHex: string; // カード背景 実体色（インラインで確実に適用）
  gradientFrom: string;
}

// 香りキーワード → 画像・色
export const FRAGRANCE_MAP: Record<string, FragranceItem> = {
  // 淡いパステル系（黒文字が読みやすいよう薄めに統一）
  'ラベンダー': {
    imageUrl: 'https://images.pexels.com/photos/109646/pexels-photo-109646.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-violet-400',
    colorLight: 'bg-[#f8f5ff]',
    colorLightHex: '#f8f5ff',
    gradientFrom: 'from-violet-50',
  },
  'ベルガモット': {
    imageUrl: 'https://images.pexels.com/photos/13419179/pexels-photo-13419179.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-400',
    colorLight: 'bg-[#fefcf8]',
    colorLightHex: '#fefcf8',
    gradientFrom: 'from-amber-50',
  },
  'オレンジ': {
    imageUrl: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-orange-400',
    colorLight: 'bg-[#fefaf5]',
    colorLightHex: '#fefaf5',
    gradientFrom: 'from-orange-50',
  },
  'レモン': {
    imageUrl: 'https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-yellow-500',
    colorLight: 'bg-[#fefdf8]',
    colorLightHex: '#fefdf8',
    gradientFrom: 'from-yellow-50',
  },
  'グレープフルーツ': {
    imageUrl: 'https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-orange-400',
    colorLight: 'bg-[#fefaf5]',
    colorLightHex: '#fefaf5',
    gradientFrom: 'from-orange-50',
  },
  'ティートリー': {
    imageUrl: 'https://images.pexels.com/photos/6068430/pexels-photo-6068430.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-emerald-500',
    colorLight: 'bg-[#f5faf8]',
    colorLightHex: '#f5faf8',
    gradientFrom: 'from-emerald-50',
  },
  'カモミール': {
    imageUrl: 'https://images.pexels.com/photos/7542323/pexels-photo-7542323.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-yellow-400',
    colorLight: 'bg-[#fefdf8]',
    colorLightHex: '#fefdf8',
    gradientFrom: 'from-yellow-50',
  },
  'ジンジャー': {
    imageUrl: 'https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-500',
    colorLight: 'bg-[#fefcf8]',
    colorLightHex: '#fefcf8',
    gradientFrom: 'from-amber-50',
  },
  'ブラックペッパー': {
    imageUrl: 'https://images.pexels.com/photos/5988689/pexels-photo-5988689.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-stone-600',
    colorLight: 'bg-[#f5f3f0]',
    colorLightHex: '#f5f3f0',
    gradientFrom: 'from-stone-100',
  },
  'サイプレス': {
    imageUrl: 'https://images.pexels.com/photos/17274558/pexels-photo-17274558.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-emerald-600',
    colorLight: 'bg-[#f5faf5]',
    colorLightHex: '#f5faf5',
    gradientFrom: 'from-emerald-50',
  },
  'ネロリ': {
    imageUrl: 'https://images.pexels.com/photos/13419179/pexels-photo-13419179.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-400',
    colorLight: 'bg-[#fefaf5]',
    colorLightHex: '#fefaf5',
    gradientFrom: 'from-orange-50',
  },
  'ユーカリ': {
    imageUrl: 'https://images.pexels.com/photos/6068430/pexels-photo-6068430.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-emerald-500',
    colorLight: 'bg-[#f5faf8]',
    colorLightHex: '#f5faf8',
    gradientFrom: 'from-emerald-50',
  },
  'ペパーミント': {
    imageUrl: 'https://images.pexels.com/photos/7855271/pexels-photo-7855271.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-teal-400',
    colorLight: 'bg-[#f2faf9]',
    colorLightHex: '#f2faf9',
    gradientFrom: 'from-teal-50',
  },
  'ローズマリー': {
    imageUrl: 'https://images.pexels.com/photos/6280436/pexels-photo-6280436.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-green-500',
    colorLight: 'bg-[#f5faf5]',
    colorLightHex: '#f5faf5',
    gradientFrom: 'from-green-50',
  },
  'ローズ': {
    imageUrl: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-rose-400',
    colorLight: 'bg-[#fef8f9]',
    colorLightHex: '#fef8f9',
    gradientFrom: 'from-rose-50',
  },
  'ジャスミン': {
    imageUrl: 'https://images.pexels.com/photos/6318142/pexels-photo-6318142.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-pink-400',
    colorLight: 'bg-[#fdf8fa]',
    colorLightHex: '#fdf8fa',
    gradientFrom: 'from-pink-50',
  },
  'ゼラニウム': {
    imageUrl: 'https://images.pexels.com/photos/53347/pelargonium-bloom-flower-floral-53347.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-pink-500',
    colorLight: 'bg-[#fdf8fa]',
    colorLightHex: '#fdf8fa',
    gradientFrom: 'from-pink-50',
  },
  'サンダルウッド': {
    imageUrl: 'https://images.pexels.com/photos/1312755/pexels-photo-1312755.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-500',
    colorLight: 'bg-[#fef9e7]',
    colorLightHex: '#fef9e7',
    gradientFrom: 'from-amber-50',
  },
  'シダーウッド': {
    imageUrl: 'https://images.pexels.com/photos/11122838/pexels-photo-11122838.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-700',
    colorLight: 'bg-[#f5f0e8]',
    colorLightHex: '#f5f0e8',
    gradientFrom: 'from-amber-100',
  },
  'イランイラン': {
    imageUrl: 'https://images.pexels.com/photos/30981806/pexels-photo-30981806.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-yellow-600',
    colorLight: 'bg-[#fefdf8]',
    colorLightHex: '#fefdf8',
    gradientFrom: 'from-yellow-50',
  },
  // お香系（線香・香炉の画像、色味を区別）
  '白檀': {
    imageUrl: 'https://images.pexels.com/photos/1312755/pexels-photo-1312755.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-500',
    colorLight: 'bg-[#fef9e7]',
    colorLightHex: '#fef9e7',
    gradientFrom: 'from-amber-50',
  },
  '沈香': {
    imageUrl: 'https://images.pexels.com/photos/4031381/pexels-photo-4031381.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-stone-700',
    colorLight: 'bg-[#ebe6e1]',
    colorLightHex: '#ebe6e1',
    gradientFrom: 'from-stone-200',
  },
  '杉': {
    imageUrl: 'https://images.pexels.com/photos/11122838/pexels-photo-11122838.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-emerald-700',
    colorLight: 'bg-[#e8f5e9]',
    colorLightHex: '#e8f5e9',
    gradientFrom: 'from-emerald-100',
  },
  '檜': {
    imageUrl: 'https://images.pexels.com/photos/11122838/pexels-photo-11122838.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-emerald-600',
    colorLight: 'bg-[#e0f2e9]',
    colorLightHex: '#e0f2e9',
    gradientFrom: 'from-emerald-50',
  },
  // お香追加（古典・商品で一般的なもの）
  '乳香': {
    imageUrl: 'https://images.pexels.com/photos/9547310/pexels-photo-9547310.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-600',
    colorLight: 'bg-[#fef5e7]',
    colorLightHex: '#fef5e7',
    gradientFrom: 'from-amber-100',
  },
  '没薬': {
    imageUrl: 'https://images.pexels.com/photos/11465621/pexels-photo-11465621.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-800',
    colorLight: 'bg-[#faf0e6]',
    colorLightHex: '#faf0e6',
    gradientFrom: 'from-amber-100',
  },
  '安息香': {
    imageUrl: 'https://images.pexels.com/photos/7814955/pexels-photo-7814955.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-600',
    colorLight: 'bg-[#fef8f0]',
    colorLightHex: '#fef8f0',
    gradientFrom: 'from-amber-50',
  },
  '桂皮': {
    imageUrl: 'https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-700',
    colorLight: 'bg-[#faf0e6]',
    colorLightHex: '#faf0e6',
    gradientFrom: 'from-amber-100',
  },
  '丁子': {
    imageUrl: 'https://images.pexels.com/photos/6087276/pexels-photo-6087276.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-800',
    colorLight: 'bg-[#f5ebe0]',
    colorLightHex: '#f5ebe0',
    gradientFrom: 'from-amber-100',
  },
  '蓮華': {
    imageUrl: 'https://images.pexels.com/photos/3810188/pexels-photo-3810188.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-pink-400',
    colorLight: 'bg-[#fdf8fa]',
    colorLightHex: '#fdf8fa',
    gradientFrom: 'from-pink-50',
  },
  '梅花': {
    imageUrl: 'https://images.pexels.com/photos/6226372/pexels-photo-6226372.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-pink-300',
    colorLight: 'bg-[#fef8f9]',
    colorLightHex: '#fef8f9',
    gradientFrom: 'from-pink-50',
  },
  '蘭': {
    imageUrl: 'https://images.pexels.com/photos/763867/pexels-photo-763867.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-violet-400',
    colorLight: 'bg-[#f8f5ff]',
    colorLightHex: '#f8f5ff',
    gradientFrom: 'from-violet-50',
  },
  '薔薇': {
    imageUrl: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-rose-400',
    colorLight: 'bg-[#fef8f9]',
    colorLightHex: '#fef8f9',
    gradientFrom: 'from-rose-50',
  },
  '金木犀': {
    imageUrl: 'https://images.pexels.com/photos/30981806/pexels-photo-30981806.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-500',
    colorLight: 'bg-[#fefdf8]',
    colorLightHex: '#fefdf8',
    gradientFrom: 'from-amber-50',
  },
  '菊花': {
    imageUrl: 'https://images.pexels.com/photos/7542323/pexels-photo-7542323.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-yellow-500',
    colorLight: 'bg-[#fefdf8]',
    colorLightHex: '#fefdf8',
    gradientFrom: 'from-yellow-50',
  },
  '桜': {
    imageUrl: 'https://images.pexels.com/photos/1702822/pexels-photo-1702822.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-pink-300',
    colorLight: 'bg-[#fef8f9]',
    colorLightHex: '#fef8f9',
    gradientFrom: 'from-pink-50',
  },
  '伽羅': {
    imageUrl: 'https://images.pexels.com/photos/4031381/pexels-photo-4031381.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-stone-800',
    colorLight: 'bg-[#e5dfd9]',
    colorLightHex: '#e5dfd9',
    gradientFrom: 'from-stone-200',
  },
  '龍脳': {
    imageUrl: 'https://images.pexels.com/photos/34700588/pexels-photo-34700588.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-teal-600',
    colorLight: 'bg-[#e8f4f3]',
    colorLightHex: '#e8f4f3',
    gradientFrom: 'from-teal-50',
  },
  // 系統別フォールバック
  '柑橘': {
    imageUrl: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-400',
    colorLight: 'bg-[#fefaf5]',
    colorLightHex: '#fefaf5',
    gradientFrom: 'from-amber-50',
  },
  'ウッディ': {
    imageUrl: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-600',
    colorLight: 'bg-[#faf6f0]',
    colorLightHex: '#faf6f0',
    gradientFrom: 'from-amber-100',
  },
  'フローラル': {
    imageUrl: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-rose-400',
    colorLight: 'bg-[#fef8f9]',
    colorLightHex: '#fef8f9',
    gradientFrom: 'from-rose-50',
  },
  'パチュリ': {
    imageUrl: 'https://images.pexels.com/photos/4113889/pexels-photo-4113889.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-700',
    colorLight: 'bg-[#f5f0e8]',
    colorLightHex: '#f5f0e8',
    gradientFrom: 'from-amber-100',
  },
  'フランキンセンス': {
    imageUrl: 'https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: 'bg-amber-600',
    colorLight: 'bg-[#faf6f0]',
    colorLightHex: '#faf6f0',
    gradientFrom: 'from-amber-100',
  },
};

// デフォルト（マッチしない場合）※パステル色で統一
export const DEFAULT_FRAGRANCE: FragranceItem = {
  imageUrl: 'https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=400',
  color: 'bg-amber-500',
  colorLight: 'bg-[#f5f0e8]',
  colorLightHex: '#f5f0e8',
  gradientFrom: 'from-amber-50',
};

/**
 * テキストから香りキーワードを検出し、マッチしたFragranceItemを返す
 */
export function getFragranceForText(text: string): FragranceItem {
  for (const [keyword, item] of Object.entries(FRAGRANCE_MAP)) {
    if (text.includes(keyword.trim())) {
      return item;
    }
  }
  return DEFAULT_FRAGRANCE;
}
