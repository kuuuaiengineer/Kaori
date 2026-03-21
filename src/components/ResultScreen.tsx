import { RefreshCw, Loader2 } from 'lucide-react';

interface ResultScreenProps {
  result: string | null;
  loading: boolean;
  error: string | null;
  onReset: () => void;
}

export default function ResultScreen({ result, loading, error, onReset }: ResultScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="max-w-md mx-auto px-6 py-8 pb-24">
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
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
            <div className="prose prose-stone max-w-none">
              <div className="whitespace-pre-wrap text-stone-800 leading-relaxed">
                {result}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-6">
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
