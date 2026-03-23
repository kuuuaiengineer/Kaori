import { RefreshCw, Loader2 } from 'lucide-react';
import { parseResultToCards } from '../utils/parseResult';
import { DEFAULT_FRAGRANCE } from '../data/fragranceData';

interface ResultScreenProps {
  result: string | null;
  loading: boolean;
  error: string | null;
  onReset: () => void;
}

export default function ResultScreen({ result, loading, error, onReset }: ResultScreenProps) {
  const parsed = result ? parseResultToCards(result) : { cards: [], closingMessage: undefined };
  // リスト外の香りカードは表示しない（DEFAULTにフォールバックしたものは非表示）
  const cards = parsed.cards.filter(
    (c) => c.isSummary || c.fragrance !== DEFAULT_FRAGRANCE
  );
  const firstCard = cards.find((c) => !c.isSummary);
  const gradientFrom = firstCard?.fragrance.gradientFrom || 'from-amber-50';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 bg-gradient-to-b ${gradientFrom} to-stone-100`}
    >
      <div className="max-w-md mx-auto px-6 py-8 pb-40">
        <div className="mb-8">
          <h2 className="text-2xl font-light text-stone-800 mb-2">
            あなたへのおすすめ
          </h2>
          <p className="text-stone-600 text-sm">
            今のあなたにぴったりの香りです
          </p>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <Loader2 className="animate-spin text-stone-800" size={48} />
            <p className="text-stone-600">香りを選んでいます...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 space-y-4">
            <p className="text-red-800 font-medium">エラーが発生しました</p>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {result && !loading && (
          <div className="space-y-6">
            {cards.length > 0 ? (
              cards.map((card, index) =>
                card.isSummary ? (
                  <div
                    key={index}
                    className="text-stone-700 leading-relaxed text-[15px] whitespace-pre-wrap"
                  >
                    {card.text}
                  </div>
                ) : (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-md border-l-4 ${card.fragrance.color}`}
                    style={{ backgroundColor: card.fragrance.colorLightHex }}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-stone-200">
                      <img
                        src={card.fragrance.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="prose prose-stone max-w-none">
                        <div className="whitespace-pre-wrap text-stone-800 leading-relaxed text-[15px]">
                          {card.text}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="whitespace-pre-wrap text-stone-800 leading-relaxed">
                  {result}
                </div>
              </div>
            )}

            {cards.length > 0 && parsed.closingMessage && (
              <p className="text-stone-700 text-center text-[15px] leading-relaxed pt-2">
                {parsed.closingMessage}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-stone-200 p-6">
        <div className="max-w-md mx-auto">
          <button
            onClick={onReset}
            className="w-full bg-stone-800 hover:bg-stone-700 text-white py-4 px-6 rounded-xl min-h-[56px] flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
          >
            <RefreshCw size={20} />
            <span className="text-lg font-medium">最初からやり直す</span>
          </button>
        </div>
      </div>
    </div>
  );
}
