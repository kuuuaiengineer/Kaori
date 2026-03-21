import { Category } from '../types';

interface TopScreenProps {
  onSelectCategory: (category: Category) => void;
}

export default function TopScreen({ onSelectCategory }: TopScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-light text-stone-800 leading-relaxed">
            今日の香りを探そう
          </h1>
          <p className="text-stone-600 text-sm md:text-base">
            あなたにぴったりの香りをご提案します
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <button
            onClick={() => onSelectCategory('aroma')}
            className="w-full bg-white hover:bg-stone-50 text-stone-800 font-medium py-6 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 min-h-[56px] active:scale-98"
          >
            <span className="text-lg">アロマで探す</span>
          </button>

          <button
            onClick={() => onSelectCategory('incense')}
            className="w-full bg-white hover:bg-stone-50 text-stone-800 font-medium py-6 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 min-h-[56px] active:scale-98"
          >
            <span className="text-lg">お香で探す</span>
          </button>

          <button
            onClick={() => onSelectCategory('both')}
            className="w-full bg-stone-800 hover:bg-stone-700 text-white font-medium py-6 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 min-h-[56px] active:scale-98"
          >
            <span className="text-lg">どちらでも</span>
          </button>
        </div>
      </div>
    </div>
  );
}
