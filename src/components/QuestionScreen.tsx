import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { FormData } from '../types';

interface QuestionScreenProps {
  formData: FormData;
  onUpdateFormData: (data: Partial<FormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const sceneOptions = [
  '朝',
  '夜',
  '仕事中',
  '入浴後',
  '瞑想・読書',
  '来客前',
];

const moodOptions = [
  'リラックスしたい',
  '集中したい',
  '元気になりたい',
  '眠りたい',
  '癒されたい',
];

const preferenceOptions = [
  '甘め',
  'ウッディ',
  '爽やか',
  'スパイシー',
  'フローラル',
  '和風',
];

export default function QuestionScreen({
  formData,
  onUpdateFormData,
  onSubmit,
  onBack,
}: QuestionScreenProps) {
  const [step, setStep] = useState(1);

  const handleOptionSelect = (field: 'mood' | 'scene' | 'preference', value: string) => {
    onUpdateFormData({ [field]: value });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onSubmit();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.scene.length > 0 || formData.scene_free.trim() !== '';
    if (step === 2) return formData.mood.length > 0 || formData.mood_free.trim() !== '';
    if (step === 3) return formData.preference.length > 0 || formData.preference_free.trim() !== '';
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="max-w-md mx-auto px-6 py-8 pb-24">
        <div className="mb-8">
          <button
            onClick={handlePrevious}
            className="flex items-center text-stone-600 hover:text-stone-800 mb-4"
          >
            <ChevronLeft size={20} />
            <span className="text-sm">戻る</span>
          </button>

          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1 rounded-full ${
                  s <= step ? 'bg-stone-800' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>

          <p className="text-stone-500 text-sm mb-2">ステップ {step} / 3</p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-light text-stone-800 text-center">
              どんなシーンで使いますか？
            </h2>

            <div className="space-y-3">
              {sceneOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('scene', option)}
                  className={`w-full py-4 px-6 rounded-xl min-h-[56px] transition-all duration-200 ${
                    formData.scene === option
                      ? 'bg-stone-800 text-white shadow-md'
                      : 'bg-white text-stone-800 hover:bg-stone-50 shadow-sm'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="space-y-2 pb-8">
              <label className="block text-sm text-stone-600">
                その他（自由入力）
              </label>
              <textarea
                value={formData.scene_free}
                onChange={(e) => onUpdateFormData({ scene_free: e.target.value })}
                placeholder="使用シーンを自由に入力してください"
                className="w-full p-4 rounded-xl border border-stone-200 focus:border-stone-400 focus:outline-none resize-none min-h-[100px] bg-white"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-light text-stone-800 text-center">
              今の気分や悩みを教えてください
            </h2>

            <div className="space-y-3">
              {moodOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('mood', option)}
                  className={`w-full py-4 px-6 rounded-xl min-h-[56px] transition-all duration-200 ${
                    formData.mood === option
                      ? 'bg-stone-800 text-white shadow-md'
                      : 'bg-white text-stone-800 hover:bg-stone-50 shadow-sm'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="space-y-2 pb-8">
              <label className="block text-sm text-stone-600">
                その他（自由入力）
              </label>
              <textarea
                value={formData.mood_free}
                onChange={(e) => onUpdateFormData({ mood_free: e.target.value })}
                placeholder="気分や悩みを自由に入力してください"
                className="w-full p-4 rounded-xl border border-stone-200 focus:border-stone-400 focus:outline-none resize-none min-h-[100px] bg-white"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-light text-stone-800 text-center">
              好みの香りを教えてください
            </h2>

            <div className="space-y-3">
              {preferenceOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('preference', option)}
                  className={`w-full py-4 px-6 rounded-xl min-h-[56px] transition-all duration-200 ${
                    formData.preference === option
                      ? 'bg-stone-800 text-white shadow-md'
                      : 'bg-white text-stone-800 hover:bg-stone-50 shadow-sm'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="space-y-2 pb-8">
              <label className="block text-sm text-stone-600">
                その他（自由入力）
              </label>
              <textarea
                value={formData.preference_free}
                onChange={(e) => onUpdateFormData({ preference_free: e.target.value })}
                placeholder="好みの香りを自由に入力してください"
                className="w-full p-4 rounded-xl border border-stone-200 focus:border-stone-400 focus:outline-none resize-none min-h-[100px] bg-white"
              />
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-6">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`w-full py-4 px-6 rounded-xl min-h-[56px] flex items-center justify-center gap-2 transition-all duration-200 ${
              canProceed()
                ? 'bg-stone-800 hover:bg-stone-700 text-white shadow-md'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            <span className="text-lg font-medium">
              {step === 3 ? '香りを提案してもらう' : '次へ'}
            </span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
